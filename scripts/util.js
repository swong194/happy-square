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

export const resizeCanvas = (canvas) => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
};
