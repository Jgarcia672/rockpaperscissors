// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */
var userChoice;
var computerChoice;
var winner;

userChoice= "";
computerChoice="";
winner="";

var randomNumber;
randomNumber= 0;


// DOCUMENT READY FUNCTION BELOW

$( document ).ready(function() {
    $("button").click(function() {
        userChoice= $("#input").val();
        $("#userChoice").text(userChoice);
        randomNumber= Math.floor((Math.random() * 3));

        if (randomNumber === 0) {
            computerChoice= "rock";
        } else if(randomNumber === 1){
            computerChoice= "paper";
        } else {
            computerChoice= "scissors";
        }
        
        $("#computerChoice").text(computerChoice);
        
        if ( ) {
            computerChoice= "rock";
        } else if(randomNumber === 1){
            computerChoice= "paper";
        } else {
            computerChoice= "scissors";
        }
    });
});

