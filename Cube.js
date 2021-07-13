class Cube {
    constructor(x,y){
        var options = {
            'restituition':0,
            'friction':1,
            isStatic:true
        }
        //this.body = Bodies.rectangle(x,y,40,40,options);
        this.x = x;
        this.y = y;
        this.sprite = createSprite(this.x, this.y,40,40);
        this.image = loadImage("Cube Design.png");
        this.imageStill = loadImage("Cube Design.png");
        this.imageLeft = loadImage("CubeLeft.png");
        this.imageRight = loadImage("CubeRight.png");
        this.imageUp = loadImage("CubeUp.png");
        this.imageDown = loadImage("CubeDown.png");
        //World.add(world, this.body);
    }

    display(){
      
        push();
        image(this.image, this.x, this.y);
        pop();
    }

   Still(){
       this.image = this.imageStill;
   }

    Left(){
       this.x = this.x-5
        this.image = this.imageLeft;
        //image(this.imageLeft, this.body.position.x, this.body.position.y);
    }
    
    Right(){
        this.x = this.x + 5
        this.image = this.imageRight;
        //image(this.imageRight, this.body.position.x, this.body.position.y);
    }
    
    Up(){
        this.y = this.y - 5
        this.image = this.imageUp;
        //image(this.imageUp, this.body.position.x, this.body.position.y);
    }
    
    Down(){
        this.y = this.y + 5
        this.image = this.imageDown;
        //image(this.imageDown, this.body.position.x, this.body.position.y);
    }
}