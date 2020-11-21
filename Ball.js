class Ball {
    constructor(x, y) {
      var options = {
       isStatic: false, 
       restitution: 1, 
        friction: 0.1, 
        density: 0.7
      }
      this.body = Bodies.rectangle(x, y, 30, 30, options);
      this.width = 30;
      this.height = 30;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("blue");
      rect(pos.x, pos.y, this.width, this.height);

     
    }
  };