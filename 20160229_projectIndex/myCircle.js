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
			this.r = constrain(this.r, 150, 200);
			this.alpha += 0.05;
			return true;
		} else {
			this.r -= 0.2;
			this.r = constrain(this.r, 150, 200);
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

	this.collide = function(x, y, d, x2, y2, d2) {
		if (dist(x, y, x2, y2) <= (d / 2) + (d2 / 2)) {
			return true;
		} else {
			return false;
		}
	}




}