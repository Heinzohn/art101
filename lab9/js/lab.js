// Element Snatcher
// Author: Elijah Hynson <ehynson@ucsc.edu> and Wes Babb <gababb@ucsc.edu> 
// Date: 5/10/2023

var outputEl = document.getElementById("output");

var new1El = document.createElement("p");

new1El.innerHTML = "This is the true power of innerHTML!";

var new2El = document.createElement("p");

new2El.innerHTML = "Yeah, what he said!";

outputEl.appendChild(new1El);

outputEl.appendChild(new2El);

function imgChange() {
    document.getElementById("portrait").src = "./img/bodysnatcher.jpg";
  }

function titleChange() {
    document.getElementById("title").innerHTML = "Lab 9 - Javascript for the Web";

  }


