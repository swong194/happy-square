/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const randomColor = () => {
  const color = randInArr(
    [`#f95f2b`,
      `#f34330`,
      `#ea2c2c`,
      `	#fffefe`,
      `#81b3fd`,
      `	#1d76fc`,
      `	#0348b0`
    ]
  );
  return color;
};
/* harmony export (immutable) */ __webpack_exports__["f"] = randomColor;


const reallyRandomColor = () => {
  let color = 'rgba(';
  for (let u = 0; u < 3; u++) {
   color += `${Math.floor(Math.random() * 255)},`;
  }
  color += '1)';
  return color;
};
/* unused harmony export reallyRandomColor */


const randomStart = () => {
  let startOne = [-10, Math.floor(Math.random() * window.innerHeight)];
  let startTwo = [Math.floor(Math.random() * window.innerWidth), -10];

  return [startOne, startTwo][Math.floor(Math.random() * 2)];
};
/* harmony export (immutable) */ __webpack_exports__["g"] = randomStart;


const randInArr = arr => {
  return arr[Math.floor(Math.random() * arr.length)];
};
/* unused harmony export randInArr */


const randInPos = () => {
  return randInArr([-1,1]);
};
/* harmony export (immutable) */ __webpack_exports__["d"] = randInPos;


const randInRange = (min, max) => {
  return Math.floor(Math.random() * (max-min) + min);
};
/* harmony export (immutable) */ __webpack_exports__["e"] = randInRange;


const pythag = (x,y) => {
  return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
};
/* unused harmony export pythag */


const getDistance = (x1,y1,x2,y2) => {
  let xdist = x2 - x1;
  let ydist = y2 - y1;

  return pythag(xdist,ydist);
};
/* harmony export (immutable) */ __webpack_exports__["b"] = getDistance;


const addVector = (v1, v2) => {
  const resultVector = {};
  resultVector.x = v1.x + v2.x;
  resultVector.y = v1.y + v2.y;
  return resultVector;
};
/* unused harmony export addVector */


const subVector = (v1, v2) => {
  const resultVector = {};
  resultVector.x = v2.x - v1.x;
  resultVector.y = v2.y - v1.y;
  return resultVector;
};
/* unused harmony export subVector */


const dotProd = (v1, v2) => {
  return ((v1.x * v2.x )+ (v1.y * v2.y));
};
/* unused harmony export dotProd */


const multVector = (m, v) => {
  return {x: m * v.x, y: m * v.y};
};
/* unused harmony export multVector */


const projection = (v, p) => {
  return multVector((dotProd(v,p)/dotProd(p,p)),p);
};
/* unused harmony export projection */


const magnitude = (v) => {
  return Math.sqrt(dotProd(v,v));
};
/* unused harmony export magnitude */


const unitVector = v => {
  return multVector((1/magnitude(v)),v);
};
/* unused harmony export unitVector */


const faster = (v1, v2) => {
  if((v1 < 0 && v2 < 0) && (Math.abs(v2) > Math.abs(v1))){
    return true;
  }
  if((v1 > 0 && v2 > 0) && (Math.abs(v1) > Math.abs(v2)) ){
    return true;
  }
  return false;
};
/* unused harmony export faster */


const newVelocities = (ball1, ball2) => {
  const m1 = ball1.radius;
  const m2 = ball2.radius;
  const sumM = m1+m2;

  const p1 = {x:ball1.x, y:ball1.y};
  const p2 = {x:ball2.x, y:ball2.y};

  //velocity vectors
  const v1 = {x:ball1.dx, y:ball1.dy};
  const v2 = {x:ball2.dx, y:ball2.dy};

  const projV = subVector(p1,p2);

  //velocity vectors in impact direction
  const projV1 = projection(v1, projV);
  const projV2 = projection(v2, projV);

  //direction based on projected velocities along impact direction
  const dirV1 = projV1.x/(projV.x);
  const dirV2 = projV2.x/(projV.x);

  if((dirV1 >= 0 && dirV2 < 0) || (dirV1 > 0 && dirV2 <= 0) || faster(dirV1, dirV2)){
    const perpV1 = subVector(v1, projV1);
    const perpV2 = subVector(v2, projV2);

    const vMag1 = magnitude(projV1) * (dirV1/Math.abs(dirV1));
    const vMag2 = magnitude(projV2) * (dirV2/Math.abs(dirV2));

    const momentum = m1 * vMag1 + m2 * vMag2;

    const uMag1 = ((2 * momentum) / sumM) - vMag1;
    const uMag2 = (momentum - (m1 * uMag1))/m2;

    const unitProjV = unitVector(projV);

    //add perpendicular vectors
    const u1 = addVector(multVector(uMag1, unitProjV), perpV1);
    const u2 = addVector(multVector(uMag2, unitProjV), perpV2);

    ball1.dx = u1.x;
    ball1.dy = u1.y;

    ball2.dx = u2.x;
    ball2.dy = u2.y;
  }

};
/* harmony export (immutable) */ __webpack_exports__["c"] = newVelocities;


