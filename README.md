# Happy Square

![happy-square-demo](./screenshots/happysquare.gif)

Happy Square is a interactive visual and audio square! Click anywhere on the screen and see what cool surprises await!

<a target="_blank" href='http://sunnygwong.com/happy-square/'>Live Demo</a>

# 2D Physics engine

A custom 2d physics layer was implemented to make the 'ball' objects more interactive

### Randomization

Reusable functions for selecting starting position, color, size, and velocity were created to add variety. The outputs are random selections out of a range or array.

```JS
export const randInRange = (min, max) => {
  return Math.floor(Math.random() * (max-min) + min);
};

export const randInArr = arr => {
  return arr[Math.floor(Math.random() * arr.length)];
};
```

### Gravity and Bounds

The Ball class's update function applies gravity and proper boundary management. If the 'ball' object hit the outer walls of the canvas their respective velocities of that wall direction would be reversed. Eg. If a ball hits a right or left wall their velocity in the x direction would be flipped. The balls eventually settle due to the gravity of the board.

```JS
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
```

# Collisions

An interaction is considered a collision if the distance between the 'ball' objects centers and subtracting their respective radii was less than or equal 0.

```JS
export const pythag = (x,y) => {
  return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
};

export const getDistance = (x1,y1,x2,y2) => {
  let xdist = x2 - x1;
  let ydist = y2 - y1;

  return pythag(xdist,ydist);
};

export const ballCollide = (ball1, ball2) => {
  if(getDistance(ball1.x, ball1.y, ball2.x, ball2.y)
  - ball1.radius - ball2.radius <= 0){
    return true;
  } else {
    return false;
  }
};
```

Updating the collision with proper resulting velocities was done by converting the 2d collisions into a 1d problem by projecting the balls original reference to their velocities onto their collision.
