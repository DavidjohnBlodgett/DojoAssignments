using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using TheWall.Models;

namespace TheWall.Controllers
{
    public class CommentController : Controller
    {

        private readonly DbConnector _dbConnector;
 
        public CommentController(DbConnector connect)
        {
            _dbConnector = connect;
        }

        [HttpGet]
        [Route("/comments")]
        public JsonResult Comments()
        {
            // get from DB...
            List<Dictionary<string, object>> AllComments = _dbConnector.Query("SELECT * FROM comments");
            return Json(AllComments);
        }

        [HttpPost]
        [Route("/comments")]
        public IActionResult createComment( CommentVal comment )
        {
            int? user_id = HttpContext.Session.GetInt32("user_id");

            if( ModelState.IsValid ) {
                // insert to DB...
                string queryString = "INSERT INTO comments (message_id, user_id, content, created_at, updated_at) VALUES (\"" + comment.message_id + "\",\"" + user_id + "\",\"" + comment.content + "\", NOW(), NOW())";
                _dbConnector.Query(queryString);

                return RedirectToAction("Dashboard", "Users");
            } else {
                Console.WriteLine("Failed validation...");
                return RedirectToAction("Dashboard", "Users");
            }
        }
    }
}