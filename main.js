//Connor Hester Final Project

var state;
var user;
var karen;
var maga;
var heartCounter;
var hearts;
var colors;
var timeStart;
var mins;
var sec;
var maskCounter;
var SCENE_W;
var SCENE_H;
var family1;
var family2;
var family3;
var family4;
var family5;
var f1;
var f2;
var f3;
var f4;
var f5;
var heart1;
var heart2;
var heart3;
var h1;
var h2;
var h3;
var bricks;


function preload() {
  user=loadImage('media/userChar.png');
  karen=loadImage("media/karenChar.png");
  maga=loadImage("media/magaChar.png");
  trumpFlag=loadImage("media/trumpFlag.png");
  mask=loadImage("media/mask.png");
  recycle=loadImage("media/recycle.png");
  masked=loadImage("media/maskedChar.png");
  backgroundImg=loadImage("media/background.png")
  b1=loadImage("media/b1.png");
  b2=loadImage("media/b2.png");
  b3=loadImage("media/b3.png");
  b4=loadImage("media/b4.png");
  b5=loadImage("media/b5.png");
  b6=loadImage("media/b6.png");
  b7=loadImage("media/b7.png");
  b8=loadImage("media/b8.png");
  b9=loadImage("media/b9.png");
  b10=loadImage("media/b10.png");
  b11=loadImage("media/b11.png");
  b12=loadImage("media/b12.png");
  b13=loadImage("media/b13.png");
  b14=loadImage("media/b14.png");
  b15=loadImage("media/b15.png");
  b16=loadImage("media/b16.png");
  b17=loadImage("media/b17.png");
  myFont=loadFont("assets/RetroGaming.ttf");
  
}

