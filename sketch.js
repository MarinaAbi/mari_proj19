var cachorro;
var osso;
var veneno;
var fundo;
var gameOver;
var restart;

var cachorroImg;
var ossoImg;
var venenoImg;
var fundoImg;
var gameOverImg;
var restartImg;
//estados do jogo
var PLAY = 1;
var END = 0;
var gameState = 1;

function preload() {
  cachorroImg = loadImage('sprites/cachorro 3.png');
  ossoImg = loadImage('sprites/osso.png');
  venenoImg = loadImage('sprites/frascoVeneno.png');
  fundoImg = loadImage('sprites/fundoCampo.webp');
  gameOverImg = loadImage('sprites/gameOver.png');
  restartImg = loadImage('sprites/pngwing.com.png');
}

function setup() {
createCanvas(560, 378);

//edges = createEdgeSprites();

fundo = createSprite(280, 190);

fundo.addImage(fundoImg);


//fundo.velocityX = 3;
}



function draw() {
background('OliveDrab');


fundo.scale = 0.9
drawSprites()
}