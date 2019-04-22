using CharacterAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CharacterAPI.DataAccess
{
    public static class DataFixer
    {

        public static string FixToken(string token)
        {
            if (token.Equals("N/A"))
                return "temp";

            return token;
        }

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

    }
}
