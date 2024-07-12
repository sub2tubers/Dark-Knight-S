var dark_knight, dark_knight_right, dark_knight_left, dark_knight_up, dark_knight_down
var plano_de_fundo
var invisible_ground





function preload(){
 dark_knight_right=loadImage("dark-knight-right.png")
 dark_knight_left=loadImage("dark-knight-left.png")
 plano_de_fundo=loadImage("plano_de_fundo.jpg")
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  dark_knight= createSprite(200, 200, 50, 100)
  dark_knight.y=height-250
  dark_knight.x=width/2
  dark_knight.scale=0.5
  dark_knight.addImage("right", dark_knight_right)
  dark_knight.addImage("left", dark_knight_left)

  invisible_ground= createSprite(width/2, height-10, width, 250)
  invisible_ground.visible=false
}

function draw() {
  background(plano_de_fundo);
 

  if (keyDown("D")) {
    dark_knight.x = dark_knight.x+5
    dark_knight.changeImage("right")
  }
  if (keyDown("A")) {
    dark_knight.x = dark_knight.x-5
    dark_knight.changeImage("left")
  }
  /*if (keyDown("W")) {
    dark_knight.y = dark_knight.y-5
  }
  if (keyDown("S")) {
    dark_knight.y = dark_knight.y+5
  }*/
  if (keyDown("space")) {
    dark_knight.velocityY=-10
  }
  dark_knight.velocityY=dark_knight.velocitYy=+0.5
  dark_knight.collide(invisible_ground)
  drawSprites()

}
