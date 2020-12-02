class Brick {
    constructor(x,y,width,height,colour) {
      var options = {
          isStatic:false,
          friction:10,
          density:2.5,
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
      this.colour=colour;
      this.visibility=255;
      this.image=loadImage("image.png");
    }
    display(){
      var pos =this.body.position;
      var colour =this.colour;
      var width =this.width;
      var height = this.height;
      if(this.body.speed<7.5){
        rectMode(CENTER);
        fill(colour);
        rect(pos.x,pos.y,width,height);
      }
      else{
        World.remove(world,this.body);
        push();
        this.visibility=this.visibility-2.5;
        tint(255,this.visibility);
        image(this.image,this.body.position.x,this.body.position.y,30,30);
        pop();
      }
    }
    score(){
      if(this.visibility<=0 && this.visibility>=-500){
        score=score+0.025;
      }
    }
  }
