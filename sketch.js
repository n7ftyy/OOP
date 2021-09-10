var box1, box2

function setup() 
{
  createCanvas(400, 400);

  //creating object out of class
  box1 = new Box();
  box2 = new Box();

}

function draw() 
{
  background(220);
  box1.show();
  box1.setSpeed(10);

  box2.show();
  box2.setSpeed(5);
}

