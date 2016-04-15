function Triangle(_x, _y, _direction) {
	this.x = _x;
	this.y = _y;
	this.direction = _direction;

	this.triangleColor = colors[random(colors.length)];
	this.triangleAlpha = 0;
	this.start = false;
	this.flash = false;
	
	function start() {
		this.start = true;
	}
	function flash() {
		this.start = false;
		this.flash = true;
	}

	function draw() {
		if (this.start == true && triangleAlpha <= 255) {
			this.triangleAlpha = constrain(triangleAlpha += 5, 0, 255); //fading speed
		}
		if (this.flash == true) {
			triangleAlpha = constrain(triangleAlpha -= 5, 0, 255); //fading speed
			if (triangleAlpha <= 0) {
				this.flash = false;
				this.start = true;
				this.triangleColor = colors[ random(colors.length)]; //comment this out if colors should stay the same
			}
		}
		fill(triangleColor, triangleAlpha); {
			triangle(this.x + ceil(triangleWidth / 2) * this.direction, this.y - triangleHeight / 2,
				this.x + ceil(triangleWidth / 2) * this.direction, this.y + triangleHeight / 2,
				this.x - ceil(triangleWidth / 2 + 1) * this.direction, this.y);
		}
	}
}