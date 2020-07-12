class Bird extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("bird.png");
    this.visibility = 255;
  }
  display (){
    if(this.body.speed<3){
    super.display();
    }
   else{
     
     World.remove(world,this.body);
     push();
     this.visibility = this.visibility - 5;
     tint(255,this.visibility);
     image(this.image,0,0,50,50)
     pop();
   }
  }


};