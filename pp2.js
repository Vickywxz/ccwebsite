function setup() {
  createCanvas(400, 400).parent(p5jscontainer2);
}

function draw() {
  background(100,140,173);

  let faceWidth = map(mouseX, 0, width, 100, 300);
  let faceHeight = map(mouseY, 0, height, 130, 300);
  let eyeSize = map(mouseX, 0, width, 20, 50);
  let eyeOffsetX = map(mouseY, 0, height, 40, 80);
  let mouthWidth = map(mouseX, 0, width, 20, 100);
  let mouthHeight = map(mouseY, 0, height, 10, 40);

  fill(230,230,250);
  noStroke();
  ellipse(width / 2, height / 2, faceWidth, faceHeight);

  fill(0);
  ellipse(width / 2 - eyeOffsetX, height / 2 - 50, eyeSize, eyeSize);
  ellipse(width / 2 + eyeOffsetX, height / 2 - 50, eyeSize, eyeSize);

 fill(0);
let startAngle = radians(20);
let stopAngle = radians(5); 
arc(width / 2, height / 2 + 60, mouthWidth, mouthHeight, startAngle, stopAngle);

}
