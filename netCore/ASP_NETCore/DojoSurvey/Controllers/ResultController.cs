using System;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace DojoSurvey {
    public class ResultController : Controller {
        
        [HttpPost]
        [Route("/result")]
        public IActionResult result(string name, string location, string lang, string comment) {
            ViewBag.name = name;
            ViewBag.location = location;
            ViewBag.lang = lang;
            ViewBag.comment = comment;
            return View();
        }
        
    }
}