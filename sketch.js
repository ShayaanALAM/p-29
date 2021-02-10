const Engine= Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var r1,r2,r3,r4,r5,r6,r7,r8,r9,r10,
r11,r12,r13,r14,r15,r16;

var s1,s2,s3,s4,s5,s6,s7,s8,s9

var g1,g2,g3;

var hexImg;
var chain;
var ball;
var h1;


function preload(){
   hexImg = loadImage("polygon.png");
}


function setup(){
createCanvas(1000,500);

engine = Engine.create();
world = engine.world;


// 1st piramid




g1 = new Ground(390,300,220,15);


r1 = new Base(330,235,30,40);
r2 = new Base(360,235,30,40);
r3 = new Base(390,235,30,40);
r4 = new Base(420,235,30,40);
r5 = new Base(450,235,30,40);


r6 = new Base(360,195,30,40);
r7 = new Base(390,195,30,40);
r8 = new Base(420,195,30,40);


r9 = new Base(390,155,30,40);


r10 = new Base(300,275,30,40);
r11 = new Base(330,275,30,40);
r12 = new Base(360,275,30,40);
r13 = new Base(390,275,30,40);
r14 = new Base(420,275,30,40);
r15 = new Base(450,275,30,40);
r16 = new Base(480,275,30,40);


g2 = new Ground(700,227,160,12);
s1= new Base(700,120,30,40); 

s2= new Base(670,160,30,40);
s3= new Base(700,160,30,40);
s4= new Base(730,160,30,40);

s5= new Base(640,200,30,40);
s6= new Base(670,200,30,40);
s7= new Base(700,200,30,40);
s8= new Base(730,200,30,40);
s9= new Base(760,200,30,40);

g3 = new Ground(500,500,1000,40);

h1 = new Polygon(120,20,30,30);


ball = Bodies.circle(50, 200, 20);
  World.add(world, ball);

  chain = new SlingShot(this.ball,{x:160, y:200});

}


function draw(){
    rectMode(CENTER);
    background(48,8,8);

    drawSprites();

    Engine.update(engine);

  push();
  stroke("black");
  strokeWeight(5);
  textSize(22);
  text("Drag the hexagonal      stone and release it to launch it towards the tower blocks and destroy them", 30, 40);
  pop();


r1.display();
r2.display();
r3.display();
r4.display();
r5.display();


r6.display();
r7.display();
r8.display();



r9.display();

fill(rgb(135, 205, 236));
r10.display();
r11.display();
r12.display();
r13.display();
r14.display();
r15.display();
r16.display();

g1.display();
g2.display();
g3.display();


s1.display();
s2.display();
s3.display();
s4.display();
s5.display();
s6.display();
s7.display();
s8.display();
s9.display();

h1.display();
 


Engine.update(engine);


    
imageMode(CENTER);
  image(hexImg, ball.position.x, ball.position.y, 40, 40);

  chain.display();

}


function mouseDragged() {

  Matter.Body.setPosition(this.ball, {x: mouseX , y: mouseY});

}


function mouseReleased() {

  chain.fly();

}

