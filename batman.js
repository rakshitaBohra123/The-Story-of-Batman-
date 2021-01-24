class Batman{
    constructor(x,y){
    var options={
        isStatic:true
        
    }
    this.width=10;
    this.height=10;
    this.body=Bodies.circle(x,y, 10, 10,options)
    this.image=loadAnimation(moving,"Walking Frame/walking_1.png","Walking Frame/walking_2.png","Walking Frame/walking_3.png","Walking Frame/walking_4.png","Walking Frame/walking_5.png","Walking Frame/walking_6.png","Walking Frame/walking_7.png","Walking Frame/walking_8.png")
    World.add(world,this.body);
     
    }
    display(){
    //fill("dark blue");
    ellipseMode(CENTER);
    ellipse(this.position.x,this.position.y,10,10)
    }
}