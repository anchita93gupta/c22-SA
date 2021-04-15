const World=Matter.World;
const Engine=Matter.Engine;
const Bodies=Matter.Bodies;

var engine;

function setup(){
  var canvas=createCanvas(400,400);
  engine = Engine.create();
    world = engine.world;
    var object_options={
      isStatic: true
    }
    object = Bodies.rectangle(200,100,20,20,object_options);
    World.add(world,object);

  console.log(object);
}
function draw()
{
  background(0);
  Engine.update(engine);
  rect(object.position.x,object.position.y,50,50);

  
}

