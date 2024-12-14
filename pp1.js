function setup() {
  createCanvas(400, 400);
  bgColor = color(220);


  let button = createButton('Change Color');
  button.position(150, 230);
  button.mousePressed(changeBackground);
}

function draw() {
  background(bgColor);
  
  textSize(20)
fill(0)
  textAlign(20,30)
  text("password: ....",100,130)
   textSize(20)
fill(0)
  textAlign(20,30)
  text("Account: ....",95,170)
  textSize(30);
  fill(0);
  textAlign(CENTER, CENTER);
  text("Fashion resell.com", width / 2, height / 2 -130);
}


function changeBackground() {
  bgColor = color(random(255), random(255), random(255)); 
}
