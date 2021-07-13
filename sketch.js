const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var block;
var cubePic;
var blockGroup;

var blockDesign_img, bottom_1Side_img; 
var cubeDesign_img, cubeDown_img, cubeLeft_img, cubeRight_img, cubeUp_img;

var blockSprite1;
var cubeSprite;
var Bottom,Left,Right, Top,
 BottomLeft, BottomRight, TopLeft, TopRight, 
 NoBottom, NoLeft, NoRight, NoTop,
 Full, TopDown, LeftRight;
function preload(){
  blockDesign_img = loadImage("Block Design.png");
   Bottom = loadImage("Bottom 1Side.png");
   Left = loadImage("Left 1Side Block.png");
   Right = loadImage("Right 1Side Block.png");
   Top = loadImage("Top 1Side Block.png");
   BottomLeft = loadImage("BottomLeft 2Side Block.png");
   BottomRight = loadImage("BottomRight 2Side Block.png");
   TopLeft = loadImage("TopLeft 2Side block.png");
   TopRight = loadImage("TopRight 2Side block.png");
   NoBottom = loadImage("NoBottom 3Side Block.png");
   NoLeft = loadImage("NoLeft 3Side Block.png");
   NoRight = loadImage("NoRight 3Side Block.png");
   NoTop = loadImage("NoTop 3Side Block.png");
   Full = loadImage("Full Block.png");
   TopDown = loadImage("TopDown 2Side Block.png");
   LeftRight = loadImage("LeftRight 2Side Block.png");

  cubeDesign_img = loadImage("Cube Design.png");
  cubeLeft_img = loadImage("CubeLeft.png");
  cubeRight_img = loadImage("CubeRight.png");
  cubeUp_img = loadImage("CubeUp.png");
  cubeDown_img = loadImage("CubeDown.png");
}
function setup() {
  engine = Engine.create();
  world = engine.world;
  createCanvas(600,600);
  //block1 = new Block(200,200);
  //block2 = new Block(240,200);
  //block3 = new Block(240,240);
  //block4 = new Block(200,240);
  blockGroup = new Group();  

  blockSprite1 = createSprite(120, 00, 40, 40);
  blockSprite1.addImage("Block", LeftRight);
  blockGroup.add(blockSprite1)

  blockSprite2 = createSprite(120, 40, 40, 40);
  blockSprite2.addImage("Block", LeftRight);
  blockGroup.add(blockSprite2)

  blockSprite3 = createSprite(120, 80, 40, 40);
  blockSprite3.addImage("Block", LeftRight);
  blockGroup.add(blockSprite3)

  blockSprite4 = createSprite(120, 120, 40, 40);
  blockSprite4.addImage("Block", LeftRight);
  blockGroup.add(blockSprite4)

  blockSprite5 = createSprite(120, 160, 40, 40);
  blockSprite5.addImage("Block", LeftRight);
  blockGroup.add(blockSprite5)

  blockSprite6 = createSprite(120, 200, 40, 40);
  blockSprite6.addImage("Block", LeftRight);
  blockGroup.add(blockSprite6)

  blockSprite7 = createSprite(120, 240, 40, 40);
  blockSprite7.addImage("Block", LeftRight);
  blockGroup.add(blockSprite7)

  blockSprite8 = createSprite(120, 280, 40, 40);
  blockSprite8.addImage("Block", LeftRight);
  blockGroup.add(blockSprite8)

  blockSprite9 = createSprite(120, 320, 40, 40);
  blockSprite9.addImage("Block", LeftRight);
  blockGroup.add(blockSprite9)

  blockSprite10 = createSprite(120, 360, 40, 40);
  blockSprite10.addImage("Block", LeftRight);
  blockGroup.add(blockSprite10)

  blockSprite11 = createSprite(120, 400, 40, 40);
  blockSprite11.addImage("Block", LeftRight);
  blockGroup.add(blockSprite11)

  blockSprite12 = createSprite(120, 440, 40, 40);
  blockSprite12.addImage("Block", NoTop);
  blockGroup.add(blockSprite12)
  
  blockSprite13 = createSprite(240, 600, 40, 40);
  blockSprite13.addImage("Block", LeftRight);
  blockGroup.add(blockSprite13)
  
  blockSprite14 = createSprite(240, 560, 40, 40);
  blockSprite14.addImage("Block", LeftRight);
  blockGroup.add(blockSprite14)
  
  blockSprite15 = createSprite(240, 520, 40, 40);
  blockSprite15.addImage("Block", LeftRight);
  blockGroup.add(blockSprite15)
  
  blockSprite16 = createSprite(240, 480, 40, 40);
  blockSprite16.addImage("Block", LeftRight);
  blockGroup.add(blockSprite16)
  
  blockSprite17 = createSprite(240, 440, 40, 40);
  blockSprite17.addImage("Block", LeftRight);
  blockGroup.add(blockSprite17)
  
  blockSprite18 = createSprite(240, 400, 40, 40);
  blockSprite18.addImage("Block", LeftRight);
  blockGroup.add(blockSprite18)
  
  blockSprite19 = createSprite(240, 360, 40, 40);
  blockSprite19.addImage("Block", LeftRight);
  blockGroup.add(blockSprite19)
  
  blockSprite20 = createSprite(240, 320, 40, 40);
  blockGroup.add(blockSprite20)
  blockSprite20.addImage("Block", LeftRight);
  
  blockSprite21 = createSprite(240, 280, 40, 40);
  blockSprite21.addImage("Block", LeftRight);
  blockGroup.add(blockSprite21)
  
  blockSprite22 = createSprite(240, 240, 40, 40);
  blockSprite22.addImage("Block", LeftRight);
  blockGroup.add(blockSprite22)
  
  blockSprite23 = createSprite(240, 200, 40, 40);
  blockSprite23.addImage("Block", LeftRight);
  blockGroup.add(blockSprite23)
  
  blockSprite24 = createSprite(240, 160, 40, 40);
  blockSprite24.addImage("Block", NoBottom);
  blockGroup.add(blockSprite24)
  
  blockSprite25 = createSprite(360, 00, 40, 40);
  blockSprite25.addImage("Block", LeftRight);
  blockGroup.add(blockSprite25)
  
  blockSprite26 = createSprite(360, 40, 40, 40);
  blockSprite26.addImage("Block", LeftRight);
  blockGroup.add(blockSprite26)
  
  blockSprite27 = createSprite(360, 80, 40, 40);
  blockSprite27.addImage("Block", LeftRight);
  blockGroup.add(blockSprite27)
  
  blockSprite28 = createSprite(360, 120, 40, 40);
  blockSprite28.addImage("Block", LeftRight);
  blockGroup.add(blockSprite28)
  
  blockSprite29 = createSprite(360, 160, 40, 40);
  blockSprite29.addImage("Block", LeftRight);
  blockGroup.add(blockSprite29)
  
  blockSprite30 = createSprite(360, 200, 40, 40);
  blockSprite30.addImage("Block", NoTop);
  blockGroup.add(blockSprite30)
  
  blockSprite31 = createSprite(360, 360, 40, 40);
  blockSprite31.addImage("Block", NoBottom);
  blockGroup.add(blockSprite31)
  
  blockSprite32 = createSprite(360, 400, 40, 40);
  blockSprite32.addImage("Block", LeftRight);
  blockGroup.add(blockSprite32)
  
  blockSprite33 = createSprite(360, 440, 40, 40);
  blockSprite33.addImage("Block", LeftRight);
  blockGroup.add(blockSprite33)
  
  blockSprite34 = createSprite(360, 480, 40, 40);
  blockSprite34.addImage("Block", LeftRight);
  blockGroup.add(blockSprite34)
  
  blockSprite35 = createSprite(360, 520, 40, 40);
  blockSprite35.addImage("Block", LeftRight);
  blockGroup.add(blockSprite35)
  
  blockSprite36 = createSprite(360, 560, 40, 40);
  blockSprite36.addImage("Block", LeftRight);
  blockGroup.add(blockSprite36)
  
  blockSprite37 = createSprite(360, 600, 40, 40);
  blockSprite37.addImage("Block", LeftRight);
  blockGroup.add(blockSprite37)
  
  blockSprite38 = createSprite(480, 00, 40, 40);
  blockSprite38.addImage("Block", LeftRight);
  blockGroup.add(blockSprite38)
  
  blockSprite39 = createSprite(480, 40, 40, 40);
  blockSprite39.addImage("Block", NoTop);
  blockGroup.add(blockSprite39)
  
  blockSprite40 = createSprite(480, 160, 40, 40);
  blockSprite40.addImage("Block", NoBottom);
  blockGroup.add(blockSprite40)
  
  blockSprite41 = createSprite(480, 200, 40, 40);
  blockSprite41.addImage("Block", LeftRight);
  blockGroup.add(blockSprite41)
  
  blockSprite42 = createSprite(480, 240, 40, 40);
  blockSprite42.addImage("Block", LeftRight);
  blockGroup.add(blockSprite42)
  
  blockSprite43 = createSprite(480, 280, 40, 40);
  blockSprite43.addImage("Block", LeftRight);
  blockGroup.add(blockSprite43)
  
  blockSprite44 = createSprite(480, 320, 40, 40);
  blockSprite44.addImage("Block",LeftRight);
  blockGroup.add(blockSprite44)
  
  blockSprite45 = createSprite(480, 360, 40, 40);
  blockSprite45.addImage("Block", LeftRight);
  blockGroup.add(blockSprite45)
  
  blockSprite46 = createSprite(480, 400, 40, 40);
  blockSprite46.addImage("Block", LeftRight);
  blockGroup.add(blockSprite46)
  
  blockSprite47 = createSprite(480, 440, 40, 40);
  blockSprite47.addImage("Block", NoTop);
  blockGroup.add(blockSprite47)
  
  blockSprite48 = createSprite(480, 560, 40, 40);
  blockSprite48.addImage("Block", NoBottom);
  blockGroup.add(blockSprite48)
  
  blockSprite49 = createSprite(480, 600, 40, 40);
  blockSprite49.addImage("Block", LeftRight);
  blockGroup.add(blockSprite49)
  
  //cube = new Cube(220,100);
  cubeSprite = createSprite(50, 30);
  cubeSprite.addImage("cube", cubeDesign_img);
  
  end = createSprite(580, 300, 40 ,40)
  end.shapeColor = "yellow"
  //spike = new Spike(350, 200, PI/2);
}

