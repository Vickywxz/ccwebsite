let playerX, playerY;
let obstacles = [];
let score = 0;
let gameOver = false;

function setup() {
  createCanvas(400, 600);
  playerX = width / 2;
  playerY = height - 50;
}

function draw() {
  background(30);

  if (!gameOver) {
    fill(0, 255, 0);
    ellipse(playerX, playerY, 40, 40);

    playerX = constrain(mouseX, 20, width - 20);

    for (let i = obstacles.length - 1; i >= 0; i--) {
      let ob = obstacles[i];
      fill(255, 0, 0);
      rect(ob.x, ob.y, ob.size, ob.size);

      ob.y += ob.speed;

      if (dist(playerX, playerY, ob.x + ob.size / 2, ob.y + ob.size / 2) < 20 + ob.size / 2) {
        gameOver = true;
      }

      if (ob.y > height) {
        obstacles.splice(i, 1);
        score++;
      }
    }

    if (frameCount % 20 === 0) { 
      let numNewObstacles = floor(random(1, 4));
      for (let i = 0; i < numNewObstacles; i++) {
        obstacles.push({
          x: random(20, width - 20),
          y: 0,
          size: random(20, 40),
          speed: random(5, 10),
        });
      }
    }

    fill(255);
    textSize(20);
    textAlign(LEFT, TOP);
    text(`Score: ${score}`, 10, 10);
  } else {
    fill(255, 0, 0);
    textSize(32);
    textAlign(CENTER, CENTER);
    text("Game Over", width / 2, height / 2);
    textSize(20);
    text("Press R to Restart", width / 2, height / 2 + 40);
  }
}

function keyPressed() {
  if (key === 'R' || key === 'r') {
    obstacles = [];
    score = 0;
    gameOver = false;
  }
}
