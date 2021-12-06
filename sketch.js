//declaring variables
var trex ,trex_running;
var ground,ground1;
function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  ground1 = loadAnimation("ground2.png");
}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
 trex = createSprite(50,180,20,50);
 trex.addAnimation("running", trex_running);

 //adding scale and position to trex 
 trex.scale = 0.5;
 trex.x=50;

 //create a ground
 ground = createSprite(200,180,400,20);
 ground.addAnimation("running",ground1);
}


function draw(){
  background("white")
  
  if (keyDown("space")) {
    trex.velocityY = -10;  
  }

  //adding gravity
  trex.velocityY = trex.velocityY + 0.8

  //stop trex from falling down 
  trex.collide(ground);


  drawSprites();
}
