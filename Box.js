class Box{
constructor(x,y,width,height){
    var options ={
        restitution: 1.0,
        isStatic : true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      World.add(world,this.body);
}
display(){
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x,pos.y);
    rotate(angle); 
    fill("yellow");
    rectMode(CENTER);
    rect(pos.x,pos.y,this.width,this.height);
    pop();   
}
}