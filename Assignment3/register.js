"use strict";
var $ = function(id) { return document.getElementById(id); };

/*
 * processEntries
 * Process all the entries provided via standard input
 * 
 */
var processEntries = function() {

    var isValid = true;
    
    // Get values from user entries   
    var email = $("email_address").value;
    var phone = $("phone").value;
    var country = $("country").value;
    var terms = $("terms").checked;

    // Check user entries for validity
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

/*
 * resetForm
 * Erases all the form information upon the 'reset_form' button click
 * 
 */
var resetForm = function() {

    $("registration_form").reset();
    $("email_address").nextElementSibling.firstChild.nodeValue = "*";
    $("phone").nextElementSibling.firstChild.nodeValue = "*";	
    $("country").nextElementSibling.firstChild.nodeValue = "*";	
    $("terms").nextElementSibling.firstChild.nodeValue = "*";
    $("email_address").focus();
    $("mailing_address_label").className = $("mailing_address_input").className = "hide";

};

/*
 * initRadioButtons
 * Add a event listener to all the radio buttons
 *
 */
function initRadioButtons() {

    var options = document.getElementsByName('contact');
    var length = options.length;

    for ( var i = 0; i < length; i++ ) {
        if ( options[i].addEventListener ) {
            // Add event listener if the event listener is supported
            options[i].addEventListener('click', radioChanged);
        }
        else {
            // Otherwise, IE fallback: onclick
            options[i].attachEvent('onclick', radioChanged);
        }
    }
	
};

/*
 * radioChanged
 * Event listener. Hides or show the label and text area that allow user to input 
 * mailing address, based on the 'checked' property of the 'mail' radio button. It also
 * clears the text area
 *
 */
function radioChanged() {

    var className;

    if ( $("mail").checked ) {
        className = $("mailing_address_input").value = "";
    }
    else {
        className = "hide";
    }

    $("mailing_address_label").className = $("mailing_address_input").className = className;

}

window.onload = function() {

    initRadioButtons();
    $("register").onclick = processEntries;
    $("reset_form").onclick = resetForm;    
    $("email_address").focus();

};