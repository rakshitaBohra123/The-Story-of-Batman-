//const Engine= Matter.Engine;
//const World= Matter.World;
//const Bodies= Matter.Bodies;
//const Body= Matter.Body;

var Bruce,img5;

function preload(){
  img1=loadImage("images/thunderbolt/1.png")
  img2=loadImage("images/thunderbolt/2.png")
  img3=loadImage("images/thunderbolt/3.png")
  img4=loadImage("images/thunderbolt/4.png")
img6=loadImage("images/thunderbolt/drop.jpg")
  img5=loadAnimation("images/Walking Frame/walking_8.png","images/Walking Frame/walking_7.png","images/Walking Frame/walking_6.png","images/Walking Frame/walking_5.png","images/Walking Frame/walking_4.png","images/Walking Frame/walking_3.png","images/Walking Frame/walking_2.png","images/Walking Frame/walking_1.png")
img=loadAnimation("images/Walking Frame/walking_8.png","images/Walking Frame/walking_8.png","images/Walking Frame/walking_8.png","images/Walking Frame/walking_8.png")
}

function setup(){
  createCanvas(700,700);
    rectMode(CENTER);

    
    //engine = Engine.create();
    //world = engine.world;
    
   // Bruce= new Umbrella(350,600);
   drop1=createSprite((random(0,700)),(random(0,10)),20,20);
   drop1.addImage(img6)
   drop1.scale=0.02
   drop1.visible=false

   drop2=createSprite((random(0,700)),(random(0,10)),20,20);
   drop2.addImage(img6)
   drop2.scale=0.02
   drop2.visible=false

   drop3=createSprite((random(0,700)),(random(0,10)),20,20);
   drop3.addImage(img6)
   drop3.scale=0.02
   drop3.visible=false

   drop4=createSprite((random(0,700)),(random(0,10)),20,20);
   drop4.addImage(img6)
   drop4.scale=0.02
   drop4.visible=false

   drop5=createSprite((random(0,700)),(random(0,10)),20,20);
   drop5.addImage(img6)
   drop5.scale=0.02
   drop5.visible=false

   drop6=createSprite((random(0,700)),(random(0,10)),20,20);
   drop6.addImage(img6)
   drop6.scale=0.02
   drop6.visible=false

   drop7=createSprite((random(0,700)),(random(0,10)),20,20);
   drop7.addImage(img6)
   drop7.scale=0.02
   drop7.visible=false

   drop8=createSprite((random(0,700)),(random(0,10)),20,20);
   drop8.addImage(img6)
   drop8.scale=0.02
   drop8.visible=false

   drop9=createSprite((random(0,700)),(random(0,10)),20,20);
   drop9.addImage(img6)
 drop9.scale=0.02
 drop9.visible=false

   drop10=createSprite((random(0,700)),(random(0,10)),20,20);
   drop10.addImage(img6)
   drop10.scale=0.02
   drop10.visible=false

   drop11=createSprite((random(0,700)),(random(0,10)),20,20);
   drop11.addImage(img6)
 drop11.scale=0.02
 drop11.visible=false

   drop12=createSprite((random(0,700)),(random(0,10)),20,20);
   drop12.addImage(img6)
   drop12.scale=0.02
   drop12.visible=false

   drop13=createSprite((random(0,700)),(random(0,10)),20,20);
   drop13.addImage(img6)
 drop13.scale=0.02
 drop13.visible=false

 drop14=createSprite((random(0,700)),(random(0,10)),20,20);
   drop14.addImage(img6)
 drop14.scale=0.02
 drop14.visible=false

 drop15=createSprite((random(0,700)),(random(0,10)),20,20);
   drop15.addImage(img6)
 drop15.scale=0.02
 drop15.visible=false

 drop16=createSprite((random(0,700)),(random(0,10)),20,20);
   drop16.addImage(img6)
 drop16.scale=0.02
 drop16.visible=false

 drop17=createSprite((random(0,700)),(random(0,10)),20,20);
   drop17.addImage(img6)
 drop17.scale=0.02
 drop17.visible=false

 drop18=createSprite((random(0,700)),(random(0,10)),20,20);
   drop18.addImage(img6)
 drop18.scale=0.02
 drop18.visible=false

 drop19=createSprite((random(0,700)),(random(0,10)),20,20);
   drop19.addImage(img6)
 drop19.scale=0.02
 drop19.visible=false

 drop20=createSprite((random(0,700)),(random(0,10)),20,20);
   drop20.addImage(img6)
 drop20.scale=0.02
 drop20.visible=false

 drop21=createSprite((random(0,700)),(random(0,10)),20,20);
   drop21.addImage(img6)
 drop21.scale=0.02
 drop21.visible=false

 drop22=createSprite((random(0,700)),(random(0,10)),20,20);
   drop22.addImage(img6)
 drop22.scale=0.02
 drop22.visible=false

 drop23=createSprite((random(0,700)),(random(0,10)),20,20);
   drop23.addImage(img6)
 drop23.scale=0.02
 drop23.visible=false

 drop24=createSprite((random(0,700)),(random(0,10)),20,20);
   drop24.addImage(img6)
 drop24.scale=0.02
 drop24.visible=false

 drop25=createSprite((random(0,700)),(random(0,10)),20,20);
 drop25.addImage(img6)
drop25.scale=0.02
drop25.visible=false

drop26=createSprite((random(0,700)),(random(0,10)),20,20);
   drop26.addImage(img6)
 drop26.scale=0.02
 drop26.visible=false

 drop27=createSprite((random(0,700)),(random(0,10)),20,20);
   drop27.addImage(img6)
 drop27.scale=0.02
 drop27.visible=false

 drop28=createSprite((random(0,700)),(random(0,10)),20,20);
 drop28.addImage(img6)
drop28.scale=0.02
drop28.visible=false

drop29=createSprite((random(0,700)),(random(0,10)),20,20);
   drop29.addImage(img6)
 drop29.scale=0.02
 drop29.visible=false

 drop30=createSprite((random(0,700)),(random(0,10)),20,20);
 drop30.addImage(img6)
drop30.scale=0.02
drop30.visible=false

   Bruce=createSprite(50,500,100,50);
   Bruce.addAnimation("walking",img5);
   Bruce.scale=0.5

   
    Bruce.depth=drop1.depth;
    Bruce.depth=drop2.depth;
    Bruce.depth=drop3.depth;
    Bruce.depth=drop4.depth;
    Bruce.depth=drop5.depth;
    Bruce.depth=drop6.depth;
    Bruce.depth=drop7.depth;
    Bruce.depth=drop8.depth;
    Bruce.depth=drop9.depth;
    Bruce.depth=drop10.depth;
    Bruce.depth=drop11.depth;
    Bruce.depth=drop12.depth;
    Bruce.depth=drop13.depth;
    Bruce.depth=drop14.depth;
    Bruce.depth=drop15.depth;
    Bruce.depth=drop16.depth;
    Bruce.depth=drop17.depth;
    Bruce.depth=drop18.depth;
    Bruce.depth=drop19.depth;
    Bruce.depth=drop20.depth;
    Bruce.depth=drop21.depth;
    Bruce.depth=drop22.depth;
    Bruce.depth=drop23.depth;
    Bruce.depth=drop24.depth;
    Bruce.depth=drop25.depth;
    Bruce.depth=drop26.depth;
    Bruce.depth=drop27.depth;
    Bruce.depth=drop28.depth;
    Bruce.depth=drop29.depth;
    Bruce.depth=drop30.depth;
   ground=createSprite(350,685,700,20)
   
   invisiblewall=createSprite(698,350,2,700)
   invisiblewall.visible=false
   
   
   
   
   
   thunderbolt1=createSprite(100,0,1,1);
    thunderbolt1.addImage(img1);

    thunderbolt2=createSprite(200,0,1,1);
    thunderbolt2.addImage(img2);

    thunderbolt3=createSprite(300,0,1,1);
    thunderbolt3.addImage(img3);

    thunderbolt4=createSprite(400,0,1,1);
    thunderbolt4.addImage(img4);

 //Engine.run(engine);
}

