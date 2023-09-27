var target = randomIntFromInterval(19, 120);
var bluePoints = Math.floor(Math.random() * 12); 
var redPoints = Math.floor(Math.random() * 12);  
var greenPoints = Math.floor(Math.random() * 12);
var yellowPoints = Math.floor(Math.random() * 12);
var wins;
var losses;
var playerScore = 0; 

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min +1)+ min)
    
}
$("#player-score").text(playerScore); 
// from the beginning of the game. The player wins if,  total score matches  random number, 

$("#crystal-collector").text(target);


$(".blue").on("click", function() {
    playerScore = playerScore + bluePoints; 
    $("#player-score").text(playerScore);
});

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
if (playerScore === target) {
    $("#you-win").text("1"); 
} 
else {
    $("#you-loss").text("1");
} 
    
    