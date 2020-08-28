const canvas = document.getElementById("myCanvas");
canvas.width = 700;
canvas.height = 400;
const ctx = canvas.getContext("2d");
canvas.style.backgroundColor = "black";

const radius = 10; //boll

let x = 50; // start x 
let y = 50 + Math.random() * 300; // start y mellan 50 och 350

let speedX = 4 + Math.random(); // mellan 4 och 5
let speedY = (2 + Math.random()) * (Math.round(Math.random()) * 2 - 1); // positivt eller negativt mellan 2 och 3
console.log("X: " + speedX + "Y: " + speedY)

let yPos = 160; // position pinne
let points = 0; // poäng

function game() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  //pinne
  ctx.beginPath();
  ctx.fillStyle = "red";
  ctx.fillRect(600, yPos, 12, 80);
  ctx.closePath();

  //boll
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, 2 * Math.PI, true);
  ctx.fillStyle = "red";
  ctx.fill();
  ctx.closePath();

  x += speedX;
  y += speedY;

  // vänster sida
  if (x <= radius) {
    speedX = -speedX;
    points++;
    console.log("Poäng: " + points)
  }

  // topp och botten
  if (y > canvas.height - radius || y < radius) {
    speedY = -speedY;
  }

  // höger sida - game over
  if (x > canvas.width + radius) {
    ctx.font = "bold 30pt arial";
    ctx.fillStyle = "red";
    ctx.fillText("Game Over – " + points + " poäng", 80, 200);
  }
  //pinne
  if (x >= 590 && x < 595 && y > yPos - 5 && y < yPos + 85) {
    speedX = -(speedX + Math.random() - 0.5); // hastighet ±0.5
    speedY = speedY + Math.random() - 0.5; // hastighet ±0.5
    console.log("X: " + speedX + "Y: " + speedY)
  }

  requestAnimationFrame(game);
}
game();

// input 
let arrow = window.addEventListener(
  "keydown",
  function () {
    let key = event.keyCode;
    if (key === 38) goUp();
    if (key === 40) goDown();
  },
  false
);

function goUp() {
  if (yPos > 0) yPos -= 20;
}
function goDown() {
  if (yPos < 320) yPos += 20;
}
