"use strict";
const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");
const canvasW = canvas.width;
const canvasH = canvas.height;
const refreshRate = 1 / 60;

blocks = createBlocks(numberOfBlock);
bar = new Bar(new Position(canvasW / 2 - barW / 2, canvasH - barH), barW, barH, '#000' )
const ballRadius = 10; 
ball = new Ball(new Position(bar.position.x + barW/2, bar.position.y - ballRadius), ballRadius, '#fff')


function drawBackGround() {
  drawRectangle(context, 0, 0, canvasW, canvasH, "#E0BBE4");
}




function updateAndDrawScene() {
  bar.update();
  ball.update();
  drawBackGround();
  drawBlocks();
  ball.draw();
  bar.draw();
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
