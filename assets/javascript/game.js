var target;
var bluePoints; 
var redPoints;  
var greenPoints;
var yellowPoints;
var wins;
var losses;
var playerScore; 

function randomIntFromInterval(min, max) 
{
    return Math.floor(Math.random() * (max - min +1)+ min);
}

function reset() 
{
    target = randomIntFromInterval(19, 120);
    bluePoints = randomIntFromInterval(1, 12);
    redPoints = randomIntFromInterval(1, 12); 
    greenPoints = randomIntFromInterval(1, 12);
    yellowPoints = randomIntFromInterval(1, 12);
    playerScore = 0; 
    $("#crystal-collector").text(target);
    $("#player-score").text(playerScore); 
}

function scoreCompare() 
{
    if (target === playerScore)
    { 
        wins += 1;
        $("#wins").text(wins);
        reset();
    }  
    else 
    {
        if (target < playerScore)
        {
            losses += 1;
            $("#losses").text(losses);
            reset();
        }
    }
}

reset();

wins = 0;
losses = 0;

$("#wins").text(wins);
$("#losses").text(losses);

$(".blue").on("click", function() 
{
    playerScore = playerScore + bluePoints; 
    $("#player-score").text(playerScore);
    scoreCompare();
});

$(".green").on("click", function() 
{
    playerScore = playerScore + greenPoints;
    $("#player-score").text(playerScore);
    scoreCompare();
});

$(".red").on("click", function() 
{
    playerScore = playerScore + redPoints;
    $("#player-score").text(playerScore);
    scoreCompare();
});

$(".yellow").on("click", function() 
{
    playerScore = playerScore + yellowPoints;
    $("#player-score").text(playerScore);
    scoreCompare();
});