function setup() {
  createCanvas(1200, 800);
  SCENE_W=displayWidth*2;
  SCENE_H=displayHeight*2;
  obstacles = new Group();
  masks = new Group();
  colorPuzzle = new Group();
  movers = new Group();
  sliders = new Group();
  magas = new Group();
  karens = new Group();
  cough = new Group();
  safeSpot = createSprite(75, SCENE_H / 2, 150, 150);
  safeSpot.shapeColor = color(150, 150, 0);
  hearts = [heart1,heart2, heart3];

  box1 = createSprite(SCENE_W / 2, SCENE_H / 2, SCENE_W - 800, 100); //creates boundaries/obstacles
  box1.addImage(b1);
  box1.setCollider("rectangle",0,0,2080,100);
  obstacles.add(box1);
  box2 = createSprite(SCENE_W / 2, SCENE_H / 2 + 150, 100, SCENE_H - 300);
  box2.addImage(b2);
  box2.setCollider("rectangle",0,0,100,1500);
  obstacles.add(box2);
  box3 = createSprite(300, 500, 600, 100);
  box3.addImage(b3);
  box3.setCollider("rectangle",0,0,600,100);
  obstacles.add(box3);
  box4 = createSprite(550, 100, 100, 200);
  box4.addImage(b4);
  box4.setCollider("rectangle",0,0,100,200);
  obstacles.add(box4);
  box5 = createSprite(SCENE_W - 500, SCENE_H / 2 - 150, 1000, 50);
  box5.addImage(b5);
  box5.setCollider("rectangle",0,0,1000,50);
  obstacles.add(box5);
  box6 = createSprite(SCENE_W / 2 + 550, SCENE_H / 2 - 275, 1000, 50);
  box6.addImage(b5);
  box6.setCollider("rectangle",0,0,1000,50);
  obstacles.add(box6);
  box7 = createSprite(SCENE_W - 500, SCENE_H / 2 - 400, 1000, 50);
  box7.addImage(b5);
  box7.setCollider("rectangle",0,0,1000,50);
  obstacles.add(box7);
  box8 = createSprite(SCENE_W / 2 + 550, SCENE_H / 2 - 525, 1000, 50);
  box8.addImage(b5);
  box8.setCollider("rectangle",0,0,1000,50);
  obstacles.add(box8);
  box9 = createSprite(SCENE_W - 500, SCENE_H / 2 - 650, 1000, 50);
  box9.addImage(b5);
  box9.setCollider("rectangle",0,0,1000,50);
  obstacles.add(box9);
  box10 = createSprite(SCENE_W - 600, SCENE_H - 25, 1200, 50);
  box10.addImage(b6);
  box10.setCollider("rectangle",0,0,1200,50);
  obstacles.add(box10);
  box11 = createSprite(SCENE_W / 2 + 265, SCENE_H / 2 + 525, 50, 650);
  box11.addImage(b7);
  box11.setCollider("rectangle",0,0,50,650);
  obstacles.add(box11);
  box12 = createSprite(SCENE_W / 2 + 790, SCENE_H / 2 + 175, 1100, 50);
  box12.addImage(b8);
  box12.setCollider("rectangle",0,0,1100,50);
  obstacles.add(box12);
  box13 = createSprite(SCENE_W - 125, SCENE_H - 425, 50, 550);
  box13.addImage(b9);
  box13.setCollider("rectangle",0,0,50,550);
  obstacles.add(box13);
  box14 = createSprite(SCENE_W - 600, SCENE_H - 175, 900, 50);
  box14.addImage(b10);
  box14.setCollider("rectangle",0,0,900,50);
  obstacles.add(box14);
  box15 = createSprite(SCENE_W / 2 + 410, SCENE_H - 375, 50, 450);
  box15.addImage(b11);
  box15.setCollider("rectangle",0,0,50,450);
  obstacles.add(box15);
  box16 = createSprite(SCENE_W - 655, SCENE_H / 2 + 325, 800, 50);
  box16.addImage(b12);
  box16.setCollider("rectangle",0,0,800,50);
  obstacles.add(box16);
  box17 = createSprite(SCENE_W - 280, SCENE_H - 450, 50, 300);
  box17.addImage(b13);
  box17.setCollider("rectangle",0,0,50,300);
  obstacles.add(box17);
  box18 = createSprite(SCENE_W - 580, SCENE_H - 320, 650, 50);
  box18.addImage(b14);
  box18.setCollider("rectangle",0,0,650,50);
  obstacles.add(box18);
  box19 = createSprite(SCENE_W / 2 + 560, SCENE_H - 385, 50, 180);
  box19.addImage(b15);
  box19.setCollider("rectangle",0,0,50,180);
  obstacles.add(box19);
  box20 = createSprite(SCENE_W - 655, SCENE_H - 450, 500, 50);
  box20.addImage(b16);
  box20.setCollider("rectangle",0,0,500,50);
  obstacles.add(box20);
  box21 = createSprite(SCENE_W / 2, 0, SCENE_W, 1);
  obstacles.add(box21);
  box22 = createSprite(SCENE_W, SCENE_H / 2, 1, SCENE_H);
  obstacles.add(box22);
  box23 = createSprite(SCENE_W / 2, SCENE_H, SCENE_W, 1);
  obstacles.add(box23);
  box24 = createSprite(0, SCENE_H / 2, 1, SCENE_H);
  obstacles.add(box24);
  box25 = createSprite(650, SCENE_H - 400, 900, 50);
  box25.addImage(b10);
  box25.setCollider("rectangle",0,0,900,50);
  obstacles.add(box25);
  box26 = createSprite(650, SCENE_H - 400, 50, 600);
  box26.addImage(b17);
  box26.setCollider("rectangle",0,0,50,600);
  obstacles.add(box26);
  
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

  mover1 = createSprite(SCENE_W - 150, 325, 100, 100); //creates the movement puzzle components
  mover1.addImage(recycle);
  mover1.setCollider("rectangle",0,0,100,100);
  movers.add(mover1);
  slider1 = createSprite(SCENE_W / 2 + 400, 320, 55, 55);
  slider1.addImage(trumpFlag);
  slider1.setCollider("rectangle",0,0,100,50);
  // slider1.shapeColor = color(90, 20, 0);
  sliders.add(slider1);
  mover2 = createSprite(SCENE_W / 2 + 200, 450, 100, 100);
  mover2.addImage(recycle);
  mover2.setCollider("rectangle",0,0,100,100);
  movers.add(mover2);
  slider2 = createSprite(SCENE_W - 350, 445, 55, 55);
  slider2.addImage(trumpFlag);
  slider2.setCollider("rectangle",0,0,100,50);
  // slider2.shapeColor = color(90, 20, 0);
  sliders.add(slider2);
  mover3 = createSprite(SCENE_W - 150, 575, 100, 100);
  mover3.addImage(recycle);
  mover3.setCollider("rectangle",0,0,100,100);
  movers.add(mover3);
  slider3 = createSprite(SCENE_W / 2 + 400, 570, 55, 55);
  slider3.addImage(trumpFlag);
  slider3.setCollider("rectangle",0,0,100,50);
  // slider3.shapeColor = color(90, 20, 0);
  sliders.add(slider3);
  mover4 = createSprite(SCENE_W / 2 + 200, 700, 100, 100);
  mover4.addImage(recycle);
  mover4.setCollider("rectangle",0,0,100,100);
  movers.add(mover4);
  slider4 = createSprite(SCENE_W - 350, 695, 55, 55);
  slider4.addImage(trumpFlag);
  slider4.setCollider("rectangle",0,0,100,50);
  // slider4.shapeColor = color(90, 20, 0);
  sliders.add(slider4);
  // for(let i=0; i<5; i++){
  //   sliders[i].setCollider("rectangle",0,0,150,100);
  //   sliders[i].addImage(trumpFlag);
  // }

  // userSprite = createSprite(50, SCENE_H / 2, 50, 50); //creates user
  // userSprite.shapeColor = color(0, 0, 200);
  userSprite=createSprite(50,SCENE_H/2),50,50;
  userSprite.addImage(user);
  userSprite.setCollider("circle",0,0,25);
  //userSprite.addImage(user);
  karen1 = createSprite(SCENE_W / 4 + 100, 50, 50, 50); //creates karen enemy
  karen1.setSpeed(2, 90);
  karens.add(karen1);
  karen2 = createSprite(SCENE_W / 2 - 200, SCENE_H / 2 - 100, 50, 50);
  karen2.setSpeed(2.3, 270);
  karens.add(karen2);
  karen3=createSprite(1100,150,50,50);
  karen3.setSpeed(2.3,0);
  karens.add(karen3);
  karen4=createSprite(100,SCENE_H/2+100,50,50);
  karen4.setSpeed(2.3,0);
  karens.add(karen4);
  karen5=createSprite(SCENE_W/2-100,SCENE_H-50,50,50);
  karen5.setSpeed(2.3,180);
  karens.add(karen5);
  karen6=createSprite(SCENE_W/2-100,SCENE_H/2+100,50,50);
  karen6.setSpeed(2.3,270);
  karens.add(karen6);
  karen7=createSprite(100,SCENE_H-100,50,50);
  karen7.setSpeed(2.3,90);
  karens.add(karen7);
  for(let i=0; i<7; i++){
    karens[i].setCollider("circle",0,0,25);
    karens[i].addImage(karen);
  }
  //karenSprite.addImage(karen);
  maga1 = createSprite(SCENE_W / 2, 150, 50, 50); //creates maga enemy
  magas.add(maga1);
  maga2 = createSprite(50, SCENE_H- 100, 50, 50);
  magas.add(maga2);
  maga3 = createSprite(SCENE_W - 200, SCENE_H / 2, 50, 50);
  magas.add(maga3);
  for(let i=0; i<3;i++){
    magas[i].setCollider("circle",0,0,25);
    magas[i].addImage(maga);
  }
  //magaSprite.addImage(maga);
  mask1 = createSprite(SCENE_W / 2 + 650, SCENE_H / 2 + 520, 50, 50); //creates masks
  // maskImage=image(mask,width-200, height/2);
  mask1.addImage(mask);
  mask1.setCollider("rectangle",0,0,50,50);
  masks.add(mask1);
  mask2 = createSprite(250, 100, 50, 50);
  mask2.addImage(mask);
  mask2.setCollider("rectangle",0,0,50,50);
  masks.add(mask2);
  mask3 = createSprite(800, SCENE_H - 280, 50, 50);
  mask3.addImage(mask);
  mask3.setCollider("rectangle",0,0,50,50);
  masks.add(mask3);
  mask4 = createSprite(SCENE_W - 150, 200, 50, 50);
  mask4.addImage(mask);
  mask4.setCollider("rectangle",0,0,50,50);
  masks.add(mask4);
  mask5 = createSprite(SCENE_W - 200, SCENE_H / 2, 50, 50);
  mask5.addImage(mask);
  mask5.setCollider("rectangle",0,0,50,50);
  mask5.visible = false;
  masks.add(mask5);

  heartCounter = 3;
  state=1;
  maskCounter=0;
  f1=30;
  f2=30;
  f3=30;
  f4=30;
  f5=30;
  h1=30;
  h2=30;
  h3=30;
}

