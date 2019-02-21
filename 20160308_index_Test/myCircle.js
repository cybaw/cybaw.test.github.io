var alphalimit = 0;

function myCircle(cRad, cXpos, cYpos, cZpos) {

	this.r = cRad;
	this.xpos = cXpos;
	this.ypos = cYpos;
	this.zpos = cZpos;

	this.alpha = alphalimit;

	this.display = function() {
		var locY = (mouseY / height - 0.5) * (-2);
		var locX = (mouseX / width - 0.5) * 2;
		//to set the light position,
		//think of the world's coordinate as:
		// -1,1 -------- 1,1
		//   |            |
		//   |            |
		//   |            |
		// -1,-1---------1,-1
		pointLight(250, 250, 250, locX, locY, alpha);
		ambientMaterial(250);
		sphere(this.r);
		// text(this.content, this.xpos, this.ypos);
	}
	this.update = function() {
		this.edgeDect();
	}

	this.edgeDect = function() {
		if (mouseX > this.xpos - this.r / 2 && mouseX < this.xpos + this.r / 2 &&
			mouseY > this.ypos - this.r / 2 && mouseY < this.ypos + this.r / 2) {
			// this.c = ;
			this.r += 0.2;
			this.r = constrain(this.r, 15, 200);
			this.alpha += 0.05;
			return true;
		} else {
			this.r -= 0.2;
			this.r = constrain(this.r, 15, 200);
			this.c = 255;
			this.alpha -= 0.05;
			this.alpha = constrain(this.alpha, alphalimit, 255);
			return false;
		}
	}

	// this.jitter = function() {
	// 	if (this.edgeDect() == false) {
	// 		// this.xpos += random(-this.jitterSpeed, this.jitterSpeed);
	// 		// this.ypos += random(-this.jitterSpeed, this.jitterSpeed);
	// 		var nx = random(50);
	// 		var ny = random(50);
	// 		if (frameCount % 5 == 0) {
	// 			this.xpos += map(nx, 0, 50, -this.jitterSpeed, this.jitterSpeed);
	// 			this.ypos += map(ny, 0, 50, -this.jitterSpeed, this.jitterSpeed);
	// 			xoff++;
	// 			yoff++;
	// 		}
	// 	}
	// }

	this.collide = function(x, y, d, x2, y2, d2) {
		if (dist(x, y, x2, y2) <= (d / 2) + (d2 / 2)) {
			return true;
		} else {
			return false;
		}
	}

	this.go = function(loc, tar, diff) {
		for (var i = 0; i < diff; i++) {
			moveLock = false;
			loc += (tar - loc) / diff;
			if ((tar - loc) < 0.01) {
				moveLock = true
			}
			return loc;
		}
	}


}