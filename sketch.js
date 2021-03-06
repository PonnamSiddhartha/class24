const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,ground,box2,box3;
var log1,log2,log3,log4;
var pig1,pig2
var box4,box5;
var bird


function setup() {
 var canvas= createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(600,380,1200,20);
  box1 = new Box(700,320,70,70);
  box2 = new Box(900,320,70,70);
  pig1 = new Pig(800,320);
  log1 = new Log(825,250,20,PI/2);
  
  box3 = new Box(700,230,50,50);
  box4 = new Box(900,230,50,50);
  pig2 = new Pig(800,230)
  log2 = new Log(825,180,20,PI/2);
  box5= new Box(800,150,50,50);
  log3 = new Log(750,120,150,PI/7);
  log4= new Log(870,120,150,-PI/7);
 bird = new Bird(100,100);
  
  
}

function draw() {
  background(25,255,255);  
  Engine.update(engine);
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  ground.display();
  log1.display();
  log2.display();
  pig1.display();
  pig2.display();
  log3.display();
  log4.display();
  bird.display();
}