
var corona,coronaImg;
var man,manImg;
var manr,manrImg;
var manf,manfImg;
var mask,maskImg;
var score=0;
var heart,heartImg;
var heartCount=1;
var currentCount=0;
var mask1,mask2,mask3,mask4,mask5,mask6;
function preload(){
coronaImg=loadImage("Images/corona.png");
manImg=loadAnimation("Images/1.png","Images/2.png","Images/3.png","Images/4.png","Images/5.png");
manrImg=loadAnimation("Images/b1.png","Images/b2.png","Images/b3.png","Images/b4.png","Images/b5.png");
manfImg=loadImage("Images/front.png");
maskImg=loadImage("Images/Mask.png");
heartImg=loadImage("Images/heart.png");
  }





function setup() {
  createCanvas(1365,600);  
 
//Outer Boundaries
    block1 = createSprite(700,5,1400,10);
    block1.shapeColor="white";
    block2 = createSprite(1360,120,10,950);
    block2.shapeColor="yellow";
    block3 = createSprite(700,595,1400,10);
    block3.shapeColor="green";
    block4 = createSprite(5,162,10,950);
    block4.shapeColor="red";

//Inner Blocks
    block5 = createSprite(100,70,20,120);
    block5.shapeColor="lightgreen";
   
    block6 = createSprite(400,70,20,120);
    block6.shapeColor="pink";
    block7 = createSprite(760,70,20,120);
    block7.shapeColor="grey";
    block8 = createSprite(950,70,20,120);
    block8.shapeColor="orange";
    block9 = createSprite(1090,50,10,70);
    block9.shapeColor="magenta";
    block10 = createSprite(500,530,20,120);
    block10.shapeColor="brown";
    block11 = createSprite(800,530,20,120);
    block11.shapeColor="blue";
    block12 = createSprite(950,530,20,120);
    block12.shapeColor="lightblue";
    block13 = createSprite(1200,530,20,120);
    block13.shapeColor="darkblue";
    block14 = createSprite(5,200,140,20);
    block14.shapeColor="lightred";
    block15 = createSprite(400,130,140,20);
    block15.shapeColor="firebric";
    block16 = createSprite(690,80,140,20);
    block16.shapeColor="darkred";
    block17 = createSprite(950,130,140,20);
    block17.shapeColor="darkgreen";
    block18 = createSprite(1220,80,255,10);
    block18.shapeColor="green";
    block19 = createSprite(560,470,130,20);
    block19.shapeColor="red";
    block20 = createSprite(1140,540,130,20);
    block20.shapeColor="white";
    block21 = createSprite(230,200,20,140);
    block21.shapeColor="yellow";
    block22 = createSprite(170,270,130,20);
    block22.shapeColor="olive";
    block23 = createSprite(100,325,20,120);
    block23.shapeColor="maroon";
    block24 = createSprite(300,360,20,120);
    block24.shapeColor="teal";
    block25 = createSprite(240,420,130,20);
    block25.shapeColor="purple";
    block26 = createSprite(390,300,30,100);
    block26.shapeColor="fuchsia";
    block27 = createSprite(650,550,80,20);
    block27.shapeColor="salmon";
    block28 = createSprite(880,550,60,20);
    block28.shapeColor="cyan";
    block29 = createSprite(1030,350,20,130);
    block29.shapeColor="lightcoral";
    block30 = createSprite(900,360,80,20);
    block30.shapeColor="crimson";
    block31 = createSprite(650,300,90,20);
    block31.shapeColor="gold";
    block32 = createSprite(650,300,20,90);
    block32.shapeColor="darkorange";
     block33=createSprite(1300,180,140,20)
     block33.shapeColor="papayawhip";
      block34=createSprite(370,540,20,180)
     block34.shapeColor="palegoldenrod";
     block35=createSprite(150,520,180,20)
     block35.shapeColor="forestgreen";
 
 block36=createSprite(1280,360,20,150)
     block36.shapeColor="mediumspringgreen";

   block37=createSprite(1120,250,120,20)
     block37.shapeColor="dodgerblue";
      block38=createSprite(1170,360,90,20)
     block38.shapeColor="mintcream";
    
     block39=createSprite(900,300,20,120)
     block39.shapeColor="grey";
     
     block40=createSprite(550,200,120,20)
     block40.shapeColor="chocolate";
     block41=createSprite(780,280,20,130)
     block41.shapeColor="honey";
     block42=createSprite(500,320,20,130)
     block42.shapeColor="skyblue";
    
     
     man=createSprite(50,540,10,10);
     man.addAnimation("man",manImg);
     man.scale=0.3;

     corona1=createSprite(450,40,10,10);
     corona1.addImage("corona",coronaImg);
     corona1.scale=0.1;
    
     corona2=createSprite(550,40,10,10);
     corona2.addImage("corona",coronaImg);
     corona2.scale=0.2;
/*
     corona3=createSprite(650,40,10,10);
     corona3.addImage("corona",coronaImg);
     corona3.scale=0.2;*/

     heart1=createSprite(1130,40,10,10);
     heart1.shapeColor="red";
     heart1.addImage("heart",heartImg);
     heart1.scale=0.1;

     heart2=createSprite(1180,40,10,10);
     heart2.shapeColor="red";
     heart2.addImage("heart",heartImg);
     heart2.scale=0.1;

     heart3=createSprite(1230,40,10,10);
     heart3.shapeColor="red";
     heart3.addImage("heart",heartImg);
     heart3.scale=0.1;

     heart4=createSprite(1280,40,10,10);
     heart4.shapeColor="red";
     heart4.addImage("heart",heartImg);
     heart4.scale=0.1;

     heart5=createSprite(1330,40,10,10);
     heart5.shapeColor="red";
     heart5.addImage("heart",heartImg);
     heart5.scale=0.1;
     
     
     

  }
  
