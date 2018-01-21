export const randomColor = () => {
  const color = randInArr(
    [`rgb(176,176,204)`,
      `rgb(53,52,153)`,
      `rgb(245,250,255)`,
      `rgb(204,147,7)`,
      `rgb(255,184,114)`,
      `rgb(141,136,204)`,
      `rgb(255,150,32)`,
      `rgb(45,34,153)`
    ]
  );
  return color;
};

export const randomStart = () => {
  let startOne = [-10, Math.floor(Math.random() * window.innerHeight)];
  let startTwo = [Math.floor(Math.random() * window.innerWidth), -10];

  return [startOne, startTwo][Math.floor(Math.random() * 2)];
};

export const randInArr = arr => {
  return arr[Math.floor(Math.random() * arr.length)];
};

export const randInPos = () => {
  return randInArr([-1,1]);
};

export const randInRange = (min, max) => {
  return Math.floor(Math.random() * (max-min) + min);
};

export const pythag = (x,y) => {
  return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
};

export const getDistance = (x1,y1,x2,y2) => {
  let xdist = x2 - x1;
  let ydist = y2 - y1;

  return pythag(xdist,ydist);
};

export const addVector = (v1, v2) => {
  const resultVector = {};
  resultVector.x = v1.x + v2.x;
  resultVector.y = v1.y + v2.y;
  return resultVector;
};

export const subVector = (v1, v2) => {
  const resultVector = {};
  resultVector.x = v2.x - v1.x;
  resultVector.y = v2.y - v1.y;
  return resultVector;
};

export const dotProd = (v1, v2) => {
  return ((v1.x * v2.x )+ (v1.y * v2.y));
};

export const multVector = (m, v) => {
  return {x: m * v.x, y: m * v.y};
};

export const projection = (v, p) => {
  return multVector((dotProd(v,p)/dotProd(p,p)),p);
};

export const magnitude = (v) => {
  return Math.sqrt(dotProd(v,v));
};

export const unitVector = v => {
  return multVector((1/magnitude(v)),v);
};

export const faster = (v1, v2) => {
  if((v1 < 0 && v2 < 0) && (Math.abs(v2) > Math.abs(v1))){
    return true;
  }
  if((v1 > 0 && v2 > 0) && (Math.abs(v1) > Math.abs(v2)) ){
    return true;
  }
  return false;
};

export const newVelocities = (ball1, ball2) => {
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

export const ballCollide = (ball1, ball2) => {
  if(getDistance(ball1.x, ball1.y, ball2.x, ball2.y)
  - ball1.radius - ball2.radius <= 0){
    return true;
  } else {
    return false;
  }
};

export const resizeCanvas = (canvas) => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
};
