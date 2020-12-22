var engine,bodies,ball;
var world
function setup(){
createCanvas(400,400)
rectMode(CENTER)
engine=Matter.Engine.create();
world=engine.world
bodies=Matter.Bodies.rectangle(200,370,400,5,{isStatic:true})
Matter.World.add(world,bodies)
ball=Matter.Bodies.circle(100,100,15,{restitution:1})
console.log(ball)
Matter.World.add(world,ball)

}

function draw(){
 background("white")

 Matter.Engine.update(engine)
 rect(bodies.position.x,bodies.position.y,400,5)
 ellipse(ball.position.x,ball.position.y,15,15)
}



