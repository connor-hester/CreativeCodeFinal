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
var newCases;
var url;
var data;
var offset;
var timer1;


function preload() { //loads all images and sounds plus font and JSON
  // soundFormats('wav','mp3');
  // introMusic=loadSound("assets/introMusic.wav");
  // backgroundTheme=loadSound("assets/backgroundTheme.wav");
  user = loadImage('media/userChar.png');
  karen = loadImage("media/karenChar.png");
  maga = loadImage("media/magaChar.png");
  trumpFlag = loadImage("media/trumpFlag.png");
  confederateFlag = loadImage("media/confederateFlag.png");
  blueLivesFlag = loadImage("media/blueLivesFlag.png");
  dontTreadFlag = loadImage("media/dontTreadFlag.png");
  mask = loadImage("media/mask.png");
  recycle = loadImage("media/recycle.png");
  recycleFull=loadImage("media/recycleBinFull.png");
  masked = loadImage("media/maskedChar.png");
  backgroundImg1=loadImage("media/emptyRoad.png");
  backgroundImg2 = loadImage("media/background.png");
  instructions=loadImage("media/instructions2.png")
  b1 = loadImage("media/b01.png");
  b2 = loadImage("media/b002.png");
  b3 = loadImage("media/b3.png");
  b4 = loadImage("media/b4.png");
  b5 = loadImage("media/b5.png");
  b6 = loadImage("media/b6.png");
  b7 = loadImage("media/b7.png");
  b8 = loadImage("media/b8.png");
  b9 = loadImage("media/b9.png");
  b10 = loadImage("media/b10.png");
  b11 = loadImage("media/b11.png");
  b12 = loadImage("media/b12.png");
  b13 = loadImage("media/b13.png");
  b14 = loadImage("media/b14.png");
  b15 = loadImage("media/b15.png");
  b16 = loadImage("media/b16.png");
  b17 = loadImage("media/b17.png");
  border1 = loadImage("media/border1.png");
  border2 = loadImage("media/border2.png");
  car = loadImage("media/car.png");
  sign = loadImage("media/sign.png");
  messageBubbleR=loadImage("media/messageBubbleR.png");
  messageBubbleL=loadImage("media/messageBubbleL.png");
  carAnimation=loadAnimation("media/carAnimation01.png","media/carAnimation01.png","media/carAnimation02.png","media/carAnimation02.png","media/carAnimation03.png","media/carAnimation03.png","media/carAnimation02.png","media/carAnimation02.png");
  unmaskedSmall = loadImage("media/userCharSmall.png");
  maskedSmall = loadImage("media/maskedCharSmall.png");
  myFont = loadFont("assets/RetroGaming.ttf");
  url = "https://api.covidtracking.com/v1/us/current.json";
  data = loadJSON(url);
}

