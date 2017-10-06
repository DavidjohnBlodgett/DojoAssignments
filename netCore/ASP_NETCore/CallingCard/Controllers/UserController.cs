using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
 
namespace CallingCard.Controllers
{
    public class UserController : Controller
    {

        [HttpGet]
        [Route("{first}/{last}/{age}/{favColor}")]
        public JsonResult Index(string first, string last, string age, string favColor) {

            var context =  new {
                first = first,
                last  = last,
                age   = age,
                fav   = favColor

            };
            return Json(context);
        }
    }
}