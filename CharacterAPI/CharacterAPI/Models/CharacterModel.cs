using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Threading.Tasks;

namespace CharacterAPI.Models
{
    public class CharacterModel
    {

        
        public string CIT { get; set; } = "N/A";
        public string CharacterName { get; set; } = "N/A";
        public string Class { get; set; } = "N/A";
        public string Level { get; set; } = "N/A";
        public string Background { get; set; } = "N/A";
        public string Alignment { get; set; } = "N/A";
        public string PlayerName { get; set; } = "N/A";
        public string ExperiencePoints { get; set; } = "N/A";
        public string Race { get; set; } = "N/A";
        public string Strength { get; set; } = "N/A";
        public string Dexterity { get; set; } = "N/A";
        public string Constitution { get; set; } = "N/A";
        public string Intelligence { get; set; } = "N/A";
        public string Wisdom { get; set; } = "N/A";
        public string Charisma { get; set; } = "N/A";
        public string ArmorClass { get; set; } = "N/A";
        public string Initiative { get; set; } = "N/A";
        public string Speed { get; set; } = "N/A";
        public string CurrentHP { get; set; } = "N/A";
        public string MaxHP { get; set; } = "N/A";
        public string HitDice { get; set; } = "N/A";
        public string DeathSaveSucc { get; set; } = "N/A";
        public string DeathSaveFail { get; set; } = "N/A";
        public string CP { get; set; } = "N/A";
        public string SP { get; set; } = "N/A";
        public string GP { get; set; } = "N/A";
        public string PP { get; set; } = "N/A";
        public string Backstory { get; set; } = "N/A";
        public string Age { get; set; } = "N/A";
        public string Height { get; set; } = "N/A";
        public string Weight { get; set; } = "N/A";
        public string Eyes { get; set; } = "N/A";
        public string Skin { get; set; } = "N/A";
        public string Hair { get; set; } = "N/A";
        public List<string> SkillProficiencies { get; set; } = new List<string>();
        public List<string> FeatsAndTraits { get; set; } = new List<string>();
        public List<string> MiscNotes { get; set; } = new List<string>();
        public List<string> AttacksAndSpells { get; set; } = new List<string>();
        public List<string> Equipment { get; set; } = new List<string>();

        public CharacterModel() { }

        

    }

    
}
