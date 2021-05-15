class SlingShot {
    constructor(bodyA, ppointB) {
        var options = {
            bodyA: bodyA,
            pointB: ppointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = ppointB;
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

fly() {
    this.sling.bodyA = null;
}

 
        
    display(){
        if (this.sling.bodyA) {

        var pointA = this.sling.bodyA.position;
        var vpointB = this.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, vpointB.x, vpointB.y);
        }
   }
    
}
