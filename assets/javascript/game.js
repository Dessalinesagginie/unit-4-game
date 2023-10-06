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

function scoreCompare() 
{
    if (target === playerScore)
    { 
        wins += 1;
        $("#wins").text(wins);
        gameStart();
        targetNew() 
    }  
    else 
    {
        if (target < playerScore)
        {
            losses += 1;
            $("#losses").text(losses);
            gameStart();
            targetNew() 
        }
    }
};

target = randomIntFromInterval(19, 120);
bluePoints = randomIntFromInterval(1, 12);
redPoints = randomIntFromInterval(1, 12); 
greenPoints = randomIntFromInterval(1, 12);
yellowPoints = randomIntFromInterval(1, 12);
wins = 0;
losses = 0;
playerScore = 0; 

$("#wins").text(wins);

$("#losses").text(losses);

$("#player-score").text(playerScore); 

$("#crystal-collector").text(target);

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
// reset game
    // target is reset, new random number
function gameStart() 
{
    target = randomIntFromInterval(19, 120);
    bluePoints = randomIntFromInterval(1, 12);
    redPoints = randomIntFromInterval(1, 12); 
    greenPoints = randomIntFromInterval(1, 12);
    yellowPoints = randomIntFromInterval(1, 12);
     playerScore = 0; 
}

function targetNew() 
{
    target = randomIntFromInterval(19, 120);   
}

if ( playerScore > target)
{
    gameStart ();
}


