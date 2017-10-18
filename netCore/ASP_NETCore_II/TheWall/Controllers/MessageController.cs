using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using TheWall.Models;
using DbConnection;

namespace TheWall.Controllers
{
    public class MessageController : Controller
    {
        [HttpGet]
        [Route("/messages")]
        public JsonResult Messages()
        {
            // get from DB...
            List<Dictionary<string, object>> AllMessages = DbConnector.Query("SELECT * FROM messages");
            return Json(AllMessages);
        }

        [HttpPost]
        [Route("/messages")]
        public IActionResult createMessage( MessageVal message )
        {
            Console.WriteLine("I'm inside createMessage...");
            int? user_id = HttpContext.Session.GetInt32("user_id");

            if( ModelState.IsValid ) {
                Console.WriteLine("Made it past validation...");
                // insert to DB...
                string queryString = "INSERT INTO messages (user_id, content, created_at, updated_at) VALUES (\"" + user_id + "\",\"" + message.content + "\", NOW(), NOW())";
                DbConnector.Query(queryString);

                return RedirectToAction("Dashboard", "Users");
            } else {
                Console.WriteLine("Failed validation...");
                return RedirectToAction("Dashboard", "Users");
            }
        }
    }
}