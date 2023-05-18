// 
// Author: Elijah Hynson <ehynson@ucsc.edu> and Wes Babb <gababb@ucsc.edu> 
// Date: 5/17/2023

$("button.prob").click(function(){
  $("#probtext").toggleClass("contain");
});

$("button.ref").click(function(){
  $("#reftext").addClass("small");
});

$("button.res").click(function(){
  $("#restext").removeClass("default");
  $("#restext").addClass("big");
});

$("button.res2").click(function(){
  $("#restext").removeClass("big");
  $("#restext").toggleClass("default");
});
