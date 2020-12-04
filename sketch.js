
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbin1, dustbin2, dustbin3;
var ground1;
var paper1;



function setup() {

	createCanvas(1360, 600);

	
	//create engine and add the world to the engine
	engine = Engine.create();
	world = engine.world;

	//creating new objects
	ground1 = new Ground (700,570,1400,10);
	dustbin1 = new Dustbin (1000,505,20,80);
	dustbin2 = new Dustbin (1090,555,200,20)
	dustbin3 = new Dustbin (1180,505,20,80);
	paper1 = new Paper (200,500,20)

	//update "Engine" with the "engine" and run it 
	Engine.run(engine);
  
}



function draw() {

	background(0);
	rectMode(CENTER);
	  
	//displaying new objects
  	ground1.display();
  	dustbin1.display();
  	dustbin3.display();
  	dustbin2.display();
  	paper1.display();

  	drawSprites();
 
}


//function 
function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:85,y:-85})

	}
}

