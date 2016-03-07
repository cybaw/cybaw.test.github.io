function boxButton(_xpos, _ypos, _zpos){
	this.xpos = _xpos;
	this.ypos = _ypos;
	this.zpos = _zpos;
	this.rotateRatio = 0.1;
	this.r = 50;
	this.locked = false;
}

boxButton.prototype.display = function(){
	push();
	translate(this.xpos, this.ypos, this.zpos);
	 rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  
	// // noFill();
	// // stroke(255);
	// fill(255);
	
	// // rectMode(CENTER);
	// beginShape(QUAD_STRIP);
	// vertex(-this.r/2, -this.r/2, -this.r/2);
	// vertex(+this.r/2, -this.r/2, -this.r/2);
	
	// vertex(-this.r/2, +this.r/2, -this.r/2);
	// vertex(+this.r/2, +this.r/2, -this.r/2);
	
	// vertex(+this.r/2, -this.r/2, +this.r/2);
	// vertex(-this.r/2, -this.r/2, +this.r/2);
	
	
	// vertex(+this.r/2, +this.r/2, +this.r/2);
	// vertex(-this.r/2, +this.r/2, +this.r/2);
	// endShape();
	box(this.r,this.r,this.r);
	pop();
}
boxButton.prototype.update = function(){
	if(this.edgedetect == true){print("EDGE!")}else{print("FALSE!")}
}

boxButton.prototype.edgedetect = function(){
	if(dist(mouseX, mouseY, this.xpos, this.ypos) < this.r){
		this.locked = true;
		this.r.go(r, 200, 30);
		return true;
	}else{
		this.locked = false;
		return false;
	}
	
}

boxButton.prototype.go = function(value, target, diff){
	for(var i=0; i<diff; i++){
		value += (target - value) /diff;
		return value;
	}
}