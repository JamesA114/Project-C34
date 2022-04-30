const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var player, playerIMG
var backgroundIMG
var ground
var branch1, branch2, branch3, branch4
var object,buttonIMG

function preload(){
  backgroundIMG = loadImage("background.jpg")
  playerIMG = loadImage("Monkey.jpg")
  buttonIMG = loadImage("cut_btn.png")
}

function setup() {
  var isMobile=/iPhone |iPad|iPod|Android/i.test(navigator.userAgent)
  if(isMobile){
    canW = displayWidth;
    canH = displayHeight;
    createCanvas(displayWidth + 80,displayHeight);x
  }
  else{
    canW = windowWidth
    canH = windowHeight
    createCanvas(windowWidth,windowHeight)
  }

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(windowWidth/2,windowHeight-10, windowWidth, 20)
  branch1 = new Ground(windowWidth/10,windowHeight/4,windowWidth/5,10)

  player = Bodies.rectangle(100,100,50,50)
  World.add(world,player)
  //player.addImage(playerIMG)

  //object = createSprite(400,200,50,50)
  //object.addImage(buttonIMG)
  //object.scale = 0.05
  //object.mousePressed(console.log("check"))
  //button.mouseIsOver(console.log("df"))

  object = createImage("cut_btn.png")
  object.position(500,200)
  object.size(50,50)
  rectMode(CENTER);
}


function draw() 
{
  background(backgroundIMG);
  Engine.update(engine);
  
  



  rect(player.position.x,player.position.y,50,50)
  ground.show()
  branch1.show()
  drawSprites()
}

function buttonPressed(monkey, connectingButton) {
  var rope = new Rope(5, {x:connectingButton.x, y:connectingButton.y})
  Matter.Composite.add(rope.body,monkey)
  var player_con = new Link(rope,monkey);
  rope.show()
}