function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  noStroke();
}

function draw() {
  background(10);

  let hr = hour();
  let mn = minute();
  let sc = second();

  translate(width / 2, height / 2);

  // 秒：外围的动态小点
  for (let i = 0; i < sc; i++) {
    let angle = map(i, 0, 60, 0, 360);
    let x = cos(angle) * 160;
    let y = sin(angle) * 160;
    fill(255, 69, 0, 200); // 橙红色小点，半透明
    ellipse(x, y, 8, 8);
  }

  // 分：中间的环，改成浅海洋绿
  noFill();
  stroke(32, 178, 170, 200); // 浅海洋绿，半透明
  strokeWeight(5);
  let minRadius = map(mn, 0, 60, 50, 150);
  ellipse(0, 0, minRadius * 2);

  // 中间的动态图案：旋转的星形
  push();
  rotate(frameCount); // 图案随时间旋转
  fill(255, 200, 50, 150); // 半透明黄色
  drawStar(0, 0, 20, 40, 5); // 绘制星形
  pop();
} 

// 绘制星形函数
function drawStar(x, y, radius1, radius2, npoints) {
  let angle = 360 / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < 360; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
