class Hoop{
  constructor(c){
    this.c = c;
  }

  draw(){
    this.c.fillStyle = 'white';
    this.c.font = "30px sans-serif";
    this.c.fillText("Hoop",0,window.innerHeight / 2);
  }

  update(){
    this.draw();
  }
}

export default Hoop;
