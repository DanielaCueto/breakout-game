"use strict";
const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

const canvasW = canvas.width; 
const canvasH = canvas.height

// velocidad a la que la pelota se mueve. Ritmo de cambio de x e y
let vx = 40;
let vy = 40;

// dibuja la posición de la pelota 
let x = 300;
let y = 200;
const refreshRate = 1 / 60;

function updateBall() {
  x = x + vx * refreshRate;
  y = y + vy * refreshRate;
  if (y >= canvasH){
    //verifico si hay colisión con la pared inferior. 
    y = canvasH;
    vy *= -1;
  } else if(y <= 0){
    //verifico si hay colisión con la pared superior.
    y = 0;
    vy *= -1;
  }
  if (x >= canvasW) {
    //verifico si hay colisión con la pared del lado derecho 
    x = canvasW; 
    vx *= -1;
  } else if (x<= 0){
    //verifico si hay colisión con la pared del lado izquierdo.
    x = 0; 
    vx *= -1;
  }

}
function drawBackGround (){
    drawRectangle(context, 0, 0, canvasW, canvasH, "#E0BBE4");
}
function drawBall() {
  drawCircle(context, x, y, 10, "#fff");
}

function updateAndDrawScene() {

  updateBall();
  drawBackGround();
  drawBall();
}
setInterval(updateAndDrawScene, refreshRate);
