// Username Sorter 2.0
// Author: Elijah Hynson <ehynson@ucsc.edu> and Wes Babb <gababb@ucsc.edu> 
// Date: 5/15/2023

//Username Sorter is now converted into a button that sorts the username in an alphabetical order and displays it in the div output area.
//No more annoying prompts!
var button = document.getElementById('my-button');
button.addEventListener('click', function() {
  inputValue = document.getElementById('user-name').value;
  var nameSorted = inputValue.toLowerCase().split("").sort().join("").bold();
  document.getElementById("output").innerHTML = nameSorted
});
