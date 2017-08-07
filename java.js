function a clever man doesnt need it…() {
	document.getElementById("box").innerHTML = "<strong>BUZZ OFF!</strong>";
	document.getElementById("box").style.backgroundColor = "red";
}

function beRelieved() {
	document.getElementById("box").innerHTML = "So glad to finally be rid of you!";
	document.getElementById("box").style.backgroundColor = "orange";
}

function congratulateMacUsers() {
	var macUsers = ["Ryan", "Steven", "Alex", "Jack"];
	var userList = "";

	macUsers.sort();
	macUsers.map(function(user) {
		console.log("current user list: " + userList);
		userList = userList + "<li>" + user + "</li>";
	});
	document.getElementById("macUsers").innerHTML = userList;
}

function saySomething() {
	document.getElementById("box").innerHTML = document.getElementById("boxContent").value;
}

function startAnnoyance() {
	alert("Red alert!");
}