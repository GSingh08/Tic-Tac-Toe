// First lets create Variables for X and O.
//Then create a variable for the box.
//give the boxes a value of nothing
//create function that says if the value of the box is empty to insert and X. and the next time you insert a value into the box it has to be O.  So on and so forth
// within the function
//create another function saying that if 123 === x alert YOU WIN
//do that with all posibilities. maybe create an array?

var marker= 0;
var box = document.querySelectorAll('.box');
console.log(box);

var box1 = document.getElementById('1');
var box2 = document.getElementById('2');
var box3 = document.getElementById('3');
var box4 = document.getElementById('4');
var box5 = document.getElementById('5');
var box6 = document.getElementById('6');
var box7 = document.getElementById('7');
var box8 = document.getElementById('8');
var box9 = document.getElementById('9');
// var possibleWins = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8], [3,6,9],[1,5,9],[3,5,8]];

// var switchMarker = function(){
//   for(var i =0; i < box.length;i++){
//     if(marker % 2 === 0){
//       box.innerHTML = 'X';
//       marker = marker +1;
//     }else{
//       box.innerHTML = 'O';
//       marker = marker + 1;
//     }
//   }
// }

// switchMarker();

var boxOne = function(){
  for(var i = 0; i < box.length; i++){
    if(marker%2 === 0){
      box1.innerHTML = 'X';
      marker++;
    }else{
      box1.innerHTML = 'O';
      marker++;
    }
  }
}

var boxTwo = function(){
   for(var i = 0; i < box.length; i++){
    if(marker%2 === 0){
      box2.innerHTML = 'X';
      marker++;
    }else{
      box2.innerHTML = 'O';
      marker++;
    }
  }
}

var boxThree = function(){
   for(var i = 0; i < box.length; i++){
    if(marker%2 === 0){
      box3.innerHTML = 'X';
      marker++;
    }else{
      box3.innerHTML = 'O';
      marker++;
    }
  }
}

var boxFour = function(){
   for(var i = 0; i < box.length; i++){
    if(marker%2 === 0){
      box4.innerHTML = 'X';
      marker++;
    }else{
      box4.innerHTML = 'O';
      marker++;
    }
  }
}

var boxFive = function(){
   for(var i = 0; i < box.length; i++){
    if(marker%2 === 0){
      box5.innerHTML = 'X';
      marker++;
    }else{
      box5.innerHTML = 'O';
      marker++;
    }
  }
}

var boxSix = function(){
   for(var i = 0; i < box.length; i++){
    if(marker%2 === 0){
      box6.innerHTML = 'X';
      marker++;
    }else{
      box6.innerHTML = 'O';
      marker++;
    }
  }
}

var boxSeven = function(){
   for(var i = 0; i < box.length; i++){
    if(marker%2 === 0){
      box7.innerHTML = 'X';
      marker++;
    }else{
      box7.innerHTML = 'O';
      marker++;
    }
  }
}

var boxEight = function(){
   for(var i = 0; i < box.length; i++){
    if(marker%2 === 0){
      box8.innerHTML = 'X';
      marker++;
    }else{
      box8.innerHTML = 'O';
      marker++;
    }
  }
}

var boxNine = function(){
   for(var i = 0; i < box.length; i++){
    if(marker%2 === 0){
      box9.innerHTML = 'X';
      marker++;
    }else{
      box9.innerHTML = 'O';
      marker++;
    }
  }
}








box1.addEventListener('click', boxOne);
box2.addEventListener('click', boxTwo);
box3.addEventListener('click', boxThree);
box4.addEventListener('click', boxFour);
box5.addEventListener('click', boxFive);
box6.addEventListener('click', boxSix);
box7.addEventListener('click', boxSeven);
box8.addEventListener('click', boxEight);
box9.addEventListener('click', boxNine);


var youWin = function(){
  if(box1.innerHTML === 'X' && box2.innerHTML === 'X' && box3.innerHTML === 'X'){
      console.log('YOU WON!');
  }
}
youWin();


// var boxOne = function(){
// for(var i = 0; i < box.length; i++){
// if(box[i].innerHTML = marker){
//   box[i].innerHTML = 'X';
//   marker++;
// }else{
//   box[i].innerHTML = 'O';
//   marker++;
// }
// }
// }

// var boxTwo = function(){

// if(box2.innerHTML = marker){
//   box2.innerHTML = 'X';
//   marker++;
// }else{
//   box2.innerHTML = 'O';
//   marker++;

// }
// }

//var boxThree = function(){
// if(box3.innerHTML = marker){
//   box3.innerHTML = 'X';
//   marker++;
// }else{
//   box3.innerHTML = 'O';
//   marker++;

// }
// }

// var boxFour = function(){
//   box4.innerHTML = marker;
// }

// var boxFive = function(){
//   box5.innerHTML = marker;
// }

// var boxSix = function(){
//   box6.innerHTML = marker;
// }

// var boxSeven = function(){
//   box7.innerHTML = marker;
// }

// var boxEight = function(){
//   box8.innerHTML = marker;
// }

// var boxNine = function(){
//   box9.innerHTML = marker;
// }
