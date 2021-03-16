const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1000,600);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(500,height,1000,20)
    box1 = new Box(750,520,50,50);
    box2 = new Box(900,520,50,50);
pig1 = new pig(780,520,50,50)
log2 = new log(800,200,300,PI/2);
log1 = new log(800,500,300,PI/2);
pig2 = new pig(800,444,50,50);
box3 = new Box(750,420,50,50);
box4 = new Box(840,420,50,50);
box5 = new Box(800,120,50,50);
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    log2.display();
    box2.display();
    box4.display();
    pig1.display();
    pig2.display();
    box3.display();
    log1.display();
    ground.display();
    box5.display();
}