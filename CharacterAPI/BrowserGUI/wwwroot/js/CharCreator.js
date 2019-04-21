var counter = 0;
function CreatorStep() {
    counter++;

    if (counter == 1) {
        Hide($("#mainText"));
        Hide($("#IntroText"));
        document.getElementById("mainText").innerHTML = "<b>Hello!</b>";
        Show($("#mainText"));

        

    }
    else if (counter == 2) {
        FadeNewText("I am the keeper of records. <br /> ", document.getElementById("mainText"), $("#mainText"));
    } // TODO: and then..?
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

function FadeNewText(newText, jsElement, jqElement) {

    jqElement.animate({ opacity: "0" }, {
        complete: function () {
            jsElement.innerHTML = "";
            jsElement.innerHTML = newText;
            jqElement.animate({ opacity: "1" });
        }
    });

}