
var monkey , monkey_running;
var banana ,bananaI, obstacle,obstacleI;
var obstacle, obstacleGroup;
var  food, foodGroup;
var survivalTime = 0;
var ground ;

function preload(){
  
  
  monkey_running =  
     loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  
  
  bananaI = loadImage("banana.png");
  obstacleI = loadImage ("obstacle.png");
 
}



function setup() {
  monkey = createSprite(85,315,20,20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale = 0.1
  
   obstacleGroup = new Group();
  
  ground = createSprite(400,350,900,10);
  ground.velocityX = -10;
  
    
 
}


function draw() {
  background("white")
   drawSprites();
    
 bananas();
 Obstacle();
 score();
 
 bananaGroup = new Group ();
  
  
  
  
   if(ground.x < 0){
  ground.x = ground.width/2;
  } 
  if((keyDown("space")||keyDown("up")) && monkey.y >= 162){
    monkey.velocityY = -10;
  }
  
  
  monkey.velocityY = monkey.velocityY + 0.5
  monkey.collide(ground);
}

function bananas(){
  if(frameCount % 80 === 0 ){
    banana = createSprite(400,200,20,20);
    banana.y = Math.round(random(120,200));
    banana.addImage(bananaI);
    banana.scale = 0.1
    banana.velocityX = -3;
    banana.lifetime = 150
   
    bananaGroup.add(banana);
    
  }  
}
function Obstacle(){
if(frameCount % 300 === 0 ) {
 obstacle = createSprite(400,325,20,20);
  obstacle.scale = 0.1 ;
  obstacle.addImage(obstacleI);
  obstacle.velocityX = -3;
  obstacle.lifetime = 150 ;
  

   
   } 
}

function score(){
  stroke("white");
  textSize(20);
  fill("white");
  text("Score :" + score, 500, 50);
  
  stroke ("black");
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount/frameRate());
  text("survivalTime:"+ survivalTime, 100, 50);
  
}
