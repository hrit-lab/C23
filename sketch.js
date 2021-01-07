const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine,world;
var b1,ball;  
var b2;
var ground;
function setup() {
  var canvas = createCanvas(500,500);
  engine = Engine.create();
  world = engine.world;
  
 b1 = new Box(200,100,20,20);
  b2 = new Box(200,300,100,20);
  ground = new Ground(200,200,450,100);
  ball = Bodies.circle(200,200,20);
  World.add(world,ball);
}

function draw() {
  background(0);
 
  Engine.update(engine);
  b1.display();
  b2.display();
  ground.display();
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20);
}