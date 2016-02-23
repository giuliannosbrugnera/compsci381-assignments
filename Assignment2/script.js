"use strict";
var $ = function(id) { return document.getElementById(id); };

/*
 * processEntries
 * Process all the entries provided via standard input
 * 
 */
var processEntries = function() {

    // Variables declaration. Parsing a string to a integer is necessary
    var score1 = parseInt($("score1").value);
    var score2 = parseInt($("score2").value);
    var score3 = parseInt($("score3").value);

    // Function call based on each input provided, creating an error message if necessary
    $("score1_error").textContent = checkConstraints( score1, 1 );
    $("score2_error").textContent = checkConstraints( score2, 2 );
    $("score3_error").textContent = checkConstraints( score3, 3 );

    if ( ($("score1_error").textContent.length === 0) && ($("score2_error").textContent.length === 0) && ($("score3_error").textContent.length === 0) ) {
        // This is the only acceptable condition of the errors's 'span' element
        // If the 'length' property is 0, then there is no error with the input
        // Hence, the results should be calculated
        var results = calculateFinalGrade( score1, score2, score3 );

        // Display the results
        $("scoreTotal").value = results[0];
        $("scoreFinal").value = results[1];
    }
    else {
        // There is some error with the input. The output fields should be erased
        $("scoreTotal").value = "";
        $("scoreFinal").value = "";
    }

};

/*
 * checkConstraints
 * Create a error message based on the 'score' value
 *
 * @param score input provided by the user
 * @returns created error message. It will be empty if the input is correct
 * 
 */
function checkConstraints( score, option ) {

    var errorMessage = "";

    if ( isNaN(score) ) {
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