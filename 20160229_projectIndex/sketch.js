var circle = [];

var num = 4;

var xoff = 0;
var yoff = 100;

var alphalimit = 25;

var lod = 0;
function setup() {
	var width = windowWidth;
	var height = windowHeight;
	createCanvas(width, height, WEBGL);

	for (var i = 0; i < num; i++) {
		var r = 150;
		circle.push(new myCircle(r, random(r, windowWidth - r), random(r, windowHeight - r)));

	}


}

function draw() {
// noiseDisplay();
	background(0);
	for (var i = 0; i < circle.length; i++) {
		for (var j = 0; j < circle.length; j++) {
			if (i != j) {
				strokeWeight(0.5);
				stroke(23, 255, 249, 50);
				line(circle[i].xpos, circle[i].ypos, circle[j].xpos, circle[j].ypos);
				noStroke();
				if (circle[j].collide(circle[j].xpos, circle[j].ypos, circle[j].r, circle[i].xpos, circle[i].ypos, circle[i].r)) {
					circle[j].xpos +=  random(-10, 10);
					circle[j].ypos += random(-10, 10);
				}
			}
			circle[i].display();
			circle[i].update();
		}
	}
	textDisplay();
}

function textDisplay(){
	var title0 = "BIO自介";
	var title1 = "Assignment";
	var title2 = "Final Project";
	var title3 = "Contact";
	
	fill(255);
	textSize(25);	
	textAlign(CENTER, CENTER);
	text(title0, circle[0].xpos, circle[0].ypos);
	text(title1, circle[1].xpos, circle[1].ypos);
	text(title2, circle[2].xpos, circle[2].ypos);
	text(title3, circle[3].xpos, circle[3].ypos);
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

function noiseDisplay(){
	loadPixels();
  for ( var x=0; x<width; x++) {
    var yoff = 0.0;
    for ( var y=0; y<height; y++) {
      noiseDetail(lod, 0.8); 
//      noiseDetail(lod, falloff); lod: constract, falloff: the gradient between neigbor pixel
      var bright = map(noise(xoff, yoff), 0, 1, 255, 0);
      pixels[x + y * width] = color(23, 255, 249,bright);
      yoff += 0.005;
    } xoff += 0.01;
  }
  if(lod < 10) lod++;
  updatePixels();
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}
//////////////////////////////////////////////
