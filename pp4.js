function setup() {
  createCanvas(400, 600);
  angleMode(DEGREES);
  noStroke();
}

function draw() {
  background(225,182,193);

  translate(width / 2, height / 2);

  fill(255, 204, 102); 
  ellipse(0, -100, 80 + sin(frameCount * 2) * 5); 

  fill(0);
  ellipse(-20, -110, 10, 10); 
  ellipse(20, -110, 10, 10);
  // Mouth (simple arc)
  fill(255, 100, 100);
  arc(0, -90, 40, 20, 0, 180); 

  push();
  fill(177,255,255);
  rotate(frameCount * 0.5);
  beginShape();
  for (let i = 0; i < 6; i++) {
    let angle = i * 60;
    let x = cos(angle) * (40 + sin(frameCount * 2) * 5);
    let y = sin(angle) * (40 + sin(frameCount * 2) * 5);
    vertex(x, y);
  }
  endShape(CLOSE);
  pop();

  for (let i = -1; i <= 1; i += 2) {
    push();
    translate(i * 55, -15); 
    rotate(i * -30); 
    fill(255, 200, 100, 150);
    for (let j = 0; j < 5; j++) {
      ellipse(0, j * 10, 20 - j * 2, 20 - j * 2);
    }
    pop();
  }

  for (let i = 0; i < 5; i++) {
    fill(100, 100 + i * 30, 200);
    rect(-20, 50 + i * 20, 40, 15, 5);
  }
  fill(200, 100, 50);
  ellipse(-30, 160, 20, 10);
  ellipse(30, 160, 20, 10);
}
