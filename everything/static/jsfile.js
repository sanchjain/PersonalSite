document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.collapsible');
  var instances = M.Collapsible.init(elems, {});
});

document.addEventListener("DOMContentLoaded", function(event) {
	var nextbutton = document.getElementById("nextbtn")
  	nextbutton.disabled = true;
  	nextbutton.style.background = "#696969"
});

var check_name = false;
var check_email = false;
var check_msg = false;

function onNextButtonClick() {
    raiseAlert("nextalert", "Sent!")

}

function checkUsername(username) {

    if (username.value == "") {
		raiseAlert("namealert", "Please enter your name")
		check_name = false;
		nextbutton()
		return false;
	}

	dismissAlert("namealert")
    check_name = true;
	nextbutton()
    return true;
}

function checkEmailRegex(email) {

    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    if (reg.test(email.value) == false) {
    	raiseAlert("emailalert", "Enter a valid email address");
        check_email = false;
		nextbutton()
        return false;
    }

	dismissAlert("emailalert");
    check_email = true;
    return true;
}

function checkMessage(msg) {

    if (msg.value == "") {
		raiseAlert("msgalert", "Please enter the message")
		check_msg = false;
		nextbutton()
		return false;
	}

	dismissAlert("msgalert")
    check_msg = true;
	nextbutton()
    return true;
}

function nextbutton() {

	var nextbutton = document.getElementById("nextbtn")
	console.log("function executed")
	if (check_name && check_email && check_msg) {
		console.log("fields verified")
		nextbutton.style.background = "#76b852"
		nextbutton.disabled = false;
	}
	else {
		console.log("fields incorrect")
		nextbutton.style.background = "#696969"
		nextbutton.disabled = true;
		return true;
	}
}

//raises an alert
function raiseAlert(element, text) {
	var alertbox = document.getElementById(element)
	alertbox.innerHTML = text;
	alertbox.style.visibility = "visible";
}

//dismisses an alert
function dismissAlert(element) {
	var alertbox = document.getElementById(element)
	alertbox.style.visibility = "hidden";
}
