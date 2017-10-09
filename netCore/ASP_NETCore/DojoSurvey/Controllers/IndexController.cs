using System;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace DojoSurvey {
    public class IndexController : Controller {
        [HttpGet]
        [Route("")]
        public IActionResult index() {
            return View();
        }
        
    }
}