/**
 *Triangles
 *@author Dennis Timmermann
 * Colors: "Love" from nicolagilroy @kuler http://kuler.adobe.com/#themeID/1254606
 */

//globals
var triangles = [];

var colors = [];
// { //define colors here
//   color(0x07F5AC, 255), color(0x0EAFFA, 255), color(0x04DADE, 255), color(0x04DE55, 255), color(0x0DFA17, 255)
// };

var direction;
var triangleHeight = 20;   //set triangle height
var triangleWidth;         //

var indexCount = 0;

function setup()
{
  // size(505, 500);
  // background(255);
  // noStroke();
  // smooth();
  // frameRate(25);

  // println(triangleWidth = ceil(sqrt(3)/2*triangleHeight));   //equilateral triangle



  //build initial arraylist
  for (var i = 0; i < width-triangleWidth; i+=triangleWidth) 
  {
    println(i/triangleWidth%2 == 0);
    if (i/triangleWidth%2 == 0)
    {
      direction = 1;
    }
    else
    {
      direction = -1;
    }

    for (var j = 0; j < height; j+=triangleHeight/2)
    {
      direction *= -1;
      if (sqrt(i*j/1.1)*10 <= random(sqrt(width*height/1))*9)  //time to finetune -  less triangles in the bottom right corner
      {
        triangles.push(new Triangle(i+(ceil(triangleWidth/2)), j-triangleHeight/2, direction));
      }
    }
    //shuffle
    // for (var k = triangles.size(); k >= 0; k--)
    // {
    //   var index = ceil(random(0, k));
    //   Triangle tmp = triangles.remove(index);
    //   triangles.add(tmp);
    // }
  }
}

function build()
{
  if (indexCount < triangles.size() && frameCount%1 == 0)
  {
    triangles.get(indexCount).start();
    ++indexCount;
    println(indexCount);
  }
}

function draw()
{
  background(255);
  if (indexCount < triangles.size())
  {
    build();
  } 
  else if (frameCount%1 == 0)
  {
    triangles.get(random(triangles.size())).flash();
    println("--"+frameCount);
  }

  for (var i = triangles.size()-1; i >= 0; i--)
  {
    triangles.get(i).draw();
  }
}


