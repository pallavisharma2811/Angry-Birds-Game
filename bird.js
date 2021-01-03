class Bird{

    constructor(x, y){

        //over-riding the default props of physics engine body
        var options = {
            restitution: 0.8,
            density: 1,
            friction: 1
        }

        this.body = Bodies.rectangle(x, y, width, height, options);
        // width and height is not the default prop of physics engine body
        this.width = 50;
        this.height = 50;
        this.image = loadImage("sprites/bird.png");

        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;

        pos.x = mouseX;
        pos.y = mouseY;

        push ();
        translate (pos.x, pos.y)
        rotate (angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop ();
    }
}