function loadPage() {
  setTimeout(showPage, 3000);
}
loadPage();

function showPage() {
 document.getElementById("load").style.display = "none";
document.getElementById("sound").style.display = "block";
}
///////////////////////////////////
//Tab open and close//
//Get the items from DOM//

var about = document.getElementById("about");
var instruction = document.getElementById("instruction");
var menu = document.getElementById("menu");
var level = document.getElementById("level");
var moves = document.getElementById("moves");
var moved = document.getElementById("moved");
var levels = document.getElementById("lvl");

//Toggle area start//
//instrcution button
function Instruction() {
 menu.style.display = "none";
 level.style.display = "none";
 instruction.style.display = "block";
 btnClickAll.play();
}
//About button
function About() {
 menu.style.display = "none";
 level.style.display = "none";
 about.style.display = "block";
 btnClickAll.play();
}
//Level button
function Level() {
 menu.style.display = "none";
 about.style.display = "none";
 level.style.display = "block";
 btnClickAll.play();
}
//Back button
function backButton() {
 menu.style.display = "block";
 if (
   about.style.display == "block" ||
   instruction.style.display == "block" ||
   level.style.display == "block" || levels.style.display == "block"
 ) {
   menu.style.display = "block";
   level.style.display = "none";
   about.style.display = "none";
   instruction.style.display = "none";
   levels.style.display = "none";
 }
 btnClickAll.play();
}
///////Toggle area end////////
///////Tab open and close end////////


//////////////////////////////////////////
// All Audio Resources
var btnClicked = document.getElementById("clickClip");
var btnClickAll = document.getElementById("clickClip2");
var gameoverClip = document.getElementById("gameoverClip");
var congratsClip = document.getElementById("congratsClip");


//Level Button Selection
var b1 = document.getElementById("b1");
var b2 = document.getElementById("b2");
var b3 = document.getElementById("b3");
var b4 = document.getElementById("b4");
var b5 = document.getElementById("b5");
var b6 = document.getElementById("b6");
var b7 = document.getElementById("b7");
var b8 = document.getElementById("b8");
var b9 = document.getElementById("b9");
var b10 = document.getElementById("b10");
var b11 = document.getElementById("b11");
var b12 = document.getElementById("b12");
var b13 = document.getElementById("b13");
var b14 = document.getElementById("b14");
var b15 = document.getElementById("b15");


//Level Design start//
//Buttons of puzzle//
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");
var btn4 = document.getElementById("btn4");
var btn5 = document.getElementById("btn5");
var btn6 = document.getElementById("btn6");
var btn7 = document.getElementById("btn7");
var btn8 = document.getElementById("btn8");
var btn9 = document.getElementById("btn9");

//Game over and Winner Values//
var tryagain = document.getElementById("playAgain");
var next = document.getElementById("nextLvl");
var levelName = document.getElementById("lvlname");
var winner = document.getElementById("winner");
var qoute = document.getElementById("qoute");
var over = document.getElementById("over");
var congo = document.getElementById("congo");
var lvlc = document.getElementById("lvlc");

// Start Rating Value
var star1 = document.getElementById("star1");
var star2 = document.getElementById("star2");
var star3 = document.getElementById("star3");
var star4 = document.getElementById("star4");
var star5 = document.getElementById("star5");

// Values for all in Game button
//This will use on every level decleration
function buttonValues(
 value1,
 value2,
 value3,
 value4,
 value5,
 value6,
 value7,
 value8,
 value9
) {
 this.value1 = value1;
 this.value2 = value2;
 this.value3 = value3;
 this.value4 = value4;
 this.value5 = value5;
 this.value6 = value6;
 this.value7 = value7;
 this.value8 = value8;
 this.value9 = value9;

 btn1.value = value1;
 btn1.innerText = value1;

 btn2.value = value2;
 btn2.innerText = value2;

 btn3.value = value3;
 btn3.innerText = value3;

 btn4.value = value4;
 btn4.innerText = value4;

 btn5.value = value5;
 btn5.innerText = value5;

 btn6.value = value6;
 btn6.innerText = value6;

 btn7.value = value7;
 btn7.innerText = value7;

 btn8.value = value8;
 btn8.innerText = value8;

 btn9.value = value9;
 btn9.innerText = value9;
}

