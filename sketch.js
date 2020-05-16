var fixed,moving;


function setup() {
  createCanvas(800,400);
fixed = createSprite(500,200,60,height/2);
moving = createSprite(50,200,50,50);
}

function draw() {
  background("yellow"); 
  moving.x = mouseX;
  moving.y = mouseY;
  if(fixed.x-moving.x<fixed.width/2+moving.width/2&&
    moving.x-fixed.x<fixed.width/2+moving.width/2&&
    fixed.y-moving.y<fixed.height/2+moving.height/2&&
    moving.y-fixed.y<fixed.height/2+moving.height/2)
{
  fixed.shapeColor = "blue";
  moving.shapeColor = "red";
}
else{fixed.shapeColor = "green" ;
moving.shapeColor = "grey";

}


  drawSprites();
}