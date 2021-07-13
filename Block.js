class Block {
    constructor(x,y){
        //var options = {
        //    'restituition':0,
        //    'friction':100,
        //    isStatic:true
        //}
        //this.body = Bodies.rectangle(x,y,40,40,options);
        this.x = x;
        this.y = y;
        this.sprite = createSprite(this.x,this.y,40,40);
        this.image = loadImage("Block Design.png")
        this.image1 = loadImage("Block Design.png");
        this.image2 = loadImage("Bottom 1Side.png");
        this.image3 = loadImage("Left 1Side Block.png");
        this.image4 = loadImage("Right 1Side Block.png");
        this.image5 = loadImage("Top 1Side Block.png");
        this.image6 = loadImage("BottomLeft 2Side Block.png");
        this.image7 = loadImage("BottomRight 2Side Block.png");
        this.image8 = loadImage("TopLeft 2Side block.png");
        this.image9 = loadImage("TopRight 2Side block.png");
        this.image10 = loadImage("NoBottom 3Side Block.png");
        this.image11 = loadImage("NoLeft 3Side Block.png");
        this.image12 = loadImage("NoRight 3Side Block.png");
        this.image13 = loadImage("NoTop 3Side Block.png");
        this.image14 = loadImage("Full Block.png");
        this.image15 = loadImage("TopDown 2Side Block.png");
        this.image16 = loadImage("LeftRight 2Side Block.png");
        
        //World.add(world, this.body);
    }

    display(){
        //var position = this.body.position;
        push();
        image(this.image, this.x, this.y);
        pop();
    }
    Image1(){
        this.image = this.image1;
    }
    Bottom(){
        this.image = this.image2;
    }
    Left(){
        this.image = this.image3;
    }
    Right(){
        this.image = this.image4;
    }
    Top(){
        this.image = this.image5;
    }
    BottomLeft(){
        this.image = this.image6;
    }
    BottomRight(){
        this.image = this.image7;
    }
    TopLeft(){
        this.image = this.image8;
    }
    TopRight(){
        this.image = this.image9;
    }
    NoBottom(){
        this.image = this.image10;
    }
    NoLeft(){
        this.image = this.image11;
    }
    NoRight(){
        this.image = this.image12;
    }
    NoTop(){
        this.image = this.image13;
    }
    Full(){
        this.image = this.image14;
    }
    TopDown(){
        this.image = this.image15;
    }
    LeftRight(){
        this.image = this.image16;
    }
}