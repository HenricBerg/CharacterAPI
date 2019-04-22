var counter = 0;
var characterModel = {
    Token: "",
    CharacterName: "",
    PlayerName: ""
};

function CreatorStep() {
    counter++;

    if (counter == 1) {
        document.getElementById("NextButton").innerHTML = "";
        document.getElementById("NextButton").innerHTML = "Go on...";
        Hide($("#mainText"));
        Hide($("#IntroText"));
        document.getElementById("mainText").innerHTML = "<b>Good.</b>";
        Show($("#mainText"));

        

    }
    else if (counter == 2) {
        FadeNewText("First of all, tell me your names.<br /> ");

        setTimeout(function () {
            Show($("#Token"));
            Show($("#CharacterName"));
            Show($("#PlayerName"));
        }, 1000);
        
    }
    else if (counter == 3) {
        characterModel.Token = document.getElementById("Token").value;
        characterModel.CharacterName = document.getElementById("CharacterName").value;
        characterModel.PlayerName = document.getElementById("PlayerName").value;
        Hide($("#Token"));
        Hide($("#CharacterName"));
        Hide($("#PlayerName"));
        setTimeout(function () {
            FadeNewText("<b>Thank you.</b>");

            setTimeout(function () {
                FadeNewText("What race are you? Are you an individual, experienced in adventuring? What role do you fulfill?");

                setTimeout(function () {
                    Show($("#Race"));
                    Show($("#Class"));
                    Show($("#Level"));
                }, 1000);
            }, 2000);
            
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