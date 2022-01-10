"use-strict";
function drawRectangle(context, x, y, w, h, color) {
  context.fillStyle = color;
  context.fillRect(x, y, w, h);
}

function drawCircle(context, x, y, r, color) {
  context.fillStyle = color;
  context.beginPath();
  context.arc(x, y, r, 0, 2 * Math.PI);
  context.fill();
}
