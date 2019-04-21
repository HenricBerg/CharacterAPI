using Microsoft.AspNetCore.Mvc;
using CharacterAPI.Models;
using CharacterAPI.DataAccess;

namespace BrowserGUI.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult CreateCharacter()
        {
            return View();
        }

        [HttpPost]
        public IActionResult CreateCharacter(CharacterModel formInput)
        {
            string response = XmlAccess.SaveToFile(formInput);

            if (response == null)
                return RedirectToAction("Success");
            else
                return RedirectToAction("Failed", "Home", new { error = response });


        }

        public IActionResult Success()
        {
            return View();
        }

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Failed(string error)
        {
            ViewBag.Error = error;
            return View();
        }


    }
}
