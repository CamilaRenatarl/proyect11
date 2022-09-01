var barco,shipImg1
 var mar,seaImg
function preload(){
  seaImg=loadImage("sea.png")
 shipImg1=loadAnimation("ship-2.png","ship-1.png","ship-3.png","ship-4.png")
}



function setup(){
  createCanvas(1050,700);
 mar=createSprite(100,400,600,400)
 mar.addAnimation("sea",seaImg)
 mar.scale=0.5
 barco=createSprite(200,400,50,50)
 barco.addAnimation("ship",shipImg1)
 barco.scale=0.3 
}

function draw() {
  background("blue");
 mar.velocityX=2
 mar.velocityX0=-2
 
 






 drawSprites();
}