let database;
let back_img;
let gameState = 0;
let playerCount = 0;
let allPlayers;

let player, form,game;
let player1,player2;
let players;
let fruits;
let fruitGroup;
let fruit1_img, fruit2_img, fruit3_img, fruit4_img, fruit5_img;
let player_img;
let firebase;


function preload(){
  back_img = loadImage("images/jungle.jpg");
  player_img = loadImage("images/basket2.png");
  fruit1_img = loadImage("images/apple2.png");
  fruit2_img = loadImage("images/banana2.png");
  fruit3_img = loadImage("images/melon2.png");
  fruit4_img = loadImage("images/orange2.png");
  fruit5_img = loadImage("images/pineapple2.png");
  fruitGroup = new Group();
}

function setup() {
  createCanvas(1000,600);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  
}

function draw() {
  background(back_img);
  
   if (playerCount === 2) {
     game.update(1);
   }
   if (gameState === 1) {
     clear(); 
     game.play();
   }
   if (gameState === 2) {
    
     game.end();
   }
}