using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CharacterAPI.DataAccess;
using CharacterAPI.Models;
using Microsoft.AspNetCore.Mvc;

namespace CharacterAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CharacterController : ControllerBase
    {
        
        [HttpGet("{cit}")]
        public HttpResponseModel Get(string cit)
        {
            return HttpResponseHelper.OK(XmlAccess.LoadFromFile(cit));
        }

        
        // POST api/values
        [HttpPost]
        public HttpResponseModel Set([FromBody] CharacterModel characterModel)
        {
            try
            {
                XmlAccess.SaveToFile(characterModel);
                return HttpResponseHelper.OK("Character saved.");
            }
            catch (Exception ex)
            {
                return HttpResponseHelper.BadRequest("Error: "+ex.Message);
            }
                
        }

        // PUT api/values/5
        [HttpPut("{cit}")]
        public HttpResponseModel Edit(string cit, [FromBody] CharacterModel newModel)
        {
            var oldModel = XmlAccess.LoadFromFile(cit);
            newModel = DataFixer.OverwriteCharacter(oldModel, newModel); //Will check for blank values. These won't be replaced. This makes it possible to only edit small parts of the model at a time.
            XmlAccess.DeleteFile(cit); //Delete existing model...
            XmlAccess.SaveToFile(newModel); //...and save the updated model.
            return HttpResponseHelper.OK("Character updated and saved.");

        }

        // DELETE api/values/5
        [HttpDelete("{cit}")]
        public HttpResponseModel Delete(string cit)
        {
            XmlAccess.DeleteFile(cit);
            return HttpResponseHelper.OK("Character removed.");
        }
    }
}
