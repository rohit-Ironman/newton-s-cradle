class Handle{

    constructor(x, y){
        var options ={
            isStatic: true
        }

        this.body = Bodies.rectangle(x, y, 200,50, options);
        this.height = 50; 
        this.width = 200; 
        World.add(world, this.body)
    }

    display(){

        var pos =this.body.position;
        rectMode(CENTER); 
        fill("red");
        rect(pos.x, pos.y, this.width, this.height);
        
    }
}