//Connor Hester Final Project

var state;
var user;
var karen;
var maga;
var userSprite;
var karenSprite;
var magaSprite;
var heartCounter;
var hearts;
var colors;
var timeStart;
var min;
var sec;

function preload() {
  //user=loadImage("media/userChar.png");
  //karen=loadImage("media/karenChar.png");
  // maga=loadImage("media/magaChar.png");
  //mask=loadImage("media/mask.png");
}

function setup() {
  createCanvas(displayWidth * 2, displayHeight * 2);
  fam= new Group();
  characters = new Group();
  obstacles = new Group();
  masks = new Group();
  colorPuzzle = new Group();
  movers = new Group();
  sliders = new Group();
  fam1=createSprite(width-450,50,30,30); //initializes family members display
  fam.add(fam1);
  fam2=createSprite(width-510,50,30,30);
  fam.add(fam2);
  fam3=createSprite(width-570,50,30,30);
  fam.add(fam3);
  fam4=createSprite(width-630,50,30,30);
  fam.add(fam4);
  fam5=createSprite(width-690,50,30,30);
  fam.add(fam5);
  for (let i=0; i<5; i++){
    fam[i].shapeColor=color(0,0,200);
  }
  heart1 = createSprite(width - 350, 50, 30, 30); //initializes hearts display
  heart1.shapeColor = color(250, 100, 100);
  heart2 = createSprite(width - 290, 50, 30, 30);
  heart2.shapeColor = color(250, 100, 100);
  heart3 = createSprite(width - 230, 50, 30, 30);
  heart3.shapeColor = color(250, 100, 100);
  hearts = [heart1, heart2, heart3];
  box1 = createSprite(width / 2, height / 2, width - 800, 100); //creates boundaries/obstacles
  obstacles.add(box1);
  box2 = createSprite(width / 2, height / 2 + 150, 100, height - 300);
  obstacles.add(box2);
  box3 = createSprite(300, 500, 600, 100);
  obstacles.add(box3);
  box4 = createSprite(550, 100, 100, 200);
  obstacles.add(box4);
  box5 = createSprite(width - 500, height / 2 - 150, 1000, 50);
  obstacles.add(box5);
  box6 = createSprite(width / 2 + 550, height / 2 - 275, 1000, 50);
  obstacles.add(box6);
  box7 = createSprite(width - 500, height / 2 - 400, 1000, 50);
  obstacles.add(box7);
  box8 = createSprite(width / 2 + 550, height / 2 - 525, 1000, 50);
  obstacles.add(box8);
  box9 = createSprite(width - 500, height / 2 - 650, 1000, 50);
  obstacles.add(box9);
  box10 = createSprite(width - 600, height - 25, 1200, 50);
  obstacles.add(box10);
  box11 = createSprite(width / 2 + 265, height / 2 + 525, 50, 650);
  obstacles.add(box11);
  box12 = createSprite(width / 2 + 790, height / 2 + 175, 1100, 50);
  obstacles.add(box12);
  box13 = createSprite(width - 125, height - 425, 50, 550);
  obstacles.add(box13);
  box14 = createSprite(width - 600, height - 175, 900, 50);
  obstacles.add(box14);
  box15 = createSprite(width / 2 + 410, height - 375, 50, 450);
  obstacles.add(box15);
  box16 = createSprite(width - 655, height / 2 + 325, 800, 50);
  obstacles.add(box16);
  box17 = createSprite(width - 280, height - 450, 50, 300);
  obstacles.add(box17);
  box18 = createSprite(width - 580, height - 320, 650, 50);
  obstacles.add(box18);
  box19 = createSprite(width / 2 + 560, height - 385, 50, 180);
  obstacles.add(box19);
  box20 = createSprite(width - 655, height - 450, 500, 50);
  obstacles.add(box20);
  box21 = createSprite(width / 2, 0, width, 1);
  obstacles.add(box21);
  box22 = createSprite(width, height / 2, 1, height);
  obstacles.add(box22);
  box23 = createSprite(width / 2, height, width, 1);
  obstacles.add(box23);
  box24 = createSprite(0, height / 2, 1, height);
  obstacles.add(box24);
  box25 = createSprite(650, height - 400, 900, 50);
  obstacles.add(box25);
  box26 = createSprite(650, height - 400, 50, 600);
  obstacles.add(box26);
  for (let i = 0; i < 26; i++) {
    obstacles[i].shapeColor = color(0);
  }
//   color1=new ColorPuzzle(0,400);
//   colorPuzzle.add(color1);
//   color2=new ColorPuzzle(1,350);
//   colorPuzzle.add(color2);
//   color3=new ColorPuzzle(2,300);
//   colorPuzzle.add(color3);
//   color4=new ColorPuzzle(3,250);
//   colorPuzzle.add(color4);
  color1 = createSprite(580, 400, 40, 40); //creates the color puzzle components
  color1.shapeColor = color(200, 0, 0);
  colorPuzzle.add(color1);
  color2 = createSprite(580, 350, 40, 40);
  color2.shapeColor = color(230, 230, 0);
  colorPuzzle.add(color2);
  color3 = createSprite(580, 300, 40, 40);
  color3.shapeColor = color(0, 200, 0);
  colorPuzzle.add(color3);
  color4 = createSprite(580, 250, 40, 40);
  color4.shapeColor = color(0, 0, 200);
  colorPuzzle.add(color4);
  colors = [
    color(200, 0, 0),
    color(230, 230, 0),
    color(0, 200, 0),
    color(0, 0, 200),
  ];

  mover1 = createSprite(width - 150, 325, 100, 100); //creates the movement puzzle components
  mover1.shapeColor = color(175);
  movers.add(mover1);
  slider1 = createSprite(width / 2 + 400, 320, 55, 55);
  slider1.shapeColor = color(90, 20, 0);
  sliders.add(slider1);
  mover2 = createSprite(width / 2 + 200, 450, 100, 100);
  mover2.shapeColor = color(175);
  movers.add(mover2);
  slider2 = createSprite(width - 350, 445, 55, 55);
  slider2.shapeColor = color(90, 20, 0);
  sliders.add(slider2);
  mover3 = createSprite(width - 150, 575, 100, 100);
  mover3.shapeColor = color(175);
  movers.add(mover3);
  slider3 = createSprite(width / 2 + 400, 570, 55, 55);
  slider3.shapeColor = color(90, 20, 0);
  sliders.add(slider3);
  mover4 = createSprite(width / 2 + 200, 700, 100, 100);
  mover4.shapeColor = color(175);
  movers.add(mover4);
  slider4 = createSprite(width - 350, 695, 55, 55);
  slider4.shapeColor = color(90, 20, 0);
  sliders.add(slider4);

  userSprite = createSprite(50, height / 2, 50, 50); //creates user
  userSprite.shapeColor = color(0, 0, 200);
  userSprite.setDefaultCollider();
  //userSprite.addImage(user);
  karenSprite = createSprite(width - 100, 300, 50, 50); //creates karen enemy
  karenSprite.shapeColor = color(200, 0, 0);
  karenSprite.setVelocity(-2, 0);
  karenSprite.setDefaultCollider();
  //karenSprite.addImage(karen);
  magaSprite = createSprite(100, height / 2 + 150, 50, 50); //creates maga enemy
  magaSprite.shapeColor = color(200, 0, 0);
  magaSprite.setVelocity(2, 0);
  magaSprite.setDefaultCollider();
  //magaSprite.addImage(maga);
  mask1 = createSprite(width / 2 + 650, height / 2 + 520, 50, 50); //creates masks
  // maskImage=image(mask,width-200, height/2);
  mask1.setDefaultCollider();
  masks.add(mask1);
  mask2 = createSprite(250, 100, 50, 50);
  masks.add(mask2);
  mask3 = createSprite(800, height - 280, 50, 50);
  masks.add(mask3);
  mask4 = createSprite(width - 150, 200, 50, 50);
  masks.add(mask4);
  mask5 = createSprite(width / 2 + 145, height - 70, 50, 50);
  mask5.visible = false;
  masks.add(mask5);
  for (let i = 0; i < 5; i++) {
    masks[i].shapeColor = color(150, 150, 220);
  }
  characters.add(karenSprite);
  characters.add(magaSprite);
  characters.add(userSprite);
  // characters.add(maskSprite);
  heartCounter = 2;
}

