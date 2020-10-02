var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  obj1 = createSprite(200, 200, 80, 30);
  obj1.shapeColor = "green";
  obj2=createSprite(100,200,80,30);
  obj2.shapeColor="green"
  obj3 = createSprite(300, 200, 80, 30);
  obj3.shapeColor = "green";
  obj4=createSprite(400,200,80,30);
  obj4.shapeColor="green"
  movingRect.debug = true;

  movingRect.velocityY = -5;
  obj4.velocityY = +5;
}

function draw() {
  


  background(0,0,0);  

  bounceOff(movingRect,obj4);
  
  drawSprites();
}

function bounceOff(object1, object2){
  if (object1.x - object2.x < object2.width/2 + movingRect.width/2
    && object2.x - object1.x <object2.width/2 + object1.width/2) {
      object1.velocityX = object1.velocityX * (-1);
      object2.velocityX = object2.velocityX * (-1);
}
if (object1.y - object2.y < object2.height/2 + object1.height/2
  && object2.y - object1.y < object2.height/2 + object1.height/2){
    object1.velocityY = object1.velocityY * (-1);
    object2.velocityY = object2.velocityY * (-1);
}
  
}