// Movement for Button one//
btn1.addEventListener("click", function () {

 /*
 The value of Button 1 can transferred to:
 1  = 2, 4
 */

 //get the value of button 1.
 var val = btn1.value;
 //If value of button 2 is undefined,
 //then the value of button 1 will be transferred to 2.
 if (btn2.value == "") {
   btn2.innerText = val;
   btn1.innerText = "";
   btn2.value = val;
   btn1.value = "";

 }
 //If value of button 4 is undefined,
 //then the value of button 1 will be transferred to button 4.
 else if (btn4.value == "") {
   btn4.innerText = val;
   btn1.innerText = "";
   btn4.value = val;
   btn1.value = "";
 }

 //THIS PART IS SAME TO ALL SECTION//
 //Execute if true
 winnerCode();
 //movement will be decrease on evevry click
 moved.value--;
 //movement will be increase as text on evevry click
 moved.innerText++;
 //Execute if true
 gameOver();
 //Sound on everyclick
 btnClicked.play();

});

btn2.addEventListener("click", function () {

/*
The value of Button 2 can transferred to:
2  = 1, 3, 5
*/

 //get the value of button 2.
 var val = btn2.value;

 //If value of button 1 is undefined,
 //then the value of button 2 will be transferred to button 1.
 if (btn1.value == "") {
   btn1.innerText = val;
   btn2.innerText = "";
   btn1.value = val;
   btn2.value = "";
 } 
 //If value of button 3 is undefined,
 //then the value of button 2 will be transferred to button 3.
 else if (btn3.value == "") {
   btn3.innerText = val;
   btn2.innerText = "";
   btn3.value = val;
   btn2.value = "";
 } 
 //If value of button 5 is undefined,
 //then the value of button 2 will be transferred to button 5.
 else if (btn5.value == "") {
   btn5.innerText = val;
   btn2.innerText = "";
   btn5.value = val;
   btn2.value = "";
 }
 winnerCode();
 moved.value--;
 moved.innerText++;
 gameOver();
 btnClicked.play();
});
btn3.addEventListener("click", function () {

/*
The value of Button 3 can transferred to:
3  = 2, 6
*/

 //get the value of button 3.
 var val = btn3.value;

 //If value of button 2 is undefined,
 //then the value of button 3 will be transferred to button 2.
 if (btn2.value == "") {
   btn2.innerText = val;
   btn3.innerText = "";
   btn2.value = val;
   btn3.value = "";
 } 
 //If value of button 6 is undefined,
 //then the value of button 3 will be transferred to button 6.
 else if (btn6.value == "") {
   btn6.innerText = val;
   btn3.innerText = "";
   btn6.value = val;
   btn3.value = "";
 }
 winnerCode();
 moved.value--;
 moved.innerText++;
 gameOver();
 btnClicked.play();
});

btn4.addEventListener("click", function () {

/*
The value of Button 4 can transferred to:
4  = 1, 5, 7
*/

 //get the value of button 4.
 var val = btn4.value;

 //If value of button 1 is undefined,
 //then the value of button 4 will be transferred to button 1.
 if (btn1.value == "") {
   btn1.innerText = val;
   btn4.innerText = "";
   btn1.value = val;
   btn4.value = "";
 } 
 //If value of button 5 is undefined,
 //then the value of button 4 will be transferred to button 5.
 else if (btn5.value == "") {
   btn5.innerText = val;
   btn4.innerText = "";
   btn5.value = val;
   btn4.value = "";
 } 
 //If value of button 7 is undefined,
 //then the value of button 4 will be transferred to button 7.
 else if (btn7.value == "") {
   btn7.innerText = val;
   btn4.innerText = "";
   btn7.value = val;
   btn4.value = "";
 }
 winnerCode();
 moved.value--;
 moved.innerText++;
 gameOver();
 btnClicked.play();
});

