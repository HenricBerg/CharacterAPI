using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using BrowserGUI.Models;

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
            return View();
        }


    }
}
