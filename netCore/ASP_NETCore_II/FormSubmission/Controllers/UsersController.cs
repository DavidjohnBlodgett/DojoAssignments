using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using FormSubmission.Models;

namespace FormSubmission.Controllers {
    public class UsersController : Controller {
        
        [HttpPost]
        [Route("/users")]
        public IActionResult Users(string first_name, string last_name, int age, string email, string password) {
            User NewUser = new User {
                first_name = first_name,
                last_name = last_name,
                age = age,
                email = email,
                password = password
            };
            if(TryValidateModel(NewUser)){
                return View("Success");    
            } else {
                ViewBag.errors = ModelState.Values;
                return View();
            }
        }
    }
}