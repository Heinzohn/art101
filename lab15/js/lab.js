// Yes and No AJAX
// Author: Elijah Hynson <ehynson@ucsc.edu> and Wes Babb <gababb@ucsc.edu> 
// Date: 5/31/2023

//yes and no AJAX
function getStuff(){
	$.ajax({
	url: "https://yesno.wtf//api",
  	type: "GET",
  	data: {},
  	success: function(data) {
  		console.log(data);
  	}
})
.done(function(data) {
	console.log(data)
  	var answer = data.answer;
  	var imgURL = data.image;
	$("#output").html("<h2>" + answer);
	$("#output").append("<img src=" + imgURL + ">");
})
}

$("button").click(getStuff);