function setup() {
  createCanvas(1200, 800);
  SCENE_W = displayWidth * 2; //total screen size is double that of the window
  SCENE_H = displayHeight * 2;
  obstacles = new Group();
  masks = new Group();
  colorPuzzle = new Group();
  movers = new Group();
  sliders = new Group();
  magas = new Group();
  karens = new Group();

  carSprite=createSprite(width/2-220,height/2+50); //creates car for intro animation
  carSprite.addAnimation('drive',carAnimation);
  messageR=createSprite(width/2,height/2-100); //creates speech bubble for intro animation
  messageR.addImage(messageBubbleR);
  messageL=createSprite(width/2-460,height/2-100);//creates other speech bubble
  messageL.addImage(messageBubbleL);
  safeSpot = createSprite(75, SCENE_H / 2); //creates the spawn point for the game
  safeSpot.addImage(car);
  safeSpot.setCollider("rectangle", 0, 0, 150, 129);
  townSign = createSprite(75, SCENE_H / 2 - 150); //creates the town sign displayed near the spawn 
  townSign.addImage(sign);
  townSign.setCollider("rectangle", 0, 0, 150, 130);
  hearts = [heart1, heart2, heart3];

  box1 = new Box(SCENE_W / 2, SCENE_H / 2, b1, 2080, 100); //creates the sprites for all the boundaries boxes and obstacles
  box1.create();
  obstacles.add(box1.boxSprite);
  box2 = new Box(SCENE_W / 2, SCENE_H / 2 + 150, b2, 100, 1500);
  box2.create();
  obstacles.add(box2.boxSprite);
  box3 = new Box(300, 500, b3, 600, 100);
  box3.create();
  obstacles.add(box3.boxSprite);
  box4 = new Box(550, 100, b4, 100, 200);
  box4.create();
  obstacles.add(box4.boxSprite);
  box5 = new Box(SCENE_W - 500, SCENE_H / 2 - 150, b5, 1000, 50);
  box5.create();
  obstacles.add(box5.boxSprite);
  box6 = new Box(SCENE_W / 2 + 550, SCENE_H / 2 - 275, b5, 1000, 50);
  box6.create();
  obstacles.add(box6.boxSprite);
  box7 = new Box(SCENE_W - 500, SCENE_H / 2 - 400, b5, 1000, 50);
  box7.create();
  obstacles.add(box7.boxSprite);
  box8 = new Box(SCENE_W / 2 + 550, SCENE_H / 2 - 525, b5, 1000, 50);
  box8.create();
  obstacles.add(box8.boxSprite);
  box9 = new Box(SCENE_W - 500, SCENE_H / 2 - 650, b5, 1000, 50);
  box9.create();
  obstacles.add(box9.boxSprite);
  box10 = new Box(SCENE_W - 600, SCENE_H - 25, b6, 1200, 50);
  box10.create();
  obstacles.add(box10.boxSprite);
  box11 = new Box(SCENE_W / 2 + 265, SCENE_H / 2 + 525, b7, 50, 650);
  box11.create();
  obstacles.add(box11.boxSprite);
  box12 = new Box(SCENE_W / 2 + 790, SCENE_H / 2 + 175, b8, 1100, 50);
  box12.create();
  obstacles.add(box12.boxSprite);
  box13 = new Box(SCENE_W - 125, SCENE_H - 425, b9, 50, 550);
  box13.create();
  obstacles.add(box13.boxSprite);
  box14 = new Box(SCENE_W - 600, SCENE_H - 175, b10, 900, 50);
  box14.create();
  obstacles.add(box14.boxSprite);
  box15 = new Box(SCENE_W / 2 + 410, SCENE_H - 375, b11, 50, 450);
  box15.create();
  obstacles.add(box15.boxSprite);
  box16 = new Box(SCENE_W - 655, SCENE_H / 2 + 325, b12, 800, 50);
  box16.create();
  obstacles.add(box16.boxSprite);
  box17 = new Box(SCENE_W - 280, SCENE_H - 450, b13, 50, 300);
  box17.create();
  obstacles.add(box17.boxSprite);
  box18 = new Box(SCENE_W - 580, SCENE_H - 320, b14, 650, 50);
  box18.create();
  obstacles.add(box18.boxSprite);
  box19 = new Box(SCENE_W / 2 + 560, SCENE_H - 385, b15, 50, 180);
  box19.create();
  obstacles.add(box19.boxSprite);
  box20 = new Box(SCENE_W - 655, SCENE_H - 450, b16, 500, 50);
  box20.create();
  obstacles.add(box20.boxSprite);
  box21 = new Box(SCENE_W / 2, 0, border1, SCENE_W, 1);
  box21.create();
  obstacles.add(box21.boxSprite);
  box22 = new Box(SCENE_W, SCENE_H / 2, border2, 1, SCENE_H);
  box22.create();
  obstacles.add(box22.boxSprite);
  box23 = new Box(SCENE_W / 2, SCENE_H, border1, SCENE_W, 1);
  box23.create();
  obstacles.add(box23.boxSprite);
  box24 = new Box(0, SCENE_H / 2, border2, 1, SCENE_H);
  box24.create();
  obstacles.add(box24.boxSprite);
  box25 = new Box(650, SCENE_H - 400, b10, 900, 50);
  box25.create();
  obstacles.add(box25.boxSprite);
  box26 = new Box(650, SCENE_H - 400, b17, 50, 600);
  box26.create();
  obstacles.add(box26.boxSprite);

  color1 = new CPuzzle(580, 400, 200, 0, 0); //creates the components of the color puzzle
  color1.create();
  colorPuzzle.add(color1.colorSprite);
  color2 = new CPuzzle(580, 350, 230, 230, 0);
  color2.create();
  colorPuzzle.add(color2.colorSprite);
  color3 = new CPuzzle(580, 300, 0, 200, 0);
  color3.create();
  colorPuzzle.add(color3.colorSprite);
  color4 = new CPuzzle(580, 250, 0, 0, 200);
  color4.create();
  colorPuzzle.add(color4.colorSprite);
  colors = [
    color(200, 0, 0),
    color(230, 230, 0),
    color(0, 200, 0),
    color(0, 0, 200),
  ];

  mover1 = new Mover(SCENE_W - 150, 325); //creates the recycling bins for the slider puzzle
  mover1.create();
  movers.add(mover1.moverSprite);
  mover2 = new Mover(SCENE_W / 2 + 200, 450);
  mover2.create();
  movers.add(mover2.moverSprite);
  mover3 = new Mover(SCENE_W - 150, 575);
  mover3.create();
  movers.add(mover3.moverSprite);
  mover4 = new Mover(SCENE_W / 2 + 200, 700);
  mover4.create();
  movers.add(mover4.moverSprite);

  slider1 = new Slider(SCENE_W / 2 + 400, 320, trumpFlag); //creates the different flags used in the slider puzzle
  slider1.create();
  sliders.add(slider1.sliderSprite);
  slider2 = new Slider(SCENE_W - 350, 445, confederateFlag);
  slider2.create();
  sliders.add(slider2.sliderSprite);
  slider3 = new Slider(SCENE_W / 2 + 400, 570, dontTreadFlag);
  slider3.create();
  sliders.add(slider3.sliderSprite);
  slider4 = new Slider(SCENE_W - 350, 695, blueLivesFlag);
  slider4.create();
  sliders.add(slider4.sliderSprite);

  userSprite = createSprite(50, SCENE_H / 2), 50, 50; //creates the playable character
  userSprite.addImage(user);
  userSprite.setCollider("circle", 0, 0, 25);

  maga1 = new Maga(SCENE_W / 2, 150); //creates the maga enemy
  maga1.create();
  magas.add(maga1.magaSprite);
  maga2 = new Maga(50, SCENE_H - 100);
  maga2.create();
  magas.add(maga2.magaSprite);
  maga3 = new Maga(SCENE_W - 200, SCENE_H / 2);
  maga3.create();
  magas.add(maga3.magaSprite);
  maga4 = new Maga(SCENE_W / 2 + 150, SCENE_H - 100);
  maga4.create();
  magas.add(maga4.magaSprite);
  maga5=new Maga(SCENE_W-500,100);
  maga5.create();
  magas.add(maga5.magaSprite);
  maga6=new Maga(100,100);
  maga6.create();
  magas.add(maga6.magaSprite);
  maga7=new Maga(SCENE_W/2-150,SCENE_H-100);
  maga7.create();
  magas.add(maga7.magaSprite);

  mask1 = new Mask(SCENE_W / 2 + 650, SCENE_H / 2 + 520); //creates the mask sprites
  mask1.create();
  masks.add(mask1.maskSprite);
  mask2 = new Mask(250, 100);
  mask2.create();
  masks.add(mask2.maskSprite);
  mask3 = new Mask(800, SCENE_H - 280);
  mask3.create();
  masks.add(mask3.maskSprite);
  mask4 = new Mask(SCENE_W - 150, 200);
  mask4.create();
  masks.add(mask4.maskSprite);
  mask5 = new Mask(SCENE_W - 200, SCENE_H / 2);
  mask5.create();
  mask5.maskSprite.visible = false;
  masks.add(mask5.maskSprite);

  karen1 = new Karen(SCENE_W / 4 + 100, 50, 90, 270, box21.boxSprite, box1.boxSprite); //creates the Karen enemy
  karen1.create();
  karens.add(karen1.karenSprite);
  karen2 = new Karen(SCENE_W / 2 - 200, SCENE_H / 2 - 100, 270, 90, box1.boxSprite, box21.boxSprite);
  karen2.create();
  karens.add(karen2.karenSprite);
  karen3 = new Karen(1100, 150, 0, 180, box4.boxSprite, box22.boxSprite);
  karen3.create();
  karens.add(karen3.karenSprite);
  karen4 = new Karen(100, SCENE_H / 2 + 100, 0, 180, box24.boxSprite, box2.boxSprite);
  karen4.create();
  karens.add(karen4.karenSprite);
  karen5 = new Karen(SCENE_W / 2 - 100, SCENE_H - 50, 180, 0, box2.boxSprite, box24.boxSprite);
  karen5.create();
  karens.add(karen5.karenSprite);
  karen6 = new Karen(SCENE_W / 2 - 100, SCENE_H / 2 + 250, 270, 90, box23.boxSprite, box1.boxSprite);
  karen6.create();
  karens.add(karen6.karenSprite);
  karen7 = new Karen(100, SCENE_H - 200, 90, 270, safeSpot, box23.boxSprite);
  karen7.create();
  karens.add(karen7.karenSprite);
  karen8=new Karen(SCENE_W-400,SCENE_H/2-900,90,270,box21.boxSprite, box9.boxSprite);
  karen8.create();
  karens.add(karen8.karenSprite);
  karen9=new Karen(SCENE_W-700,SCENE_H/2-900,90,270,box21.boxSprite,box9.boxSprite);
  karen9.create();
  karens.add(karen9.karenSprite);

  heartCounter = 3;
  state = 0;
  maskCounter = 0;
  f1 = 30; //creates the sizes for the blue circles in the top left display
  f2 = 30;
  f3 = 30;
  f4 = 30;
  f5 = 30;
  h1 = 30;
  h2 = 30;
  h3 = 30;
  
  offset=49000; //offset for the timers start(49 seconds because that is the length of time for the opening animation)
}


