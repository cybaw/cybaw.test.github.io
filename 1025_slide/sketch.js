



var i = 0;
var s;
var w= 5;



function setup(){
   
   var width = windowWidth;
   var height = windowHeight;
   createCanvas(width, height);
   
   strokeWeight(w);
   
}

function draw(){
   var n = height/20;
   var target = 2;
   var dy = height/2;
   var r = map(mouseX, 0, width, 0, 255);
   var g = map(mouseY, 0, height, 0, 255);
   var b = map(mouseX + mouseY, 0, width+height, 0, 255);

  background(r, g ,b);
  // background(0);
  // nostroke();
  stroke(r, g ,b);
   ellipse(width/2, height/2, 150, 150);
  // stroke(0);
    
    
   var speed = map(mouseY, 0, height, 0, target);
   
   for (s=0; s<height; s+=n){
      var a;
      a = (i+s)%(height);
      strokeWeight(10);
      line( 0, a, width, a+dy);
      /*
      stroke(255);
      ellipse( width/2, height/2, a/2, a/2);
      stroke(0);
      ellipse( width/2, height/2, a/2-1, a/2-1);
      */
   }
   
   i += speed;
   
   
   if( i>=height){
      i=0;
   }
}





