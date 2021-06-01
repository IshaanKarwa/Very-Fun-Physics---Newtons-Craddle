class Bob {
    constructor(x, y, r) {
        var options = {
            'isStatic' :false,
            'restitution' :2,
            'friction' :0,
            'density' :3
        }
        this.body = Bodies.circle(x, y, r);
        this.r = r;
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y)
        ellipseMode(RADIUS)
        ellipse(0, 0, this.r)
        pop();
    }
}