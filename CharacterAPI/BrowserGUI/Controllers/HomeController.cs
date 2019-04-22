using Microsoft.AspNetCore.Mvc;
using CharacterAPI.Models;
using CharacterAPI.DataAccess;
using Newtonsoft.Json;

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

        [HttpPost]
        public string SaveCharacterModel(CharacterModel characterModel)
        {

            characterModel = DataFixer.CharacterModelFixer(characterModel);
            object response = XmlAccess.SaveToFile(characterModel);
            if (response == null)
                response = "OK";

            return JsonConvert.SerializeObject(response);
           

           
        }


    }
}
