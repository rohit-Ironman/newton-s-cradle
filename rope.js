class Rope {
    constructor(bodyA, PointB){
        var options ={
            bodyA: bodyA, 
            pointB: PointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = PointB;
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    }
        display(){
            var pointA = this.rope.bodyA.position; 
            var pointB = this.pointB;
            strokeWeight(5);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
}