var espaco, espacoImg;
var luke, lukeImg;
var imperio, imperioImg;

function preload(){
  lukeImg = loadImage("nave1.png");
  espacoImg = loadImage("space.jpg");

}
function setup() {
  createCanvas(windowWidth,windowHeight);
  espaco = createSprite(width/2,height/2, 50, 50);
  espaco.addImage(espacoImg);
  espaco.scale = 0.5;

  luke = createSprite(100, 350, 50, 50);
  luke.addImage(lukeImg);
  luke.scale = 0.5;
  
}

function draw() {
  background("black");
   
  if (keyDown("UP_ARROW")){
    luke.y = luke.y -10
  }
  if (keyDown("DOWN_ARROW")){
    luke.y = luke.y +10
  }
  



  drawSprites();
}