


let Ashoka = 0

// click to select Your character 
function selectYourCharacter(Ashoka, y) {
  return Ashoka + y;
  
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


