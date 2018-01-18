import Circle from './circle.js';
import Line from './line.js';
import Ripple from './ripple.js';
import Ball from './ball.js';
import { setAudio } from './audio.js';
import * as Util from './util.js';

const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');
const mouse = {};

let animations = [];

const animate = () => {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);
  for (var i = 0; i < animations.length; i++) {
    animations[i].update();
  }
  if(animations.length > 50){
    animations = animations.slice(10);
  }
};

const init = () => {
  animations =[];
};

document.addEventListener('DOMContentLoaded', () => {
  Util.resizeCanvas(canvas);
  setAudio();
  animate();
  document.getElementById('backtrack').volume = .2;
});

window.addEventListener('resize', () => {
  Util.resizeCanvas(canvas);
  init();
});

window.addEventListener('click', (e) => {
  const circle = new Circle(c, e.x, e.y);
  circle.draw();
  animations.push(circle);

  for (let i = 0; i < 2; i++) {
    let ball = new Ball(c, e.x, e.y);
    ball.draw();
    animations.push(ball);
  }
  let audio = document.getElementById(`${Math.ceil(Math.random() * 27)}`);
  audio.currentTime = 0;
  audio.play();
});

window.addEventListener('keydown', e => {
  let audio;
  switch (e.keyCode) {
    case 81:
      audio = document.getElementById('1');
      break;
    case 87:
      audio = document.getElementById('2');
      break;
    case 69:
      audio = document.getElementById('3');
      break;
    case 82:
      audio = document.getElementById('4');
      break;
    case 84:
      audio = document.getElementById('5');
      break;
    case 89:
      audio = document.getElementById('6');
      break;
    case 85:
      audio = document.getElementById('7');
      break;
    case 73:
      audio = document.getElementById('8');
      break;
    case 79:
      audio = document.getElementById('9');
      break;
    case 80:
      audio = document.getElementById('10');
      break;
    case 65:
      audio = document.getElementById('11');
      break;
    case 83:
      audio = document.getElementById('12');
      break;
    case 68:
      audio = document.getElementById('13');
      break;
    case 70:
      audio = document.getElementById('14');
      break;
    case 71:
      audio = document.getElementById('15');
      break;
    case 74:
      audio = document.getElementById('16');
      break;
    case 75:
      audio = document.getElementById('17');
      break;
    case 76:
      audio = document.getElementById('18');
      break;
    case 90:
      audio = document.getElementById('19');
      break;
    case 88:
      audio = document.getElementById('20');
      break;
    case 67:
      audio = document.getElementById('21');
      break;
    case 66:
      audio = document.getElementById('22');
      break;
    case 78:
      audio = document.getElementById('23');
      break;
    case 77:
      audio = document.getElementById('24');
      break;
    case 72:
      audio = document.getElementById('25');
      break;
    case 86:
      audio = document.getElementById('26');
      break;
    default:
      audio = document.getElementById(`${Math.ceil(Math.random() * 26)}`);
      break;
  }
  const line = new Line(c);
  line.draw();
  animations.push(line);
  audio.currentTime = 0;
  audio.play();
});










let hello;
