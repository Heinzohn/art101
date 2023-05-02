// Arrays and Objects (featuring Main Modes of Transportation)
// Author: Elijah Hynson <ehynson@ucsc.edu> and Wes Babb <gababb@ucsc.edu> 
// Date: 5/1/2023

const myTransport = ["Mercedes c320", "Black Low Top Air Force One's with Marbled Soles", "UCSC Loop Bus"];

var myMainRide = {
  make: "Mercedes",
  model: "c320",
  color: "Black" ,
  year: 2003,
  age: function() {
      return 2023 - this.year;
  }
}

document.writeln("My Main Modes of Transportation: " + myTransport + "<br>");
document.writeln("My Main Ride: <pre>", JSON.stringify(myMainRide, null, '\t'), "</pre>");