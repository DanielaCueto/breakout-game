"use strict";
const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");



const vx = 30;
const vy = 30;

let x = 300;
let y = 200;
const refreshRate = 1 / 60;

function updateBall() {
  x = x + vx * refreshRate;
  y = y + vy * refreshRate;
}
function drawBackGround (){
    drawRectangle(context, 0, 0, 600, 400, "#E0BBE4");
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
