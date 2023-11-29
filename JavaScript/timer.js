'use strict';

const main = document.querySelector(".main");

let minutes = document.querySelector(".minutes");
let seconds = document.querySelector(".seconds");
let milSeconds = document.querySelector(".milseconds");
let pause = null;

let startMinutes = 0 ;
let startSeconds = 0 ; 
let startMilSeconds = 0 ;
let interval;

minutes.innerHTML = "0" + startMinutes;
seconds.innerHTML = "0" + startSeconds;
milSeconds.innerHTML = "0" + startMilSeconds;

function startTimer() {
	startMilSeconds++;

	if(startMilSeconds < 10){
		milSeconds.innerHTML = "0" + startMilSeconds;
	}
	if(startMilSeconds >=10 && startMilSeconds <99){
		milSeconds.innerHTML = startMilSeconds;
	}
	if(startMilSeconds == 99){
		startMilSeconds = 0;
		startSeconds++;
	}


	if(startSeconds < 10){
		seconds.innerHTML = "0" + startSeconds;
	}
	if(startSeconds >= 10 && startSeconds < 60){
		seconds.innerHTML = startSeconds;
	}
	if(startSeconds == 60){
		startSeconds = 0;
		startMinutes++;
	}


	if(startMinutes < 10){
		minutes.innerHTML = "0" + startMinutes;
	}
	if(startMinutes >= 10 && startMinutes < 60){
		minutes.innerHTML = startMinutes;
	}
}

main.addEventListener("click", () => {
	pause == null ? pause = 1 : pause = null;
	if(pause !== null){
		clearInterval(interval);
		interval = setInterval(startTimer, 10);
	}
	if(pause == null){
		clearInterval(interval);

	}
})

main.addEventListener("dblclick", () => {
	startMinutes = 0 ;
	startSeconds = 0 ; 
	startMilSeconds = 0 ;
	minutes.innerHTML = "0" + startMinutes;
	seconds.innerHTML = "0" + startSeconds;
	milSeconds.innerHTML = "0" + startMilSeconds;
	clearInterval(interval);

})