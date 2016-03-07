var pointNum = 100;
var x = [];
var y = [];
var z = [];

var longitude = [];
var latitude = [];

	var r = 250;


function setup() {
	var width = windowWidth;
	var height = windowHeight;
	createCanvas(width, height, WEBGL);
	update();
}

function draw() {
	background(0);
	rotateX(frameCount * 0.01);
	for (var i = 0; i < pointNum; i++) {
		push();
		translate(x[i], y[i], z[i]);
		sphere(3);
		pop();
	}
	if(dist(mouseX, mouseY, width/2, height/2) < 100){
		r = go(r, 500, 10);
		update();
	}else{
		r = go(r, 250, 10);
		update();
	}
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}


function update(){
	var ga = PI * (3 - sqrt(5));

for (var i = 0; i < pointNum; i++) {
		longitude[i] = ga * i; //delta // theta
		latitude[i] = asin(-1 + 2 * i / pointNum); //lamda	// phi
	}
	for (var i = 0; i < pointNum; i++) {
		x[i] = r * sin(longitude[i]) * cos(latitude[i]);
		y[i] = r * sin(longitude[i]) * sin(latitude[i]);
		z[i] = r * cos(longitude[i]);
		// print(x[i] + y[i] + z[i]);
	}	
}

function go(value, target, diff){
	for(var i=0; i<diff; i++){
		value += (target-value)/diff;
		// print(value);
		return value;
	}
}