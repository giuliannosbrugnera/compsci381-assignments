"use strict";
var $ = function(id) { return document.getElementById(id); };

var processEntries = function() {

    var score1 = parseInt($("score1").value);
    var score2 = parseInt($("score2").value);
	var score3 = parseInt($("score3").value);

	$("score1_error").innerHTML = checkConstraints( score1 );
	$("score2_error").innerHTML = checkConstraints( score2 );
	$("score3_error").innerHTML = checkConstraints( score3 );

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

/*
 * calculateFinalGrade
 * Calculates the total points and then generates final letter grade
 *
 * @param score1 first score provided by the user
 * @param score2 second score provided by the user
 * @param score3 third score provided by the user
 * @returns total points and final letter grade
 * 
 */
function calculateFinalGrade( score1, score2, score3 ) {
	
	var results = [];
	results[0] = score1 + score2 + score3;

	if ( results[0] >= 270 ) {
		results[1] = 'A';
	}
	else if ( results[0] >= 240 ) {
		results[1] = 'B';
	}
	else if ( results[0] >= 210 ) {
		results[1] = 'C';
	}
	else if ( results[0] >= 180 ) {
		results[1] = 'D';
	}
	else {
		results[1] = 'F';
	}

	return results;

}

window.onload = function() {
	$("calculate").onclick = processEntries;
	$("score1").focus();
};
