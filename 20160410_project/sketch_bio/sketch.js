

function setup() {
	var width = windowWidth;
	var height = windowHeight;
	
	createCanvas(width, height);
	background(255);
	smooth();
}
var locX = width / 2;
	var locY = 0;
function draw() {

	rectMode(CENTER);
	rect(locX, locY, width * 0.8, height * 0.8, 5);
	locX = go(locX, width / 2, 10);
	locY = go(locY, height / 2, 10);
}

function go(value, target, diff) {
	if ((target - value) > 0.1) {
		for (var i = 0; i < diff; i++) {
			value += (target - value) / diff;
			return value;
		}
	}
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}