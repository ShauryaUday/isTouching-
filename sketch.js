var moving,fixed;

function setup() {
  createCanvas(windowWidth,windowHeight);
  moving=createSprite(400, 200, 50, 50);
  moving.shapeColor="orange";
  fixed=createSprite(500,230,70,70);
  fixed.shapeColor="purple";

}

function draw() {
  background(0);  
  drawSprites();
  moving.x=World.mouseX;
  moving.y=World.mouseY;
  if(isTouching(moving,fixed)){
    fixed.shapeColor="green";
    moving.shapeColor="blue";
  }
  else{
    fixed.shapeColor="purple";
    moving.shapeColor="orange";
  }
}
function isTouching(object1,object2){
  if(object1.x-object2.x<=object1.width/2+object2.width/2
    && object2.x-object1.x<=object1.width/2+object2.width/2
    &&object1.y-object2.y<=object1.height/2+object2.height/2
    &&object2.y-object1.y<=object1.height/2+object2.height/2){
    return true;
  }
  else{
   return false;
  }
}