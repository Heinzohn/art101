// FizzBuzzBoom Loop
// Author: Elijah Hynson <ehynson@ucsc.edu> and Wes Babb <gababb@ucsc.edu> 
// Date: 5/24/2023

//This function runs through 200 numbers and labels them depending on which module result they equal to.
function stringFactor(){
  for (let i = 1; i < 201; i++) {
    str = ""
    if (i % 3 == 0) {
  	  str += "Fizz"
    } 
    if (i % 5 == 0) {
  	  str += "Buzz"
    }
    if (i % 7 == 0) {
  	  str += "Boom" 
    }
    if (str == "") {
  	  str = i;
    }
 
    $("#output").append("<div>" + str + "!");
  }
}

//Activates function
$("#submit").click(function(){
  stringFactor();
});