function draw() {
  if(state===0){ //I turned off the intro because it caused a ton of bugs in my code that I couldn't squash before the presenation :(
   intro(); //does intro animation
   
  //  introMusic.loop();
  }
  else if(state===1){
    background(instructions); //displays instructions
    // introMusic.stop();
    // backgroundTheme.play();
    // backgroundTheme.loop();
  }
  else if (state === 2) { //the actual gameplay
    background(backgroundImg2);
    // backgroundTheme.loop();
    camera.position.x = userSprite.position.x; //sets the cameras position to that of the user
    camera.position.y = userSprite.position.y;
    timeStart = millis()-offset; //starts timer
    karenMove();
    magaMove();
    userMove();
    collision();
    doColorPuzzle();
    doMovePuzzle();
    checkMasks();
    loseLife();
    removeMasks();
    drawSprites();
    scoreboard();
  }
  else if (state === 3) {//if the game is lost
    loseCondition();
  }
  else if (state === 4) {//if the game is won
    winCondition();
  }
}

function winCondition(){ //dictates the display screen if you win the game
  clearScreen();
  camera.off();
  fill(255);
  rect(0, 0, width, height);
  fill(0, 0, 250);
  textFont(myFont);
  textSize(100);
  text("Game Over\n You Won!", width / 2 - 350, height / 2 - 300);
  textSize(50);
  fill(0);
  text("In the time you played, " + newCases + "*\nmore people tested positive \nfor COVID** Stop the spread.\n\tWear a goddamn mask (plz)", width / 2 - 450, height / 2);
  textSize(15);
  text("*Cases include probable cases (cases without a confirmatory lab result)", 50, height / 2 + 300); //https://wwwn.cdc.gov/nndss/conditions/coronavirus-disease-2019-covid-19/case-definition/2020/
  text("**Source: The COVID Tracking Project API (covidtracking.com)", 50, height / 2 + 350);
}

