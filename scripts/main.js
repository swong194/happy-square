const canvas = document.querySelector('canvas');
const resizeCanvas = () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
};

const randomColor = () => {
  let color = 'rgba(';
  for (let u = 0; u < 3; u++) {
    color += `${Math.floor(Math.random() * 255)},`;
  }
  color += '1)';
  return color;
};


const c = canvas.getContext('2d');

const mouse = {};

// c.fillStyle = 'rgba(255,10,10,1)';
// c.fillRect(100,100,100,100);
//
// c.beginPath();
// c.moveTo(200,200);
// c.lineTo(500,60);
// c.lineTo(100,200);
// c.strokeStyle = 'blue';
// c.stroke();



// for (var i = 0; i < 200 ; i++) {
//
// }

class Circle {
  constructor(x, y, dx, dy, radius){
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.color = randomColor();
  }

  draw(){
    c.fillStyle = this.color;
    c.strokeStyle = this.color;
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.fill();
    c.stroke();
  }

  update(){
    if(this.x > innerWidth || this.x - this.radius < 0){
      this.dx = -this.dx;
    }
    if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
      this.dy = -this.dy;
    }

    this.x += this.dx;
    this.y += this.dy;

    if(mouse.x - this.x < 50
      && mouse.x - this. x > -50
      && mouse.y - this.y < 50
      && mouse.y - this.y > -50
      && this.radius < 60
    ){
      this.radius += 1;
    } else if(this.radius > 10){
      this.radius -= 1;
    }

    this.draw();
  }
}

const circleArmy = [];

const createCircleArmy = () => {
  for (let i = 0; i < 500; i++) {
    const radius = Math.random() * 10 + 20;
    const x = Math.random() * innerWidth - (radius * 2);
    const dx = Math.random() * 5;
    const y = Math.random() * innerHeight - (radius * 2) + radius;
    const dy = Math.random() * 5;
    circleArmy.push(new Circle(x,y,dx,dy,radius));
  }

  for (let i = 0; i < circleArmy.length; i++) {
    circleArmy[i].draw();
  }
};


const animate = () => {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);

  for (var i = 0; i < circleArmy.length; i++) {
    circleArmy[i].update();
  }
};

const init = () => {
  circleArmy = [];
  createCircleArmy();
};

document.addEventListener('DOMContentLoaded', () => {
  createCircleArmy();
  animate();
  resizeCanvas();
});

window.addEventListener('resize', () => {
  resizeCanvas();
  init();
});

window.addEventListener('mousemove', (e) => {
  mouse.x = e.x;
  mouse.y = e.y;
});

window.addEventListener('click', e => {
  const audio = document.querySelector('audio');
  audio.currentTime = 0;
  audio.play();
});

window.addEventListener('keydown', e => {
  let audio;
  switch (e.keyCode) {
    case 81:
      audio = document.getElementById('a3');
      break;
    case 87:
      audio = document.getElementById('a5');
      break;
    case 69:
      audio = document.getElementById('c4');
      break;
    case 82:
      audio = document.getElementById('c5');
      break;
    default:
      audio = document.getElementById('a3');
      break;
  }
  audio.currentTime = 0;
  audio.play();
});










let hello;