function draw() {
  timeStart = millis(); //starts timer
  background(255); 
  fill(255); //draws top right display
  stroke(0);
  strokeWeight(4);
  rect(width - 742, 2, 740, 100);
  line(width-400,0, width-400, 100);
  line(width-180,0,width-180,100);
  fill(0);
  timer();
  karenMove();
  magaMove();
  userMove();
  collision();
  doColorPuzzle();
  // if(state===1){
  //     drawSprites(level1);
  // }
  // if (state===2){
  //     drawSprites(level2);
  // }
  drawSprites();
}

function timer() { //tracks time elapsed
  min = floor(timeStart / 60000);
  sec = floor(timeStart / 1000);
  if (sec >= 60) {
    sec -= 60;
  }
  fill(0);
  textSize(30);
  if (sec < 10) {
    text(min + " : 0" + sec, width - 130, 60);
  } else {
    text(min + " : " + sec, width - 130, 60);
  }
}

function karenMove() { //creates karens path
  if (karenSprite.position.x > width - 50) {
    karenSprite.velocity.x *= -1;
  } else if (karenSprite.position.x < 500) {
    karenSprite.velocity.x *= -1;
  }
}
function magaMove() { //creates maga path
  if (magaSprite.position.x > width - 500) {
    magaSprite.velocity.x *= -1;
  } else if (magaSprite.position.x < 50) {
    magaSprite.velocity.x *= -1;
  }
}

