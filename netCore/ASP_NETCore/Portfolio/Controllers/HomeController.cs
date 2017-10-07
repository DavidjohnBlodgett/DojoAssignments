using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Portfolio {
    public class HomeController : Controller {
        [HttpGet]
        [Route("/")]
        public IActionResult Home() {
            return View();
        }
    }
}