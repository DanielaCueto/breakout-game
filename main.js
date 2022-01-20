"use strict";
const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");
const canvasW = canvas.width;
const canvasH = canvas.height;
const refreshRate = 1 / 60;

blocks = createBlocks(numberOfBlock);
barX = canvasW / 2 - barW / 2;
barY = canvasH - barH;
ballX= barX + barW/2;
ballY = barY - ballRadius; 


function drawBackGround() {
  drawRectangle(context, 0, 0, canvasW, canvasH, "#E0BBE4");
}




function updateAndDrawScene() {
  updateBar();
  updateBall();
  drawBackGround();
  drawBlocks();
  drawBall();
  drawBar();
}
setInterval(updateAndDrawScene, refreshRate);

window.addEventListener("keydown", (event) => {
  let key = event.key;

  if (key === "ArrowRight") {
    playerPressingRight = true;
  } else if (key === "ArrowLeft") {
    playerPressingLeft = true;
  }
});
window.addEventListener("keyup", (event) => {
  let key = event.key;

  if (key === "ArrowRight") {
    playerPressingRight = false;
  } else if (key === "ArrowLeft") {
    playerPressingLeft = false;
  }
});
