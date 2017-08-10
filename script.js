// $(document).ready(function() {
// 	function welcomeButton() {
// 		alert("Yay!");
//
// 	}
// });

function changeColor() {
	document.getElementById("colorbox").style.backgroundColor = "black";
	document.getElementById("colorbox").style.color = "white";
}
function changeBack() {
	document.getElementById("colorbox").style.borderRadius = "50%";
}

// this is the code to run the AJAX bacon button
$(document).ready(function() {
	$("#baconButton").click(function() {
		$.ajax({
			method: "GET",
			url: "https://baconipsum.com/api/?type=meat-and-filler&paras=5&format=text"
		}).done(function(reply) {
			$("#baconOutput").html(reply);
			console.log("bacon bacon bacon!");

		});

	});

});