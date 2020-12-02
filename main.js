//Connor Hester Final Project

var state;
var user;
var karen;
var maga;
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
  myFont=loadFont("assets/RetroGaming.ttf");
}

function setup() {
  createCanvas(displayWidth * 2, displayHeight * 2);
  fam = new Group();
  obstacles = new Group();
  masks = new Group();
  colorPuzzle = new Group();
  movers = new Group();
  sliders = new Group();
  magas = new Group();
  karens = new Group();
  cough = new Group();
  safeSpot = createSprite(75, height / 2, 150, 150);
  safeSpot.shapeColor = color(150, 150, 0);
  fam1 = createSprite(width - 450, 50, 30, 30); //initializes family members display
  fam.add(fam1);
  fam2 = createSprite(width - 510, 50, 30, 30);
  fam.add(fam2);
  fam3 = createSprite(width - 570, 50, 30, 30);
  fam.add(fam3);
  fam4 = createSprite(width - 630, 50, 30, 30);
  fam.add(fam4);
  fam5 = createSprite(width - 690, 50, 30, 30);
  fam.add(fam5);
  for (let i = 0; i < 5; i++) {
    fam[i].shapeColor = color(0, 0, 200);
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
    obstacles[i].setDefaultCollider();
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
  karen1 = createSprite(width / 4 + 100, 50, 50, 50); //creates karen enemy
  karen1.setSpeed(2, 90);
  karens.add(karen1);
  karen2 = createSprite(width / 2 - 200, height / 2 - 100, 50, 50);
  karen2.setSpeed(2, 270);
  karens.add(karen2);
  karen3=createSprite(1100,150,50,50);
  karen3.setSpeed(2,0);
  karens.add(karen3);
  karen4=createSprite(100,height/2+100,50,50);
  karen4.setSpeed(2,0);
  karens.add(karen4);
  karen5=createSprite(width/2-100,height-50,50,50);
  karen5.setSpeed(2,180);
  karens.add(karen5);
  karen6=createSprite(width/2-100,height/2+100,50,50);
  karen6.setSpeed(2,270);
  karens.add(karen6);
  karen7=createSprite(100,height-100,50,50);
  karen7.setSpeed(2,90);
  karens.add(karen7);
  for(let i=0; i<7; i++){
    karens[i].setDefaultCollider();
    karens[i].shapeColor=color(200,0,0);
  }
  //karenSprite.addImage(karen);
  maga1 = createSprite(width / 2, 150, 50, 50); //creates maga enemy
  magas.add(maga1);
  maga2 = createSprite(50, height- 100, 50, 50);
  magas.add(maga2);
  maga3 = createSprite(width - 200, height / 2, 50, 50);
  magas.add(maga3);
  for(let i=0; i<3;i++){
    magas[i].setDefaultCollider();
    magas[i].shapeColor=color(255,0,0);
  }
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
  mask5 = createSprite(width - 200, height / 2, 50, 50);
  mask5.visible = false;
  masks.add(mask5);
  for (let i = 0; i < 5; i++) {
    masks[i].shapeColor = color(150, 150, 220);
  }
  heartCounter = 3;
  state=1;
}

function draw() {
  if(state===1){
  timeStart = millis(); //starts timer
  background(255);
  fill(255); //draws top right display
  stroke(0);
  strokeWeight(4);
  rect(width - 742, 2, 740, 100);
  line(width - 400, 0, width - 400, 100);
  line(width - 180, 0, width - 180, 100);
  fill(0);
  timer();
  karenMove();
  magaMove();
  userMove();
  collision();
  doColorPuzzle();
  doMovePuzzle();
  drawSprites();
  }
  else if(state===2){
    fill(250,0,0);
    textFont(myFont);
    textSize(120);
    text("Game Over", width/2-400, height/2-100);
  }
}

function timer() {
  //tracks time elapsed
  min = floor(timeStart / 60000);
  sec = floor(timeStart / 1000);
  if (sec >= 60) {
    sec -= 60*min;
  }
  fill(0);
  textSize(30);
  if (sec < 10) {
    text(min + " : 0" + sec, width - 130, 60);
  } else {
    text(min + " : " + sec, width - 130, 60);
  }
}

function karenMove() {
  //creates karens path
  if (karen1.collide(box1)) {
    karen1.setSpeed(2, 270);
  }
  if (karen1.collide(box21)) {
    karen1.setSpeed(2, 90);
  }
  if (karen2.collide(box1)) {
    karen2.setSpeed(2, 270);
  }
  if (karen2.collide(box21)) {
    karen2.setSpeed(2, 90);
  }
  if(karen3.collide(box4)){
    karen3.setSpeed(2,0);
  }
  if(karen3.collide(box22)){
    karen3.setSpeed(2,180);
  }
  if(karen4.collide(box2)){
    karen4.setSpeed(2,180);
  }
  if(karen4.collide(box24)){
    karen4.setSpeed(2,0);
  }
  if(karen5.collide(box2)){
    karen5.setSpeed(2,180);
  }
  if(karen5.collide(box24)){
    karen5.setSpeed(2,0);
  }
  if(karen6.collide(box1)){
    karen6.setSpeed(2,90);
  }
  if(karen6.collide(box23)){
    karen6.setSpeed(2,270);
  }
  if(karen7.collide(safeSpot)){
    karen7.setSpeed(2,90);
  }
  if(karen7.collide(box23)){
    karen7.setSpeed(2,270);
  }
}

function magaMove() {
  //creates maga path
  maga1.attractionPoint(0.5, userSprite.position.x, userSprite.position.y);
  maga1.maxSpeed = 2.4;
  maga2.attractionPoint(0.5, userSprite.position.x, userSprite.position.y);
  maga2.maxSpeed = 2.4;
  maga3.attractionPoint(0.5, userSprite.position.x, userSprite.position.y);
  maga3.maxSpeed = 2.4;
  if(second()===10 || second()===20){
    createCough(maga1.position.x,maga1.position.y);
  }
}

function createCough(x,y){
  for(let i; i<15;i++){
  let j=random(5,15);
  let a=createSprite(x,y,j,j);
  a.setSpeed(random(1,3),random(0,360));
  a.shapeColor=color(50,200,50,60);
  a.life=40;
  cough.add(a);
  }
}

function userMove() {
  //controls user movement
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

function doMovePuzzle(){
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
}

function collision() {
  //details object interactions
  userSprite.displace(sliders);
  userSprite.overlap(safeSpot);
  userSprite.collide(obstacles);
  magas.collide(safeSpot);
  magas.collide(magas);
  magas.collide(obstacles);
  karens.collide(obstacles);
  sliders.collide(obstacles);

  //   userSprite.overlap(colorPuzzle, doColorPuzzle);
  
  if (userSprite.collide(karens) || userSprite.collide(magas)) {
    userSprite.position.x = 50;
    userSprite.position.y = height / 2;
    hearts[heartCounter-1].remove();
    heartCounter--;
    if(heartCounter===0){
      clearScreen();
    }
  }
  if (userSprite.overlap(mask1)) {
    mask1.remove();
    fam1.shapeColor = color(150, 150, 220);
  }
  if (userSprite.overlap(mask2)) {
    mask2.remove();
    fam2.shapeColor = color(150, 150, 220);
  }
  if (userSprite.overlap(mask3)) {
    mask3.remove();
    fam3.shapeColor = color(150, 150, 220);
  }
  if (userSprite.overlap(mask4)) {
    mask4.remove();
    fam4.shapeColor = color(150, 150, 220);
  }
  if (userSprite.overlap(mask5)) {
    mask5.remove();
    fam5.shapeColor = color(150, 150, 220);
  }
}

function clearScreen(){
  clear();
      obstacles.removeSprites();
      magas.removeSprites();
      karens.removeSprites();
      sliders.removeSprites();
      colorPuzzle.removeSprites();
      masks.removeSprites();
      movers.removeSprites();
      fam.removeSprites();
      safeSpot.remove();
      userSprite.remove();
      state=2;
}

function doColorPuzzle() {
  //mechanics of the color puzzle component
  color1Count = 0;
  color2Count = 1;
  color3Count = 2;
  color4Count = 3;
  if (userSprite.collide(color1)===true) {
    color1Count++;
    if (color1Count > 3) {
      color1Count = 0;
    }
    color1.shapeColor = colors[color1Count];
  }
   if (userSprite.collide(color2) === true) {
    color2Count++;
    if (color2Count > 3) {
      color2Count = 0;
    }
    color2.shapeColor = colors[color2Count];
  } if (userSprite.collide(color3) === true) {
    color3Count++;
    if (color3Count > 3) {
      color3Count = 0;
    }
    color3.shapeColor = colors[color3Count];
  } if (userSprite.collide(color4) === true) {
    color4Count++;
    if (color4Count > 3) {
      color4Count = 0;
    }
    color4.shapeColor = colors[color4Count];
  }
  if (
    color1.shapeColor===colors[1] &&
    color2.shapeColor===colors[2] &&
    color3.shapeColor===colors[3] &&
    color4.shapeColor===colors[0]
  ) {
    color1.position.y-=200;
    color2.position.y-=150;
    color3.position.y-=100;
    color4.position.y-=50;
    colorPuzzle.removeSprites();
  }
}
