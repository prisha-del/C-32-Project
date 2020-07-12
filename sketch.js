const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var pig1,ground, backgroundImg;

var gameState = "onSling";

function preload(){
  var imageName = getBackgroundImg();  
  imageName.then(data => getImageName(data));   
}

function getImageName(data){
  console.log(data);
  backgroundImg = loadImage(data);
}

function setup(){
    var canvas = createCanvas(800,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(200,400,2000,50);
    ground1 = new Ground(150, 305, 300, 170);


  pig1 = new Pig(650, 150);
  pig2 = new Pig(650, 200);
  pig3 = new Pig(650, 250);
  pig4 = new Pig(650, 300);
  pig5 = new Pig(650, 350);

  bird = new Bird(200,50);

  slingshot = new Sling(bird.body,{x:200, y:50});

}

function draw() {
  background(255,255,255);  
  pig1.display();
  pig2.display();
  pig3.display();
  pig4.display();
  pig5.display();
  bird.display();
  slingshot.display();
  ground.display();
  ground1.display();
  //bg.display();
  //bg2.display();
  if(backgroundImg){
    //backgroundImg.background = true;
    image(backgroundImg, 0, 0, 100, 100);
  }
  drawSprites();
}

function mouseReleased(){
  slingshot.fly();
  gameState = "launched";
}

function keyPressed(){
  if(keyCode === 32){
     slingshot.attach(bird.body);
  }
}
async function getBackgroundImg(){
  var resp = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await resp.json();
  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13)
  var bg;
  if(hour>=6 && hour<=17){
      bg = "bg.png";      
  }
  else{
    bg = "bg2.jpg";    
  }
  return bg;
}
