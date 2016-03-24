"use strict";
var $ = function(id) { return document.getElementById(id); };

/*
 * processEntries
 * Process all the entries provided via standard input by the user
 */
var processEntries = function() {

    var isValid = true;
    // get values for user entries   
    var email = $("email_address").value;
    var phone = $("phone").value;
    var country = $("country").value;
    var terms = $("terms").checked;
    var mailchecked = $("mail").checked;

    // check user entries for validity
    if ( email == "" ) {
        $("email_address").nextElementSibling.firstChild.nodeValue = "This field is required.";
        isValid = false;
    }
    else {
        $("email_address").nextElementSibling.firstChild.nodeValue = "";
    }

    if ( phone == "" ) {
        $("phone").nextElementSibling.firstChild.nodeValue = "This field is required.";
        isValid = false;
    }
    else {
        $("phone").nextElementSibling.firstChild.nodeValue = "";
    }

    if ( country == "" ) {
        $("country").nextElementSibling.firstChild.nodeValue = "Please select a country.";
        isValid = false;
    }
    else {
        $("country").nextElementSibling.firstChild.nodeValue = "";	
    }

    if ( terms == false ) {
        $("terms").nextElementSibling.firstChild.nodeValue = "This box must be checked.";
        isValid = false;
    }
    else {
        $("terms").nextElementSibling.firstChild.nodeValue = "";
    }

    if( isValid ) {
    	$("registration_form").submit();
    }

};

var options, mail, label, text, hide; // Declare variables
options = document.getElementsByName('contact'); // Get the radio buttons
mail = $('mail'); 
label = $('label'); // the mail radio button and its label
text = $('mailingAddress');
label.className = 'hide'; // Hide label for that mailing address textarea
text.className = 'hide'; // Hide mailing address textarea

// Loop through radios
for ( var i = 0; i < options.length; i++ ) {
    if ( options[i].addEventListener ) {
        // Add event listener if event listener supported
        options[i].addEventListener('click', radioChanged);
    }
    else {
        // Otherwise; IE fallback: onclick
        options[i].attachEvent('onclick', radioChanged);
    }
}

function radioChanged() {

    // Is mail button checked?
    if ( mail.checked ) {
        hide = '';
    }
    else {
        hide = 'hide';
    }

    // Text input visibility
    label.className = hide;
    text.className = hide; 

    // If text input hidden, empty its contents
    if ( hide ) {
        text.value = '';
    }
}

/*
 * resetForm
 * Erases all the form information upon the 'reset_form' button click
 */
var resetForm = function() {

    $("registration_form").reset();
    label.className = 'hide';  // Hide label for that mailing address textarea
    text.className = 'hide';  // Hide mailing address textarea
    $("email_address").nextElementSibling.firstChild.nodeValue = "*";
    $("phone").nextElementSibling.firstChild.nodeValue = "*";	
    $("country").nextElementSibling.firstChild.nodeValue = "*";	
    $("terms").nextElementSibling.firstChild.nodeValue = "*";
    $("email_address").focus();

    // Remove saved data from local storage as well
    deleteStorage();

};

/*
 * populateStorage
 * Save data items into local storage
 */
function populateStorage() {

    localStorage.setItem('email', $('email_address').value);
    localStorage.setItem('phone', $('phone').value);
    localStorage.setItem('country', $('country').value);

    // Loop through radios
    for ( var i = 0; i < options.length; i++ ) {
        if ( options[i].checked ) {
            localStorage.setItem('contact', options[i].value);
            break;
        }
    }

    localStorage.setItem('mailingAddress', $('mailingAddress').value);
    localStorage.setItem('terms', $('terms').checked);
    localStorage.setItem('comments', $('comments').checked);

}

/*
 * retrieveData
 * Retrieve data items from local storage and put data back into the web page
 */
function retrieveData() {
    
    $('email_address').value = localStorage.getItem('email');
    $('phone').value = localStorage.getItem('phone');
    $('country').value = localStorage.getItem('country');

    var contact = localStorage.getItem('contact');

    // Loop through radios. Check the last checked option
    for ( var i = 0; i < options.length; i++ ) {
        if ( options[i].value === contact ) {
            options[i].checked = true;
        }
    }

    $('mailingAddress').value = localStorage.getItem('mailingAddress');
    $('terms').value = localStorage.getItem('terms');
    $('comments').value = localStorage.getItem('comments');

}

/*
 * deleteStorage
 * Delete all saved data from the local storage
 */
function deleteStorage() {
    
    localStorage.removeItem('email');
    localStorage.removeItem('phone');
    localStorage.removeItem('country');
    localStorage.removeItem('contact');
    localStorage.removeItem('mailingAddress');
    localStorage.removeItem('terms');
    localStorage.removeItem('comments');

}

window.onload = function() {

    $("register").onclick = processEntries;
    $("reset_form").onclick = resetForm;    
    $("email_address").focus();

};
