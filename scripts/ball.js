import * as Util from './util.js';

class Ball{
  constructor(c, x, y, g){
    this.c = c;
    this.radius = Util.randInRange(10,25);
    this.color = Util.randomColor();
    this.dy = Util.randInRange(2,5) * Util.randInPos();
    this.dx = Util.randInRange(5,10) * Util.randInPos();

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
    this.gravity = g;
  }

  draw(){
    this.c.beginPath();
    this.c.lineWidth = 1;
    this.c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    this.c.save();
    this.c.globalAplha= 0.2;
    this.c.fillStyle = this.color;
    this.c.fill();
    this.c.restore();
    this.c.strokeStyle = 'black';
    this.c.stroke();
  }

  update(){
    if(this.y + this.radius + this.dy > window.innerHeight || this.y - this.radius + this.dy < 0){
      this.dy = -(this.dy * .95);
    } else {
      this.dy += this.gravity;
    }
    if(this.x + this.radius + this.dx > window.innerWidth || this.x - this.radius + this.dx < 0){
      this.dx = -(this.dx * .8);
    }
    if(this.x + this.radius > window.innerWidth){
      this.x = window.innerWidth - this.radius;
    } else if(this.x - this.radius < 0){
      this.x = this.radius;
    }
    if(this.y + this.radius <= window.innerHeight && this.y - this.radius >= 0){
      this.y += this.dy;
      this.x += this.dx;
    } else if (this.y + this.radius > window.innerHeight){
      this.y = window.innerHeight - (this.radius);
      this.dy = 0;
      this.x += this.dx;
    } else if (this.y - this.radius < 0){
      this.y = (this.radius);
      this.dy = 0;
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