function draw(){
  background(0) 
  //Bruce.display();

if(keyDown("space")){
  Bruce.velocityX=(random(1,4))
  drop1.velocityY=(random(1,4))
  drop2.velocityY=(random(1,4))
  drop3.velocityY=(random(1,4))
  drop4.velocityY=(random(1,4))
  drop5.velocityY=(random(1,4))
  drop6.velocityY=(random(1,4))
  drop7.velocityY=(random(1,4))
  drop8.velocityY=(random(1,4))
  drop9.velocityY=(random(1,4))
  drop10.velocityY=(random(1,4))
  drop11.velocityY=(random(1,4))
  drop12.velocityY=(random(1,4))
  drop13.velocityY=(random(1,4))
  drop14.velocityY=(random(1,4))
  drop15.velocityY=(random(1,4))
  drop16.velocityY=(random(1,4))
  drop17.velocityY=(random(1,4))
  drop18.velocityY=(random(1,4))
  drop19.velocityY=(random(1,4))
  drop20.velocityY=(random(1,4))
  drop21.velocityY=(random(1,4))
  drop22.velocityY=(random(1,4))
  drop23.velocityY=(random(1,4))
  drop24.velocityY=(random(1,4))
  drop25.velocityY=(random(1,4))
  drop26.velocityY=(random(1,4))
  drop27.velocityY=(random(1,4))
  drop28.velocityY=(random(1,4))
  drop29.velocityY=(random(1,4))
  drop30.velocityY=(random(1,4))

  drop1.visible=true
  drop2.visible=true
  drop3.visible=true
  drop4.visible=true
  drop5.visible=true
  drop6.visible=true
  drop7.visible=true
  drop8.visible=true
  drop9.visible=true
  drop10.visible=true
  drop11.visible=true
  drop12.visible=true
  drop13.visible=true
  drop14.visible=true
  drop14.visible=true
  drop15.visible=true
  drop16.visible=true
  drop17.visible=true
  drop18.visible=true
  drop19.visible=true
  drop20.visible=true
  drop21.visible=true
  drop22.visible=true
  drop23.visible=true
  drop24.visible=true
  drop25.visible=true
  drop26.visible=true
  drop27.visible=true
  drop28.visible=true
  drop29.visible=true
  drop30.visible=true
}

if(drop1.isTouching(ground)|| drop2.isTouching(ground)) {
  drop1.x=(random(0,700))
  drop1.y=(random(0,10))
  drop2.x=(random(0,700))
  drop2.y=(random(0,10))
}

if(drop3.isTouching(ground)|| drop4.isTouching(ground)) {
  drop3.x=(random(0,700))
  drop3.y=(random(0,10))
  drop4.x=(random(0,700))
  drop4.y=(random(0,10))
}

if(drop5.isTouching(ground)|| drop6.isTouching(ground)) {
  drop5.x=(random(0,700))
  drop5.y=(random(0,10))
  drop6.x=(random(0,700))
  drop6.y=(random(0,10))
}

if(drop7.isTouching(ground)|| drop8.isTouching(ground)) {
  drop7.x=(random(0,700))
  drop7.y=(random(0,10))
  drop8.x=(random(0,700))
  drop8.y=(random(0,10))
}

if(drop9.isTouching(ground)|| drop10.isTouching(ground)) {
  drop10.x=(random(0,700))
  drop10.y=(random(0,10))
  drop9.x=(random(0,700))
  drop9.y=(random(0,10))
}

if(drop11.isTouching(ground)|| drop12.isTouching(ground)) {
  drop11.x=(random(0,700))
  drop11.y=(random(0,10))
  drop12.x=(random(0,700))
  drop12.y=(random(0,10))
}

if(drop13.isTouching(ground)|| drop14.isTouching(ground)) {
  drop13.x=(random(0,700))
  drop13.y=(random(0,10))
  drop14.x=(random(0,700))
  drop14.y=(random(0,10))
}

if(drop15.isTouching(ground)|| drop16.isTouching(ground)) {
  drop15.x=(random(0,700))
  drop15.y=(random(0,10))
  drop16.x=(random(0,700))
  drop16.y=(random(0,10))
}

if(drop17.isTouching(ground)|| drop18.isTouching(ground)) {
  drop17.x=(random(0,700))
  drop17.y=(random(0,10))
  drop18.x=(random(0,700))
  drop18.y=(random(0,10))
}

if(drop19.isTouching(ground)|| drop20.isTouching(ground)) {
  drop19.x=(random(0,700))
  drop19.y=(random(0,10))
  drop20.x=(random(0,700))
  drop20.y=(random(0,10))
}

if(drop21.isTouching(ground)|| drop22.isTouching(ground)) {
  drop21.x=(random(0,700))
  drop21.y=(random(0,10))
  drop22.x=(random(0,700))
  drop22.y=(random(0,10))
}

if(drop23.isTouching(ground)|| drop24.isTouching(ground)) {
  drop23.x=(random(0,700))
  drop23.y=(random(0,10))
  drop24.x=(random(0,700))
  drop24.y=(random(0,10))
}

if(drop25.isTouching(ground)|| drop26.isTouching(ground)) {
  drop25.x=(random(0,700))
  drop25.y=(random(0,10))
  drop26.x=(random(0,700))
  drop26.y=(random(0,10))
}

if(drop27.isTouching(ground)|| drop28.isTouching(ground)) {
  drop27.x=(random(0,700))
  drop27.y=(random(0,10))
  drop28.x=(random(0,700))
  drop28.y=(random(0,10))
}

if(drop29.isTouching(ground)|| drop30.isTouching(ground)) {
  drop29.x=(random(0,700))
  drop29.y=(random(0,10))
  drop30.x=(random(0,700))
  drop30.y=(random(0,10))
}
  //drops=[]
  //var MaxDrops=100;
  
  //for(var i=0;i<MaxDrops;i++){
   //drops.push(drop=new Drop(random(0,400)),(random(0,400)));
 //}
  
if(Bruce.isTouching(invisiblewall)){
  Bruce.x=50
  Bruce.y=500
}


drawSprites()
}   



