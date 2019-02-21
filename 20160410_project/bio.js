
var canvas, text;
var mover = [];
var moverNum = 10;
function setup() {
	var width = windowWidth;
	var height = windowHeight;
	canvas = createCanvas(width, height);
	canvas.position(0, 0);
	
	for(var i=0; i<moverNum; i++){
		mover.push(new Mover());
	}
}

function draw() {
	background(120);

	for(var i=0; i<moverNum; i++){
		mover[i].update();
		mover[i].checkEdges();
		mover[i].display();
		for(var j=0; j<moverNum; j++){
			if(j != i){
				var Fgi = new p5.Vector();
				Fgi = mover[j].attract(mover[i]);
				mover[i].applyForce(Fgi);
			}	
		}
	}
}


function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}


function go(value, target, diff) {
	for (var i = 0; i < diff; i++) {
		value += (target - value) / diff;
		// print(value);
		return value;
	}
}


function Mover() {
 	var mass = 1;
  	var G = 0.1;

   var loc = new p5.Vector(random(width), random(height));
   var vel = new p5.Vector(0, 0);
   var acc = new p5.Vector(0, 0);
   var topVel = 10.0;
  
  
  this.update = function(){
    vel.add(acc);
    vel.limit(topVel);
    loc.add(vel);
    acc.mult(0);
  } 
  
  this.display = function(){
    stroke(255);
    strokeWeight(0.5);
    fill(0);
    ellipse(loc.x, loc.y, mass * 2, mass * 2);
    stroke(255, 0, 0);
    strokeWeight(1);
    line(loc.x, loc.y, loc.x , loc.y + vel.y*10);
    stroke(0, 0, 255);
    line(loc.x, loc.y, loc.x + vel.x*10, loc.y);
  }
  
  this.checkEdges = function(){
    if(loc.x >= (width) || loc.x <=0 ){
      vel.x = vel.x * (-1);
    }
    
    if(loc.y >= (height) || loc.y <= 0){
      vel.y = vel.y * (-1);
    }
    if(loc.y > height)  {loc.y = height;}
    if(loc.y < 0)       {loc.y = 0;}
    if(loc.x > width)   {loc.x = width;}
    if(loc.x < 0)       {loc.x = 0;}
  }
 
  this.applyForce = function(force){
    var f = new p5.Vector(); 
    f = force.get();
    f.div(mass);
    acc.add(f);
  }
  
  this.attract = function(m){
     var force = p5.Vector.sub(loc, m.loc);  //direction.
     var distance = force.mag();              //mag of dir.
     distance = constrain(distance, 5, 25);
     var mag = (G * mass * m.mass ) / ( distance * distance);
     force.normalize();
     force.mult(mag);
     return force;
  }
}