const ballCollide = (ball1, ball2) => {
  if(getDistance(ball1.x, ball1.y, ball2.x, ball2.y)
  - ball1.radius - ball2.radius <= 0){
    return true;
  } else {
    return false;
  }
};
/* harmony export (immutable) */ __webpack_exports__["a"] = ballCollide;


const resizeCanvas = (canvas) => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
};
/* harmony export (immutable) */ __webpack_exports__["h"] = resizeCanvas;



/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__circle_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__line_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ball_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__audio_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__hoop_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__star_js__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__util_js__ = __webpack_require__(0);








const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');
c.globalAlpha = 0.1;
let g = __WEBPACK_IMPORTED_MODULE_6__util_js__["e" /* randInRange */](1,2);

const mouse = {};

let animations = [];
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
    for (let i = 0; i < animations.length; i++) {
      animations[i].update();
    }

    for (let i = 0; i < balls.length; i++) {
      balls[i].update();
    }

    for (let i = 0; i < balls.length - 1; i++) {
      for (let j = i+1; j < balls.length; j++) {
        if(__WEBPACK_IMPORTED_MODULE_6__util_js__["a" /* ballCollide */](balls[i],balls[j])){
          __WEBPACK_IMPORTED_MODULE_6__util_js__["c" /* newVelocities */](balls[i],balls[j]);
        }
      }
    }

    if(hoopOn){
      for (let i = 0; i < balls.length; i++) {
        if(__WEBPACK_IMPORTED_MODULE_6__util_js__["b" /* getDistance */](balls[i].x, balls[i].y, 0, window.innerHeight / 2 ) - balls[i].radius <= 50){
          if(soundOn){
            playRandomSound();
          }
          for (let j = 0; j < 10; j++) {
            const star = new __WEBPACK_IMPORTED_MODULE_5__star_js__["a" /* default */](c, 0, window.innerHeight / 2);
            stars.push(star);
          }
          balls[i].dx += 10;
        }
      }
      hoop.update();
    }

    for (let i = 0; i < stars.length; i++) {
      stars[i].update();
    }

    if(animations.length > 15 ){
      animations = animations.slice(8);
    }

    if(balls.length > 80){
      balls = balls.slice(10);
    }

    if(stars.length > 500){
      stars = stars.slice(300);
    }
  }
};

const init = () => {
  animations =[];
  balls = [];
  stars = [];
  if(hoopOn){
    hoop = new __WEBPACK_IMPORTED_MODULE_4__hoop_js__["a" /* default */](c);
  }
};

const playRandomSound = () => {
  let audio = document.getElementById(`${Math.ceil(Math.random() * 26)}`);
  audio.currentTime = 0;
  audio.play();
};

const openMenu = () => {
  const overlay = document.getElementById('landing-overlay');
  overlay.style.display = 'flex';
  playOn = false;
  window.removeEventListener('mousemove', mouseInteraction);
};

const closeMenu = () => {
  const overlay = document.getElementById('landing-overlay');
  overlay.style.display = 'none';
  playOn = true;
  addMouseMove();
};

const toggleSound = () => {
  const volumeIcon = document.getElementById('sound');
  if(soundOn){
    Object(__WEBPACK_IMPORTED_MODULE_3__audio_js__["a" /* muteAudio */])();
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
    hoopEle.innerHTML = 'Hoop Off';
  } else {
    hoopEle.innerHTML = 'Hoop On';
  }
  hoopOn = !hoopOn;
};

const toggleBacktrack = () => {
  const backtrackEle = document.getElementById('backtrack-button');
  if(backtrackOn){
    backtrackEle.innerHTML = 'Backtrack Off';
    Object(__WEBPACK_IMPORTED_MODULE_3__audio_js__["b" /* pauseBacktrack */])();
  } else {
    backtrackEle.innerHTML = 'Backtrack On';
    Object(__WEBPACK_IMPORTED_MODULE_3__audio_js__["c" /* resumeBacktrack */])();
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
  __WEBPACK_IMPORTED_MODULE_6__util_js__["h" /* resizeCanvas */](canvas);
  document.getElementById('backtrack').volume = 1;
  Object(__WEBPACK_IMPORTED_MODULE_3__audio_js__["d" /* setAudio */])();
  openMenu();
});