function draw() {
  camera.position.x=userSprite.position.x;
  camera.position.y=userSprite.position.y;
  if(state===1){
  background(backgroundImg);
  timeStart = millis(); //starts timer
  karenMove();
  // magaMove();
  userMove();
  collision();
  doColorPuzzle();
  doMovePuzzle();
  checkMasks();
  drawSprites();
  scoreboard();
  }
  else if(state===2){
    camera.off();
    fill(250,0,0);
    textFont(myFont);
    textSize(120);
    text("Game Over\n  You Lost", width/2-400, height/2-100);
  }
  else if(state===3){
    camera.off();
    fill(250,0,0);
    textFont(myFont);
    textSize(120);
    text("Game Over\n  You Won!", width/2-400, height/2-100);
  }
}

function scoreboard(){
  fill(255); //draws top right display
  stroke(0);
  strokeWeight(4);
  rect(camera.position.x-150, camera.position.y-400, width-450, 50);
  line(camera.position.x+200, camera.position.y-400, camera.position.x+200, camera.position.y-350);
  line(camera.position.x+450, camera.position.y-400, camera.position.x+450, camera.position.y-350);
  strokeWeight(0);
  fill(0,0,200,90);
  family1=ellipse(camera.position.x-95, camera.position.y-375, f1, f1);
  family2=ellipse(camera.position.x-35, camera.position.y-375, f2, f2);
  family3=ellipse(camera.position.x+25, camera.position.y-375, f3, f3);
  family4=ellipse(camera.position.x+85, camera.position.y-375, f4, f4);
  family5=ellipse(camera.position.x+145, camera.position.y-375, f5, f5);
  fill(250,100,100,90);
  heart1=ellipse(camera.position.x+240, camera.position.y-375, h1, h1);
  heart2=ellipse(camera.position.x+320, camera.position.y-375, h2, h2);
  heart3=ellipse(camera.position.x+400, camera.position.y-375, h3, h3);
  fill(0);
  timer();
}

