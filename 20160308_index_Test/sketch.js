var pointNum = 100;
var x = [];
var y = [];
var z = [];
var boxNum = 4;
var longitude = [];
var latitude = [];

var r = 250;

var canvas, text;

function setup() {
	var width = windowWidth;
	var height = windowHeight;
	canvas = createCanvas(width, height, WEBGL);
	canvas.position(0, 0);
	
	var title1 = createDiv("<a href='http://i.imgur.com/WXaUlrK.gif'>Bio</a><style>a {text-align:center;font-size:36px;font-family: impact;vertical-align:middle;text-decoration:none; color:black;}</style>");
	title1.position(width/4*1, height/2);
	var title2 = createDiv("<a href='http://i.imgur.com/WXaUlrK.gif'>Assignment</a><style>a {text-align:center;font-size:36px;font-family: impact;vertical-align:middle;text-decoration:none; color:black;}</style>");
	title2.position(width/4*2+10 , height/2);
	
	var title3 = createDiv("<a href='http://i.imgur.com/WXaUlrK.gif'>Final Project</a><style>a {text-align:center;font-size:36px;font-family: impact;vertical-align:middle;text-decoration:none; color:black;}</style>");
	title3.position(width/4*3, height/2);
	
	update();

}

function draw() {
	background(255);
	rotateX(frameCount * 0.01);
	rotateY(frameCount * 0.02);
	
	for (var i = 0; i < pointNum; i++) {
		push();
		translate(x[i], y[i], z[i]);
		line(0, 0, 0, x[i], y[i], z[i]);
		// ambientLight(100, 0);
		pointLight(255, 255, 255, 0.1, 100, 100, 0);
		specularMaterial(255, 0.8);
		sphere(3);
		pop();
	}
	if (dist(mouseX, mouseY, width/4, height/2) < 50 || dist(mouseX, mouseY, width/4*2+10, height/2) < 50 || dist(mouseX, mouseY, width/4*3, height/2) < 50) {
		r = go(r, 500, 10);
		update();
		push();
		// translate(0, 0, 0);
		box(10);
		pop();
		
	} else {
		r = go(r, 250, 10);
		update();
	}


}


function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}


function update() {
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

function go(value, target, diff) {
	for (var i = 0; i < diff; i++) {
		value += (target - value) / diff;
		// print(value);
		return value;
	}
}