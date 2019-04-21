using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CharacterAPI.Models
{
    public class CharacterModel
    {

        public string Token { get; set; } = "N/A";
        public string CharacterName { get; set; } = "N/A";
        public string Class { get; set; } = "N/A";
        public string Level { get; set; } = "N/A";
        public string Background { get; set; } = "N/A";
        public string Alignment { get; set; } = "N/A";
        public string PlayerName { get; set; } = "N/A";
        public int ExperiencePoints { get; set; } = 0;
        public string Race { get; set; } = "N/A";
        public int Strength { get; set; } = 0;
        public int Dexterity { get; set; } = 0;
        public int Constitution { get; set; } = 0;
        public int Intelligence { get; set; } = 0;
        public int Wisdom { get; set; } = 0;
        public int Charisma { get; set; } = 0;
        public int PassiveWisdom { get; set; } = 0;
        public int ArmorClass { get; set; } = 0;
        public int Initiative { get; set; } = 0;
        public string Speed { get; set; } = "N/A";
        public int CurrentHP { get; set; } = 0;
        public int MaxHP { get; set; } = 0;
        public int TempHP { get; set; } = 0;
        public string HitDiceType { get; set; } = "N/A";
        public string HitDiceTotal { get; set; } = "N/A";
        public int DeathSaveSucc { get; set; } = 0;
        public int DeathSaveFail { get; set; } = 0;
        public int CP { get; set; } = 0;
        public int SP { get; set; } = 0;
        public int GP { get; set; } = 0;
        public int PP { get; set; } = 0;
        public string Backstory { get; set; } = "N/A";
        public string Age { get; set; } = "N/A";
        public string Height { get; set; } = "N/A";
        public string Weight { get; set; } = "N/A";
        public string Eyes { get; set; } = "N/A";
        public string Skin { get; set; } = "N/A";
        public string Hair { get; set; } = "N/A";
        public List<string> Allies { get; set; } = new List<string>();
        public List<string> MiscNotes { get; set; } = new List<string>();
        public List<string> AttacksAndSpells { get; set; } = new List<string>();
        public List<string> Equipment { get; set; } = new List<string>();



    }
}
