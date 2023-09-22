var target = Math.floor(Math.random() * 120 );
var bluePoints = Math.floor(Math.random() * 12); 
var redPoints = Math.floor(Math.random() * 12);  
var greenPoints = Math.floor(Math.random() * 12);
var yellowPoints = Math.floor(Math.random() * 12);
var wins;
var losses;
var playerScore = 0; 

// from the beginning of the game. The player wins if,  total score matches  random number, 
$("#crystal-collector").text(target);


if (playerScore === target) {
    $("#player-score").text("WIN");
}

if (playerScore > target) {
    playerScore = $(this).val();
    $("#player-score").text(); 
}

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


$("#player-score").text(playerScore); 
