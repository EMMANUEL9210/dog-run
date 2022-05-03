var groundImg,ground;
var dog1
var dog1_running


function preload(){

//groundImg = loadImage("ground.png")

   dog1_running = loadAnimation("dog1.png","dog2.png");
  //dog1_collided = loadAnimation("dog1_collided.gif");

  
  
}

function setup() {
 createCanvas(600, 600);

/*ground = createSprite(300,300)   
  ground.addImage(groundImg)

  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImg);
  ground.x = ground.width /2;*/



  dog1 = createSprite(50,160,20,50);
  //dog1.addAnimation("running", dog1_running);
  //dog1.addAnimation("collided", dog1_collided);
  

}

function draw() {
  background("red");
   /* ground.velocityY = +3
    if(ground.y >500 ){
      ground.y = 300*/
 // } 



  drawSprites();    



    
}