function draw() {
  background(200);
  Engine.update(engine);
  drawSprites();
  createEdgeSprites();
  cubeSprite.collide(blockGroup)
  if(keyDown("left")){
    //cube.Left();
    cubeSprite.x -= 5;
    cubeSprite.addImage("cube", cubeLeft_img);
  }else  
  if(keyDown("right")){
    //cube.Right();
    cubeSprite.x += 5;
    cubeSprite.addImage("cube", cubeRight_img);
  }else
  if(keyDown("up")){
    //cube.Up();
    cubeSprite.y -= 5;
    cubeSprite.addImage("cube", cubeUp_img);

  }else
  if(keyDown("down")){
    //cube.Down();
    cubeSprite.y += 5;
    cubeSprite.addImage("cube", cubeDown_img);

  }else{
    //cube.Still();
    cubeSprite.addImage("cube", cubeDesign_img);
  }

  if (blockSprite1.isTouching(cubeSprite)) {
    console.log("oof");
  }

  if(end.isTouching(cubeSprite)){
    console.log("gg")
  }

  text("Arrow keys to move.", 180, 100)
  text("Go to the yellow square to win.", 160, 120)
  

  //cube.

  // block1.display();
  // block2.display();
  // block3.display();
  // block4.display();
  //cube.display();
  //spike.display();
  // block1.TopLeft();
  // block2.TopRight();
  // block3.BottomRight();
  // block4.BottomLeft();
}