var box
function setup() {
  createCanvas(windowWidth,windowHeight);
  box=createSprite(20,50,33,33)
  box.shapeColor="purple"
}

function draw() 
{
  background(30);

  if(keyIsDown(RIGHT_ARROW)){
    box.position.x=box.position.x+2
  }

  if(keyIsDown(LEFT_ARROW)){
    box.position.x=box.position.x-2
  }

  if(keyIsDown(DOWN_ARROW)){
    box.position.y=box.position.y+2
  }

  if(keyIsDown(UP_ARROW)){
    box.position.y=box.position.y-2
  }
drawSprites()
}



