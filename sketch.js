var wall, thickness;
var bullet, speed, weight;
var button, refresh;

function setup() {
  createCanvas(1600,400);

  thickness = random(22, 83)

  bullet = createSprite(50, 200, 20, 10);
  bullet.shapeColor = color(255)
  wall = createSprite(1200, 200, thickness, height / 2);
  wall.shapeColor = color(80, 80, 80)

  speed = random(223, 321);
  weight = random(30, 52);

  button = createButton("Go!");
  button.position(695, 440)
  button.mousePressed(go);

  refresh = createButton("↺");
  refresh.position(740, 440)
  refresh.mousePressed(again)
}

function go(){
    bullet.velocityX = speed;
}

function again(){
    bullet.x = 50
    speed = random(223, 321);
    weight = random(30, 52);
    thickness = random(22, 83)
    wall.width = thickness
    bullet.shapeColor = color(255)
    wall.shapeColor = color(80, 80, 80)
}

function draw() {
  background(200);
  
  if(collided(bullet, wall)){

  	  bullet.velocityX = 0
      var damage = (0.5 * weight * speed * speed) / (thickness * thickness * thickness);

      if (damage < 10){
       wall.shapeColor = color(0, 255, 0)
	  }

      if (damage > 10){
       wall.shapeColor = color(255, 0, 0)
      }

      console.log(damage)
  }

  
  drawSprites();
}


function collided(a, b){

  var aEdge = a.x + a.width
  var bEdge = b.x
  
  if(aEdge >= bEdge){

    return true;

  }else {

    return false;
  }

}