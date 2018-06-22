$(document).ready(function() {

var randomNum = Math.floor(Math.random() * (120 - 19) ) + 19;
var totalNum = 0;
var crys1 = Math.floor(Math.random() * (12 - 1) ) + 1;
var crys2 = Math.floor(Math.random() * (12 - 1) ) + 1;
var crys3 = Math.floor(Math.random() * (12 - 1) ) + 1;
var crys4 = Math.floor(Math.random() * (12 - 1) ) + 1;
var wins = 0;
var losses = 0;
$( "#randomNumber" ).html( "<h1>Target Number: " + randomNum + "</h1>" );
$( "#totalScore" ).html( "<h1>Current Count: " + totalNum + "</h1>" );
$( "#wins" ).html( "<h2>Wins: " + wins + "</h2>" );
$( "#losses" ).html( "<h2>Losses: " + losses + "</h2>" );


function reset() {
    randomNum = Math.floor(Math.random() * (120 - 19) ) + 19;
    totalNum = 0;
    crys1 = Math.floor(Math.random() * (12 - 1) ) + 1;
    crys2 = Math.floor(Math.random() * (12 - 1) ) + 1;
    crys3 = Math.floor(Math.random() * (12 - 1) ) + 1;
    crys4 = Math.floor(Math.random() * (12 - 1) ) + 1;
    $( "#randomNumber" ).html( "<h1>Target Number: " + randomNum + "</h1>" );
    $( "#totalScore" ).html( "<h1>Current Count: " + totalNum + "</h1>" );
    $( "#wins" ).html( "<h2>Wins: " + wins + "</h2>" );
    $( "#losses" ).html( "<h2>Losses: " + losses + "</h2>" );
}


$("#crystal1").on("click", function() {
    totalNum = totalNum + crys1;
    $( "#totalScore" ).html( "<h1>Current Count: " + totalNum + "</h1>" );
    if (totalNum === randomNum) {
        wins ++;
        $( "#wins" ).html( "<h2>Wins: " + wins + "</h2>" );
        setTimeout(reset, 100);
    } else if (totalNum > randomNum) {
        losses++;
        $( "#losses" ).html( "<h2>Losses: " + losses + "</h2>" );
        setTimeout(reset, 100);
    }
});
$("#crystal2").on("click", function() {
    totalNum = totalNum + crys2;
    $( "#totalScore" ).html( "<h1>Current Count: " + totalNum + "</h1>" );
    if (totalNum === randomNum) {
        wins ++;
        $( "#wins" ).html( "<h2>Wins: " + wins + "</h2>" );
        setTimeout(reset, 100);
    } else if (totalNum > randomNum) {
        losses++;
        $( "#losses" ).html( "<h2>Losses: " + losses + "</h2>" );
        setTimeout(reset, 100);
    }
});
$("#crystal3").on("click", function() {
    totalNum = totalNum + crys3;
    $( "#totalScore" ).html( "<h1>Current Count: " + totalNum + "</h1>" );
    if (totalNum === randomNum) {
        wins ++;
        $( "#wins" ).html( "<h2>Wins: " + wins + "</h2>" );
        setTimeout(reset, 100);
    } else if (totalNum > randomNum) {
        losses++;
        $( "#losses" ).html( "<h2>Losses: " + losses + "</h2>" );
        setTimeout(reset, 100);
    }
});
$("#crystal4").on("click", function() {
    totalNum = totalNum + crys4;
    $( "#totalScore" ).html( "<h1>Current Count: " + totalNum + "</h1>" );
    if (totalNum === randomNum) {
        wins ++;
        $( "#wins" ).html( "<h2>Wins: " + wins + "</h2>" );
        setTimeout(reset, 100);
    } else if (totalNum > randomNum) {
        losses++;
        $( "#losses" ).html( "<h2>Losses: " + losses + "</h2>" );
        setTimeout(reset, 100);
    }
});


// set up game



// generate random number between 19-120
// give crystals a value between 1-12
// count when crystals are clicked and display score
// win/ loss conditions
// reset



})