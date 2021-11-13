var iss, spacecraft, hasDocked;
var issImage, spacecraftImage1, spacecraft2,spacecraft3, spacecraft4, bg;

function preload() {
  issImage = loadImage("iss.png");
  spacecraft1 = loadImage("spacecraft1.png");
  spacecraft2 = loadImage("spacecraft2.png");
  spacecraft3 = loadImage("spacecraft3.png");
  spacecraft4 = loadImage("spacecraft4.png");
  bg = loadImage("spacebg.jpg");
}

function setup() {
 canvas = createCanvas(800,400);
  //background(bg);
  hasDocked = false;
  iss = createSprite(500,100,0,0);
  iss.addImage("iss",issImage);
  iss.scale = 0.5;
  spacecraft = createSprite(500,300,0,0);
  spacecraft.addImage("Spacecraft1",spacecraft1);
  spacecraft.scale = 0.2;
}

function draw() {
  background(bg);
  if(!hasDocked) {
    spacecraft.x += random(1,-1);
  
    if(keyDown("UP_ARROW")){
      spacecraft.y = spacecraft.y -2;
    }
      
    if(keyDown("LEFT_ARROW")){
      spacecraft.x = spacecraft.x - 1;
      spacecraft.addImage(spacecraft3)
    }
      
    if(keyDown("RIGHT_ARROW")){
      
      spacecraft.x = spacecraft.x + 1;
        spacecraft.addImage(spacecraft4);
    }
      
    if(keyDown("DOWN_ARROW")){
        spacecraft.addImage(spacecraft2);
    }
  }
  
  if(spacecraft.y <= (iss.y+55) && spacecraft.x <= (iss.x-6)){
    hasDocked = true;
    textSize(25);
    fill("white")
    text("Docking Successful!", 200, 300);
  }

  drawSprites();
}