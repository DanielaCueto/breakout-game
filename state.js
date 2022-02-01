'use strict'; 

//Bola
let ball;

// movimiento de la bar
const barW = 150;
const barH = 20;
let bar;

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