function loseCondition(){//dictates the display screen if you win the game
  clearScreen();
  camera.off();
  fill(255);
  rect(0, 0, width, height);
  fill(250, 0, 0);
  textFont(myFont);
  textSize(100);
  text("Game Over\n You Lost", width / 2 - 350, height / 2 - 300);
  textSize(50);
  fill(0);
  text("In the time you played, " + newCases + "*\nmore people tested positive \nfor COVID** Stop the spread.\n\tWear a goddamn mask (plz)", width / 2 - 450, height / 2);
  textSize(15);
  text("*Cases include probable cases (cases without a confirmatory lab result)", 50, height / 2 + 300); //https://wwwn.cdc.gov/nndss/conditions/coronavirus-disease-2019-covid-19/case-definition/2020/
  text("**Source: The COVID Tracking Project API (covidtracking.com)", 50, height / 2 + 350);
}

function intro(){//does the entire intro animation sequence
  timer1=millis();//starts a function level timer
  background(backgroundImg1);
  textFont(myFont);
  if(timer1/1000<43){
  fill(255,0,0);
  textSize(16);
  text("press ENTER to skip intro",width/2+200,80);
  }
  textSize(12);
  fill(0);
  if(second()%2===0){ //moves the car slightly in the x and y
    carSprite.position.y+=0.3;
    carSprite.position.x-=0.3;
  }
  else if(second()%2===1){
    carSprite.position.y-=0.3;
    carSprite.position.x+=0.3;
  }
  if(timer1/1000>3 && timer1/1000<6){ //messages are displayed based on time elapsed
    drawSprite(messageR);
    text("wait, did you bring\nour masks?",width/2-80,height/2-150);
  }
  if(timer1/1000>6 && timer1/1000<9){
    drawSprite(messageL);
    text("no, I thought you\ndid...",width/2-530,height/2-150);
  }
  if(timer1/1000>9 && timer1/1000<13){
    drawSprite(messageR);
    text("we can't visit your\nparents without them\nwe'd risk exposing\nthem...",width/2-85,height/2-150);
  }
  if(timer1/1000>13 && timer1/1000<16){
    drawSprite(messageL);
    text("true, what should\nwe do??",width/2-530,height/2-150);
  }
  if(timer1/1000>16 && timer1/1000<21){
    drawSprite(messageR);
    text("I'm not sure we\nhaven't passed a\ntown in a while can\nyou check the map?",width/2-85,height/2-150);
  }
  if(timer1/1000>21 && timer1/1000<23){
    drawSprite(messageL);
    text("ya, just a sec",width/2-530,height/2-150);
  }
  if(timer1/1000>26 && timer1/1000<30){
    drawSprite(messageL);
    text("okay it looks like\nthere's a ...\nYee-yee-ville in 10\nmiles. Sounds\n kinda sketchy to me",width/2-530,height/2-150);
  }
  if(timer1/1000>30 && timer1/1000<34){
    drawSprite(messageR);
    text("yeah, odd. We\ncan stop there and\nI'll see if I\ncan find us some\nmasks quickly",width/2-85,height/2-150);
  }
  if(timer1/1000>34 && timer1/1000<39){
    drawSprite(messageL);
    text("ok, we should be\ncareful...we're in\ntrump country, not\nthe nicest or\nsmartest folk here",width/2-530,height/2-150);
  }
  if(timer1/1000>39 && timer1/1000<41){
    drawSprite(messageR);
    text("true. we'll be\ncareful and get out\nfast",width/2-85,height/2-150);
  }
  if(timer1/1000>41 && timer1/1000<43){//car zooms off
    carSprite.position.x-=6;
    carSprite.position.y+=6;
  }
  if(timer1/1000>43 && timer1/1000<46){//title screen display
    textSize(50);
    text("Where's My Mask?",width/2-550,height/2-300);
    textSize(20);
    text("Created by Connor Hester",width/2-350,height/2-200);
  }
  if(timer1/1000>44){
    textSize(16);
    fill(255,0,0);
    text("press ENTER to continue",width/2+200,80);
  }
  
  drawSprite(carSprite);
}

