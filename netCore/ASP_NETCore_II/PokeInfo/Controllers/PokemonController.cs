using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace PokeInfo {
    public class PokemonController : Controller {

        [HttpGet]
        [Route("pokemon/{pokeid}")]
        public IActionResult QueryPoke(int pokeid)
        {
            var PokeInfo = new Dictionary<string, object>();
            WebRequest.GetPokemonDataAsync(pokeid, ApiResponse =>
            {
                PokeInfo = ApiResponse;
            }
            ).Wait();
            // Other code

            //string name = (string)PokeInfo["3"];
            //ViewBag.primeType = PokeInfo["16"];
            foreach( var item in PokeInfo )
            {
                Console.WriteLine("Key = {0}, Value = {1}", item.Key, item.Value);
                if(item.Key == "name") {
                    ViewBag.name = item.Value;
                }
                if(item.Key == "types"){
                    ViewBag.type = item.Value;
                }
                if(item.Key == "weight"){
                    ViewBag.weight = item.Value;
                }
                if(item.Key == "height"){
                    ViewBag.height = item.Value;
                }
            }

            // return Json(PokeInfo);
            return View();

        }
    }
}