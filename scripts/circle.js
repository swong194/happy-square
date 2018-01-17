import * as Util from './util.js';

class Circle {
  constructor(c,x,y){
    this.c = c;
    this.x = x;
    this.y = y;
    this.radius = Math.random() * 10 + 10;
    this.color = Util.randomColor();
    this.width = Math.random() * 10 + 10;
  }

  draw(){
    this.c.lineWidth = this.width;
    this.c.beginPath();
    this.c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    this.c.strokeStyle = this.color;
    this.c.stroke();
  }

  update(){
    this.radius += 25;
    this.draw();
  }
}

export default Circle;
