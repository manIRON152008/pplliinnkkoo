var part = [];



const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(468, 740);



	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	ground = new Ground(240 , 728, 600 , 20);
	wall = new Wall(3 , 568 , 5 , 300 );
  wall1 = new Wall(95 , 568 , 5 , 300 );
	wall2 = new Wall(187 , 568 , 5 , 300 );
	wall3 = new Wall(279 , 568 , 5 , 300 );
	wall4 = new Wall(371 , 568 , 5 , 300 );
	wall5 = new Wall(463 , 568 , 5 , 300 );
	plinko = new Plinko(50 , 50 , 10);
	plinko1 = new Plinko(100 , 50 , 10);
	plinko2 = new Plinko(150 , 50 , 10);
	plinko3 = new Plinko(200 , 50 , 10);	
	plinko4 = new Plinko(250 , 50 , 10);
	plinko5 = new Plinko(300 , 50 , 10);
	plinko6 = new Plinko(350 , 50 , 10);
	plinko7 = new Plinko(400 , 50 , 10);	
	plinko8 = new Plinko(10 , 100 , 10);
	plinko9 = new Plinko(60 , 100 , 10);
	plinko10 = new Plinko(120 , 100 , 10);	
	plinko11 = new Plinko(170 , 100 , 10);
	plinko12 = new Plinko(220 , 100 , 10);
	plinko13 = new Plinko(270 , 100 , 10);
	plinko14 = new Plinko(320 , 100 , 10);
  plinko15 = new Plinko(370 , 100 , 10);
  plinko16 = new Plinko(420 , 100 , 10);
	plinko17 = new Plinko(50 , 150 , 10);
	plinko18 = new Plinko(100 , 150 , 10);
	plinko19 = new Plinko(150 , 150 , 10);
	plinko20 = new Plinko(200 , 150 , 10);	
	plinko21 = new Plinko(250 , 150 , 10);
	plinko22 = new Plinko(300 , 150 , 10);
	plinko23 = new Plinko(350 , 150 , 10);
	plinko24 = new Plinko(400 , 150 , 10);
  plinko25 = new Plinko(10 , 200 , 10);	
  plinko26 = new Plinko(60 , 200 , 10);
  plinko27 = new Plinko(120 , 200 , 10);
  plinko28 = new Plinko(170 , 200 , 10);
  plinko29 = new Plinko(220 , 200 , 10);
  plinko30 = new Plinko(270 , 200 , 10);  
  plinko31 = new Plinko(320 , 200 , 10); 
  plinko32 = new Plinko(370 , 200 , 10); 
  plinko33 = new Plinko(420 , 200 , 10); 
  plinko34 = new Plinko(50 , 250 , 10);
	plinko35 = new Plinko(100 , 250 , 10);
	plinko36 = new Plinko(150 , 250 , 10);
	plinko37 = new Plinko(200 , 250 , 10);	
	plinko38 = new Plinko(250 , 250 , 10);
	plinko39 = new Plinko(300 , 250 , 10);
	plinko40 = new Plinko(350 , 250 , 10);
	plinko41 = new Plinko(400 , 250 , 10);
  part = new Part(5 , 234 , 5)



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");
  
  ground.display();
  wall.display();
  wall1.display();
  wall2.display();
  wall3.display();
  wall4.display();
  wall5.display();
  plinko.display();
  plinko1.display();
  plinko2.display();
  plinko3.display();
  plinko4.display();
  plinko5.display();
  plinko6.display();
  plinko7.display();
  plinko8.display();
  plinko9.display();
  plinko10.display();
  plinko11.display();
  plinko12.display();
  plinko13.display();
  plinko14.display();
  plinko15.display();
  plinko16.display();
  plinko17.display();
  plinko18.display();
  plinko19.display();
  plinko20.display();
  plinko21.display();
  plinko22.display();
  plinko23.display();
  plinko24.display();
  plinko25.display();
  plinko26.display();
  plinko27.display();
  plinko28.display();
  plinko29.display();
  plinko30.display();
  plinko31.display();
  plinko32.display();
  plinko33.display();
  plinko34.display();
  plinko35.display();
  plinko36.display();
  plinko37.display();
  plinko38.display();
  plinko39.display();
  plinko40.display();
  plinko41.display();
  part.display();

}


if(frameCount%60===0){
  part.push(new Part(random(width/2-10 , width/2+10) , 10 , 10));
}



