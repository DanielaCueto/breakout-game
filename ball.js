"use strict";



function updateBall() {
  this.position.x = this.position.x + this.velocity.vx * refreshRate;
  this.position.y = this.position.y + this.velocity.vy * refreshRate;
  if (this.position.y >= canvasH) {
    //verifico si hay colisión con la pared inferior.
    //vacio a propósito porque quiero que la pelota desaparezca.
  } else if (this.position.y <= 0) {
    //verifico si hay colisión con la pared superior.
    this.position.y = 0;
    this.velocity.vy *= -1;
  }
  if (this.position.x >= canvasW) {
    //verifico si hay colisión con la pared del lado derecho
    this.position.x = canvasW;
    this.velocity.vx *= -1;
  } else if (this.position.x <= 0) {
    //verifico si hay colisión con la pared del lado izquierdo
    this.position.x = 0;
    this.velocity.vx *= -1;
  }
  const barRectangle = {
    x: barX,
    y: barY,
    w: barW,
    h: barH,
  };
  const ballRectangle = {
    x: this.position.x - this.radius,
    y: this.position.y - this.radius,
    w: 2 * this.radius,
    h: 2 * this.radius,
  };

  const ballVelocity = {
    vx: this.velocity.vx,
    vy: this.velocity.vy,
  };
  let barCollision = detectRectangleCollision(
    barRectangle,
    ballRectangle,
    ballVelocity
  );
  if (barCollision !== null) {
    this.position.x = barCollision.newPos.x + this.radius;
    this.position.y = barCollision.newPos.y + this.radius;
    if (barCollision.reason.x === true) {
      this.velocity.vx *= -1;
    }
    if (barCollision.reason.y === true) {
      this.velocity.vy *= -1;
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
      this.position.x = blockCollision.newPos.x + this.radius;
      this.position.y = blockCollision.newPos.y + this.radius;
      if (blockCollision.reason.x === true) {
        this.velocity.vx *= -1;
      }
      if (blockCollision.reason.y === true) {
        this.velocity.vy *= -1;
      }
      blocks.splice(i, 1);
      break;
    }
    i++;
  }
}




//Clases: 




class Ball {
  constructor(position, radius, color){
    this.position = position; 
    this.radius = radius; 
    this.velocity = new Velocity (0, 0); 
    this.color = color; 

  }
  
  
  draw(){
    drawCircle(context, this.position, this.radius, this.color)
  }

  update(){
    this.position = this.position.move(this.velocity.vx * refreshRate, this.velocity.vy* refreshRate)

    if (this.position.y >= canvasH) {
      //verifico si hay colisión con la pared inferior.
      //vacio a propósito porque quiero que la pelota desaparezca.
    } else if (this.position.y <= 0) {
      //verifico si hay colisión con la pared superior.
      this.position.y = 0;
      this.velocity.vy *= -1;
    }
    if (this.position.x >= canvasW) {
      //verifico si hay colisión con la pared del lado derecho
      this.position.x = canvasW;
      this.velocity.vx *= -1;
    } else if (this.position.x <= 0) {
      //verifico si hay colisión con la pared del lado izquierdo
      this.position.x = 0;
      this.velocity.vx *= -1;
    }
    const barRectangle = {
      x: barX,
      y: barY,
      w: barW,
      h: barH,
    };
    const ballRectangle = {
      x: this.position.x - this.radius,
      y: this.position.y - this.radius,
      w: 2 * this.radius,
      h: 2 * this.radius,
    };
  
    const ballVelocity = {
      vx: this.velocity.vx,
      vy: this.velocity.vy,
    };
    let barCollision = detectRectangleCollision(
      barRectangle,
      ballRectangle,
      ballVelocity
    );
    if (barCollision !== null) {
      this.position.x = barCollision.newPos.x + this.radius;
      this.position.y = barCollision.newPos.y + this.radius;
      if (barCollision.reason.x === true) {
        this.velocity.vx *= -1;
      }
      if (barCollision.reason.y === true) {
        this.velocity.vy *= -1;
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
        this.position.x = blockCollision.newPos.x + this.radius;
        this.position.y = blockCollision.newPos.y + this.radius;
        if (blockCollision.reason.x === true) {
          this.velocity.vx *= -1;
        }
        if (blockCollision.reason.y === true) {
          this.velocity.vy *= -1;
        }
        blocks.splice(i, 1);
        break;
      }
      i++;
    }
  }

}
