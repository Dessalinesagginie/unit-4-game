var target = Math.floor(Math.random() * 120 );
var bluePoints = Math.floor(Math.random() * 12); 
var redPoints = Math.floor(Math.random() * 12);  
var greenPoints = Math.floor(Math.random() * 12);
var yellowPoints = Math.floor(Math.random() * 12);
var wins
var losses
var playerScore = 0 

$("#crystal-collector").text(target);

$(".blue").on("click", function() {
    playerScore = playerScore + bluePoints; 
    $("#player-score").text(playerScore); 
});

$(".green").on("click", function() {
    playerScore = playerScore + bluePoints + greenPoints;
    $("#player-score").text(playerScore)
});

$(".red").on("click", function() {
    playerScore = playerScore + bluePoints + greenPoints + redPoints;
    $("#player-score").text(playerScore)
});

$(".yellow").on("click", function() {
    playerScore = playerScore + bluePoints + greenPoints + redPoints + yellowPoints;
    $("#player-score").text(playerScore)
});    

$("#player-score").text(playerScore) 

//      * Your game will hide this amount until the player clicks a crystal.
//      * When they do click one, update the player's score counter.