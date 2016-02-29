
var circle = [];

var num = 4;

var xoff = 0;
var yoff = 100;

var alphalimit = 25;
function setup() {
	var width = windowWidth;
	var height = windowHeight;
	createCanvas(width, height);
	
	for (var i = 0; i < num; i++) {
		var r = 150;
		circle.push(new myCircle(r, random(r, windowWidth - r), random(r, windowHeight - r)));
	}

}

function draw() {

	background(0);
	for (var i = 0; i < circle.length; i++) {
		for (var j = 0; j < circle.length; j++) {
			if (i != j) {
				strokeWeight(0.5);
				stroke(23, 255, 249, 50);
				line(circle[i].xpos, circle[i].ypos, circle[j].xpos, circle[j].ypos);
				noStroke();
			}
			circle[i].display();
			circle[i].update();
		}
	}
}

function mousePressed() {
	for (var i = 0; i < circle.length; i++) {
		if (circle[i].edgeDect()) {
			circle[i].locked = true;
			print("Pressed");

		} else {
			circle[i].locked = false;
		}
		circle[i].xOffset = mouseX - circle[i].xpos;
		circle[i].yOffset = mouseY - circle[i].ypos;
	}
}

function mouseDragged() {
	for (var i = 0; i < circle.length; i++) {
		if (circle[i].locked) {
			circle[i].xpos = mouseX - circle[i].xOffset;
			circle[i].ypos = mouseY - circle[i].yOffset;
		}
	}

}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}
//////////////////////////////////////////////
function myCircle(cRad, cXpos, cYpos) {

	this.r = cRad;
	this.xpos = cXpos;
	this.ypos = cYpos;
	this.c = 255;
	this.mass = sqrt(this.r);
	this.jitterSpeed = 0.2;
	this.acc = 0;
	this.xOffset = 0.0;
	this.yOffset = 0.0;
	this.locked = false;

	this.alpha = alphalimit;

	this.display = function() {
		fill(this.c, this.alpha);
		ellipse(this.xpos, this.ypos, this.r, this.r);
		// text(this.content, this.xpos, this.ypos);
	}
	this.update = function() {
		this.edgeDect();
		this.jitter();
	}

	this.edgeDect = function() {
		if (mouseX > this.xpos - this.r / 2 && mouseX < this.xpos + this.r / 2 &&
			mouseY > this.ypos - this.r / 2 && mouseY < this.ypos + this.r / 2) {
			// this.c = ;
			this.r += 0.2;
			this.r = constrain(this.r, 100, 200);
			this.alpha += 0.05;
			return true;
		} else {
			this.r -= 0.2;
			this.r = constrain(this.r, 100, 200);
			this.c = 255;
			this.alpha -= 0.05;
			this.alpha = constrain(this.alpha, alphalimit, 255);
			return false;
		}
	}

	this.jitter = function() {
		if (this.edgeDect() == false) {
			// this.xpos += random(-this.jitterSpeed, this.jitterSpeed);
			// this.ypos += random(-this.jitterSpeed, this.jitterSpeed);
			var nx = random(50);
			var ny = random(50);
			this.xpos += map(nx, 0, 50, -this.jitterSpeed, this.jitterSpeed);
			this.ypos += map(ny, 0, 50, -this.jitterSpeed, this.jitterSpeed);
			xoff++;
			yoff++;
		}
	}


}