var target = Math.floor(Math.random() * 120 );
var bluePoints
var redPoints
var greenPoints
var yellowPoints
var wins
var losses
var playerScore  

$("#crystal-collector").text(target);

$(".blue").on("click", function() {
    $("#random-blue").text(Math.floor(Math.random() * 12));
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

// When the player clicks on a crystal, it will add a specific amount of points to the player's total score. 

//      * Your game will hide this amount until the player clicks a crystal.
//      * When they do click one, update the player's score counter.
