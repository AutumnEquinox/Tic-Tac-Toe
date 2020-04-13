//restart game button
var restart=document.querySelector('#b');

//stores turns of players
var players=['X','O']
var turn=1;
var sign=1;
var index;
var p1moves;
var p2moves;
//grabs all the squares
var squares=document.querySelectorAll('td');


//clear all the squares
function clearBoard() {
  for (var i = 0; i < squares.length; i++) {
    squares[i].textContent='';
  }
}restart.addEventListener('click',clearBoard);


//check the square marker
/*function changeMarker(){
  if(this.textContent ===''){
    this.textContent='X';
  }else if (this.textContent==='X') {
    this.textContent='O';
  }else{
    this.textContent='';
  }
}*/

// mark and change turns for game to move forward
function changeTurn() {
  if(this.textContent===''){
    sign=sign*(-1);
    turn=turn+sign;
    this.textContent=players[turn];
    indexing();
  }

}

//for loop to add event listeners to all the squares

for (var i = 0; i < squares.length; i++) {
  squares[i].addEventListener('click',changeTurn);
}

//indexing the squares
function indexing() {
for (var j = 0; j < squares.length; j++) {
 if(squares[j].textContent==='X'){
   index[j].push(players[turn]);
   checkWin();

 }
}
}
 //check if somebody wins
function checkWin() {
  if{

  }


}
