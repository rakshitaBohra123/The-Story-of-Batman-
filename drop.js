class Drop{
constructor(x,y){
this.rain=(random(0,700));
  var options={
    restitution:1
    
}
this.width=0.7;
this.height=0.7;
this.body=Bodies.circle(x,y, 0.7, 0.7,options)
//this.image=loadAnimation(moving,"Walking Frame/walking_1.png","Walking Frame/walking_2.png","Walking Frame/walking_3.png","Walking Frame/walking_4.png","Walking Frame/walking_5.png","Walking Frame/walking_6.png","Walking Frame/walking_7.png","Walking Frame/walking_8.png")
World.add(world,this.body);
 
}
display(){
fill("dark blue");
ellipseMode(CENTER);
ellipse(this.position.x,this.position.y,0.7,0.7)


}
}