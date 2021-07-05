var database;
var back_img;
var gameState =0;
var playerCount = 0;
var allPlayers,monster;
var score =0;
var player, form,game;
var player1,player2;
var players;
var apple,banana,mango,orange,pineapple,wm;
var appleGroup,bananaGroup,mangoGroup,orangeGroup,pineappleGroup,wmGroup;
var fruit1_img, fruit2_img, fruit3_img, fruit4_img, fruit5_img,fruit6_img;
var player_img,monsterGroup;
var monster1,monster2,monster3,monster4
var player1score =0;
var player2score =0;
var gameover,g

function preload(){
  back_img = loadImage("jm.jpg");
  player_img = loadImage("sword.png");
  fruit1_img = loadImage("images/apple2.png");
  fruit2_img = loadImage("images/banana2.png");
  fruit3_img = loadImage("images/watermelon.png");
  fruit4_img = loadImage("images/orange2.png");
  fruit5_img = loadImage("images/pineapple2.png");
  fruit6_img = loadImage("images/mango.png");
  monster1 = loadImage("images/monster.jpg");
  monster2 = loadImage("images/monster1.jpg");
  monster3= loadImage("images/monster2.jpg");
  monster4 = loadImage("images/monster3.jpg");
  gameover = loadImage("gameover.png");
  appleGroup = new Group();
  bananaGroup = new Group();
  mangoGroup = new Group();
  orangeGroup = new Group();
  pineappleGroup = new Group();
  wmGroup = new Group();
  monsterGroup = new Group()
}
function setup() {
  createCanvas(1000, 600);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  // monster1.scale=0.3
  // monster2.scale=0.3
  // monster3.scale=0.3
  // monster4.scale=0.3
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
   backgr
     game.end();

   }
}