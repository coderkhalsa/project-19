var player,player_running;
var banana,banana_img;
var obstacle,obstacle_img;
var obstacleGroup,foodGroup;
var backimg,jungle;
var ground
var score;

function preload(){
backimg = loadImage("jungle.jpg");
player_running = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  
 banana_img = loadImage("banana.png");
 obstacle_img = loadImage("stone.png");
}

function setup() {
  createCanvas(400, 400);
jungle = createSprite(200,200) ;
jungle.addImage("jungle",backimg);
  jungle.velocityX = -4
  jungle.x = jungle.width / 2;
  ground = createSprite(200,370,600,10)
  ground.velocityX = -5;

  player = createSprite(50,320);
 player.addAnimation("Monkey",player_running);
player.scale = 0.12

}

function draw() {
  background(220);
ground.visible = true;
  if (ground.x < 150) {
   ground.x = ground.width / 2;
  }

  if (jungle.x < 150) {
   jungle.x = jungle.width / 2;

  }
  fruit()
  
  drawSprites();
}

function fruit(){
if (frameCount % 80 === 0){
var banana = createSprite (200,random(220,250));
banana.addImage("Banana",banana_img);
banana.scale = 0.04;
banana.velocityX = -3;
  //giving it lifetime
banana.lifetime = 300;
  //adding in group
foodGroup.add(banana);
}
}