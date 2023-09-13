$(".blue").on("click", function() {

    //generate specific crystal amt
    $("#random-blue").text(Math.floor(Math.random() * 12));

    //add specific crystal amount to player's  score
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

$("#crystal-collector").text(Math.floor(Math.random() * 120 ));

//     * Your game will hide this amount until the player clicks a crystal.
//     * When they do click one, update the player's score counter



