const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var handle; 
var ground; 
var ball1, ball2, ball3, ball4;
var rope1, rope2, rope3, rope4;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	handle = new Handle(400,200);
	ground = new Ground(400,500,900,10);
	ball1 = new Ball(350, 350);
	rope1 = new Rope(ball1.body, {x: 350, y: 200});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
	handle.display();
	ground.display();
	ball1.display();
	rope1.display();
  drawSprites();
 
}



