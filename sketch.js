
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var rectleft ,rectbottom , rectright;
var ground;
var paper;
function preload()
{
	
}

function setup() {
	createCanvas(700,800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper(200,0.2,0.2);
	rectleft = createSprite(250,625,30,90);
	rectleft.shapeColor = color(255,0,0);
	rectright = createSprite(500,625,30,90);
	rectright.shapeColor = color(225,0,0);
	rectbottom = createSprite(370,665,250,10);
	rectbottom.shapeColor = color(225,0,0);
	ground = createSprite(400,685,900,30);

	

     

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(225,225,225);
  paper.display();
  drawSprites();
 
}



