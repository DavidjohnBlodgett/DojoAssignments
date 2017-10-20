using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using TheWall.Models;
using System.Linq;
using Microsoft.EntityFrameworkCore;

namespace TheWall.Controllers
{
    public class CommentController : Controller
    {
        private TheWallContext _context;
        public CommentController(TheWallContext context)
        {
            _context = context;
        }

        [HttpGet]
        [Route("/comments")]
        public JsonResult Comments()
        {
            // get from DB...
            List<Comment> AllComments = _context.comments.ToList();
            return Json(AllComments);
        }

        [HttpPost]
        [Route("/comments")]
        public IActionResult createComment( CommentVal comment )
        {
            int? user_id = HttpContext.Session.GetInt32("user_id");

            if( ModelState.IsValid ) {
                Comment NewComment = new Comment {
                    userid = (int)user_id,
                    messageid = comment.messageid,
                    content = comment.content
                };
                // insert to DB...
                _context.comments.Add(NewComment);
                _context.SaveChanges();

                return RedirectToAction("Dashboard", "Users");
            } else {
                Console.WriteLine("Failed validation...");
                return RedirectToAction("Dashboard", "Users");
            }
        }
    }
}