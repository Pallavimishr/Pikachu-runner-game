var BgImg , bg ;
var snorlaxImg , snorlax , snorlaxGroup ;
var pokemontrainer , pokemontrainerImg  ; 
var pikachuImg , pikachu  ;
var invisibleGround ;

function preload(){
BgImg = loadImage("back ground.png");
snorlaxImg = loadImage("Snorlax.png");
blastoiseImg = loadImage("Blastoise.jpg");
pikachuImg = loadImage("pikachu.gif");
pokemontrainerImg = loadImage("running boy.gif")

snorlaxGroup = new Group();

}

function setup() {
  createCanvas(1000,600);
  bg = createSprite(200,180,400,20);
  bg.addImage("bg",BgImg);
  bg.x = bg.width /2;

  pikachu = createSprite(250 , 500 , 50 , 50)
  pikachu.scale = 0.5;
  pikachu.addImage("pikachu" , pikachuImg);

  pikachu.setCollider("rectangle",0,0,200,pikachu.height);
  pikachu.debug = true

  pokemontrainer = createSprite(100 , 550 , 50 , 50)
  pokemontrainer.addImage("pokemontrainer" , pokemontrainerImg);

  pokemontrainer.setCollider("rectangle",0,0,100,pokemontrainer.height);
  pokemontrainer.debug = true

  invisibleGround = createSprite(500,550,1000,5);
  invisibleGround.visible = true;
}
function draw() {
 background(0);
 bg.velocityX = -8
 console.log(bg.x)

 if (bg.x<0){
  bg.x = bg.width/2;
 }

 if(keyDown("space")){
   pikachu.velocityY = -3;
 }
 if(keyDown("down")){
  pikachu.velocityY = 3;
}

pikachu.collide(invisibleGround);
pokemontrainer.collide(invisibleGround);

 

 spawnsnorlax();
 drawSprites();

}
function spawnsnorlax(){
  
    if(frameCount % 60 === 0){
    var snorlax = createSprite(200 , 500);
    snorlax.addImage(snorlaxImg);
    snorlax.collide(invisibleGround);
    

    snorlax.x = Math.round(random(550 , 600))
    snorlax.velocityX = -8;

    pikachu.depth = snorlax.depth ;
    pikachu.depth += 1 ;

    snorlax.lifetime = 800;

    snorlaxGroup.add(snorlax);
    }
}

