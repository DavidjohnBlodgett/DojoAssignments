using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using DbConnection;

namespace QuotingDojo.Controllers
{
    public class QuoteController : Controller
    {
        // GET: /quotes/
        [HttpGet]
        [Route("/quotes")]
        public IActionResult Quotes()
        {
            // get from DB...
            List<Dictionary<string, object>> AllQuotes = DbConnector.Query("SELECT * FROM Quote");

            ViewBag.quotes = AllQuotes;

            return View();
        }

        // POST: /quotes/
        [HttpPost]
        [Route("/quotes")]
        public IActionResult createQuote(string name, string quote)
        {
            // insert to DB...
            string queryString = "INSERT INTO Quote (name, quote, createdAt) VALUES (\"" + name + "\",\"" + quote + "\", NOW())";
            DbConnector.Query(queryString);
            
            return RedirectToAction("Quotes");
        }
    }
}