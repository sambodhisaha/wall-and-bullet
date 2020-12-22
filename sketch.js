var engine,bodies;
function setup() {
  createCanvas(400,400);
  rectMode(CENTER)
  engine=Matter.Engine.create()
  console.log(engine)
  bodies=Matter.Bodies.rectangle(100,100,20,20,{isStatic:true});
  console.log(bodies)
  Matter.World.add(engine.world,bodies)
}

function draw() {
  background(255,255,255);
  Matter.Engine.update(engine)
  rect(200,200,50,50)

  rect(bodies.position.x,bodies.position.y,20,20)

  
}