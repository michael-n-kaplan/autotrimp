document.getElementById("food").appendChild(document.createTextNode("*"));
document.getElementById("wood").appendChild(document.createTextNode("*"));
document.getElementById("metal").appendChild(document.createTextNode("*"));
var myVar=setInterval(function () {myTimer()}, 10000);

function myTimer() {
  var food = game.resources.food.owned / game.resources.food.max;
  var wood = game.resources.wood.owned / game.resources.wood.max;
  var metal = game.resources.metal.owned / game.resources.metal.max;

  if (food < .8) {
    buyBuilding('Nursery');
  }
  if (wood > .8) {
    buyBuilding('Shed');
  }
  if (metal > .8) {
    buyBuilding('Forge');
  }

  clearInterval(myVar);
}

