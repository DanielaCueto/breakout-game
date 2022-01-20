"use strict";



function updateBall() {
  ballX = ballX + ballVX * refreshRate;
  ballY = ballY + ballVY * refreshRate;
  if (ballY >= canvasH) {
    //verifico si hay colisión con la pared inferior.
    //vacio a propósito porque quiero que la pelota desaparezca.
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
  const barRectangle = {
    x: barX,
    y: barY,
    w: barW,
    h: barH,
  };
  const ballRectangle = {
    x: ballX - ballRadius,
    y: ballY - ballRadius,
    w: 2 * ballRadius,
    h: 2 * ballRadius,
  };

  const ballVelocity = {
    vx: ballVX,
    vy: ballVY,
  };
  let barCollision = detectRectangleCollision(
    barRectangle,
    ballRectangle,
    ballVelocity
  );
  if (barCollision !== null) {
    ballX = barCollision.newPos.x + ballRadius;
    ballY = barCollision.newPos.y + ballRadius;
    if (barCollision.reason.x === true) {
      ballVX *= -1;
    }
    if (barCollision.reason.y === true) {
      ballVY *= -1;
    }
  }
  let i = 0;
  for (let block of blocks) {
    let blockCollision = detectRectangleCollision(
      block,
      ballRectangle,
      ballVelocity
    );
    if (blockCollision !== null) {
      ballX = blockCollision.newPos.x + ballRadius;
      ballY = blockCollision.newPos.y + ballRadius;
      if (blockCollision.reason.x === true) {
        ballVX *= -1;
      }
      if (blockCollision.reason.y === true) {
        ballVY *= -1;
      }
      blocks.splice(i, 1);
      break;
    }
    i++;
  }
}

function drawBall() {
  drawCircle(context, ballX, ballY, ballRadius, "#fff");
}
