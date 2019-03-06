let attempt = 3; //Count number of attempts up to 3

// executes on click of login button
function validate(){
	let username = document.getElementById("username").value; //username value
	let password = document.getElementById("password").value; //password value

	if ( username == "skydream" && password == "skydreamweb"){ //check if username and password match
		alert ("Login successfully");
		window.location = "success.html"; //redirecting to successful login page
		return false;
	}
	else{
		attempt --; // decrementing by one for every tried login
		alert("You have left "+attempt+" attempt!");

		// disabling all input fields after 3 attempts
		if( attempt == 0){
			document.getElementById("username").disabled = true;
			document.getElementById("password").disabled = true;
			document.getElementById("submit").disabled = true;
			return false;
		}
	}
}
