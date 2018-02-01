import Circle from './circle.js';
import Line from './line.js';
import Ball from './ball.js';
import {
  setAudio, muteAudio, pauseBacktrack, resumeBacktrack
} from './audio.js';
import Hoop from './hoop.js';
import Star from './star.js';
import * as Util from './util.js';

const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');
c.globalAlpha = 0.1;
let g = Util.randInRange(1,2);
const mouse = {};

let lines = [];
let circles = [];
let balls = [];
let stars = [];
let hoop;
let hoopOn = true;
let menuOn = true;
let soundOn = true;
let backtrackOn = true;
let playOn = false;

const setGravity = () => {
  for (var i = 0; i < balls.length; i++) {
    balls[i].gravity = g;
  }
};

const animate = () => {
  requestAnimationFrame(animate);
  if(playOn){
    c.clearRect(0, 0, innerWidth, innerHeight);

    for (let i = 0; i < lines.length; i++) {
      lines[i].update();
    }

    for (let i = 0; i < circles.length; i++) {
      circles[i].update();
    }

    for (let i = 0; i < balls.length; i++) {
      balls[i].update();
    }

    for (let i = 0; i < stars.length; i++) {
      stars[i].update();
    }

    for (let i = 0; i < balls.length - 1; i++) {
      for (let j = i+1; j < balls.length; j++) {
        if(Util.ballCollide(balls[i],balls[j])){
          Util.newVelocities(balls[i],balls[j]);
        }
      }
    }

    if(hoopOn){
      for (let i = 0; i < balls.length; i++) {
        if(Util.getDistance(balls[i].x, balls[i].y, 0, window.innerHeight / 2 ) - balls[i].radius <= 50){
          if(soundOn){
            playRandomSound();
          }
          for (let j = 0; j < 4; j++) {
            const star = new Star(c, 50, window.innerHeight / 2 );
            stars.push(star);
          }
          balls[i].dx += 10;
        }
      }
      hoop.update();
    }

    for (let i = 0; i < lines.length; i++) {
      if(lines[i].x > window.innerWidth || lines[i].y > window.innerLength){
        lines.splice(i,1);
        i-=1;
      }
    }

    for (let i = 0; i < circles.length; i++) {
      if(circles[i].radius > (window.innerWidth * 1.5 || window.innerLength * 1.5)){
        circles.splice(i,1);
        i-=1;
      }
    }

    if(balls.length > 80){
      balls = balls.slice(20);
    }

    for (let i = 0; i < stars.length; i++) {
      if(Util.outOfCanvas(stars[i].x, stars[i].y)){
        stars.splice(i,1);
        i -= 1;
      }
    }
  }
};

const init = () => {
  lines = [];
  circles =[];
  balls = [];
  stars = [];
  if(hoopOn){
    hoop = new Hoop(c);
  }
  if (window.DeviceOrientationEvent) {
    window.addEventListener('deviceorientation', (e)=>{
      if( (e.beta >= -10) && (e.beta <= 10) ){
        g=0;
      } else if( e.beta < 0 && Math.abs(g) < 2 ){
        g = Math.abs(g) + .1;
      } else {
        g = -Math.abs(g) + .1 ;
      }
      for (let i = 0; i < balls.length; i++) {
        balls[i].gravity = g;
      }
    });
  }
};

const playRandomSound = () => {
  let audio = document.getElementById(`${Math.ceil(Math.random() * 26)}`);
  audio.currentTime = 0;
  audio.play();
};

const openMenu = () => {
  const overlay = document.getElementById('landing-overlay');
  const instructions = document.getElementById('instructions');
  instructions.style.display = 'none';
  overlay.style.display = 'flex';
  playOn = false;
  window.removeEventListener('mousemove', mouseInteraction);
};

const closeMenu = () => {
  const overlay = document.getElementById('landing-overlay');
  overlay.style.display = 'none';
  const instructions = document.getElementById('instructions');
  instructions.style.display = 'block';
  playOn = true;
  addMouseMove();
};

const toggleSound = () => {
  const volumeIcon = document.getElementById('sound');
  if(soundOn){
    muteAudio();
    volumeIcon.classList.remove('fa-volume-up');
    volumeIcon.classList.add('fa-volume-off');
  } else {
    volumeIcon.classList.remove('fa-volume-off');
    volumeIcon.classList.add('fa-volume-up');
  }
  soundOn = !soundOn;
};

