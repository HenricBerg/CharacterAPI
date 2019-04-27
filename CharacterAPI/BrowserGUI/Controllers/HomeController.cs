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

        public IActionResult EditCharacter()
        {
            return View();
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
            object response;
            try
            {
                XmlAccess.SaveToFile(characterModel);
                response = "OK";
            }
            catch
            {
                response = "Error";
            }
            

            return JsonConvert.SerializeObject(response);



        }

        [HttpPost]
        public string LoadCharacterModel(string cit)
        {
            CharacterModel model = new CharacterModel();
            model = XmlAccess.LoadFromFile(cit.ToString());
            return JsonConvert.SerializeObject(new { character = model }, Formatting.Indented);
        }

        [HttpPost]
        public string ReplaceCharacterModel(CharacterModel newModel)
        {

            object response;

            try
            {
                
                response = "OK";
                var oldModel = XmlAccess.LoadFromFile(newModel.CIT);
                newModel = DataFixer.OverwriteCharacter(oldModel, newModel);
                XmlAccess.DeleteFile(newModel.CIT);
                XmlAccess.SaveToFile(newModel);
            }
            catch
            {
                response = "Error";
            }


            return JsonConvert.SerializeObject(response);

        }


    }
}