function timer() {
  //tracks time elapsed
  mins = floor(timeStart / 60000);
  sec = floor(timeStart / 1000);
  if (sec >= 60) {
    sec -= 60*mins;
  }
  fill(0);
  textSize(30);
  if (sec < 10) {
    text(mins + " : 0" + sec, camera.position.x+490, camera.position.y-365);
  } else {
    text(mins + " : " + sec, camera.position.x+490, camera.position.y-365);
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
  if(second()===10 || second()===20 || second()===30 || second()===40 || second()===50 || second()===60){
    createCough(maga1.position.x,maga1.position.y);
    cough.draw();
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
  if (keyIsDown(65) || keyIsDown(97)) {
    userSprite.position.x -= 5;
  }
  if (keyIsDown(68) || keyIsDown(100)) {
    userSprite.position.x += 5;
  }
  if (keyIsDown(87) || keyIsDown(119)) {
    userSprite.position.y -= 5;
  }
  if (keyIsDown(83) || keyIsDown(115)) {
    userSprite.position.y += 5;
  }
}

function doMovePuzzle(){
  if (slider1.collide(mover1) === true) {
    // mover1.remove();
    slider1.remove();
  }
  if (slider2.collide(mover2) === true) {
    // mover2.remove();
    slider2.remove();
  }
  if (slider3.collide(mover3) === true) {
    // mover3.remove();
    slider3.remove();
  }
  if (slider4.collide(mover4) === true) {
    // mover4.remove();
    slider4.remove();
    mask5.visible = true;
  }
}

function collision() {
  //details object interactions
  userSprite.displace(sliders);
  userSprite.overlap(safeSpot);
  userSprite.collide(obstacles);
  userSprite.collide(movers);
  magas.collide(safeSpot);
  magas.collide(magas);
  magas.collide(obstacles);
  karens.collide(obstacles);
  sliders.collide(obstacles);

  //   userSprite.overlap(colorPuzzle, doColorPuzzle);
  
  if (userSprite.collide(karens) || userSprite.collide(magas)) {
    userSprite.position.x = safeSpot.position.x;
    userSprite.position.y = safeSpot.position.y;
    heartCounter--;
    if(heartCounter===2){
      h3=0;
    }
    else if(heartCounter==1){
      h2=0;
    }
    if(heartCounter===0){
      h1=0;
      clearScreen();
      // camera.off();
      state=2;
    }
  }
  if (userSprite.overlap(mask1)) {
    mask1.remove();
    f1=0;
  }
  if (userSprite.overlap(mask2)) {
    mask2.remove();
    f2=0;
    }
  if (userSprite.overlap(mask3)) {
    mask3.remove();
    f3=0;
  }
  if (userSprite.overlap(mask4)) {
    mask4.remove();
    f4=0;
      }
  if (userSprite.overlap(mask5)) {
    mask5.remove();
    f5=0;
  }
}

function checkMasks(){
  if(mask1.removed===true && mask2.removed===true && mask3.removed===true && mask4.removed===true && mask5.removed===true){
    clearScreen();
    if(heartCounter>0){
      // camera.off();
      state=3;
    }
    else{
      // camera.off();
      state=2;
    }
  }
}

function clearScreen(){
  // camera.off();
  clear();
      obstacles.removeSprites();
      magas.removeSprites();
      karens.removeSprites();
      sliders.removeSprites();
      colorPuzzle.removeSprites();
      masks.removeSprites();
      movers.removeSprites();
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
