let floor;
let arco1;
let arco2;
let backgroundImage;
let player1;
let player2;
let pata1;
let pata2;
let pelota, balon;
let player1Score = 0;
let player2Score = 0;
let paused = false;
let pauseButton;
let obstaculo;

function preload() {
  backgroundImage = loadImage("image.png");
}

function setup() {
  createCanvas(850, 500);

  //d
  arco1 = new Sprite(15, 380, 5, 130, "s");
  arco1.visible = false;
  floor = new Sprite(30, 312, 42, 5, "s");
  floor.visible = false;

  //i
  arco2 = new Sprite(835, 380, 5, 130, "s");
  arco2.visible = false;
  floor = new Sprite(820, 312, 42, 5, "s");
  floor.visible = false;

  //e
  floor = new Sprite(400, 1, 900, 5, "s");
  floor.visible = false;
  floor = new Sprite(847, 0, 5, 600, "s");
  floor.visible = false;
  floor = new Sprite(3, 0, 5, 600, "s");
  floor.visible = false;
  floor = new Sprite(150, 0, 5, 600, "s");
  floor.visible = false;
  floor.rotation = 50;
  floor = new Sprite(700, 0, 5, 800, "s");
  floor.visible = false;
  floor.rotation = -50;
  floor = new Sprite(20, 297, 5, 65, "s");
  floor.rotation = -65;
  floor.visible = false;
  floor = new Sprite(830, 297, 5, 65, "s");
  floor.rotation = 65;
  floor.visible = false;
  floor = new Sprite(380, 438, 1000, 2, "s");
  floor.visible = false;

  //jugadores
  player1 = new Sprite(200, 350, 28, 50);
  player1.friction = 0;
  player1.rotationLock = true;
  player1.img = "./ROMAAAAAAN.png";
  cabeza1 = new Sprite(200, 333);
  cabeza1.diameter = 28;
  cabeza1.visible = false;
  pata1 = new Sprite(220, 352, 10, 20);
  pata1.visible = false;
  p1 = new GlueJoint(player1, pata1);
  p2 = new GlueJoint(player1, cabeza1);

  player2 = new Sprite(600, 350, 28, 50);
  player2.friction = 0;
  player2.rotationLock = true;
  player2.img = "./PABLITOOOO.png";
  pata2 = new Sprite(580, 352, 10, 20);
  pata2.visible = false;
  cabeza2 = new Sprite(600, 333);
  cabeza2.diameter = 28;
  cabeza2.visible = false;
  p1 = new GlueJoint(pata2, player2);
  p2 = new GlueJoint(cabeza2, player2);

  //pelota
  pelota = new Sprite();
  pelota.diameter = 30;
  pelota.bounciness = 0.5;
  pelota.rotationDrag = 2;
  pelota.friction = 0.2;
  pelota.img = "./futbol.png";

  //gravedad pelota
  world.gravity.y = 12;

  //pausar
  pauseButton = createButton("Pause");
  pauseButton.position(755, 461, 20);
  pauseButton.mouseClicked(pauseGame);
  pauseButton.visible = false;
  pauseButton.style('text-decoration', 'none');
  pauseButton.style('background-color', '#2c436f');
  pauseButton.style('color', '#eee');
  pauseButton.style('padding', '6px 12px');
  pauseButton.style('border-radius', '5px');
  pauseButton.style('border-color', 'transparent');
  pauseButton.style('font-weight', 'bold');
  pauseButton.style('font-size', '20px');
  pauseButton.style('cursor', 'pointer');
  pauseButton.style('border', 'none');

  obstaculo = new Sprite(425, 120, "s");
  obstaculo.diameter = 100;
  obstaculo.color = "red";
  obstaculo = new Sprite(175, 150, "s");
  obstaculo.diameter = 70;
  obstaculo.color = "red";
  obstaculo = new Sprite(675, 150, "s");
  obstaculo.diameter = 70;
  obstaculo.color = "red";
}

function draw() {
  background(backgroundImage);
  movePlayers();
  Gool();
  estetica();
}

function movePlayers() {
  // Controlar a player1
  if (kb.pressing("a")) {
    player1.vel.x = -4;
  } else if (kb.pressing("d")) {
    player1.vel.x = 4;
  } else {
    player1.vel.x = 0;
  }
  if (kb.presses("w")) {
    player1.vel.y = -7.5;
  }

  //patear
  if (kb.pressing("g")) {
    pata1.rotation = 20;
    if (pata1.collides(pelota)) {
      pelota.direction = 338;
      pelota.speed = 15;
    }
  } else if (kb.pressing("h")) {
    pata1.rotation = 20;
    if (pata1.collides(pelota)) {
      pelota.direction = 0;
      pelota.speed = 15;
    }
  }

  // Controlar a player2
  if (kb.pressing("4")) {
    player2.vel.x = -4;
  } else if (kb.pressing("6")) {
    player2.vel.x = 4;
  } else {
    player2.vel.x = 0;
  }
  if (kb.presses("8")) {
    player2.vel.y = -7.5;
  }
  //patear
  if (kb.pressing("k")) {
    pata2.rotation = -20;
    if (pata2.collides(pelota)) {
      pelota.direction = 203;
      pelota.speed = 15;
    }
  } else if (kb.pressing("l")) {
    pata2.rotation = -20;
    if (pata2.collides(pelota)) {
      pelota.direction = 180;
      pelota.speed = 15;
    }
  }
}

function Gool(score1, score2) {
  if (pelota.overlaps(arco1)) {
    pelota.x = 400;
    pelota.y = 300;
    pelota.vel.x = -4;
    player1.x = 200;
    player1.y = 350;
    player2.x = 600;
    player2.y = 350;
    player2Score++;
   
  }

  if (pelota.overlaps(arco2)) {
    pelota.x = 400;
    pelota.y = 300;
    pelota.vel.x = 4;
    player1.x = 200;
    player1.y = 350;
    player2.x = 600;
    player2.y = 350;
    player1Score++;
  }
}
function estetica() {
  fill(255);
  textSize(24);
  text(player1Score, 395, 475);
  fill(255);
  textSize(24);
  text("-", 421, 475);
  fill(255);
  textSize(24);
  text(player2Score, 440, 475);
  fill(0);
  textSize(24);
  text("BOCA", 285, 475);
  fill(0);
  textSize(24);
  text("RIVER", 488, 475);
}

function pauseGame() {
  if (!paused) {
      // Pausa el juego
      paused = true;
      noLoop();
      pauseButton.html("Restart");
  } else {
      // Reanuda el juego
      paused = false;
      loop();
      pauseButton.html("Pause");

  }
}


