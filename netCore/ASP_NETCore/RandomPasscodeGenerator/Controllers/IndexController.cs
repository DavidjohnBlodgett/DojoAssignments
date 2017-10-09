using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace RandomPasscodeGenerator {
    public class IndexController : Controller {

        private Random rand = new Random(); 

        [HttpGet]
        [Route("")]
        public IActionResult Index() {

            int? count = HttpContext.Session.GetInt32("count");
            if(count == null){
                count = 1;
            } 
            ViewBag.count = count;  
            int oldCount = (int)count;
            HttpContext.Session.SetInt32("count",  oldCount + 1);
            
            ViewBag.passcode = GenPasscode();

            return View();
        }

        public string GenPasscode() {
            int length = 5;
            List<string> result = new List<string>();
            string[] chars = {"A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","0","1","2","3","4","5","6","7","8","9"};
            for(int i = 0; i < length; i++){
                result.Add(chars[rand.Next(0,chars.Length)]);
            }
            return string.Join("", result.ToArray());

        }

        [HttpGet]
        [Route("/reset")]
        public IActionResult Reset() {
            HttpContext.Session.Clear();
            // return Json("reset!");
            return RedirectToAction("Index");
        }

    }
}