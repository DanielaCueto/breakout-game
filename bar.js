"use strict";





//class

class Bar{
  constructor(position, width, height, color){
    this.position = position; 
    this.width = width; 
    this.height = height; 
    this.color = color; 
  }
  draw(){
    drawRectangle(context, this.position, this.width, this.height, this.color)
  }
  update(){
    let barVX; 
    if (playerPressingRight) {
      barVX = 60;
    } else if (playerPressingLeft) {
      barVX = -60;
    } else {
      barVX = 0;
    }
    this.position = this.position.move(barVX * refreshRate, 0) ;
    if (this.position.x >= canvasW - barW) {
      this.position.x = canvasW - barW;
    } else if (this.position.x <= 0) {
      this.position.x = 0;
    }
  }
}
