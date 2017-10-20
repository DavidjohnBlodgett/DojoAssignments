using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using TheWall.Models;
using System.Linq;
using Microsoft.EntityFrameworkCore;

namespace TheWall.Controllers {
    public class UsersController : Controller {

        private TheWallContext _context;
        public UsersController(TheWallContext context)
        {
            _context = context;
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
                ViewBag.messages = _context.messages.Include(message => message.author).Include(message => message.comments).ThenInclude(comment => comment.author).OrderByDescending((message) => message.created_at ).ToList();

                return View();
            } else {
                return View("Login");
            }
            
        }
        
        [HttpPost]
        [Route("/users")]
        public IActionResult Users(UserVal user) {  

            if( ModelState.IsValid ) {
                User NewUser = new User {
                    first_name = user.first_name,
                    last_name = user.last_name,
                    email = user.email,
                    password = user.password
                };

                // get from db...
                List<User> usr = _context.users.Where(userItem => userItem.email == NewUser.email).ToList();

                // check if user already exists...
                if(usr.Count > 0){
                    // FIXME: need to add an error for this case...
                    // need to render view to support model binded errors...
                    return View("Login");
                }

                // insert to DB...
                _context.users.Add(NewUser);
                _context.SaveChanges();

                // set session... by getting the created user id...
                List<User> CurrentUser = _context.users.Where(userItem => userItem.email == NewUser.email).ToList();
                HttpContext.Session.SetString("user_name", (string)CurrentUser[0].first_name);
                HttpContext.Session.SetInt32("user_id", (int)CurrentUser[0].userid);

                return RedirectToAction("Index");    
            } else {
                // need to render view to support model binded errors...
                return View("Login");
            }
        }

        [HttpPost]
        [Route("/users/login")]
        public IActionResult UserLogin(LoginVal user) {

            if( ModelState.IsValid ) {
                // get from db...
                List<User> usr = _context.users.Where(userItem => userItem.email == user.email && userItem.password == user.password ).ToList();

                if(usr.Count > 0){
                    // set session...
                    HttpContext.Session.SetString("user_name", (string)usr[0].first_name);
                    HttpContext.Session.SetInt32("user_id", (int)usr[0].userid);
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