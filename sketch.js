const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var handle; 
var ground; 
var ball1, ball2, ball3, ball4, ball5, ball6;
var rope1, rope2, rope3, rope4, rope5, rope6;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	handle = new Handle(400,200);
	ground = new Ground(400,500,900,10);
	ball1 = new Ball(350, 350);
	ball2 = new Ball(380, 350);
	rope1 = new Rope(ball1.body, {x: 350, y: 200});
	rope2 = new Rope(ball2.body, {x: 380, y: 200});
	ball3 = new Ball(410,350); 
	rope3 = new Rope(ball3.body, {x: 410, y:200});
	ball4 = new Ball(440,350); 
	rope4 = new Rope(ball4.body, {x: 440, y:200});
	ball5 = new Ball(470, 350); 
	rope5 = new Rope(ball5.body, {x: 470, y: 200});
	ball6 = new Ball(320, 350);
	rope6 = new Rope(ball6.body, {x: 320, y: 200});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("cyan");
  


	handle.display();
	ground.display();
	ball1.display();
	ball2.display();
	ball3.display(); 
	ball4.display();
	ball5.display();
	ball6.display();

	rope1.display();
	rope2.display();
	rope3.display();
	rope4.display();
	rope5.display();
	rope6.display();
  drawSprites();
 
}


function keyPressed() {
	if (keyCode === UP_ARROW) {
	  Matter.Body.applyForce(ball6.body,ball6.body.position,{x:-50,y:-50});
	}
  }
  
