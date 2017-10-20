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
    public class MessageController : Controller
    {
        private TheWallContext _context;
        public MessageController(TheWallContext context)
        {
            _context = context;
        }

        [HttpGet]
        [Route("/messages")]
        public JsonResult Messages()
        {
            // get from DB...
            List<Message> AllMessages = _context.messages.ToList();
            return Json(AllMessages);
        }

        [HttpPost]
        [Route("/messages")]
        public IActionResult createMessage( MessageVal message )
        {
            int? user_id = HttpContext.Session.GetInt32("user_id");

            if( ModelState.IsValid ) {
                Message NewMessage = new Message {
                    userid = (int)user_id,
                    content = message.content
                };

                // insert to DB...
                _context.messages.Add(NewMessage);
                _context.SaveChanges();

                return RedirectToAction("Dashboard", "Users");
            } else {
                return RedirectToAction("Dashboard", "Users");
            }
        }
    }
}