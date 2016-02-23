"use strict";
var $ = function(id) { return document.getElementById(id); };

var processEntries = function() {
    var score1 = parseInt($("score1").value);
    var score2 = parseInt($("score2").value);
	var score3 = parseInt($("score3").value);

	var message ="";
	var totalscore, finalgrade;

	$("score1_error").innerHTML = checkConstraints( score1 );
	$("score2_error").innerHTML = checkConstraints( score2 );
	$("score3_error").innerHTML = checkConstraints( score3 );

    // call calculateFinalGrade function here and display the results 
    
};

/*
 * checkConstraints
 * Create a error message based on the 'score' value
 *
 * @param score input provided by the user
 * @returns created error message. It will be empty if the input is correct
 * 
 */
function checkConstraints( score ) {

	var errorMessage = "";
	
	if ( score.value.lenght === 0 ) {
		errorMessage = "Test-" + option + " must be non-empty!"
	}
	else if ( isNaN(score) ) {
		errorMessage = "Test-" + option + " must be a non-negative number!";
	}
	else if ( score < 0 ) {
		errorMessage = "Test-" + option + " must be non-negative!";
	}
	else if ( score > 100 ) {
		errorMessage = "Test-" + option + " must be in the closed interval [0, 100].";	
	}
	
	return errorMessage;

}

function calculateFinalGrade(  ) {
	// body...
}

window.onload = function() {
	$("calculate").onclick = processEntries;
	$("score1").focus();
};
