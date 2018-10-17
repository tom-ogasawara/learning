const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// variables
let x = canvas.width / 2;
let y = canvas.height - 30;
let dx = 2;
let dy = -2;

const ballRadius = 10;
const paddleHeight = 10;
const paddleWidth = 75;
let paddleX = (canvas.width - paddleWidth) / 2;

let rightPressed = false;
let leftPressed = false;

function drawBall() {
  ctx.beginPath();
  ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
  ctx.fillStyle = '#0095DD';
  ctx.fill();
  ctx.closePath();
}

function drawPaddle() {
  ctx.beginPath();
  ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
  ctx.fillStyle = '#0095DD';
  ctx.fill();
  ctx.closePath();
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBall();
  drawPaddle();
  if (y + dy > canvas.height - ballRadius || y + dy < 0 + ballRadius) {
    dy = -dy
  }

  if (x + dx > canvas.width - ballRadius || x + dx < 0 + ballRadius) {
    dx = -dx
  }

  x += dx;
  y += dy;
}

// initiate the animation
setInterval(draw, 10);