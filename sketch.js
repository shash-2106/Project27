
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	

	//Create the Bodies Here.
	
	bobObject1 = new Bob(370,500,40);
	bobObject2 = new Bob(390,500,40);
	bobObject3 = new Bob(410,500,40);
	bobObject4 = new Bob(430,500,40);
	bobObject5 = new Bob(450,500,40);

	roof1 = new roof(410,300,350,20);
	chain1 = new rope(bobObject1.body,roof1.body,-155,10);
	chain2 = new rope(bobObject2.body,roof1.body,-78,10);
	chain3 = new rope(bobObject3.body,roof1.body, 0,10);
	chain4 = new rope(bobObject4.body,roof1.body,78,10);
	chain5 = new rope(bobObject5.body,roof1.body,155,10);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  drawSprites();
  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  roof1.display();
  //console.log(bobObject1.x)
}

function keyPressed(){
	console.log("keyPressed event is called")
	
	
	if(keyCode === UP_ARROW){
	  Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x : -0.3,y : 0.5})
	}
  }


