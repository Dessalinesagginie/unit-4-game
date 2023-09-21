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
    playerScore = playerScore + greenPoints;
    $("#player-score").text(playerScore)
});

$(".red").on("click", function() {
    playerScore = playerScore + redPoints;
    $("#player-score").text(playerScore)
});

$(".yellow").on("click", function() {
    playerScore = playerScore + yellowPoints;
    $("#player-score").text(playerScore)
});    

$("#player-score").text(playerScore) 

// The player wins if their total score matches the random number from the beginning of the game.

//    * The player loses if their score goes above the random number.

//    * The game restarts whenever the player wins or loses.


//      * When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.

//    * The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.

// ##### Option 1 Game design notes

// * The random number shown at the start of the game should be between 19 - 120.

// * Each crystal should have a random hidden value between 1 - 12.
