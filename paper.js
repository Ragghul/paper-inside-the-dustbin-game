class Paper{
constructor(x,y,radius){

var options = {

friction : 0.5,
density :1.2,
isStatic : false,
restitution : 0.5,
};

this.body = Bodies.circle(x,y,radius,options);
World.add(world,this.body);

}
display(){
var position = this.body.position;
strokeWeight(4);
fill(200);
ellipseMode(RADIUS);
ellipse(position.x,position.y,this.radius);

}




}