class Spike2 {
    constructor(x,y){
       // var options = {
        //    isStatic:true
        //}
        this.x = x;
        this.y = y;
        //this.body = Bodies.rectangle(x,y,40,40,options);
        this.image = loadImage("Upside Down Spike.png");
        //World.add(world, this.body);
    }

    display(){
        push();
        image(this.image, this.x, this.y);
        pop();
    }
}