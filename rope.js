class rope{
    constructor(body1, body2,offsetX,offsetY){
        this.offsetX = offsetX
        this.offsetY = offsetY
        var options = {
            bodyA: body1,
            bodyB: body2,
            pointB:{x:this.offsetX, y:offsetY}
        }
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    }

    display(){
        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.bodyB.position;

        strokeWeight(2);

        var Point1X = pointA.x;
        var Point1Y = pointA.y;

        var Point2X = pointB.x+this.offsetX;
        var Point2Y = pointB.y+this.offsetY;

        line(Point1X,Point1Y,Point2X,Point2Y);
       /* if(this.rope.bodyA!=null){
        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.bodyB.position;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);}
    }
    fly(){
        this.chain.bodyA=null;*/
    }
    
}