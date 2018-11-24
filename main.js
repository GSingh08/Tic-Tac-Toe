
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
  if(box.innerText == ''){
  box.innerText = document.turn;
  turn();
  }else{
    grabMessage("srry");
  }
}

function turn(){
  if(document.turn == "X"){
    document.turn = "O";
  }else{
    document.turn = "X";
  }
  grabMessage("It's Your Turn " + document.turn + ".")
}