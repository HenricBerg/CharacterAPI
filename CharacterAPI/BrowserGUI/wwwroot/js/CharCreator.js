﻿var counter = 0; 
var characterModel = {
    Token: '',
    CharacterName: '',
    Class: '',
    Level: '',
    Background: '',
    Alignment: '',
    PlayerName: '',
    ExperiencePoints: '',
    Race: '',
    Strength: '',
    Dexterity: '',
    Constitution: '',
    Intelligence: '',
    Wisdom: '',
    Charisma: '',
    ArmorClass: '',
    Initiative: '',
    Speed: '',
    CurrentHP: '',
    MaxHP: '',
    HitDice: '',
    DeathSaveSucc: '',
    DeathSaveFail: '',
    CP: '',
    SP: '',
    GP: '',
    PP: '',
    Backstory: '',
    Age: '12',
    Height: '',
    Weight: '',
    Eyes: '',
    Skin: '',
    Hair: '',
    SkillProficiencies: [],
    FeatsAndTraits: [],
    MiscNotes: [],
    AttacksAndSpells: [],
    Equipment: []
};


function CreatorStep() {
    counter++;

    if (counter == 1) {
        Hide($("#mainText"));
        Hide($("#IntroText"));
        Hide($("#NextButton"));
        document.getElementById("mainText").innerHTML = "<b>Good. Thank you.</b>";
        Show($("#mainText"));


        setTimeout(function () {
            FadeNewText("First of all, tell me your names.");
            setTimeout(function () {
                Show($("#CIT"));
                Show($("#CharacterName"));
                Show($("#PlayerName"));
                document.getElementById("NextButton").innerHTML = "I know my own name!";
                Show($("#NextButton"));
            }, 1000);
        }, 2000);

    }
    else if (counter == 2) {
        characterModel.CIT = document.getElementById("CIT").value;
        characterModel.CharacterName = document.getElementById("CharacterName").value;
        characterModel.PlayerName = document.getElementById("PlayerName").value;
        Hide($("#CIT"));
        Hide($("#CharacterName"));
        Hide($("#PlayerName"));
        Hide($("#NextButton"));
        setTimeout(function () {
            FadeNewText("<b>Welcome, " + characterModel.CharacterName + ".</b>");

            setTimeout(function () {
                FadeNewText("What race are you? Are you an individual, experienced in adventuring? What role do you fulfill?");

                setTimeout(function () {
                    Show($("#Race"));
                    Show($("#Class"));
                    Show($("#Level"));
                    Show($("#ExperiencePoints"));
                    document.getElementById("NextButton").innerHTML = "I know what I am!";
                    Show($("#NextButton"));
                }, 1000);
            }, 2000);

        }, 500);
    }
    else if (counter == 3) {
        characterModel.Race = document.getElementById("Race").value;
        characterModel.Class = document.getElementById("Class").value;
        characterModel.Level = document.getElementById("Level").value;
        characterModel.ExperiencePoints = document.getElementById("ExperiencePoints").value;
        Hide($("#Race"));
        Hide($("#Class"));
        Hide($("#Level"));
        Hide($("#ExperiencePoints"));
        Hide($("#NextButton"));


        setTimeout(function () {
            FadeNewText("How about your past?");

            setTimeout(function () {
                Show($("#Background"));
                Show($("#Backstory"));
                Show($("#Alignment"));
                document.getElementById("NextButton").innerHTML = "I know what I was.";
                Show($("#NextButton"));
            }, 1000);
        }, 500);


    }
    else if (counter == 4) {
        characterModel.Background = document.getElementById("Background").value;
        characterModel.Backstory = document.getElementById("Backstory").value;
        characterModel.Alignment = document.getElementById("Alignment").value;
        Hide($("#Background"));
        Hide($("#Backstory"));
        Hide($("#Alignment"));
        Hide($("#NextButton"));

        setTimeout(function () {
            FadeNewText("What do you see when you look in a mirror?");

            setTimeout(function () {
                Show($("#Age"));
                Show($("#Height"));
                Show($("#Weight"));
                Show($("#Eyes"));
                Show($("#Skin"));
                Show($("#Hair"));
                document.getElementById("NextButton").innerHTML = "I know how I look.";
                Show($("#NextButton"));
            }, 1000);
        }, 500);

    }
    else if (counter == 5) {
        characterModel.Age = document.getElementById("Age").value;
        characterModel.Height = document.getElementById("Height").value;
        characterModel.Weight = document.getElementById("Weight").value;
        characterModel.Eyes = document.getElementById("Eyes").value;
        characterModel.Skin = document.getElementById("Skin").value;
        characterModel.Hair = document.getElementById("Hair").value;
        Hide($("#Age"));
        Hide($("#Height"));
        Hide($("#Weight"));
        Hide($("#Eyes"));
        Hide($("#Skin"));
        Hide($("#Hair"));
        Hide($("#NextButton"));

        setTimeout(function () {
            FadeNewText("What earthly possesions do you have? Coin? Anything else of note?");

            setTimeout(function () {
                Show($("#Equipment"));
                Show($("#EquipmentButton"));
                Show($("#CP"));
                Show($("#SP"));
                Show($("#GP"));
                Show($("#PP"));
                document.getElementById("NextButton").innerHTML = "I know what I own.";
                Show($("#NextButton"));
            }, 1000);
        }, 500);
    }
    else if (counter == 6) {
        characterModel.CP = document.getElementById("CP").value;
        characterModel.SP = document.getElementById("SP").value;
        characterModel.GP = document.getElementById("GP").value;
        characterModel.PP = document.getElementById("PP").value;
        Hide($("#Equipment"));
        Hide($("#EquipmentButton"));
        Hide($("#CP"));
        Hide($("#SP"));
        Hide($("#GP"));
        Hide($("#PP"));
        Hide($("#NextButton"));

        setTimeout(function () {
            
            FadeNewText("Time to be honest; How does your abilities score?");

            setTimeout(function () {
                Show($("#STR"));
                Show($("#DEX"));
                Show($("#CON"));
                Show($("#INT"));
                Show($("#WIS"));
                Show($("#CHA"));
                document.getElementById("NextButton").innerHTML = "I know my limits.";
                Show($("#NextButton"));
            }, 1000);
        }, 500);
    }
    else if (counter == 7) {
        characterModel.Strength = document.getElementById("STR").value;
        characterModel.Dexterity = document.getElementById("DEX").value;
        characterModel.Constitution = document.getElementById("CON").value;
        characterModel.Intelligence = document.getElementById("INT").value;
        characterModel.Wisdom = document.getElementById("WIS").value;
        characterModel.Charisma = document.getElementById("CHA").value;
        Hide($("#STR"));
        Hide($("#DEX"));
        Hide($("#CON"));
        Hide($("#INT"));
        Hide($("#WIS"));
        Hide($("#CHA"));
        Hide($("#NextButton"));

        setTimeout(function () {
            FadeNewText("Some formalities...");

            setTimeout(function () {
                Show($("#AC"));
                Show($("#Init"));
                Show($("#Speed"));
                Show($("#CurrentHP"));
                Show($("#MaxHP"));
                Show($("#HitDice"));
                document.getElementById("NextButton").innerHTML = "I know...the small print?";
                Show($("#NextButton"));
            }, 1000);
        }, 500);
    }
    else if (counter == 8) {
        characterModel.ArmorClass = document.getElementById("AC").value;
        characterModel.Initiative = document.getElementById("Init").value;
        characterModel.Speed = document.getElementById("Speed").value;
        characterModel.CurrentHP = document.getElementById("CurrentHP").value;
        characterModel.MaxHP = document.getElementById("MaxHP").value;
        characterModel.HitDice = document.getElementById("HitDice").value;
        Hide($("#AC"));
        Hide($("#Init"));
        Hide($("#Speed"));
        Hide($("#CurrentHP"));
        Hide($("#MaxHP"));
        Hide($("#HitDice"));
        Hide($("#NextButton"));

        setTimeout(function () {
            FadeNewText("Do you have anything final to add?");

            setTimeout(function () {
                Show($("#AttacksAndSpells"));
                Show($("#FeatsAndTraits"));
                Show($("#SkillProficiencies"));
                Show($("#MiscNotes"));
                Show($("#AttacksAndSpellsButton"));
                Show($("#FeatsAndTraitsButton"));
                Show($("#SkillProficienciesButton"));
                Show($("#MiscNotesButton"));
                document.getElementById("NextButton").innerHTML = "I know everything.";
                Show($("#NextButton"));
            }, 1000);
        }, 500);
    }
    else if (counter == 9) {
        Hide($("#AttacksAndSpells"));
        Hide($("#FeatsAndTraits"));
        Hide($("#SkillProficiencies"));
        Hide($("#MiscNotes"));
        Hide($("#AttacksAndSpellsButton"));
        Hide($("#FeatsAndTraitsButton"));
        Hide($("#SkillProficienciesButton"));
        Hide($("#MiscNotesButton"));
        Hide($("#NextButton"));
        Hide($("#NextButton"));


        setTimeout(function () {
            FadeNewText("<b>Alright then!</b>");

            setTimeout(function () {
                FadeNewText("Use your CIT to find your character again. <br />Your CIT is: '<b>" + characterModel.CIT + "</b>', make sure to remember it! <br />Press 'OK' to save your character.");
                document.getElementById("NextButton").innerHTML = "OK";
                setTimeout(function () {
                    Show($("#NextButton"));
                }, 1000);

            }, 2000);
        }, 500);

    }
    else if (counter == 10) {
        SaveModel();
        
    }
    else {
        counter = 0;
    }
    


}

