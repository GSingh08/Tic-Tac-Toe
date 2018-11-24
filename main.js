
/*
  First lets create Variables for X and O.
 Then create a variable for the box.
 give the boxes a value of nothing
 create function that says if the value of the box is empty to insert and X. and the next time you insert a value into the box it has to be O.  So on and so forth
  within the function
 create another function saying that if 123 === x alert YOU WIN
 do that with all posibilities. maybe create an array?
*/

console.log("Please work");




//This function lets the user know whose turn it is
function letThemKnow(){
document.turn = "X";
grabMessage("It's Your Turn " + document.turn + ".");
}

function grabMessage(msg){
  document.getElementById("message").innerText = msg;
}

function nextMove(box){
  if(box.innerText == "."){
  box.innerText = document.turn;
  turn();
  }else{
    grabMessage("Sorry");
  }
}

function turn(){
  if (checkForWinner(document.turn)) {
    grabMessage("Congratulations " + document.turn + "!  You Win!");

  }else if (document.turn == "X"){
    document.turn = "O";
    grabMessage("It's Your Turn " + document.turn);
  }else{
    document.turn = "X";
    grabMessage("It's Your Turn " + document.turn);
  }
}

function checkForWinner(move){
  let result = false;
  if (checkRow(1,2,3, move) || 
      checkRow(4,5,6, move) ||
      checkRow(7,8,9, move) || 
      checkRow(1,4,7, move) || 
      checkRow(2,5,8, move) || 
      checkRow(3,6,9, move) || 
      checkRow(1,5,9, move) || 
      checkRow(3,5,7, move)) {
    
        result = true; 
  }
  return result;
}


function checkRow(a,b,c,move){
  let result = false;
  if(getBox(a) == move && getBox(b)== move && getBox(c)== move){
    result = true;
  }
  return result;
}

function getBox(number){
  return document.getElementById("s" + number).innerText;
}