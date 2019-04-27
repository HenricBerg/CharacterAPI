using CharacterAPI.Models;
using System;
using System.IO;
using System.Xml.Serialization;

namespace CharacterAPI.DataAccess
{
    public static class XmlAccess
    {

        public static CharacterModel LoadFromFile(string cit)
        {
            var character = new CharacterModel();
            cit = @"bin/Characters/" + cit + ".xml";

            var serializer = new XmlSerializer(typeof(CharacterModel));

            if (File.Exists(cit))
            {
                using (var stream = new StreamReader(cit))
                {
                    character = (CharacterModel)serializer.Deserialize(stream);

                }
            }


            return character;
        }

        public static void SaveToFile(CharacterModel character)
        {
            var serializer = new XmlSerializer(typeof(CharacterModel));
            var cit = @"bin/Characters/" + character.CIT + ".xml";
            using (var stream = new StreamWriter(cit))
            {
                serializer.Serialize(stream, character);
            }
        }

        public static void DeleteFile(string cit)
        {
            string path = @"bin/Characters/" + cit + ".xml";

            if (File.Exists(path))
            {
                File.Delete(path);
            }
            else
            {
                throw new NotFoundException();
            }
        }
    }
}
