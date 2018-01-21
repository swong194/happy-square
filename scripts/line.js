import * as Util from './util.js';

class Line{
  constructor(c){
    let start = Util.randomStart();
    this.x = start[0];
    this.y = start[1];
    this.movex = this.x;
    this.movey = this.y;
    this.c = c;
    this.color = Util.randomColor();
    this.width = Util.randInRange(15,50);
  }

  draw(){
    this.c.beginPath();
    this.c.moveTo(this.x, this.y);
    this.c.lineTo(this.movex, this.movey);
    this.c.strokeStyle = this.color;
    this.c.lineWidth = this.width;
    this.c.stroke();
  }

  update(){
    if(this.movex > window.innerWidth * 1.25
      || this.movey > window.innerHeight * 1.25){
      this.x += 30;
      this.y += 30;
    } else {
      this.movex += 40;
      this.movey += 40;
    }
    this.draw();
  }
}


export default Line;
