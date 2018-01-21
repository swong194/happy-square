class Hoop{
  constructor(c){
    this.c = c;
  }

  draw(){
    this.c.fillStyle = 'black';
    this.c.font = "30px Arial";
    this.c.fillText("Hoop",0,window.innerHeight / 2);
  }

  update(){
    this.draw();
  }
}

export default Hoop;
