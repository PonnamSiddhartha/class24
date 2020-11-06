class Log {
    constructor(x,y,height,angle){
        var options = {
            'restitution':0.8,
            'friction':1,
            'density':1.0

        }
        this.body = Bodies.rectangle(x,y,300,20,options);
        this.w =  300;
        this.h = 20;
        Matter.Body.setAngle(this.body,angle);
        World.add(world, this.body)

    }
display(){
 var pos = this.body.position;
 var angle = this.body.angle;
 push();
 translate(pos.x,pos.y);
 rotate(angle);
 rectMode(CENTER);
 strokeWeight(5)
 stroke("green")
 fill("red");
 rect(0,0,this.w,this.h)
 pop(); 


}
}