
class Bubble {
  constructor(w = 0, h = 0) {
    this.canvasW = w
    this.canvasH = h
    this.setPosition(true);
  }

  canvasW = 0
  canvasH = 0
  x = 0
  y = 0
  radius = 0
  color = ''
  speedX = 0
  speedY = 0
  growth = 0

  setPosition(init = false) {
    this.radius = Math.random() * 50 + 2.5; // 初始半径
    this.growth = Math.random() * 0.02 + 0.01; // 增长速度
    this.speedY = Math.random() * 4 + 1;
    this.speedX = (Math.random() * 4 - 1) * 1;
    this.x = Math.random() * this.canvasW;
    this.y = init ? Math.random() * this.canvasH : this.canvasH + this.radius;
    this.color = this.getRandomColor(); // 随机颜色
  }

  draw(ctx: CanvasRenderingContext2D) {
    // console.log(this.x, this.y, this.radius)
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.closePath();
    ctx.fill();
  }

  update() {
    this.x += this.speedX; // 更新x坐标
    this.y -= this.speedY; // 更新y坐标
    this.radius += this.growth; // 气泡逐渐变大

    // 检查是否超出屏幕边界，如果是则重置
    if (this.y + this.radius < 0 || this.x + this.radius < 0 || this.x - this.radius > this.canvasW) {
      this.setPosition();
    }
  }

  getRandomColor() {
    const letters = '0123456789ABCDEF';
    // let color = '#00bfff' + Math.random().toString(16).slice(2,4);
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
}

export const drawBubbles = (el: HTMLCanvasElement) => {
  const ctx = el.getContext('2d', { antialias: true }) as CanvasRenderingContext2D;
  const dpr = window.devicePixelRatio || 1;

  // set canvs width and height
  const canvasW = window.innerWidth * dpr;
  const canvasH = window.innerHeight * dpr;
  el.width = canvasW;
  el.height = canvasH;

  const bubbles: Bubble[] = [];
  const maxBubbles = 120;

  function createBubbles() {
    for (let i = 0; i < maxBubbles; i++) {
      bubbles.push(new Bubble(canvasW, canvasH));
    }
  }
  createBubbles();
  
  // animate
  function animate() {
    ctx.clearRect(0, 0, canvasW, canvasH);
    ctx.imageSmoothingEnabled = true;
    bubbles.forEach(bubble => {
      bubble.draw(ctx);
      bubble.update();
    });
    requestAnimationFrame(animate);
  }
  animate();
}