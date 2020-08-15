//Create variables here
var dog;
var happyDog;
var database;
var foodS;
var foodStock;
var dog1;


function preload()
{
  happyDog=loadImage("images/dogImg1.png")
   dog1=loadImage("images/dogImg.png")

}

function setup() {
	createCanvas(500,500);
  dog=createSprite(250,250,10,10)
  dog.addImage(dog1);
  dog.scale=0.3

  database=firebase.database()

  foodStock=database.ref('food')
  foodStock.on("value",readStock);
  
}


function draw() {  

  background ("green")

  if (keyWentDown(UP_ARROW)) {
    writeStock(foodS)
    dog.addImage(happyDog);

  }
   

  drawSprites();
}



function readStock(data) {
  foodS=data.val()
}

function writeStock(x) {
  if (x<=0) {
    x=0
  } else {
    x=x-1
  }
  database.ref('/').update({
    Food:x
  })
}


