"use strict";
const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

const canvasW = canvas.width;
const canvasH = canvas.height;

// velocidad a la que la pelota se mueve. Ritmo de cambio de x e y
let ballVX = 40;
let ballVY = 40;

// dibuja la posición de la pelota
let ballX = 300;
let ballY = 200;
let ballRadius = 10;
const refreshRate = 1 / 60;

// movimiento de la barra
const barW = 150;
const barH = 20;
let barVX = 0;
let barVY = 0;
let barX = canvasW / 2 - barW / 2;
let barY = canvasH - barH;

// teclas
let playerPressingLeft = false; 
let playerPressingRight = false; 

function updateBall() {
  ballX = ballX + ballVX * refreshRate;
  ballY = ballY + ballVY * refreshRate;
  if (ballY >= canvasH) {
    //verifico si hay colisión con la pared inferior.
    ballY = canvasH;
    ballVY *= -1;
  } else if (ballY <= 0) {
    //verifico si hay colisión con la pared superior.
    ballY = 0;
    ballVY *= -1;
  }
  if (ballX >= canvasW) {
    //verifico si hay colisión con la pared del lado derecho
    ballX = canvasW;
    ballVX *= -1;
  } else if (ballX <= 0) {
    //verifico si hay colisión con la pared del lado izquierdo
    ballX = 0;
    ballVX *= -1;
  }
  const barRectangle =  {
    
    x: barX,
    y: barY,
    w: barW,
    h: barH,
  }; 
  const ballRectangle = 
  {
    x: ballX - ballRadius,
    y: ballY - ballRadius,
    w: 2 * ballRadius,
    h: 2 * ballRadius,
  }; 

  const ballVelocity = 
  {
    vx: ballVX,
    vy: ballVY,
  }
  let barCollision = detectRectangleCollision(
    barRectangle, ballRectangle, ballVelocity
  );
  if (barCollision !== null){
      ballX = barCollision.newPos.x + ballRadius; 
      ballY = barCollision.newPos.y + ballRadius;
      if (barCollision.reason.x === true){
        ballVX *= -1;
      } 
      if (barCollision.reason.y === true){
        ballVY *= -1; 
      }
      
  }
}
function updateBar() {
  if (playerPressingRight){
    barVX = 60; 
  }else if (playerPressingLeft){
    barVX = -60; 
  } else{
    barVX = 0 ; 
  }
  barX = barX + barVX * refreshRate;
  if (barX >= canvasW - barW) {
    barX = canvasW - barW;
    barVX *= -1;
  } else if (barX <= 0) {
    barX = 0;
    barVX *= -1;
  }
}
function drawBackGround() {
  drawRectangle(context, 0, 0, canvasW, canvasH, "#E0BBE4");
}
function drawBall() {
  drawCircle(context, ballX, ballY, ballRadius, "#fff");
}
function drawBar() {
  drawRectangle(context, barX, barY, barW, barH, "#000");
}

function updateAndDrawScene() {
  updateBall();
  updateBar();
  drawBackGround();
  drawBall();
  drawBar();
}
setInterval(updateAndDrawScene, refreshRate);

window.addEventListener('keydown', (event)=>{
  let key = event.key; 
 
  if(key === 'ArrowRight'){
    playerPressingRight = true; 
  } else if (key === 'ArrowLeft'){
    playerPressingLeft = true; 
  }
})
window.addEventListener('keyup', (event)=>{
  let key = event.key; 
  
  if(key === 'ArrowRight'){
    playerPressingRight= false; 
  } else if (key === 'ArrowLeft'){
    playerPressingLeft = false; 
  }
})