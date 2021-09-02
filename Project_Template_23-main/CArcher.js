class CArcher {
    constructor(x, y, width, height,ArcherAngle) {
      var options = {
        restitution: 0.8,
        friction: 1.0,
        density: 1.0,
        isStatic: true
      };
      this.width = width;
      this.height = height;
      this.body = Bodies.rectangle(x, y, this.width, this.height, options);
      this.image = loadImage("./assets/computerArcher.png");
      this.scale = 0.5;
      this.angle = ArcherAngle;
      World.add(world, this.body);
    }
  
   display() {
      var pos = this.body.position;
      var angle = this.body.angle;
  
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image, 0, 0, this.width, this.height);
      pop();
     
    }
    shoot(ArcherAngle){
        var v = p5.Vector.fromAngle(ArcherAngle);
        v.mult(20);
        Matter.Body.setStatic(this.body, false);
        Matter.Body.setVelocity(this.body,{x:v.x, y: v.y});
        
    }
  }