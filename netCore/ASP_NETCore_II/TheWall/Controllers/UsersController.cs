using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using TheWall.Models;
using System.Linq;

namespace TheWall.Controllers {
    public class UsersController : Controller {

        private readonly DbConnector _dbConnector;
 
        public UsersController(DbConnector connect)
        {
            _dbConnector = connect;
        }

        [HttpGet]
        [Route("")]
        public IActionResult Index()
        {
            int? user_id = HttpContext.Session.GetInt32("user_id");
            if(user_id != null) {
                return RedirectToAction("Dashboard");
            } else {
                return View("Login");
            }
            
        }

        [HttpGet]
        [Route("/dashboard")]
        public IActionResult Dashboard()
        {
            int? user_id = HttpContext.Session.GetInt32("user_id");
            if(user_id != null) {
                // Set current user for nav bar...
                ViewBag.name = HttpContext.Session.GetString("user_name");

                // GET from DB...
                List<Dictionary<string, object>> AllUsers = _dbConnector.Query("SELECT * FROM users").ToList();
                List<Dictionary<string, object>> AllMessages = _dbConnector.Query("SELECT * FROM messages").ToList();
                List<Dictionary<string, object>> AllComments = _dbConnector.Query("SELECT * FROM comments").ToList();

                // Sort them by created time descending...
                AllMessages = AllMessages.OrderByDescending((message) => message["created_at"]).ToList();

                // Format all of the dates...
                foreach(var message in AllMessages){
                    DateTime created = (DateTime)message["created_at"];
                    string formatted_created = String.Format("{0:MMMM dd yyyy}", created);
                    message["created_at"] = formatted_created;
                }

                foreach(var comment in AllComments){
                    DateTime created = (DateTime)comment["created_at"];
                    string formatted_created = String.Format("{0:MMMM dd yyyy}", created);
                    comment["created_at"] = formatted_created;
                }

                // Join user names to messages...
                AllMessages.Join(AllUsers,
                                    messageItem => messageItem["user_id"],
                                    userItem => userItem["id"],
                                    (messageItem, userItem) => {
                                        return messageItem["author"] = userItem["first_name"] + " " + userItem["last_name"];
                                    }).ToList();

                AllComments.Join(AllUsers,
                                    commentItem => commentItem["user_id"],
                                    userItem => userItem["id"],
                                    (commentItem, userItem) => {
                                        return commentItem["author"] = userItem["first_name"] + " " + userItem["last_name"];
                                    }).ToList();

                // Attach comments to each Message...
                foreach(var message in AllMessages){
                    message["comments"] = AllComments.Where( comment => comment["message_id"].ToString() == message["id"].ToString() );
                }

                ViewBag.messages = AllMessages;

                return View();
            } else {
                return View("Login");
            }
            
        }
        
        [HttpPost]
        [Route("/users")]
        public IActionResult Users(UserVal user) {  

            User NewUser = new User {
                first_name = user.first_name,
                last_name = user.last_name,
                email = user.email,
                password = user.password
            };

            if( ModelState.IsValid ) {

                // TODO: try catch on INSERT and return error if failed... "User with this info already exists"

                // get from db...
                List<Dictionary<string, object>> AllUsers = _dbConnector.Query("SELECT * FROM users");
                List<Dictionary<string, object>> usr = AllUsers.Where(row => (string)row["email"] == user.email).ToList(); // gives back a list...

                // check if user already exists...
                if(usr.Count > 0){
                    // FIXME: need to add an error for this case...
                    // need to render view to support model binded errors...
                    return View("Login");
                }

                // insert to DB...
                string queryString = "INSERT INTO users (first_name, last_name, email, password, created_at, updated_at) VALUES (\"" + NewUser.first_name + "\",\"" + NewUser.last_name + "\", \"" + NewUser.email + "\", \"" + NewUser.password + "\", NOW(), NOW())";
                _dbConnector.Query(queryString);

                // set session... by getting the created user id...
                List<Dictionary<string, object>> CurrentUser = _dbConnector.Query("SELECT * FROM users WHERE email=\"" + NewUser.email +"\"");
                HttpContext.Session.SetString("user_name", (string)CurrentUser[0]["first_name"]);
                HttpContext.Session.SetInt32("user_id", (int)CurrentUser[0]["id"]);

                return RedirectToAction("Index");    
            } else {
                // need to render view to support model binded errors...
                return View("Login");
            }
        }

        [HttpPost]
        [Route("/users/login")]
        // public IActionResult Users(string first_name, string last_name, string email, string password) {
        public IActionResult UserLogin(LoginVal user) {

            if( ModelState.IsValid ) {
                // get from db...
                List<Dictionary<string, object>> AllUsers = _dbConnector.Query("SELECT * FROM users");
                List<Dictionary<string, object>> usr = AllUsers.Where(row => (string)row["email"] == user.email && (string)row["password"] == user.password).ToList(); // gives back a list...

                if(usr.Count > 0){
                    // set session...
                    HttpContext.Session.SetString("user_name", (string)usr[0]["first_name"]);
                    HttpContext.Session.SetInt32("user_id", (int)usr[0]["id"]);
                    return RedirectToAction("Index");
                } else {
                    return RedirectToAction("Index");
                }
            } else {
                // need to render view to support model binded errors...
                return View("Login");
            }
        }

        [HttpGet]
        [Route("/users/logoff")]
        public IActionResult Logoff()
        {
            HttpContext.Session.Clear();
            return RedirectToAction("Index");
        }
    }
}