function Hide(element) {

    element.animate({ opacity: "0" }, {
        complete: function () {
            element.toggleClass("invisible");
        }
    });



}

function Show(element) {
    element.css("opacity", "0");
    element.toggleClass("invisible");
    element.animate({ opacity: "1" });
}

function FadeNewText(newText) {

    $("#mainText").animate({ opacity: "0" }, {
        complete: function () {
            document.getElementById("mainText").innerHTML = "";
            document.getElementById("mainText").innerHTML = newText;
            $("#mainText").animate({ opacity: "1" });
        }
    });

}

function AddToEqList() {
    var item = document.getElementById("Equipment").value;
    characterModel.Equipment.push(item);
    document.getElementById("Equipment").value = "";
    var oldText = document.getElementById("mainText").innerHTML;
    FadeNewText("<b>" + characterModel.Equipment[characterModel.Equipment.length - 1] + "</b> has been added to your equipment.");

    setTimeout(function () {
        var inventory = document.getElementById("Inventory");
        inventory.innerHTML = inventory.innerHTML + "<li>" + item + "</li>";
        FadeNewText(oldText);
    }, 2000);


}

function AddToAttacksList() {
    characterModel.AttacksAndSpells.push(document.getElementById("AttacksAndSpells").value);
    document.getElementById("AttacksAndSpells").value = "";
    var oldText = document.getElementById("mainText").innerHTML;

    FadeNewText("<b>" + characterModel.AttacksAndSpells[characterModel.AttacksAndSpells.length - 1] + "</b> has been added.");

    setTimeout(function () {
        FadeNewText(oldText);
    }, 2000);

}

