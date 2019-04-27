using CharacterAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CharacterAPI.DataAccess
{
    public static class DataFixer
    {

 
        public static CharacterModel CharacterModelFixer(CharacterModel characterModel)
        {


            foreach (var propertyInfo in characterModel.GetType().GetProperties())
            {
                if (propertyInfo.PropertyType == typeof(string))
                {
                    if (propertyInfo.GetValue(characterModel, null) == null)
                    {
                        propertyInfo.SetValue(characterModel, "N/A", null);
                    }
                }
            }

            return characterModel;
        }

        public static CharacterModel OverwriteCharacter(CharacterModel oldModel, CharacterModel newModel)
        {
            foreach (var propertyInfo in newModel.GetType().GetProperties())
            {
                if (propertyInfo.PropertyType == typeof(string))
                {
                    var value = propertyInfo.GetValue(newModel, null);
                    if (value == null || string.IsNullOrEmpty(value.ToString()))
                    {
                        try
                        {
                            var oldValue = oldModel.GetType().GetProperty(propertyInfo.Name).GetValue(oldModel, null);


                            propertyInfo.SetValue(newModel, oldValue, null);
                        }
                        catch (Exception e)
                        {
                            var x = e;
                        }
                        
                    }
                }
            }

            return newModel;
        }
    }
}
