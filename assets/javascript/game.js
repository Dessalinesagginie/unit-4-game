

function scoreCompare() {
    if (playerScore === target) {
        $("#wins").text(wins + 1); 
    }   
    else {
        $("#losses").text(1);
    } 
}

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min +1)+ min);
}
function blueClick() {
    playerScore = playerScore + bluePoints; 
    $("#player-score").text(playerScore);
}
var target = randomIntFromInterval(19, 120);
var bluePoints = Math.floor(Math.random() * 12); 
var redPoints = Math.floor(Math.random() * 12);  
var greenPoints = Math.floor(Math.random() * 12);
var yellowPoints = Math.floor(Math.random() * 12);
var wins = 0;
var losses = 0;
var playerScore = 0; 

$("#wins").text(wins);

$("#losses").text(losses);

$("#player-score").text(playerScore); 

$("#crystal-collector").text(target);

$(".blue").on("click", blueClick);

$(".green").on("click", function() {
    playerScore = playerScore + greenPoints;
    $("#player-score").text(playerScore);
});

$(".red").on("click", function() {
    playerScore = playerScore + redPoints;
    $("#player-score").text(playerScore);
});

$(".yellow").on("click", function() {
    playerScore = playerScore + yellowPoints;
    $("#player-score").text(playerScore);
});  

// record a win 
// store wins
wins = wins + 1

playerScore = playerScore + greenPoints;
// record a loss
