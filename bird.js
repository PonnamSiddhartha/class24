class Bird{
    
 constructor(x,y){
    var options = {
        'restitution':0.5,
        'friction':1,
        'density':1.5

    }
    this.body = Bodies.rectangle(x,y,50,50,options);
    this.w =  50;
    this.h = 50;
    World.add(world, this.body)

}
display(){
var pos = this.body.position;
pos.x=mouseX;
pos.y=mouseY;
var angle = this.body.angle;
push();
translate(pos.x,pos.y);
rotate(angle);
rectMode(CENTER);
strokeWeight(5)
stroke("white")
fill("blue");
rect(0,0,this.width,this.height)
pop(); 

}
}