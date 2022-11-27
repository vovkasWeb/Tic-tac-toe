/** @format */

let area = document.querySelector(".area");
let cell = document.getElementsByClassName("cell");
let currentPlayer = document.querySelector('.curPlayer');

var player = "X";
var winIndex = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 9],
];

for (let i = 1; i <= 9; i++) {
  area.innerHTML += "<div class='cell' pos=" + i + "></div>";
}
for (let i = 0; i < cell.length; i++) {
  cell[i].addEventListener("click", cellClick, false);
}

function cellClick() {
  var data = [];
  if (!this.innerHTML) {
    this.innerHTML = player;
  } else {
    alert("Ячейка занята");
  }

  for (const key in cell) {
    if (cell[key].innerHTML == player) {
      data.push(parseInt(cell[key].getAttribute("pos")));
    }
  }
  if (checkWin(data)) {
    restart("Выиграл: "+ player);
  } else {
    var draw = true;
    for (const key in cell) {
      if (cell[key].innerHTML == "") draw = false;
    }
	 if(draw){
	
		restart('Ничья');
	 }
  }
  player = player == "X" ? "0" : "X";
  currentPlayer.innerHTML = player.toUpperCase();
}

function checkWin(data) {
  for (const i in winIndex) {
    var win = true;
    for (const j in winIndex[i]) {
      var id = winIndex[i][j];
      var ind = data.indexOf(id);

      if (ind == -1) {
        win = false;
      }
    }
    if (win) return true;
  }
  return false;
}

function restart(text){
alert(text);
for(let i=0; i<cell.length; i++){
cell[i].innerHTML='';
}
}