function userMove() { //controls user movement
  if (keyIsDown(LEFT_ARROW)) {
    userSprite.position.x -= 5;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    userSprite.position.x += 5;
  }
  if (keyIsDown(UP_ARROW)) {
    userSprite.position.y -= 5;
  }
  if (keyIsDown(DOWN_ARROW)) {
    userSprite.position.y += 5;
  }
}

function collision() { //details object interactions
  userSprite.displace(sliders);
  if (slider1.collide(mover1) === true) {
    mover1.remove();
    slider1.remove();
  }
  if (slider2.collide(mover2) === true) {
    mover2.remove();
    slider2.remove();
  }
  if (slider3.collide(mover3) === true) {
    mover3.remove();
    slider3.remove();
  }
  if (slider4.collide(mover4) === true) {
    mover4.remove();
    slider4.remove();
    mask5.visible = true;
  }
//   userSprite.overlap(colorPuzzle, doColorPuzzle);
  characters.collide(obstacles);
  sliders.collide(obstacles);
  if (userSprite.overlap(karenSprite) || userSprite.overlap(magaSprite)) {
    userSprite.position.x = 50;
    userSprite.position.y = height / 2;
    hearts[heartCounter].remove();
    heartCounter--;
  }
  if (userSprite.overlap(mask1)) {
    mask1.remove();
    fam1.shapeColor=color(150,150,220);
  }
  if (userSprite.overlap(mask2)) {
    mask2.remove();
    fam2.shapeColor=color(150,150,220);
  }
  if (userSprite.overlap(mask3)) {
    mask3.remove();
    fam3.shapeColor=color(150,150,220);
  }
  if (userSprite.overlap(mask4)) {
    mask4.remove();
    fam4.shapeColor=color(150,150,220);
  }
  if (userSprite.overlap(mask5)) {
    mask5.remove();
    fam5.shapeColor=color(150,150,220);
  }
}

function doColorPuzzle() { //mechanics of the color puzzle component
    color1Count=0;
    color2Count=1;
    color3Count=2;
    color4Count=3;
  if (userSprite.collide(color1) === true) {
    color1Count++;
    if (color1Count > 3) {
      color1Count = 0;
    }
    color1.shapeColor = colors[color1Count];
  } else if (userSprite.collide(color2) === true) {
    color2Count++;
    if (color2Count > 3) {
      color2Count = color2Count - 4;
    }
    color2.shapeColor = colors[color2Count];
  } else if (userSprite.collide(color3) === true) {
    color3Count++;
    if (color3Count > 3) {
      color3Count = color3Count - 4;
    }
    color3.shapeColor = colors[color3Count];
  } else if (userSprite.collide(color4) === true) {
    color4Count++;
    if (color4Count > 3) {
      color4Count = color4Count - 4;
    }
    color4.shapeColor = colors[color4Count];
  }
  if (
    color1.shapeColor === colors[2] &&
    color2.shapeColor === colors[2] &&
    color3.shapeColor === colors[2] &&
    color4.shapeColor === colors[2]
  ) {
    colorPuzzle.remove();
  }
}
