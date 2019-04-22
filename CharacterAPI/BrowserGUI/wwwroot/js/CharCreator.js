var counter = 0;
var characterModel = {
    Token: "henbeh151",
    CharacterName: "Khargas",
    PlayerName: "Henric",
    Race: "Dwarf",
    Class: "Druid",
    Level: "4",
    ExperiencePoints: "1234",
    Background: "Soldier",
    Backstory: "Lived in a fort.",
    Alignment: "Neutral good",
    Age: "143",
    Height: "1,4m",
    Weight: "93kg",
    Eyes: "Brown",
    Skin: "Fair",
    Hair: "Brown",
    Equipment: ["Goat Horn (intrument)", "Stig (Mouse/Pet)"]



};


function CreatorStep() {
    counter++;

    if (counter == 1) {
        document.getElementById("NextButton").innerHTML = "Go on...";
        Hide($("#mainText"));
        Hide($("#IntroText"));
        document.getElementById("mainText").innerHTML = "<b>Good. Thank you.</b>";
        Show($("#mainText"));


        setTimeout(function () {
            FadeNewText("First of all, tell me your names.");
            setTimeout(function () {
                Show($("#Token"));
                Show($("#CharacterName"));
                Show($("#PlayerName"));
                document.getElementById("NextButton").innerHTML = "I know my own name!";
            }, 1000);
        }, 2000);

    }
    else if (counter == 2) {
        characterModel.Token = document.getElementById("Token").value;
        characterModel.CharacterName = document.getElementById("CharacterName").value;
        characterModel.PlayerName = document.getElementById("PlayerName").value;
        Hide($("#Token"));
        Hide($("#CharacterName"));
        Hide($("#PlayerName"));
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


        setTimeout(function () {
            FadeNewText("How about your past?");

            setTimeout(function () {
                Show($("#Background"));
                Show($("#Backstory"));
                Show($("#Alignment"));
                document.getElementById("NextButton").innerHTML = "I know what I was.";
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
            }, 1000);
        }, 500);
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
    characterModel.Equipment.push(document.getElementById("Equipment").value);
    document.getElementById("Equipment").value = "";
    var oldText = document.getElementById("mainText").innerHTML;

    FadeNewText("<b>" + characterModel.Equipment[characterModel.Equipment.length-1] + "</b> has been added to your equipment.");

        setTimeout(function () {
            FadeNewText(oldText);
        }, 2000);
   

}