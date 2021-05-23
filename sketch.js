// In super.display what if we don't have a BaseClass?

const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var block1, block2, block3, block4, block5, block6, block7, block8, block9;
var block10,block11,block12, block13, block14;
var player;
var ground1, ground2, ground3;

var block15, block16, block17, block18, block19, block20, block21;
var block22;
var sling;
var player;

var ball;
var img;

function preload(){
  img = loadImage("hexagon (1).png");

}

function setup() {
  createCanvas(1500,600);
  engine = Engine.create();
    world = engine.world;


  block1 = new Block(600,260,30,40);
  block2 = new Block(570,260,30,40);
  block3 = new Block(540,260,30,40);
  block4 = new Block(630,260,30,40);
  block5 = new Block(660,260,30,40);



  block6 = new Block(585,220,30,40);
  block7 = new Block(555,220,30,40);
  block8 = new Block(615,220,30,40);
  block9 = new Block(645,220,30,40);



  block10 = new Block(600,170,30,40);
  block11 = new Block(570,180,30,40);
  block12 = new Block(630,180,30,40);


  block13 = new Block(600,140,30,40);

  ground1 = new Ground(600,285,200,10);
  ground2 = new Ground(900,195,200,10);
  ground3 = new Ground(750, 600, 1500, 10)


  block14 = new Block(900,170,30,40);
  block15 = new Block(930,170,30,40);
  block16 = new Block(870,170,30,40);
  block17 = new Block(840,170,30,40);
  block18 = new Block(960,170,30,40);

  block19 = new Block(900,140,30,40);
  block20 = new Block(930,140,30,40);
  block21 = new Block(870,140,30,40);

  block22 = new Block(900,110,30,40);

  player = new Player(50,200,30,30);

  ball = Bodies.circle(50,200,20);
  World.add(world,ball);

  sling = new Chain(this.ball,{x:150, y:160});

}

function draw() {
  background("black");

  Engine.update(engine);
  
  //Location
  textSize(15);
  fill(87,255, 233);
  text(mouseX + ',' + mouseY, 10, 15);

  //Instruction of the game to throw Blocks
  textSize(20);
  fill("white");
  text("     *Drag The Polygon To Destroy The Blocks",489,58);
  
  //Instruction of a second chance
  strokeWeight(2);
  stroke("black");
  textSize(20);
  fill("white");
  text(" *Enter SPACE To Get A Second Chance",513,81);

 fill(52, 180, 235)
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
 fill(168, 56, 201)
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  fill(255, 233, 107)
  block10.display();
  block11.display();
  block12.display();
 
  fill(255, 233, 107)
  block13.display();
  fill(211, 255, 107)
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();

  fill(107, 255, 99)
  block19.display();
  block20.display();
  block21.display();

  fill(255, 233, 107)
  block22.display();
  fill("black")
  ground1.display();
  ground2.display();
  ground3.display();

  imageMode(CENTER);
  image(img,ball.position.x,ball.position.y,40,40);
  
  //Game Name
  stroke(87, 255, 233)
  strokeWeight(5)
  textSize(35);
  fill("black")
  text("BEAT THE BLOCKS",335,33)

  sling.display();
}


function mouseDragged(){
  Matter.Body.setPosition(ball, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  sling.fly();
}

function keyPressed(){
  if(keyCode === 32){
      sling.attach(ball);
  }
}
