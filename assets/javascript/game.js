var target = Math.floor(Math.random() * 120 );
var bluePoints = Math.floor(Math.random() * 12);
var redPoints = Math.floor(Math.random() * 12);  
var greenPoints = Math.floor(Math.random() * 12);
var yellowPoints = Math.floor(Math.random() * 12);
var wins
var losses
var playerScore = 0

$("#crystal-collector").text(target);

// * When the player clicks on blue crystal,
$(".blue").on("click", function() {
    // $("#random-blue").text(Math.floor(Math.random() * 12));
    // it will add a specific amount of blue points to the player's total score.
    playerScore = playerScore + bluePoints;
    $("#player-score").text(bluePoints);
});


$(".green").on("click", function() {
    $("#random-two").text(Math.floor(Math.random() * 12));
});

$(".red").on("click", function() {
    $("#random-three").text(Math.floor(Math.random() * 12));
});

$(".yellow").on("click", function() {
    $("#random-four").text(Math.floor(Math.random() * 12));
});    

$("#player-score").text(playerScore) 


