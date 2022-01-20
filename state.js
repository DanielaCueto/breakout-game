'use strict'; 

// velocidad a la que la pelota se mueve. Ritmo de cambio de x e y
let ballVX = 40;
let ballVY = 40;

// dibuja la posición de la pelota
let ballX = 0;
let ballY = 0;
let ballRadius = 7;

// movimiento de la bar
const barW = 150;
const barH = 20;
let barVX = 0;
let barVY = 0;
let barX = 0;
let barY = 0;

// definiendo los bloques
const blockWidth = 40;
const blockHeight = 15;
const blockMarginX = 25; //margin entre bloques HORIZONTAL
const blockMarginY = 15; // margen entre bloques VERTICAL
const outerMargin = 20; //margin superior
const numberOfBlock = 50;
let blocks = []; 
// teclas
let playerPressingLeft = false;
let playerPressingRight = false;
