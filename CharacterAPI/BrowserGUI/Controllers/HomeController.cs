using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using BrowserGUI.Models;
using BrowserGUI.DataAccess;

namespace BrowserGUI.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Character()
        {
            return View();
        }

        [HttpPost]
        public IActionResult Character(CharacterModel formInput)
        {
            if (XmlAccess.SaveToFile(formInput))
                return RedirectToAction("Success");
            else
                return RedirectToAction("Failed");


        }

        public IActionResult Success()
        {
            return View();
        }

        public IActionResult Failed()
        {
            return View();
        }


    }
}
