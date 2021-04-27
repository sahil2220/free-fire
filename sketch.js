var PLAY = 1;
var END = 0;
var gameState = PLAY;
var cr7score = 200;
var maroscore = 200;


function preload(){
  mainimg=loadImage("firstimg.jpeg");
  cr7img=loadImage("cr7-removebg-preview.png");
  cr7img2=loadImage("cr7_ronaldo-removebg-preview.png");
  maroimg=loadImage("maro-removebg-preview.png");
  maro2img=loadImage("maroimg-removebg-preview.png");
  music=loadSound("1-theme.mp3");
  ringimg=loadImage("ring.jpg")
  starimg=loadImage("stars-removebg-preview.png");
  cr7sheild=loadImage("cr7_s-removebg-preview.png");
  punch=loadSound("PUNCH.mp3");
  footstep=loadSound("footsteps-1.mp3");
  petimg=loadImage("beastone-removebg-preview.png");
  cb=loadImage("cb-removebg-preview.png");
  bgimg=loadImage("bg-removebg-preview.png");
  mmaro=loadImage("mmaro-removebg-preview.png");
}

function setup() {
  createCanvas(710,410)
   
 
  
  
  ring=createSprite(350,220)
  ring.addImage(ringimg)
  ring.scale=1.4
  
   bg=createSprite(340,180)
  bg.addImage(bgimg);
  bg.scale=1.4;
  bg.visible=false;
  
  invisible1=createSprite(150,230,30,200);
  invisible1.visible=false;
  invisible2=createSprite(550,230,50,200);
  invisible2.visible=false;
  invisible3=createSprite(130,230,50,200);
  invisible3.visible=false;
  invisible4=createSprite(530,230,50,200);
  invisible4.visible=false;
  
  
  maro=createSprite(127,230)
  maro.addImage(maroimg);
  maro.scale=0.7;
  
  cr7=createSprite(530,230)
  cr7.addImage(cr7img)
  cr7.scale=0.7;
  
  mains=createSprite(430,180,10,200)
  mains.visible=false;
   
  pet=createSprite(405,330,10,200)
  pet.addImage(petimg);
  pet.visible=false;
  
  star1=createSprite(550,200)
  star1.addImage(starimg)
  star1.visible=false;
  
  
  star2=createSprite(150,200)
  star2.addImage(starimg)
  star2.visible=false;
  
  main=createSprite(350,220)
  main.addImage(mainimg);
  main.scale=1.4;
  music.play();
  
  cr7score = 200;
  maroscore = 225;
}

function draw() {
 background(255);
  
   if (gameState===PLAY){
     
     if(invisible1.isTouching(invisible2)){
     maro.addImage(maroimg);
    maro.velocityX=0;
    invisible1.velocityX=0;
    maro.x=127
    invisible1.x=150
    star1.visible=true;
    star2.visible=false;
    punch.play();
    cr7score=cr7score-Math.round(random(15,40));
       footstep.stop();
  }
     
     if (keyDown("right")){
   cr7.velocityX=-3;
   invisible4.velocityX=-3
   cr7.scale=0.4;
   cr7.addImage(cr7img2)
   star1.visible=false;
    footstep.play();
 }
  if (keyDown("left")){
    maro.y=220
   maro.velocityX=3;
   invisible1.velocityX=3;
   maro.addImage(maro2img);
    star2.visible=false;
    footstep.play();
 }
  
  if(mousePressedOver(main)) {
      main.destroy();
      music.stop();
    
    }
     
     
  if(invisible4.isTouching(invisible3)){
    cr7.scale=0.7;
    cr7.addImage(cr7img)
    cr7.velocityX=0;
    invisible4.velocityX=0;
    cr7.x=530
    invisible4.x=550
    star2.visible=true;
    star1.visible=false;
   punch.play();
    maroscore=maroscore-Math.round(random(15,40));
    footstep.stop();
  }
  
   }
  
 
  
  if (gameState === END) {
     pet.visible=true;
     star1.destroy();
     star2.destroy();
     ring.destroy();
     bg.visible=true
     
     }
  
 if( cr7score===0 || cr7score <0){
  textSize(20);
  fill("red");  
  text("CR7 NOOB ", 305,50);
  maro.x=270;
  maro.y=270;
  maro.addImage(mmaro);
  maro.scale=1.1
  cr7.destroy();
  gameState = END;
  }
    if( maroscore===0 || maroscore <0){
  maro.destroy();
  textSize(20);
  fill("red");  
  text("MARO NOOB ", 305,50);
  cr7.x=270;
  cr7.y=290;
  cr7.addImage(cb);
  cr7.scale=1.6
     
  gameState = END;
      
  }
 
  
   drawSprites();
  
    
  
  
  textSize(20);
  fill("white");  
  text("CR7 HP:: "+ cr7score, 450,50);
  
  textSize(20);
  fill("white"); 
  text("MARO HP:: "+ maroscore,60,50);
  
  
  
 
  
}