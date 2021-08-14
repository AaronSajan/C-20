var a,b;



function setup() {
  createCanvas(800,600);
  a= createSprite(600, 200, 50, 80);
  a.shapeColor= "green"
  b = createSprite(400,200,80,30)
  b.shapeColor = "blue"
}

function draw() {
  background(255,255,255);  
a.x= World.mouseX;
a.y = World.mouseY;
//console.log(a.x-b.x)
if(a.x-b.x<b.width/2+a.width/2
  && b.x-a.x<b.width/2+a.width/2
  && a.y-b.y<b.height/2+a.height/2
  && b.y-a.y<b.height/2+a.height/2
  ){
a.shapeColor= "blue"
b.shapeColor= "green"
  }
  else{
    a.shapeColor= "green"
    b.shapeColor = "blue"
  }
  drawSprites();
}