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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__circle_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__line_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__audio_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util_js__ = __webpack_require__(2);





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
};

document.addEventListener('DOMContentLoaded', () => {
  __WEBPACK_IMPORTED_MODULE_3__util_js__["c" /* resizeCanvas */](canvas);
  Object(__WEBPACK_IMPORTED_MODULE_2__audio_js__["a" /* setAudio */])();
  animate();
  document.getElementById('backtrack').volume = .2;
});

window.addEventListener('resize', () => {
  __WEBPACK_IMPORTED_MODULE_3__util_js__["c" /* resizeCanvas */](canvas);
  init();
});

window.addEventListener('click', (e) => {
  const circle = new __WEBPACK_IMPORTED_MODULE_0__circle_js__["a" /* default */](c, e.x, e.y);
  circle.draw();
  animations.push(circle);
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
  const line = new __WEBPACK_IMPORTED_MODULE_1__line_js__["a" /* default */](c);
  line.draw();
  animations.push(line);
  audio.currentTime = 0;
  audio.play();
});










let hello;


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_js__ = __webpack_require__(2);


class Circle {
  constructor(c,x,y){
    this.c = c;
    this.x = x;
    this.y = y;
    this.radius = Math.random() * 10 + 10;
    this.color = __WEBPACK_IMPORTED_MODULE_0__util_js__["a" /* randomColor */]();
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

/* harmony default export */ __webpack_exports__["a"] = (Circle);


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const randomColor = () => {
  let color = 'rgba(';
  for (let u = 0; u < 3; u++) {
    color += `${Math.floor(Math.random() * 255)},`;
  }
  color += '1)';
  return color;
};
/* harmony export (immutable) */ __webpack_exports__["a"] = randomColor;


const randomStart = () => {
  let startOne = [-10, Math.floor(Math.random() * window.innerHeight)];
  let startTwo = [Math.floor(Math.random() * window.innerWidth), -10];

  return [startOne, startTwo][Math.floor(Math.random() * 2)];
};
/* harmony export (immutable) */ __webpack_exports__["b"] = randomStart;


const resizeCanvas = (canvas) => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
};
/* harmony export (immutable) */ __webpack_exports__["c"] = resizeCanvas;



/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const setAudio = () => {
  const audioList = document.getElementById('audio-list');
  for (let i = 1; i < 28; i++) {
    audioList.innerHTML += `<audio id='${i}' src='./sound/${i}.wav'></audio>`;
  }
};
/* harmony export (immutable) */ __webpack_exports__["a"] = setAudio;



/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_js__ = __webpack_require__(2);


class Line{
  constructor(c){
    let start = __WEBPACK_IMPORTED_MODULE_0__util_js__["b" /* randomStart */]();
    this.x = start[0];
    this.y = start[1];
    this.movex = this.x;
    this.movey = this.y;
    this.c = c;
    this.color = __WEBPACK_IMPORTED_MODULE_0__util_js__["a" /* randomColor */]();
    this.width = Math.random() * 25 + 20;
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
    if(this.movex > window.innerWidth * 1.25 || this.movey > window.innerHeight * 1.25){
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


/***/ })
/******/ ]);