btn5.addEventListener("click", function () {
/*
The value of Button 5 can transferred to:
5  = 2, 4, 6, 8
*/

 //get the value of button 5.
 var val = btn5.value;

 //If value of button 2 is undefined,
 //then the value of button 5 will be transferred to button 2.
 if (btn2.value == "") {
   btn2.innerText = val;
   btn5.innerText = "";
   btn2.value = val;
   btn5.value = "";
 } 
 //If value of button 4 is undefined,
 //then the value of button 5 will be transferred to button 4.
 else if (btn4.value == "") {
   btn4.innerText = val;
   btn5.innerText = "";
   btn4.value = val;
   btn5.value = "";
 } 
 //If value of button 6 is undefined,
 //then the value of button 5 will be transferred to button 6.
 else if (btn6.value == "") {
   btn6.innerText = val;
   btn5.innerText = "";
   btn6.value = val;
   btn5.value = "";
 } 
 //If value of button 8 is undefined,
 //then the value of button 5 will be transferred to button 8.
 else if (btn8.value == "") {
   btn8.innerText = val;
   btn5.innerText = "";
   btn8.value = val;
   btn5.value = "";
 }
 winnerCode();
 moved.value--;
 moved.innerText++;
 gameOver();
 btnClicked.play();
});

btn6.addEventListener("click", function () {

/*
The value of Button 6 can transferred to:
6  = 3, 5, 9
*/

 //get the value of button 6.
 var val = btn6.value;

 //If value of button 3 is undefined,
 //then the value of button 6 will be transferred to button 3.
 if (btn3.value == "") {
   btn3.innerText = val;
   btn6.innerText = "";
   btn3.value = val;
   btn6.value = "";
 } 
 //If value of button 5 is undefined,
 //then the value of button 6 will be transferred to button 5.
 else if (btn5.value == "") {
   btn5.innerText = val;
   btn6.innerText = "";
   btn5.value = val;
   btn6.value = "";
 } 
 //If value of button 9 is undefined,
 //then the value of button 6 will be transferred to button 9.
 else if (btn9.value == "") {
   btn9.innerText = val;
   btn6.innerText = "";
   btn9.value = val;
   btn6.value = "";
 }
 winnerCode();
 moved.value--;
 moved.innerText++;
 gameOver();
 btnClicked.play();
});

btn7.addEventListener("click", function () {

/*
The value of Button 7 can transferred to:
7  = 4, 8
*/

 //get the value of button 7.
 var val = btn7.value;

 //If value of button 4 is undefined,
 //then the value of button 7 will be transferred to button 4.
 if (btn4.value == "") {
   btn4.innerText = val;
   btn7.innerText = "";
   btn4.value = val;
   btn7.value = "";
 } 
 //If value of button 8 is undefined,
 //then the value of button 7 will be transferred to button 8.
 else if (btn8.value == "") {
   btn8.innerText = val;
   btn7.innerText = "";
   btn8.value = val;
   btn7.value = "";
 }
 winnerCode();
 moved.value--;
 moved.innerText++;
 gameOver();
 btnClicked.play();
});

btn8.addEventListener("click", function () {

/*
The value of Button 8 can transferred to:
8  = 5, 7, 9
*/

 //get the value of button 8.
 var val = btn8.value;

 //If value of button 5 is undefined,
 //then the value of button 8 will be transferred to button 5.
 if (btn5.value == "") {
   btn5.innerText = val;
   btn8.innerText = "";
   btn5.value = val;
   btn8.value = "";
 } 
 //If value of button 7 is undefined,
 //then the value of button 8 will be transferred to button 7.
 else if (btn7.value == "") {
   btn7.innerText = val;
   btn8.innerText = "";
   btn7.value = val;
   btn8.value = "";
 } 
 //If value of button 9 is undefined,
 //then the value of button 8 will be transferred to button 9.
 else if (btn9.value == "") {
   btn9.innerText = val;
   btn8.innerText = "";
   btn9.value = val;
   btn8.value = "";
 }
 winnerCode();
 moved.value--;
 moved.innerText++;
 gameOver();
 btnClicked.play();
});

btn9.addEventListener("click", function () {

/*
The value of Button 9 can transferred to:
9  = 6, 8
*/

 //get the value of button 9.

 //If value of button 6 is undefined,
 //then the value of button 9 will be transferred to button 6.
 var val = btn9.value;
 if (btn6.value == "") {
   btn6.innerText = val;
   btn9.innerText = "";
   btn6.value = val;
   btn9.value = "";
 } 
 //If value of button 8 is undefined,
 //then the value of button 9 will be transferred to button 8.
 else if (btn8.value == "") {
   btn8.innerText = val;
   btn9.innerText = "";
   btn8.value = val;
   btn9.value = "";
 }
 winnerCode();
 moved.value--;
 moved.innerText++;
 gameOver();
 btnClicked.play();
});