window.addEventListener('resize', () => {
  __WEBPACK_IMPORTED_MODULE_6__util_js__["h" /* resizeCanvas */](canvas);
  init();
});

window.addEventListener('click', (e) => {
  for (let i = 0; i < 2; i++) {
    const circle = new __WEBPACK_IMPORTED_MODULE_0__circle_js__["a" /* default */](c, e.x, e.y);
    circle.draw();
    animations.push(circle);
  }

  for (let i = 0; i < 3; i++) {
    let ball = new __WEBPACK_IMPORTED_MODULE_2__ball_js__["a" /* default */](c, e.x, e.y, g);
    ball.draw();
    balls.push(ball);
  }
  if(soundOn){
    playRandomSound();
  }
});

const mouseInteraction = e => {
  for (let i = 0; i < balls.length; i++) {
    if(__WEBPACK_IMPORTED_MODULE_6__util_js__["b" /* getDistance */](balls[i].x, balls[i].y, e.x, e.y) - balls[i].radius <= 50){
      if(balls[i].y + balls[i].radius > window.innerHeight){
        balls[i].y = window.innerHeight - (balls[i].radius) * 2;
        balls[i].dx = __WEBPACK_IMPORTED_MODULE_6__util_js__["e" /* randInRange */](1,1.5) * __WEBPACK_IMPORTED_MODULE_6__util_js__["d" /* randInPos */]();
        balls[i].dy -=5;
      } else if(balls[i].y - balls[i].radius < 0){
        balls[i].y = (balls[i].radius) * 2;
        balls[i].dx = __WEBPACK_IMPORTED_MODULE_6__util_js__["e" /* randInRange */](1,1.5) * __WEBPACK_IMPORTED_MODULE_6__util_js__["d" /* randInPos */]();
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
        g = __WEBPACK_IMPORTED_MODULE_6__util_js__["e" /* randInRange */](1,2);
      }
      setGravity();
      break;
    case 27:
      openMenu();
      audio = document.getElementById(`${Math.ceil(Math.random() * 27)}`);
      break;
    case 190:
      audio = document.getElementById(`${Math.ceil(Math.random() * 27)}`);
      for (let i = 0; i < balls.length; i++) {
        balls[i].y = window.innerHeight / 2;
        balls[i].x = __WEBPACK_IMPORTED_MODULE_6__util_js__["e" /* randInRange */](0 + balls[i].radius, window.innerWidth - balls[i].radius);
        balls[i].dx = __WEBPACK_IMPORTED_MODULE_6__util_js__["e" /* randInRange */](10,20) * __WEBPACK_IMPORTED_MODULE_6__util_js__["d" /* randInPos */]();
        balls[i].dy = __WEBPACK_IMPORTED_MODULE_6__util_js__["e" /* randInRange */](5,10) * __WEBPACK_IMPORTED_MODULE_6__util_js__["d" /* randInPos */]();
      }
      break;
    default:
      audio = document.getElementById(`${Math.ceil(Math.random() * 27)}`);
      break;
  }
  const line = new __WEBPACK_IMPORTED_MODULE_1__line_js__["a" /* default */](c);
  line.draw();
  animations.push(line);
  audio.currentTime = 0;
  if(soundOn){
    audio.play();
  }
});


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_js__ = __webpack_require__(0);


