//needs jquery for the animations

"use strict";
var counter = 0;
const elem = document.getElementById("changing");

function startChangingText(textList, textDuration = 3){
	// sets an interval that every "textDuration" seconds updates the text
	// by running change() with textList as a parameter
	// parameters: textList (a list of the elements you want to change)
	// textDuration: an int of the seconds that every element stays on screen
	textDuration *= 1000
	elem.innerHTML = textList[0];
	const inst = setInterval(function() {change(textList);}, textDuration);
	}

function change(textList) {
	// a function that fades out an element (document.getElementById("changing"))
	// and when this is done, it changes the text of it to be the next element of the
	// textList. When the textList is done, it restarts its counter, so it reuses the first
	// element.
	// this function is not supposed to be used seperately from startChangingText
    $("#changing").fadeOut('slow');
    $("#changing").promise().done(function(){
        elem.innerHTML = textList[counter];
        $("#changing").fadeIn('slow');
    });
	counter++;
	if (counter >= textList.length) {
		counter = 0;
	}
}