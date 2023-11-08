let yourCharacter 

let rey = {
  name: "Rey",
  healthPoints: 150,
  attackPower: 150,
  counterAttackPower: 125
}

let yoda = {
  name: "Yoda",
  healthPoints: 175,
  attackPower: 160,
  counterAttackPower: 150
}

function selectYourCharacter(x, y) {
  return x + y;
}

$("#Ahsoka").on("click", function() {
  Ashoka = Ashoka + 1;
  $("#heading3").text(Ashoka);
});

$(".Kylo-Ren").on("click", function() {
  selectYourCharacter();
});

$(".Rey").on("click", function() {
  selectYourCharacter();
  yourCharacter = rey; 
});

$(".Yoda").on("click", function() {
  selectYourCharacter();
});