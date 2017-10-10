using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Dojodachi {
    public class DachiController : Controller {
        public Random rand = new Random();

        [HttpGet]
        [Route("")]
        public IActionResult Index() {
            return RedirectToAction("dojodachi");
        }

        [HttpGet]
        [Route("/dojodachi")]
        public IActionResult dojodachi() {
            dynamic dachi = HttpContext.Session.GetObjectFromJson<object>("dachi");
            // if no dachi exists make a new one and save to session...
            if(dachi == null){
                dachi = new { 
                        fullness = 20,
                        happiness = 20,
                        energy = 50,
                        meals = 3,
                        message = "",
                        end = false
                    };
                HttpContext.Session.SetObjectAsJson("dachi", (object)dachi);
            }

            ViewBag.fullness = dachi.fullness;
            ViewBag.happiness = dachi.happiness;
            ViewBag.energy = dachi.energy;
            ViewBag.meals = dachi.meals;
            ViewBag.message = dachi.message;

            if( dachi.fullness > 100 && dachi.happiness > 100 && dachi.energy > 100 ) {
                ViewBag.message = "Congratulations! You Won!";
                ViewBag.end = true;
            }
            if ( dachi.fullness < 1 || dachi.happiness < 1) {
                ViewBag.message = "Your Dojodachi has passed away...";
                ViewBag.end = true;
            }

            return View();
        }

        [HttpPost]
        [Route("/reset")]
        public IActionResult Reset() {
            HttpContext.Session.Clear();
            return RedirectToAction("dojodachi");
        }

        [HttpPost]
        [Route("/feed")]
        public IActionResult feed() {
            dynamic dachi = HttpContext.Session.GetObjectFromJson<object>("dachi");
            string message = "";

            if(dachi.meals < 1) {
                message = "no more meals!";
                dachi.message = message;
                HttpContext.Session.SetObjectAsJson("dachi", (object)dachi);
                return RedirectToAction("Index");
            }

            if(rand.Next(1,5) == 1){
                dachi.meals = dachi.meals - 1;

                message = "Your Dojodachi did not like the meal!!!";
                dachi.message = message;

                HttpContext.Session.SetObjectAsJson("dachi", (object)dachi);
                return RedirectToAction("Index");

            } else {
                dachi.meals = dachi.meals - 1;

                int result = rand.Next(5,11);
                dachi.fullness += result;

                message = "Your Dojodachi eats a meal and gains " + result + " fullness!";
                dachi.message = message;

                HttpContext.Session.SetObjectAsJson("dachi", (object)dachi);
                return RedirectToAction("Index");
            }

            
        }

        [HttpPost]
        [Route("/play")]
        public IActionResult play() {
            dynamic dachi = HttpContext.Session.GetObjectFromJson<object>("dachi");
            string message = "";

            if(rand.Next(1,5) == 1){
                dachi.energy -= 5;
                message = "You play with your Dojodachi but they seem angry!!!";
                dachi.message = message;

                HttpContext.Session.SetObjectAsJson("dachi", (object)dachi);
                return RedirectToAction("Index");

            } else {
                dachi.energy -= 5;

                int result = rand.Next(5,11);
                dachi.happiness += result;

                message = "You play with your Dojodachi they gain " + result + " happiness and lose 5 energy!";
                dachi.message = message;

                HttpContext.Session.SetObjectAsJson("dachi", (object)dachi);
                return RedirectToAction("Index");
            }
        }

        [HttpPost]
        [Route("/work")]
        public IActionResult work() {
            dynamic dachi = HttpContext.Session.GetObjectFromJson<object>("dachi");
            string message = "";
            dachi.energy -= 5;
            int result = rand.Next(1,4);
            dachi.meals += result;

            message = "Your Dojodachi works and gains " + result + " meals and loses 5 energy!";
            dachi.message = message;

            HttpContext.Session.SetObjectAsJson("dachi", (object)dachi);
            return RedirectToAction("Index");

        }

        [HttpPost]
        [Route("/sleep")]
        public IActionResult sleep() {
            dynamic dachi = HttpContext.Session.GetObjectFromJson<object>("dachi");
            string message = "";

            dachi.energy += 15;
            dachi.fullness -= 5;
            dachi.happiness -= 5;
            
            message = "Your Dojodachi sleeps and earns 15 energy and decreases fullness and happiness each by 5!";
            dachi.message = message;

            HttpContext.Session.SetObjectAsJson("dachi", (object)dachi);
            return RedirectToAction("Index");

        }
    }
}