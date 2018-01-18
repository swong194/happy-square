export const randomColor = () => {
  let color = 'rgba(';
  for (let u = 0; u < 3; u++) {
    color += `${Math.floor(Math.random() * 255)},`;
  }
  color += '1)';
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

export const vel = (ball) => {
  return pythag(ball.dx, ball.dy);
};

export const kinE = (v, mass) => {
  return (0.5)*mass * Math.pow(v, 2);
};

export const resultVel = (v1, v2, m1, m2) => {
  return Math.sqrt((2/m1) * (kinE(v1,m1) + kinE(v2,m2)));
};

export const newVelocities = (ball1, ball2) => {
  const sumMass = ball1.radius + ball2.radius;
  const xVel = resultVel(ball1.dx, ball2.dx, ball1.radius, ball2.radius);
  ball1.dx = Math.floor((ball1.radius - ball2.radius) * xVel / (sumMass)) * randInPos();
  ball2.dx = Math.floor(2*ball1.radius*xVel)/(sumMass) * randInPos();

  const yVel = resultVel(ball1.dy, ball2.dy, ball1.radius, ball2.radius);
  ball1.dy = Math.floor((ball1.radius - ball2.radius) * yVel) / (sumMass) * randInPos();
  ball2.dy = Math.floor(2*ball1.radius*yVel)/(sumMass) * randInPos();

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
