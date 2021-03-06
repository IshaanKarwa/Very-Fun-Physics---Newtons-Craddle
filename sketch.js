
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	
	roof = new Roof(400, 100, 700, 50)
	bob1 = new Bob(400, 450, 50)
	bob2 = new Bob(300, 450, 50)
	bob3 = new Bob(200, 450, 50)
	bob4 = new Bob(500, 450, 50)
	bob5 = new Bob(600, 450, 50)
	rope1 = new Rope(bob1.body, roof.body, 0, 0)
	rope2 = new Rope(bob2.body, roof.body, -100, 0)
	rope3 = new Rope(bob3.body, roof.body, -200, 0)
	rope4 = new Rope(bob4.body, roof.body, 100, 0)
	rope5 = new Rope(bob5.body, roof.body, 200, 0)
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");

  rope3.display();
  bob3.display();
  rope2.display();
  bob2.display();
  rope1.display();
  bob1.display();
  rope4.display();
  bob4.display();
  rope5.display();
  bob5.display();
  roof.display();

  drawSprites();
 
}


function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(bob5.body, bob5.body.position, {x: -1, y: -1})
	}

}