function keyPressed(){
  if(keyCode===ENTER && state===0){//advances state and clears screen after the first animation
    offset=timer1;
    carSprite.remove();
    messageR.remove();
    messageL.remove();
    state=1;
    // introMusic.play();
  }
  else if(keyCode===ENTER && state===1){//advances state from instructions to game
    // backgroundTheme.play();
    carSprite.remove();
    messageR.remove();
    messageL.remove();
    state=2;
  }
}

function getNewCases(x) {//calculates the number of new cases of covid that ocurred during the game
  let seconds = timeStart / 1000;
  let cases = x[0].positiveIncrease;//calls for the case increase value from the API
  caseData = floor((cases / 8640) * seconds);//finds the number of cases per second and then multiplies by seconds elapsed
  return caseData;
}

function scoreboard() {//draws the display in the top right
  fill(255); 
  stroke(0);
  strokeWeight(4);
  rect(camera.position.x - 150, camera.position.y - 400, width - 450, 50); //white background
  line(camera.position.x + 200, camera.position.y - 400, camera.position.x + 200, camera.position.y - 350);
  line(camera.position.x + 450, camera.position.y - 400, camera.position.x + 450, camera.position.y - 350);
  strokeWeight(0);
  fill(0,0,200,95);
  family1 = ellipse(camera.position.x-95,camera.position.y-375,f1,f1);//the blue circles representing the masks remaining
  family2 = ellipse(camera.position.x-35,camera.position.y-375,f2,f2);
  family3 = ellipse(camera.position.x+25,camera.position.y-375,f3,f3);
  family4 = ellipse(camera.position.x+85,camera.position.y-375,f4,f4);
  family5 = ellipse(camera.position.x+145,camera.position.y-375,f5,f5);
  fill(250, 100, 100);
  heart1 = ellipse(camera.position.x + 240, camera.position.y - 375, h1, h1);//the pink circles representing the hearts remaining
  heart2 = ellipse(camera.position.x + 320, camera.position.y - 375, h2, h2);
  heart3 = ellipse(camera.position.x + 400, camera.position.y - 375, h3, h3);
  fill(0);
  timer();
}

