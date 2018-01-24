import * as Util from './util.js';

class Star {
  constructor(c, x, y){
    this.c = c;
    this.rot = Math.PI / 2 * 3;
    this.x = x;
    this.y = y;
    this.outerR = Util.randInRange(11,15);
    this.innerR = Util.randInRange(5,10);
    this.spikes = 5;
    this.step = Math.PI / this.spikes;
    this.dy = Util.randInRange(2,5) * Util.randInPos();
    this.dx = Util.randInRange(10,15);
  }

  draw(){
    this.c.strokeStyle = "#000";
    this.c.beginPath();
    this.c.moveTo(this.x, this.y - this.outerR);
    for (let i = 0; i < this.spikes; i++) {
        let x = this.x + Math.cos(this.rot) * this.outerR;
        let y = this.y + Math.sin(this.rot) * this.outerR;
        this.c.lineTo(x, y);
        this.rot += this.step;

        x = this.x + Math.cos(this.rot) * this.innerR;
        y = this.y + Math.sin(this.rot) * this.innerR;
        this.c.lineTo(x, y);
        this.rot += this.step;
    }
    this.c.lineTo(this.x, this.y - this.outerR);
    this.c.closePath();
    this.c.strokeStyle = 'black';
    this.c.fillStyle = 'yellow';
    this.c.fill();
    this.c.stroke();

  }

  update(){
    this.dy += Util.randInRange(1,2) * Util.randInPos();
    this.x += this.dx;
    this.y += this.dy;
    this.draw();
  }
}

export default Star;
