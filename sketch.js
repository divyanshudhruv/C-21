var car,carImg, wall;
var speed, weight;


function preload() {
  carImg=loadImage("car.png")
}

function setup() {
  createCanvas(1000, 400);

  speed = Math.round(random(55, 90));
  weight = Math.round(random(400, 1500));

  car = createSprite(-100, 200, 50, 5);
  car.velocityX = speed;
  car.addImage(carImg)
  car.scale=0.3
  

  wall = createSprite(985, 200, 30, height / 1);
  wall.shapeColor = (80, 80, 80)
 // wall.debug=true
}

function draw() {
  background(255, 255, 255);
 // car.debug = true
 // car.setCollider("rectangle", 0, 0, car.width-1000, car.height);

  if (wall.x - car.x < (car.width/8 + wall.width) / 2) {

    car.velocityX = 0;
    var deformation = 0.5 * weight * speed * speed / 22509;
    if (deformation > 180) {

      wall.shapeColor = color(255, 0, 0);
      textSize(30)
      stroke("red")
      fill("red")
      text("The deformation is: "+Math.round(deformation),20,50)
    }

    if (deformation < 180 && deformation > 100) {

      wall.shapeColor = color(255, 255, 0);
      textSize(30)
      stroke("yellow")
      fill("yellow")
      text("The deformation is: " + Math.round(deformation), 20, 50)

    }

    if (deformation < 100) {

      wall.shapeColor = color(0, 255, 0)
      textSize(30)
      stroke("lime")
      fill("lime")
      text("The deformation is: " + Math.round(deformation), 20, 50)
    }
  }




  drawSprites();
}