//Try Again Function of Failed complete Level
function tryAgain() {
 winner.style.display = "none";
 //Reset Button will be work as try again
 resetButton();
}

//Next Level Function for after Every level complete
function nextLevel() {
 winner.style.display = "none";


 //If Level one is completed then go to level two(same logic for each function)
 if (b1.value == "1") {
   levelTwo();
 } else if (b2.value == "1") {
   levelThree();
 } else if (b3.value == "1") {
   levelFour();
 } else if (b4.value == "1") {
   levelFive();
 } else if (b5.value == "1") {
   levelSix();
 } else if (b6.value == "1") {
   levelSeven();
 } else if (b7.value == "1") {
   levelEight();
 } else if (b8.value == "1") {
   levelNine();
 } else if (b9.value == "1") {
   levelTen();
 } else if (b10.value == "1") {
   levelEleven();
 } else if (b11.value == "1") {
   levelTwelve();
 } else if (b12.value == "1") {
   levelThirteen();
 } else if (b13.value == "1") {
   levelFourteen();
 } else if (b14.value == "1") {
   levelFifteen();
 } else if (b15.value == "1") {
   levelOne();
 }
}

//One time function for Congrats, this one function will hendle all winning part of the game
function winning(val1, val2, val3, val4, val5, val6, val7, val8, val9, val10, val11, val12) {
 this.val1 = val1;
 this.val2 = val2;
 this.val3 = val3;
 this.val4 = val4;
 this.val5 = val5;
 this.val6 = val6;
 this.val7 = val7;
 this.val8 = val8;
 this.val9 = val9;
 this.val10 = val10;
 this.val11 = val11;
 this.val12 = val12;
 next.style.display = val1;
 next.style.innerText = val2;
 tryagain.innerText = val3;
 qoute.innerHTML = val4;
 over.style.display = val5;
 congo.style.display = val6;
 winner.style.display = val7;
 star1.className = val8;
 star2.className = val9;
 star3.className = val10;
 star4.className = val11;
 star5.className = val12;


}

//So this is the logical part of winner
function winnerCode() {

 //if each buttons values is puzzled same then condition will try, then it will execute each block by the value of movement
 if (
   btn1.value == 1 &&
   btn2.value == 2 &&
   btn3.value == 3 &&
   btn4.value == 4 &&
   btn5.value == 5 &&
   btn6.value == 6 &&
   btn7.value == 7 &&
   btn8.value == 8 &&
   btn9.value == ""
 ) {
          //If puzzle completed within given moves then you will get rating
   if (moved.innerText < "20") {
     new winning("block", "Next Level", "Play Again", "Congratulations!<hr>", "none", "block", "block", "fill", "fill", "fill", "fill", "fill");
     congratsClip.play();
   } else if (moved.innerText > "20" || moved.innerText < "30") {
     new winning("block", "Next Level", "Play Again", "Congratulations!<hr>", "none", "block", "block", "fill", "fill", "fill", "fill", "");
     congratsClip.play();
   } else if (moved.innerText > "30" || moved.innerText < "40") {
     new winning("block", "Next Level", "Play Again", "Congratulations!<hr>", "none", "block", "block", "fill", "fill", "fill", "", "");
     congratsClip.play();
   } else if (moved.innerText > "40" || moved.innerText < "50") {
     new winning("block", "Next Level", "Play Again", "Congratulations!<hr>", "none", "block", "block", "fill", "fill", "", "", "");
     congratsClip.play();
   } else if (moved.innerText > "50" || moved.innerText < "60") {
     new winning("block", "Next Level", "Play Again", "Congratulations!<hr>", "none", "block", "block", "fill", "", "", "", "");
     congratsClip.play();
   }
 }

}

//One time function for game over, this one function will hendle all lossing part of the game
function overG(v1, v2, v3, v4, v5, v6) {
 this.v1 = v1;
 this.v2 = v2;
 this.v3 = v2;
 this.v4 = v4;
 this.v5 = v5;
 this.v6 = v6;

 next.style.display = v1;
 tryagain.innerText = v2;
 qoute.innerHTML = v3;
 over.style.display = v4;
 congo.style.display = v5;
 winner.style.display = v6;

}

