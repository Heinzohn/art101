// Element Snatcher
// Author: Elijah Hynson <ehynson@ucsc.edu> and Wes Babb <gababb@ucsc.edu> 
// Date: 5/10/2023

// JS Code meant to replace element content. We begin by grabbing the output element
var outputEl = document.getElementById("output");

// Then we make a new paragraph element
var new1El = document.createElement("p");

// Put some pretty words in it...
new1El.innerHTML = "This is the true power of innerHTML!";

//Same steps as before but now a new element
var new2El = document.createElement("p");

new2El.innerHTML = "Yeah, what he said!";

// We then append the two new elements to have them display
outputEl.appendChild(new1El);

outputEl.appendChild(new2El);

//These function replace the img and heading of the webpage.
function imgChange() {
    document.getElementById("portrait").src = "./img/bodysnatcher.jpg";
    document.getElementById("portrait").style.border = "thick dashed yellow"
  }

function titleChange() {
    document.getElementById("title").innerHTML = "Lab 9 - Javascript for the Web";
    document.getElementById("title").style.color = "yellow";

  }


