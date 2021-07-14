var bullet1, bullet2, bullet3, bullet4;
var wall1, wall2, wall3, wall4;
var speed1, speed2, speed3, speed4;
var weight;
var thickness1, thickness2, thickness3, thickness4;
var b1, b2, b3;

function setup() {
  createCanvas(1300,400);
 // createSprite(400, 200, 50, 50);
  speed1 = random(223, 321);
  speed2 = random(223, 321);
  speed3 = random(223, 321);
  speed4 = random(223, 321);
 
  thickness1 = random(22, 83);
  thickness2 = random(22, 83);
  thickness3 = random(22, 83);
  thickness4 = random(22, 83);

  weight = random(30, 52);
  

  wall1 = createSprite(1200, 50, thickness1, 30);
  wall1.shapeColor = color(80, 80, 80);
  wall2 = createSprite(1200, 150, thickness2, 30);
  wall2.shapeColor = color(80, 80, 80);
  wall3 = createSprite(1200, 250, thickness3, 30);
  wall3.shapeColor = color(80, 80, 80);
  wall4 = createSprite(1200, 350, thickness4, 30);
  wall4.shapeColor = color(80, 80, 80);

  bullet1 = createSprite(50, 50, 40, 10);
  bullet1.velocityX = speed1;
  bullet1.shapeColor = "White";

  bullet2 = createSprite(50, 150, 40, 10);
  bullet2.velocityX = speed2;
  bullet2.shapeColor = "White";

  bullet3 = createSprite(50, 250, 40, 10);
  bullet3.velocityX = speed3;
  bullet3.shapeColor = "White";

  bullet4 = createSprite(50, 350, 40, 10);
  bullet4.velocityX = speed4;
  bullet4.shapeColor = "White";
  
  b1 = createSprite(width/2, 100, width, 5);
  b1.shapeColor = color(255);

  b2 = createSprite(width/2, 200, width, 5);
  b2.shapeColor = color(255);

  b3 = createSprite(width/2, 300, width, 5);
  b3.shapeColor = color(255);

}

function draw() {
  background(0);  
  hasCollided(bullet1, wall1);
  if(hasCollided(bullet1, wall1)){
      bullet1.velocityX = 0;
      var damage = 0.5*speed1*weight*speed1/(thickness1*thickness1*thickness1);

   if(damage>10){
      wall1.shapeColor = color(255, 0, 0);
      }

   if(damage<10){
      wall1.shapeColor = color(0, 255, 0);
      }
  }
  hasCollided(bullet2, wall2);
  if(hasCollided(bullet2, wall2)){
   bullet2.velocityX = 0;
   var damage = 0.5*speed2*weight*speed2/(thickness2*thickness2*thickness2);

if(damage>10){
   wall2.shapeColor = color(255, 0, 0);
   }

if(damage<10){
   wall2.shapeColor = color(0, 255, 0);
   }
}
  hasCollided(bullet3, wall3);
  if(hasCollided(bullet3, wall3)){
   bullet3.velocityX = 0;
   var damage = 0.5*speed3*weight*speed3/(thickness3*thickness3*thickness3);

if(damage>10){
   wall3.shapeColor = color(255, 0, 0);
   }

if(damage<10){
   wall3.shapeColor = color(0, 255, 0);
   }
}
  hasCollided(bullet4, wall4);
  if(hasCollided(bullet4, wall4)){
   bullet4.velocityX = 0;
   var damage = 0.5*speed4*weight*speed4/(thickness4*thickness4*thickness4);

if(damage>10){
   wall4.shapeColor = color(255, 0, 0);
   }

if(damage<10){
   wall4.shapeColor = color(0, 255, 0);
   }
}
  drawSprites();
}

function hasCollided(lbullet, lwall){
    bulletRightEdge=lbullet.x+lbullet.width;
    wallLeftEdge=lwall.x;
  
    if(bulletRightEdge>=wallLeftEdge){
         return true
    }
    return false;
}