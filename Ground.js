class Ground{
    constructor(x,y,width,height){
        var opt={
            isStatic:true
          }
          this.body=Bodies.rectangle(x,y,width,height,opt);
          this.width=width;
          this.height=height;
          World.add(myWorld,this.body);
          

    }
     display(){
        rectMode(CENTER);
        fill ("brown");
  rect(this.body.position.x,this.body.position.y,this.width,this.height);
     }
    
}