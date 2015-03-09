var pos1;
var pos2;
var pos3;
var pos4;
var pos5;
var pos6;

window.onload = function () {
	var leds = document.getElementsByClassName("led");
	var i;
	for (i = 0; i < leds.length; i++) {
		leds[i].classList.add("off");
		leds[i].addEventListener("click", toggleLed);
	}
	pos1 = document.getElementsByClassName("pos1");
	pos2 = document.getElementsByClassName("pos2");
	pos3 = document.getElementsByClassName("pos3");
	pos4 = document.getElementsByClassName("pos4");
	pos5 = document.getElementsByClassName("pos5");
	pos6 = document.getElementsByClassName("pos6");
	calculateResult();
	
}

function calculateResult(){
	var result = [calculatePosValue(pos1),calculatePosValue(pos2),calculatePosValue(pos3),calculatePosValue(pos4),calculatePosValue(pos5),calculatePosValue(pos6)];
	document.getElementsByClassName("resultPosValues")[0].innerHTML = result;
}

function toggleLed(led){
	led.target.classList.toggle("off");
	led.target.classList.toggle("on");
	calculateResult();
}

function calculatePosValue(positions){
	var posValue = 0
	for (i = 0; i < positions.length; i++) {
		if (positions[i].classList.contains("on")){
			posValue = posValue + Math.pow(2,i);
		}
	}
	return posValue;
}
