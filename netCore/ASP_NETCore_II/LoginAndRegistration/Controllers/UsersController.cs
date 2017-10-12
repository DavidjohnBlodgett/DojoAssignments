using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using LoginAndRegistration.Models;
using DbConnection;
using System.Linq;

namespace LoginAndRegistration.Controllers {
    public class UsersController : Controller {
        
        [HttpPost]
        [Route("/users")]
        // public IActionResult Users(string first_name, string last_name, string email, string password) {
        public IActionResult Users(User user) {    
            User NewUser = new User {
                first_name = user.first_name,
                last_name = user.last_name,
                email = user.email,
                password = user.password
            };
            // if(TryValidateModel(NewUser)){
            if(ModelState.IsValid){
                // insert to DB...
                string queryString = "INSERT INTO users (first_name, last_name, email, password) VALUES (\"" + NewUser.first_name + "\",\"" + NewUser.last_name + "\", \"" + NewUser.email + "\", \"" + NewUser.password + "\")";
                DbConnector.Query(queryString);
                return View("Success");    
            } else {
                ViewBag.error = true;
                ViewBag.errors = ModelState.Values;
                return View("Reg");
            }
        }

        [HttpPost]
        [Route("/users/login")]
        // public IActionResult Users(string first_name, string last_name, string email, string password) {
        public IActionResult UsersLogin(string email, string password) {

            // get from db...
            List<Dictionary<string, object>> AllUsers = DbConnector.Query("SELECT * FROM users");

            // use LINQ to get user with email~
            // var usr = AllUsers.Select(row => (string)row["email"] == email).ToList();
            List<Dictionary<string, object>> usr = AllUsers.Where(row => (string)row["email"] == email && (string)row["password"] == password).ToList(); // gives back a list...

            if(usr.Count > 0){
                ViewBag.error = false;
                return View("Success");
                // return Json(usr);
            } else {
                ViewBag.error = false;
                return View("Reg");
            }
            
        }
    }
}