//So this is the logical part of loser
function gameOver() {
 //if all moves finish then your game is over
 if (moved.value == 0) {
   new overG("none", "Try Again", "Game Over<hr>", "block", "none", "block");
   gameoverClip.play();
   congratsClip.pause();
 }
}
//this is pretty simple function for reset all the value
function resetButton() {
 //when you will start the game play it will assign 1 value for the level you are playing
 //so if you click on level 1 then it will assign 1 to b1(lvl 1) and rest of levels will be undefined
 //then when you will tap on reset button it will check the values and execute the rest of things
 //Isn't simple? :)
 if (b1.value == "1") {
   levelOne();
 } else if (b2.value == "1") {
   levelTwo();
 } else if (b3.value == "1") {
   levelThree();
 } else if (b4.value == "1") {
   levelFour();
 } else if (b5.value == "1") {
   levelFive();
 } else if (b6.value == "1") {
   levelSix();
 } else if (b7.value == "1") {
   levelSeven();
 } else if (b8.value == "1") {
   levelEight();
 } else if (b9.value == "1") {
   levelNine();
 } else if (b10.value == "1") {
   levelTen();
 } else if (b11.value == "1") {
   levelEleven();
 } else if (b12.value == "1") {
   levelTwelve();
 } else if (b13.value == "1") {
   levelThirteen();
 } else if (b14.value == "1") {
   levelFourteen();
 } else if (b15.value == "1") {
   levelFifteen();
 }
}

