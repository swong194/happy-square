import * as Util from './util.js';

class Ball{
  constructor(c, x, y){
    this.c = c;
    this.radius = Util.randInRange(5,50);
    this.color = Util.randomColor();
    this.dy = Util.randInRange(10,20) * Util.randInPos();
    this.dx = Util.randInRange(10,20) * Util.randInPos();

    let xpos = x + Util.randInRange(0,100) * Util.randInPos();

    if(xpos - this.radius + this.dx < 0){
      xpos = Math.abs(this.radius + this.dx) * 2;
    } else if (xpos + this.radius + this.dx > window.innerWidth){
      xpos = Math.abs(xpos-this.radius) * 2;
    }

    let ypos = y + Util.randInRange(0,100) * Util.randInPos();
    if(ypos - this.radius + this.dy < 0){
      ypos = Math.abs(this.radius + this.dy) * 2;
    } else if(ypos + this.radius + this.dy > window.innerHeight){
      ypos = (y - (this.radius*2));
    }
    this.x = xpos;
    this.y = ypos;
    this.gravity = Util.randInRange(1,2);
  }

  draw(){
    this.c.beginPath();
    this.c.lineWidth = 1;
    this.c.strokeStyle = 'black';
    this.c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    this.c.fillStyle = this.color;
    this.c.fill();
    this.c.stroke();
  }

  update(){
    if(this.y + this.radius + this.dy > window.innerHeight || this.y - this.radius + this.dy < 0){
      this.dy = -this.dy * 0.98;
    } else {
      this.dy += this.gravity;
    }

    if(this.x + this.radius + this.dx > window.innerWidth || this.x - this.radius + this.dx < 0){
      this.dx = -this.dx * 0.8;
    }

    if(this.y < window.innerHeight){
      this.y += this.dy;
      this.x += this.dx;
    }

    this.draw();
  }

  collide(){
    this.dy = -this.dy;
    this.dx = -this.dx;
  }

}

export default Ball;