class Circle {
  constructor(c,x,y){
    this.c = c;
    this.x = x + __WEBPACK_IMPORTED_MODULE_0__util_js__["e" /* randInRange */](0,100) * __WEBPACK_IMPORTED_MODULE_0__util_js__["d" /* randInPos */]();
    this.y = y + __WEBPACK_IMPORTED_MODULE_0__util_js__["e" /* randInRange */](0,100) * __WEBPACK_IMPORTED_MODULE_0__util_js__["d" /* randInPos */]();
    this.radius = __WEBPACK_IMPORTED_MODULE_0__util_js__["e" /* randInRange */](10,50);
    this.color = __WEBPACK_IMPORTED_MODULE_0__util_js__["f" /* randomColor */]();
    this.width = __WEBPACK_IMPORTED_MODULE_0__util_js__["e" /* randInRange */](2,20);
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

/* harmony default export */ __webpack_exports__["a"] = (Circle);


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_js__ = __webpack_require__(0);


class Line{
  constructor(c){
    let start = __WEBPACK_IMPORTED_MODULE_0__util_js__["g" /* randomStart */]();
    this.x = start[0];
    this.y = start[1];
    this.movex = this.x;
    this.movey = this.y;
    this.c = c;
    this.color = __WEBPACK_IMPORTED_MODULE_0__util_js__["f" /* randomColor */]();
    this.width = __WEBPACK_IMPORTED_MODULE_0__util_js__["e" /* randInRange */](15,50);
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


/* harmony default export */ __webpack_exports__["a"] = (Line);


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_js__ = __webpack_require__(0);


class Ball{
  constructor(c, x, y, g){
    this.c = c;
    this.radius = __WEBPACK_IMPORTED_MODULE_0__util_js__["e" /* randInRange */](10,25);
    this.color = __WEBPACK_IMPORTED_MODULE_0__util_js__["f" /* randomColor */]();
    this.dy = __WEBPACK_IMPORTED_MODULE_0__util_js__["e" /* randInRange */](2,5) * __WEBPACK_IMPORTED_MODULE_0__util_js__["d" /* randInPos */]();
    this.dx = __WEBPACK_IMPORTED_MODULE_0__util_js__["e" /* randInRange */](5,10) * __WEBPACK_IMPORTED_MODULE_0__util_js__["d" /* randInPos */]();

    let xpos = x + __WEBPACK_IMPORTED_MODULE_0__util_js__["e" /* randInRange */](0,100) * __WEBPACK_IMPORTED_MODULE_0__util_js__["d" /* randInPos */]();

    if(xpos - this.radius + this.dx < 0){
      xpos = Math.abs(this.radius + this.dx) * 2;
    } else if (xpos + this.radius + this.dx > window.innerWidth){
      xpos = Math.abs(xpos-this.radius) * 2;
    }

    let ypos = y + __WEBPACK_IMPORTED_MODULE_0__util_js__["e" /* randInRange */](0,100) * __WEBPACK_IMPORTED_MODULE_0__util_js__["d" /* randInPos */]();
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

/* harmony default export */ __webpack_exports__["a"] = (Ball);


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const setAudio = () => {
  const audioList = document.getElementById('audio-list');
  for (let i = 1; i < 28; i++) {
    audioList.innerHTML += `<audio id='${i}' src='./sound/${i}.wav'></audio>`;
  }
};
/* harmony export (immutable) */ __webpack_exports__["d"] = setAudio;


const muteAudio = () => {
  for (var i = 1; i < 28; i++) {
    const audio = document.getElementById(`${i}`);
    audio.currentTime = 0;
    audio.pause();
  }
};
/* harmony export (immutable) */ __webpack_exports__["a"] = muteAudio;


const pauseBacktrack = () => {
  const audio = document.getElementById('backtrack');
  audio.pause();
};
/* harmony export (immutable) */ __webpack_exports__["b"] = pauseBacktrack;


const resumeBacktrack = () => {
  const audio = document.getElementById('backtrack');
  audio.play();
};
/* harmony export (immutable) */ __webpack_exports__["c"] = resumeBacktrack;



/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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

/* harmony default export */ __webpack_exports__["a"] = (Hoop);


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_js__ = __webpack_require__(0);


class Star {
  constructor(c, x, y){
    this.c = c;
    this.rot = Math.PI / 2 * 3;
    this.x = x;
    this.y = y;
    this.outerR = __WEBPACK_IMPORTED_MODULE_0__util_js__["e" /* randInRange */](11,15);
    this.innerR = __WEBPACK_IMPORTED_MODULE_0__util_js__["e" /* randInRange */](5,10);
    this.spikes = 5;
    this.step = Math.PI / this.spikes;
    this.dy = __WEBPACK_IMPORTED_MODULE_0__util_js__["e" /* randInRange */](2,5) * __WEBPACK_IMPORTED_MODULE_0__util_js__["d" /* randInPos */]();
    this.dx = __WEBPACK_IMPORTED_MODULE_0__util_js__["e" /* randInRange */](10,15) * __WEBPACK_IMPORTED_MODULE_0__util_js__["d" /* randInPos */]();
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
    this.c.fillStyle = 'yellow';
    this.c.fill();

  }

  update(){
    this.dy += __WEBPACK_IMPORTED_MODULE_0__util_js__["e" /* randInRange */](1,2) * __WEBPACK_IMPORTED_MODULE_0__util_js__["d" /* randInPos */]();
    this.x += this.dx;
    this.y += this.dy;
    this.draw();
  }
}

/* harmony default export */ __webpack_exports__["a"] = (Star);


/***/ })
/******/ ]);