


let Ashoka = 0

// click to select Your character 
function selectYourCharacter(x, y) {
  return x + y;
  
}

$("#Ahsoka").on("click", function() {
  selectYourCharacter(Ashoka, 100);
  Ashoka = Ashoka + 1;
  $("#heading3").text(Ashoka);
});



$(".Kylo-Ren").on("click", function() {
  selectYourCharacter();
});
$(".Rey").on("click", function() {
  selectYourCharacter();
});
$(".Yoda").on("click", function() {
  selectYourCharacter();
});



var Rey = {
  
  healthPoints: 150,
  attackPower:  84,
  counterAttackPower: 20,
  
  
}





