"use strict"

let input = document.getElementById("message_input")

input.addEventListener("keyup", function(event){
    if (event.keyCode === 13) {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        //document.getElementById("myBtn").click();
        //todo send message 

        //clear value
        input.value = "";
    }
})