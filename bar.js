"use strict";


function updateBar() {
  if (playerPressingRight) {
    barVX = 60;
  } else if (playerPressingLeft) {
    barVX = -60;
  } else {
    barVX = 0;
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
function drawBar() {
  drawRectangle(context, barX, barY, barW, barH, "#000");
}
