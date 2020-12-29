
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){
	boyIMG=loadImage("boy.png");
	mangoIMG=loadImage("mango.png");
	stoneIMG=loadImage("stone.png");
	treeIMG=loadImage("tree.png");
}

function setup() {
	createCanvas(800, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

    tree=createSprite(600,245,10,10);
	tree.addImage(treeIMG);
	tree.scale=0.35;

	boy=createSprite(200,400,10,10);
	boy.addImage(boyIMG);
	boy.depth=1;
	boy.scale=0.1;

	ground = new Ground(width/2,475,width,50);

	stone = new Stone(135,305,50);

	m1 = new Mango(500,200,60);
	m2 = new Mango(515,130,50);
	m3 = new Mango(450,150,40);
	m4 = new Mango(550,100,60);
	m5 = new Mango(550,175,70);
	m6 = new Mango(650,200,60);
	m7 = new Mango(750,200,70);
	m8 = new Mango(700,150,60);
	m9 = new Mango(630,70,60);
	m10 = new Mango(650,100,30);
	m11 = new Mango(620,150,50);

	c = new Constraint(stone.body,{x: 135, y: 305});
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(250);

  drawSprites();

  ground.display();

  stone.display();
  
  m1.display();
  m2.display();
  m3.display();
  m4.display();
  m5.display();
  m6.display();
  m7.display();
  m8.display();
  m9.display();
  m10.display();
  m11.display();

  detectColission(stone,m1);
  detectColission(stone,m2);
  detectColission(stone,m3);
  detectColission(stone,m4);
  detectColission(stone,m5);
  detectColission(stone,m6);
  detectColission(stone,m7);
  detectColission(stone,m8);
  detectColission(stone,m9);
  detectColission(stone,m10);

  c.display();
 
}



function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x: mouseX,y:mouseY});
}    


function mouseReleased(){
    c.fly();
}


function keyPressed(){
	if(keyCode===32){
	   Body.setPosition(stone.body,{x:135,y:305})
	   c.attach(stone.body)}

}


function detectColission(o1,o2){
       
    if(o1.body.position.x-o2.body.position.x<o1.r+o2.r && o2.body.position.x-o1.body.position.x<o1.r+o2.r && 
      o1.body.position.y-o2.body.position.y<o1.r+o2.r && o2.body.position.y-o1.body.position.y<o1.r+o2.r){
       Body.setStatic(o2.body,false)}
    }