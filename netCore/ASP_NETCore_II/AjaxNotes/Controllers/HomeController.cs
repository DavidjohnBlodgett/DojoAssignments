using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using DbConnection;

namespace AjaxNotes.Controllers
{
    public class HomeController : Controller
    {
        // GET: /Home/
        [HttpGet]
        [Route("")]
        public IActionResult Index()
        {
            return View();
        }

        [HttpGet]
        [Route("/notes")]
        public IActionResult Notes()
        {
            // get from db...
            List<Dictionary<string, object>> AllNotes = DbConnector.Query("SELECT * FROM notes");

            return Json(AllNotes);

        }

        [HttpPost]
        [Route("/notes")]
        public IActionResult createQuote(string title)
        {
            // insert to DB...
            string queryString = "INSERT INTO notes (title, content, created_at, updated_at) VALUES (\"" + title + "\",\"Enter a description here...\", NOW(), NOW())";
            DbConnector.Query(queryString);
            
            return RedirectToAction("Index");
        }

        [HttpPost]
        [Route("/notes/{id}")]
        public IActionResult createQuote(string id, string content)
        {
            // insert to DB...
            string queryString = "UPDATE notes SET content=\"" + content + "\" WHERE _id =" + id;
            DbConnector.Query(queryString);
            
            return RedirectToAction("Index");
        }

        [HttpGet]
        [Route("/notes/{id}/delete")]
        public IActionResult deleteNote( string id)
        {
            // delete from db...
            string queryString = "DELETE FROM notes WHERE _id=" + id;
            DbConnector.Query(queryString);

            return RedirectToAction("Index");

        }

    }
}