const toggleHoop = () => {
  const hoopEle = document.getElementById('hoop-button');
  if(hoopOn){
    hoopEle.innerHTML = 'Stars Off';
  } else {
    hoopEle.innerHTML = 'Stars On';
  }
  hoopOn = !hoopOn;
};

const toggleBacktrack = () => {
  const backtrackEle = document.getElementById('backtrack-button');
  if(backtrackOn){
    backtrackEle.innerHTML = 'Backtrack Off';
    pauseBacktrack();
  } else {
    backtrackEle.innerHTML = 'Backtrack On';
    resumeBacktrack();
  }
  backtrackOn = !backtrackOn;
};

document.addEventListener('DOMContentLoaded', () => {
  animate();
  init();
  const soundButton = document.getElementById('sound-button');
  soundButton.addEventListener('click', toggleSound);
  const startButton = document.getElementById('start');
  startButton.addEventListener('click', ()=>{
    const overlay = document.getElementById('landing-overlay');
    if(backtrackOn){
      document.getElementById('backtrack').play();
    }
    closeMenu();
  });
  const hoopButton = document.getElementById('hoop-button');
  hoopButton.addEventListener('click', toggleHoop);
  const backtrackButton = document.getElementById('backtrack-button');
  backtrackButton.addEventListener('click', toggleBacktrack);
  Util.resizeCanvas(canvas);
  document.getElementById('backtrack').volume = 1;
  setAudio();
  openMenu();
});

window.addEventListener('resize', () => {
  Util.resizeCanvas(canvas);
  init();
});

window.addEventListener('click', (e) => {
  for (let i = 0; i < 2; i++) {
    const circle = new Circle(c, e.x, e.y);
    circle.draw();
    circles.push(circle);
  }

  for (let i = 0; i < 3; i++) {
    let ball = new Ball(c, e.x, e.y, g);
    ball.draw();
    balls.push(ball);
  }
  if(soundOn){
    playRandomSound();
  }
});

const mouseInteraction = e => {
  for (let i = 0; i < balls.length; i++) {
    if(Util.getDistance(balls[i].x, balls[i].y, e.x, e.y) - balls[i].radius <= 50){
      if(balls[i].y + balls[i].radius > window.innerHeight){
        balls[i].y = window.innerHeight - (balls[i].radius) * 2;
        balls[i].dx = Util.randInRange(1,1.5) * Util.randInPos();
        balls[i].dy -=5;
      } else if(balls[i].y - balls[i].radius < 0){
        balls[i].y = (balls[i].radius) * 2;
        balls[i].dx = Util.randInRange(1,1.5) * Util.randInPos();
        balls[i].dy +=5;
      } else {
        balls[i].dy *= 1.2;
        balls[i].dx *= 1.2;
      }
    }
  }
};

const addMouseMove = () => {
  window.addEventListener('mousemove', mouseInteraction);
};

window.addEventListener('keydown', e => {
  if(playOn === false){
    closeMenu();
  }
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
    case 32:
      audio = document.getElementById(`${Math.ceil(Math.random() * 27)}`);
      break;
    case 188:
      audio = document.getElementById(`${Math.ceil(Math.random() * 27)}`);
      g = -g;
      setGravity();
      break;
    case 186:
      audio = document.getElementById(`${Math.ceil(Math.random() * 27)}`);
      init();
      break;
    case 191:
      audio = document.getElementById(`${Math.ceil(Math.random() * 27)}`);
      if(g !== 0){
        g = 0;
      } else {
        g = Util.randInRange(1,2);
      }
      setGravity();
      break;
    case 27:
      if(playOn === true){
        openMenu();
      }
      audio = document.getElementById(`${Math.ceil(Math.random() * 27)}`);
      break;
    case 190:
      audio = document.getElementById(`${Math.ceil(Math.random() * 27)}`);
      for (let i = 0; i < balls.length; i++) {
        balls[i].y = window.innerHeight / 2;
        balls[i].x = Util.randInRange(0 + balls[i].radius, window.innerWidth - balls[i].radius);
        balls[i].dx = Util.randInRange(10,20) * Util.randInPos();
        balls[i].dy = Util.randInRange(5,10) * Util.randInPos();
      }
      break;
    default:
      audio = document.getElementById(`${Math.ceil(Math.random() * 27)}`);
      break;
  }
  const line = new Line(c);
  line.draw();
  lines.push(line);
  audio.currentTime = 0;
  if(soundOn){
    audio.play();
  }
});
