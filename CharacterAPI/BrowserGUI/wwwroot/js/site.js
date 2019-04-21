// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

function ReturnToHome(seconds) {

    var milliSec = seconds * 1000;

    setTimeout(function () {
        window.location.href = "Character";
    }, milliSec);
    
}