function draw(){
 
  background("black"); 
  text("Score: "+ score, 30,50);
  text("X:"+mouseX+"Y:"+mouseY,50,400)
  corona1.velocityY=2;
  corona2.velocityY=2;
  if(corona1.isTouching(block15))
  {
    corona1.velocityY=0;
    corona1.velocityX=2;
  }
  if(corona1.isTouching(block40))
  {
    corona1.velocityX=2;
    corona1.velocityY=0;
  }
  if(corona1.isTouching(block41))
  {
    corona1.velocityX=0;
    corona1.velocityY=3;
  }
  if(corona1.isTouching(block3))
  {
    corona1.velocityX=-3;
    corona1.velocityY=0;
  }
  if(corona1.isTouching(block10))
  {
    corona1.velocityX=0;
    corona1.velocityY=-3;
  }
  if(corona1.isTouching(block19))
  {
    corona1.velocityX=3;
    corona1.velocityY=0;
  }
  
  if(frameCount%300===0)
  {
    
    currentCount=frameCount;
     mask1=createSprite(random(130,400),random(15,100),10,10);
     mask1.addImage("mask",maskImg);
     mask1.scale=0.2; 
     
     mask2=createSprite(random(480,730),random(100,160),10,10);
     mask2.addImage("mask",maskImg);
     mask2.scale=0.2;  

     mask3=createSprite(random(530,970),random(380,450),10,10);
     mask3.addImage("mask",maskImg);
     mask3.scale=0.2;  

     mask4=createSprite(random(980,1150),random(430,510),10,10);
     mask4.addImage("mask",maskImg);
     mask4.scale=0.2;  

     mask5=createSprite(random(1230,1320),random(450,560),10,10);
     mask5.addImage("mask",maskImg);
     mask5.scale=0.2;  

     mask6=createSprite(random(1040,1300),random(100,150),10,10);
     mask6.addImage("mask",maskImg);
     mask6.scale=0.2;  




     
  }
  if(frameCount===currentCount+200 && mask1 && mask2 && mask3 && mask4)
  {
    mask1.destroy();
    mask2.destroy();
    mask3.destroy();
    mask4.destroy();
    mask5.destroy();
    mask6.destroy();
  }

  if(keyDown(UP_ARROW)) {
    man.velocityX = 0;
    man.velocityY = -3;
    man.addImage("man",manfImg);
  }
  if (keyDown(DOWN_ARROW)) 
  {
   man.velocityX=0;
   man.velocityY=3;
   man.addImage("man",manfImg);
  }
  if (keyDown(RIGHT_ARROW)) 
  {
 man.velocityX=3;
  man.velocityY=0;
  man.addAnimation("man",manImg);        
  }
  if (keyDown(LEFT_ARROW))
  {
man.velocityX=-3;
man.velocityY=0;
man.addAnimation("man",manrImg);
                
  }

  man.collide(block1);
man.collide(block2);
man.collide(block3);
man.collide(block4);
man.collide(block5);
man.collide(block6);
man.collide(block7);
man.collide(block8);
man.collide(block9);
man.collide(block10);
man.collide(block11);
man.collide(block12);
man.collide(block13);
man.collide(block14);
man.collide(block15);
man.collide(block16);
man.collide(block17);
man.collide(block18);
man.collide(block19);
man.collide(block20);
man.collide(block21);
man.collide(block22);
man.collide(block23);
man.collide(block24);
man.collide(block25);
man.collide(block26);
man.collide(block27);
man.collide(block28);
man.collide(block29);
man.collide(block30);
man.collide(block31);
man.collide(block32);
man.collide(block33);
man.collide(block34);
man.collide(block35);
man.collide(block36);
man.collide(block37);
man.collide(block38);
man.collide(block39);
man.collide(block40);
man.collide(block41);
man.collide(block42);

if(man.isTouching(corona1)){
var h="heart"+heartCount;
  h.visible=false;
  heartCount=heartCount+1;

}


  drawSprites();
}   

