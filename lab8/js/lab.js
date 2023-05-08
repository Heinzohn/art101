// Array Square Root and Sin Calculator
// Author: Elijah Hynson <ehynson@ucsc.edu> and Wes Babb <gababb@ucsc.edu> 
// Date: 5/2/2023

//this function gives the square root and sin of the numbers in our array

//first function: square root
function mapPlay(x) {
	var results = Math.sqrt(x);
    return results;
}

//displays square root of single numbers on console
console.log("What is the square root of 69? (real mature guys)", mapPlay(69));
console.log("What is the square root of 420? (Snoop Approves!)", mapPlay(420));

//original array
var a = [420, 69, 1337, 666];
console.log("Array of Mature Numbers", a);

//outputE1-3 displays original array and calculations on website
var outputE1 = document.getElementById("output"); 
outputE1.innerHTML = a;

//calculates first function
var result = a.map(mapPlay);
console.log("Array of Square Rooted Mature Numbers", result);

var outputE2 = document.getElementById("output2"); 
outputE2.innerHTML = result;

//replaces result with new function that uses sin
var result = a.map(function(x) {
    var results = Math.sin(x);
    return results
})

console.log("Array of Sined Mature Numbers", result);

var outputE3 = document.getElementById("output3"); 
outputE3.innerHTML = result;




