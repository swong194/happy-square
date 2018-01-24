class Hoop{
  constructor(c){
    this.c = c;
    this.image = new Image(200,200);
    this.image.src = 'https://i.imgur.com/7cOZv3G.png';
    this.image.onload = this.draw();
  }

  draw(){
    this.c.drawImage(this.image, 0, 0, 700, 700, 0, window.innerHeight/2 - 30, 75, 75);
  }

  update(){
    this.draw();
  }
}

export default Hoop;
