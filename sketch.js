const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var box1,box3,box5;
var box2,box4;

var ground1;
var Pig1,Pig2;
var Log1,Log2,Log3,Log4;

var Bird1;
var ball;
var background1;

var myEngine,myWorld,ground;
var platform;

function preload(){
  background1=loadImage("sprites/bg.png");
}

function setup() {
  createCanvas(1200,400);
 myEngine=Engine.create();
myWorld=myEngine.world;

ground1=new Ground(600,390,1200,10)
box1=new Box(700,300,70,70);
box2=new Box(920,300,70,70);


Pig1=new Pig(810,350);
Log1=new Log(810,260,300, PI/2);

box3=new Box(700,240,70,70);
box4=new Box(920,240,70,70);


Pig2=new Pig(810,220);
Log2=new Log(810,180,300, PI/2);

box5=new Box(810,160,70,70);
Log3=new Log(760,120,150,PI/7);

Log4=new Log(870,120,150,-PI/7);

Bird1=new Bird(200,200);

platform=new Ground(150,305,300,170);
}
function draw() {
  background(background1);  
Engine.update(myEngine);

box1.display();
box2.display();
box3.display();
box4.display();
box5.display();

ground1.display();
 
  Pig1.display();
  Pig2.display();

Log1.display();
Log2.display();
Log3.display();
Log4.display();

Bird1.display();
platform.display();


}