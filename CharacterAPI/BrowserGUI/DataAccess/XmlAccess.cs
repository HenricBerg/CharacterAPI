using BrowserGUI.Models;
using System;
using System.IO;
using System.Xml.Serialization;

namespace BrowserGUI.DataAccess
{
    public static class XmlAccess
    {

        public static CharacterModel LoadFromFile(string Token)
        {
            var character = new CharacterModel();
            Token = Token + ".xml";
            try
            {
                var serializer = new XmlSerializer(typeof(CharacterModel));

                if (File.Exists(Token))
                {
                    using (var stream = new StreamReader(Token))
                    {
                        character = (CharacterModel)serializer.Deserialize(stream);

                    }
                }
            }
            catch
            {
                character.CharacterName = "Unable to load character.";
            }

            return character;
        }

        public static bool SaveToFile(CharacterModel character)
        {

            try
            {
                var serializer = new XmlSerializer(typeof(CharacterModel));
                string path = @"bin/Characters/"+character.Token+".xml";
                using (var stream = new StreamWriter(path))
                {
                    serializer.Serialize(stream, character);
                }

                return true;

            }
            catch 
            {
                return false;
            }
        }
    }
}
