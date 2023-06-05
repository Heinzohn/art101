// XKCD AJAX
// Author: Elijah Hynson <ehynson@ucsc.edu> and Wes Babb <gababb@ucsc.edu> 
// Date: 6/5/2023

var comicObj = null
$.ajax({
	dataType: 'json',
	url: "https://xkcd.com/info.0.json",
	type: "GET",
	data: {},
	success: function(data) {
	  comicObj = data;
	  console.log(comicObj);
	  $("#output").html("<h2>" + comicObj.title);
	  $("#output").append("<img src=" + comicObj.img + ">");
	  $("#output").append("<p>" + comicObj.alt + "</p>");
	}
})

