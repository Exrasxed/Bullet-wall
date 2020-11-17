var bullet,wall,weight,speed
var thickness
function setup() {
  createCanvas(1000,400);
 wall = createSprite (900,200,thickness,200)
  bullet = createSprite(50, 200, 50, 20);
  
  speed = random(223,321)
  bullet.velocityX =speed ;
  weight = random(30,52)
  
  thickness=random(22,83)
  wall.shapeColor = "white"

}

function draw() {
  background(0);  
  if(hasCollided(bullet, wall))
  {
  	bullet.velocityX=0;
  	var damage=0.5 * weight * speed* speed/(thickness *thickness *thickness);
  	if(damage>10)
  	{
  		wall.shapeColor=color(255,0,0);
		
  	}
	  if(damage<10)
	  {
	  	wall.shapeColor=color(0,255,0);
  	}
	
  }
 drawSprites();
}

function hasCollided(lbullet, lwall)
{
	bedge=lbullet.x +lbullet.width;
	wallLeftEdge=lwall.x;
	if (bedge>=wallLeftEdge)
	{
		return true
	}
	return false;
}