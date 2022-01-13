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

/**
 * Generic collision detection system between 2 rectangles, assuming the
 * second one is moving according to a certain speed vector.
 * 
 * @param {object} rect1 {x,y,w,h} description of first rectangle (assumed static).
 * @param {object} rect2 {x,y,w,h} description of second rectangle (assumed moving).
 * @param {object} velocity2 {vx,vy} description of movement of second rectangle.
 * @returns null if no collision detected otherwise an object containing:
 *   * rewindTime: float value representing the amount of seconds that have to be
 *                 rewinded to remove the collision according to the velocity of
 *                 rect2.
 *   * reason: object containing 2 boolean properties, x and y. x (y) will be 
 *             true if the collision happened mainly because of vx (vy) and false
 *             otherwise. It may happen that both x and y are true (e.g. diagonal 
 *             movement with same velocity components).
 *   * newPos: object containing updated rect2 x and y values corresponding to the
 *             rewinding of x2 and y2 based on vx2 and vy2 and rewindTime.
 */
function detectRectangleCollision(rect1, rect2, velocity2) {
  let horizontalCollision = !(
    // rect 1 in lower x and there's a gap with respect to rect 2
    rect1.x + rect1.w < rect2.x ||
    // rect 2 in lower x and there's a gap with respect to rect 1
    rect2.x + rect2.w < rect1.x
  );
  if (!horizontalCollision) {
    // If no horizontal collision, there can't be a collision at all
    return null;
  }
  let verticalCollision = !(
    // rect 1 in lower y and there's a gap with respect to rect 2
    rect1.y + rect1.h < rect2.y ||
    // rect 2 in lower y and there's a gap with respect to rect 1
    rect2.y + rect2.h < rect1.y
  )
  if (!verticalCollision) {
    // If no vertical collision, there can't be a collision at all
  }

  // If we got this far, that means there's both an horizontal and a vertical collision. 
  // We now have to figure out how much to backtrack the movement of rect 2 based on its 
  // velocity so that the collision goes away.
  // This is done by figuring out the quickest way to remove either horizontal or
  // vertical collision and "rewinding" time according to that amount.
  let newX2;
  if (velocity2.vx > 0) {
    // if moving from left to right, new x2 position is such that x2 + w2 = x1
    newX2 = rect1.x - rect2.w;
  } else {
    // else we're moving from right to left, new x2 position is such that x2 = x1 + w1
    newX2 = rect1.x + rect1.w;
  }
  let rewindTimeX = (rect2.x - newX2) / velocity2.vx;

  let newY2;
  if (velocity2.vy > 0) {
    // if moving from top to bottom, new y2 position is such that y2 + h2 = y1
    newY2 = rect1.y - rect2.h;
  } else {
    // else we're moving from bottom to top, new y2 position is such that y2 = y1 + h1
    newY2 = rect1.y + rect1.h;
  }
  let rewindTimeY = (rect2.y - newY2) / velocity2.vy;

  return {
    rewindTime: Math.min(rewindTimeX, rewindTimeY),
    reason: {
      x: rewindTimeX <= rewindTimeY,
      y: rewindTimeY <= rewindTimeX,
    },
    newPos: {
      x: newX2,
      y: newY2,
    }
  };
}