function timer() {//tracks time elapsed
  mins = floor(timeStart / 60000);
  sec = floor(timeStart / 1000);
  if (sec >= 60) { //makes sure the seconds go to 0 after every minute passes
    sec -= 60 * mins;
  }
  fill(0);
  textSize(30);
  if (sec < 10) { //when there is less than 10 seconds, a 0 is added to the front so the timer looks normal
    text(mins + " : 0" + sec, camera.position.x + 490, camera.position.y - 365);
  } else {
    text(mins + " : " + sec, camera.position.x + 490, camera.position.y - 365);
  }
}

function karenMove() {//calls the karen move() functions
  karen1.move();
  karen2.move();
  karen3.move();
  karen4.move();
  karen5.move();
  karen6.move();
  karen7.move();
  karen8.move();
  karen9.move();
}

function magaMove() {//calls the maga move() functions
  maga1.move();
  maga2.move();
  maga3.move();
  maga4.move();
  maga5.move();
  maga6.move();
  maga7.move();
}

function userMove() {
  fill(0, 60);
  strokeWeight(0);
  ellipse(userSprite.position.x, userSprite.position.y + 20, 40, 25);//draws the user shadow
  //controls user movement
  if (keyIsDown(65) || keyIsDown(97)) {//press 'a' and move left
    userSprite.position.x -= 5;
  }
  if (keyIsDown(68) || keyIsDown(100)) {//press 'd' and move right
    userSprite.position.x += 5;
  }
  if (keyIsDown(87) || keyIsDown(119)) {//press 'w' and move up
    userSprite.position.y -= 5;
  }
  if (keyIsDown(83) || keyIsDown(115)) {//press 's' and  move down
    userSprite.position.y += 5;
  }
}

function doMovePuzzle() {//details the collision interaction between the movers and sliders
  if (slider1.sliderSprite.collide(mover1.moverSprite) === true) {
    slider1.sliderSprite.remove();
    mover1.moverSprite.addImage(recycleFull);
  }
  if (slider2.sliderSprite.collide(mover2.moverSprite) === true) {
    slider2.sliderSprite.remove();
    mover2.moverSprite.addImage(recycleFull);
  }
  if (slider3.sliderSprite.collide(mover3.moverSprite) === true) {
    slider3.sliderSprite.remove();
    mover3.moverSprite.addImage(recycleFull);
  }
  if (slider4.sliderSprite.collide(mover4.moverSprite) === true) {
    slider4.sliderSprite.remove();
    mover4.moverSprite.addImage(recycleFull);
    mask5.maskSprite.visible = true;//after the puzzle is completed, the 5th masks appears
  }
}

