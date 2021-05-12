//Create variables here
var dog, happyDog, dogImg, happyDogImg;
var database;
var foodS, foodStock;

function preload() {
  //load images here
  dogImg = loadImage("images/dogImg.png");
  happyDogImg = loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(500, 500);
  foodStock = database.ref("Food");
  foodStock.on("value", redStoke);

  dog = createSprite(200, 200, 20, 20);
  dog.addImage(dogImg);
  dog.scale = 0.1;
}

function draw() {
  background(46, 139, 87);
  drawSprites();
  //add styles here
}

function KeyPressed() {
  if (keyWentDown(UP_ARROW)) {
    writeStok(foodS);
    dog.addImage(happyDogImg);
  }
}