/////////////////////////////////////////////////////////
//Rest of part is pretty simple I just assigned values and DOM values for every Levels
function levelOne() {
 levelName.innerHTML = "Level One" + "<hr>";
 levels.style.display = "block";
 level.style.display = "none";
 menu.style.display = "none";
 new buttonValues("1", "2", "3", "4", "", "5", "6", "7", "8");
 moves.innerText = 20;
 moves.value = 20;
 moved.innerText = 0;
 moved.value = 20;
 btnClickAll.play();
 b1.value = "1";
 b2.value = "";
 b3.value = "";
 b4.value = "";
 b5.value = "";
 b6.value = "";
 b7.value = "";
 b8.value = "";
 b9.value = "";
 b10.value = "";
 b11.value = "";
 b12.value = "";
}
function levelTwo() {
 levelName.innerHTML = "Level Two" + "<hr>";
 levels.style.display = "block";
 level.style.display = "none";
 menu.style.display = "none";
 new buttonValues("1", "2", "3", "4", "8", "6", "5", "7", "");
 moves.innerText = 20;
 moves.value = 20;
 moved.innerText = 0;
 moved.value = 20;
 btnClickAll.play();
 b1.value = "";
 b2.value = "1";
 b3.value = "";
 b4.value = "";
 b5.value = "";
 b6.value = "";
 b7.value = "";
 b8.value = "";
 b9.value = "";
 b10.value = "";
 b11.value = "";
 b12.value = "";
}
function levelThree() {
 levelName.innerHTML = "Level Three" + "<hr>";
 levels.style.display = "block";
 level.style.display = "none";
 menu.style.display = "none";
 new buttonValues("1", "2", "3", "4", "5", "", "6", "7", "8");
 moves.innerText = 30;
 moves.value = 30;
 moved.innerText = 0;
 moved.value = 30;
 btnClickAll.play();
 b1.value = "";
 b2.value = "";
 b3.value = "1";
 b4.value = "";
 b5.value = "";
 b6.value = "";
 b7.value = "";
 b8.value = "";
 b9.value = "";
 b10.value = "";
 b11.value = "";
 b12.value = "";
 b13.value = "";
 b14.value = "";
 b15.value = "";
}
function levelFour() {
 levelName.innerHTML = "Level Four" + "<hr>";
 levels.style.display = "block";
 level.style.display = "none";
 menu.style.display = "none";

 new buttonValues("", "2", "1", "3", "4", "5", "6", "7", "8");
 moves.innerText = 40;
 moves.value = 40;
 moved.innerText = 0;
 moved.value = 40;
 btnClickAll.play();
 b1.value = "";
 b2.value = "";
 b3.value = "";
 b4.value = "1";
 b5.value = "";
 b6.value = "";
 b7.value = "";
 b8.value = "";
 b9.value = "";
 b10.value = "";
 b11.value = "";
 b12.value = "";
 b13.value = "";
 b14.value = "";
 b15.value = "";
}
function levelFive() {
 levelName.innerHTML = "Level Five" + "<hr>";
 levels.style.display = "block";
 level.style.display = "none";
 menu.style.display = "none";
 new buttonValues("1", "2", "", "4", "5", "6", "7", "8", "3");
 moves.innerText = 40;
 moves.value = 40;
 moved.innerText = 0;
 moved.value = 40;
 btnClickAll.play();
 b1.value = "";
 b2.value = "";
 b3.value = "";
 b4.value = "";
 b5.value = "1";
 b6.value = "";
 b7.value = "";
 b8.value = "";
 b9.value = "";
 b10.value = "";
 b11.value = "";
 b12.value = "";
 b13.value = "";
 b14.value = "";
 b15.value = "";
}
function levelSix() {
 levelName.innerHTML = "Level Six" + "<hr>";
 levels.style.display = "block";
 level.style.display = "none";
 menu.style.display = "none";
 new buttonValues("4", "1", "7", "3", "5", "6", "2", "8", "");
 moves.innerText = 50;
 moves.value = 50;
 moved.innerText = 0;
 moved.value = 50;
 btnClickAll.play();
 b1.value = "";
 b2.value = "";
 b3.value = "";
 b4.value = "";
 b5.value = "";
 b6.value = "1";
 b7.value = "";
 b8.value = "";
 b9.value = "";
 b10.value = "";
 b11.value = "";
 b12.value = "";
 b13.value = "";
 b14.value = "";
 b15.value = "";
}
function levelSeven() {
 levelName.innerHTML = "Level Seven" + "<hr>";
 levels.style.display = "block";
 level.style.display = "none";
 menu.style.display = "none";
 new buttonValues("3", "2", "5", "6", "8", "4", "7", "1", "");
 moves.innerText = 50;
 moves.value = 50;
 moved.innerText = 0;
 moved.value = 50;
 btnClickAll.play();
 b1.value = "";
 b2.value = "";
 b3.value = "";
 b4.value = "";
 b5.value = "";
 b6.value = "";
 b7.value = "1";
 b8.value = "";
 b9.value = "";
 b10.value = "";
 b11.value = "";
 b12.value = "";
 b13.value = "";
 b14.value = "";
 b15.value = "";
}
function levelEight() {
 levelName.innerHTML = "Level Eight" + "<hr>";
 levels.style.display = "block";
 level.style.display = "none";
 menu.style.display = "none";
 new buttonValues("8", "4", "3", "2", "7", "1", "5", "6", "");
 moves.innerText = 60;
 moves.value = 60;
 moved.innerText = 0;
 moved.value = 60;
 btnClickAll.play();
 b1.value = "";
 b2.value = "";
 b3.value = "";
 b4.value = "";
 b5.value = "";
 b6.value = "";
 b7.value = "";
 b8.value = "1";
 b9.value = "";
 b10.value = "";
 b11.value = "";
 b12.value = "";
 b13.value = "";
 b14.value = "";
 b15.value = "";
}
function levelNine() {
 levelName.innerHTML = "Level Nine" + "<hr>";
 levels.style.display = "block";
 level.style.display = "none";
 menu.style.display = "none";
 new buttonValues("6", "1", "3", "8", "7", "4", "2", "5", "");
 moves.innerText = 60;
 moves.value = 60;
 moved.innerText = 0;
 moved.value = 60;
 btnClickAll.play();
 b1.value = "";
 b2.value = "";
 b3.value = "";
 b4.value = "";
 b5.value = "";
 b6.value = "";
 b7.value = "";
 b8.value = "";
 b9.value = "1";
 b10.value = "";
 b11.value = "";
 b12.value = "";
 b13.value = "";
 b14.value = "";
 b15.value = "";
}
function levelTen() {
 levelName.innerHTML = "Level Ten" + "<hr>";
 levels.style.display = "block";
 level.style.display = "none";
 menu.style.display = "none";
 new buttonValues("6", "4", "5", "2", "7", "1", "3", "8", "");
 moves.innerText = 60;
 moves.value = 60;
 moved.innerText = 0;
 moved.value = 60;
 btnClickAll.play();
 b1.value = "";
 b2.value = "";
 b3.value = "";
 b4.value = "";
 b5.value = "";
 b6.value = "";
 b7.value = "";
 b8.value = "";
 b9.value = "";
 b10.value = "1";
 b11.value = "";
 b12.value = "";
 b13.value = "";
 b14.value = "";
 b15.value = "";
}
function levelEleven() {
 levelName.innerHTML = "Level Eleven" + "<hr>";
 levels.style.display = "block";
 level.style.display = "none";
 menu.style.display = "none";
 new buttonValues("1", "3", "6", "5", "2", "4", "7", "8", "");
 moves.innerText = 60;
 moves.value = 60;
 moved.innerText = 0;
 moved.value = 60;
 btnClickAll.play();
 b1.value = "";
 b2.value = "";
 b3.value = "";
 b4.value = "";
 b5.value = "";
 b6.value = "";
 b7.value = "";
 b8.value = "";
 b9.value = "";
 b10.value = "";
 b11.value = "1";
 b12.value = "";
 b13.value = "";
 b14.value = "";
 b15.value = "";
}
function levelTwelve() {
 levelName.innerHTML = "Level Twelve" + "<hr>";
 levels.style.display = "block";
 level.style.display = "none";
 menu.style.display = "none";
 new buttonValues("6", "3", "5", "8", "1", "7", "2", "4", "");
 moves.innerText = 60;
 moves.value = 60;
 moved.innerText = 0;
 moved.value = 60;
 btnClickAll.play();
 b1.value = "";
 b2.value = "";
 b3.value = "";
 b4.value = "";
 b5.value = "";
 b6.value = "";
 b7.value = "";
 b8.value = "";
 b9.value = "";
 b10.value = "";
 b11.value = "";
 b12.value = "1";
 b13.value = "";
 b14.value = "";
 b15.value = "";
}
function levelThirteen() {
 levelName.innerHTML = "Level Thirteen" + "<hr>";
 levels.style.display = "block";
 level.style.display = "none";
 menu.style.display = "none";
 new buttonValues("8", "1", "4", "3", "2", "7", "5", "6", "");
 moves.innerText = 60;
 moves.value = 60;
 moved.innerText = 0;
 moved.value = 60;
 btnClickAll.play();
 b1.value = "";
 b2.value = "";
 b3.value = "";
 b4.value = "";
 b5.value = "";
 b6.value = "";
 b7.value = "";
 b8.value = "";
 b9.value = "";
 b10.value = "";
 b11.value = "";
 b12.value = "";
 b13.value = "1";
 b14.value = "";
 b15.value = "";
}
function levelFourteen() {
 levelName.innerHTML = "Level Fourteen" + "<hr>";
 levels.style.display = "block";
 level.style.display = "none";
 menu.style.display = "none";
 new buttonValues("6", "8", "1", "2", "3", "7", "5", "4", "");
 moves.innerText = 60;
 moves.value = 60;
 moved.innerText = 0;
 moved.value = 60;
 btnClickAll.play();
 b1.value = "";
 b2.value = "";
 b3.value = "";
 b4.value = "";
 b5.value = "";
 b6.value = "";
 b7.value = "";
 b8.value = "";
 b9.value = "";
 b10.value = "";
 b11.value = "";
 b12.value = "";
 b13.value = "";
 b14.value = "1";
 b15.value = "";
}
function levelFifteen() {
 levelName.innerHTML = "Level Fifteen" + "<hr>";
 levels.style.display = "block";
 level.style.display = "none";
 menu.style.display = "none";
 new buttonValues("4", "7", "2", "6", "5", "3", "8", "1", "");
 moves.innerText = 60;
 moves.value = 60;
 moved.innerText = 0;
 moved.value = 60;
 btnClickAll.play();
 b1.value = "";
 b2.value = "";
 b3.value = "";
 b4.value = "";
 b5.value = "";
 b6.value = "";
 b7.value = "";
 b8.value = "";
 b9.value = "";
 b10.value = "";
 b11.value = "";
 b12.value = "";
 b13.value = "";
 b14.value = "";
 b15.value = "1";
}
 var playClip = document.getElementById("Clip");
function soundTrue(){

 playClip.play();
 playClip.volume = 0.2;
   document.getElementById("sound").style.display = "none";
   document.getElementById("main").style.display = "block";
   
}
function soundFalse(){
 playClip.pause();
   document.getElementById("sound").style.display = "none";
   document.getElementById("main").style.display = "block";
}

function exitGame(){
   document.getElementById("main").style.display = "none";
   document.getElementById("exit").style.display = "block";
   playClip.pause();
}
/////////////////////////
///////THE END//////////