function AddToFeatsList() {
    characterModel.FeatsAndTraits.push(document.getElementById("FeatsAndTraits").value);
    document.getElementById("FeatsAndTraits").value = "";
    var oldText = document.getElementById("mainText").innerHTML;

    FadeNewText("<b>" + characterModel.FeatsAndTraits[characterModel.FeatsAndTraits.length - 1] + "</b> has been added.");

    setTimeout(function () {
        FadeNewText(oldText);
    }, 2000);

}

function AddToSkillsList() {
    characterModel.SkillProficiencies.push(document.getElementById("SkillProficiencies").value);
    document.getElementById("SkillProficiencies").value = "";
    var oldText = document.getElementById("mainText").innerHTML;

    FadeNewText("<b>" + characterModel.SkillProficiencies[characterModel.SkillProficiencies.length - 1] + "</b> has been added.");

    setTimeout(function () {
        FadeNewText(oldText);
    }, 2000);

}
function AddToMiscList() {
    characterModel.MiscNotes.push(document.getElementById("MiscNotes").value);
    document.getElementById("MiscNotes").value = "";
    var oldText = document.getElementById("mainText").innerHTML;

    FadeNewText("<b>" + characterModel.MiscNotes[characterModel.MiscNotes.length - 1] + "</b> has been added.");

    setTimeout(function () {
        FadeNewText(oldText);
    }, 2000);

}

function SaveModel() {
    var data = characterModel;
    $.ajax({
        type: 'POST',
        url: '/Home/SaveCharacterModel',
        data: data,
        dataType: 'json',
        success: function (result, status, xhr) {
            if (result === "OK") {
                window.location.href = "Success";
            }
            else {
                alert(result);
                location.reload();
            }
            
        },
        error: function (xhr, status, error) {
            alert(error);
            location.reload();
        }
    });
}