function loseLife() {
  if (userSprite.collide(karens) || userSprite.collide(magas)) {//if the user collides with maga or karen, they are sent back to the spawn point
    userSprite.position.x = safeSpot.position.x;
    userSprite.position.y = safeSpot.position.y;
    userSprite.addImage(user);
    heartCounter--;//and a heart is taken away
    if (heartCounter === 2) {//removes the hearts from the top right display
      h3 = 0;
    }
    else if (heartCounter == 1) {
      h2 = 0;
    }
    if (heartCounter === 0) { //if there are no hearts left, the clear screen and case calculation functions are called and state is advanced
      h1 = 0;
      newCases = getNewCases(data);
      clearScreen();
      // camera.off();
      state = 3;
    }
  }
}

function collision() {
  //details object collisions for the user as well as the NPC's
  userSprite.displace(sliders);
  userSprite.overlap(safeSpot);
  userSprite.collide(obstacles);
  userSprite.collide(movers);
  userSprite.collide(townSign);
  magas.collide(safeSpot);
  magas.collide(magas);
  magas.collide(obstacles);
  karens.collide(obstacles);
  sliders.collide(obstacles);
}

function removeMasks() {
  if (userSprite.overlap(mask1.maskSprite)) { //if user collides with a mask
      userSprite.addImage(masked);//if this is the first mask, the user image changes from unmasked to masked
    mask1.maskSprite.remove();//removes the mask from  play
    f1=0;//removes the mask from the top right display
    maskCounter++;
  }
  if (userSprite.overlap(mask2.maskSprite)) {
      userSprite.addImage(masked);
    mask2.maskSprite.remove();
    f2=0;
    maskCounter++;
  }
  if (userSprite.overlap(mask3.maskSprite)) {
   
      userSprite.addImage(masked);
    
    mask3.maskSprite.remove();
    f3=0;
    maskCounter++;
  }
  if (userSprite.overlap(mask4.maskSprite)) {
   
      userSprite.addImage(masked);
    
    mask4.maskSprite.remove();
    f4=0;
    maskCounter++;
  }
  if (userSprite.overlap(mask5.maskSprite)) {
    
      userSprite.addImage(masked);
    
    mask5.maskSprite.remove();
    f5=0;
    maskCounter++;
  }
}

function checkMasks() {//dictates the game winning conditions
  if (mask1.maskSprite.removed === true && mask2.maskSprite.removed === true && mask3.maskSprite.removed === true && mask4.maskSprite.removed === true && mask5.maskSprite.removed === true) { //if all masks are gone then clear the screen
    clearScreen();
    newCases = getNewCases(data);
    state = 4;
    
  }
}

function clearScreen() { //gets rid of everything on the screen
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
}

function doColorPuzzle() {
  //mechanics of the color puzzle component
  color1Count = 0;
  color2Count = 1;
  color3Count = 2;
  color4Count = 3;
  if (userSprite.collide(color1.colorSprite) === true) {//if the user collides with a color puzzle piece then it changes color
    color1Count++;
    if (color1Count > 3) {
      color1Count = 0;
    }
    color1.colorSprite.shapeColor = colors[color1Count];
  }
  if (userSprite.collide(color2.colorSprite) === true) {
    color2Count++;
    if (color2Count > 3) {
      color2Count = 0;
    }
    color2.colorSprite.shapeColor = colors[color2Count];
  } if (userSprite.collide(color3.colorSprite) === true) {
    color3Count++;
    if (color3Count > 3) {
      color3Count = 0;
    }
    color3.colorSprite.shapeColor = colors[color3Count];
  } if (userSprite.collide(color4.colorSprite) === true) {
    color4Count++;
    if (color4Count > 3) {
      color4Count = 0;
    }
    color4.colorSprite.shapeColor = colors[color4Count];
  }
  if (
    color1.colorSprite.shapeColor === colors[1] &&//if all of the puzzle pieces have changed color to the specified color, the sprites are removed and shifted out of the way so the user can pass
    color2.colorSprite.shapeColor === colors[2] &&
    color3.colorSprite.shapeColor === colors[3] &&
    color4.colorSprite.shapeColor === colors[0]
  ) {
    color1.colorSprite.position.y -= 200;
    color2.colorSprite.position.y -= 150;
    color3.colorSprite.position.y -= 100;
    color4.colorSprite.position.y -= 50;
    colorPuzzle.removeSprites();
  }
}
