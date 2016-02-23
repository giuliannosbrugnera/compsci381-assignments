"use strict";
var $ = function(id) { return document.getElementById(id); };

var processEntries = function() {
    var score1 = parseInt($("score1").value);
    var score2 = parseInt($("score2").value);
	var score3 = parseInt($("score3").value);

	var message ="";
	var totalscore, finalgrade;
	
	//modify the following data validation code to do validate for each test score
    if (isNaN(score1) || isNaN(score2)|| isNaN(score3)) {
        alert("All entries must be numeric!");
    } 
	else if (score1<0 || score1>100 || score2 <0 || score2>100 || score3 <0 || score3>100 )
	{
		message = 'All the test scores should be between 0 and 100!';
		alert(message);
	}

    // call calculateFinalGrade function here and display the results 
    
};

window.onload = function() {
	$("calculate").onclick = processEntries;
	$("score1").focus();
};
