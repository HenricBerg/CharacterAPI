var counter = 0;

function CreatorStep()
{
    counter++;

    if (counter == 1) {

        $("#Token").css("opacity","0")
        $("#Token").toggleClass("invisible");
    }
    else {
        counter = 0;
    }

    
}