using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;


namespace TimeDisplay {
    public class TimeController : Controller {

        DateTime curDate = DateTime.Now;
        [HttpGet]
        [Route("")]
        // public JsonResult Index() {
        //     List<string> result = new List<string>();
            

        //    string time = curDate.ToString("dd MMM yyyy");

        //     return Json(time);
        // }
        public IActionResult Time() {
            return View();
        }
    }
}