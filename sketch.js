var bullet1, bullet2, bullet3, bullet4;
var wall1, wall2, wall3, wall4;
var speed, weight, thickness;
var b1, b2, b3,b4;

function setup() {
  createCanvas(1600,400);
  
  bullet1 = createSprite(10, 60, 50, 10);
  bullet1.shapeColor = "white";

  b1 = createSprite(800, 110, 1600, 5);
  b1.shapeColor = "white";

  bullet2 = createSprite(10, 160, 50, 10);
  bullet2.shapeColor = "white";

  b2 = createSprite(800, 210, 1600, 5);
  b2.shapeColor = "white";

  bullet3 = createSprite(10, 260, 50, 10);
  bullet3.shapeColor = "white";
  
  b4 = createSprite(800, 310, 1600, 5);
  b4.shapeColor = "white";
  
  bullet4 = createSprite(10, 360, 50, 10);
  bullet4.shapeColor = "white";

  wall1 = createSprite(1500, 60, 20, 30);
  wall1.shapeColor = "yellow";

  wall2 = createSprite(1500, 160, 20, 30);
  wall2.shapeColor = "yellow";

  wall3 = createSprite(1500, 260, 20, 30);
  wall3.shapeColor = "yellow";

  wall4 = createSprite(1500, 360, 20, 30);
  wall4.shapeColor = "yellow";

}

function draw() {
  background("black");  
  
  
  weight = random(400, 1500);
  thickness = random(22, 83)

 bullet1.velocityX = speed = random(10, 200);
 bullet2.velocityX = speed = random(10, 200);;
 bullet3.velocityX = speed = random(10, 200);;
 bullet4.velocityX = speed = random(10, 200);;

 
 isTouching(bullet1, wall1);
 isTouching(bullet2, wall2);
 isTouching(bullet3, wall3);
 isTouching(bullet4, wall4);
 drawSprites();
}

function isTouching(bullet, wall){

   if( wall.x - bullet.x < bullet.width/2 + wall.width/2 )
    {
     bullet.velocityX = 0;
     //Matter.Body.setStatic(bullet, true);
     var damage = 0.5 * weight * speed * speed / (thickness * thickness * thickness) ;
  
    if(damage > 10){
       wall.shapeColor = color(255, 0, 0);
    }
    if(damage < 10){
      wall.shapeColor = color(0, 255, 0);
   }
    
  }
}
