/* ============================================================
   CKfablab Hero — "Adaptive Field"
   p5.js flow-field：粒子隨 noise 場流動，游標即時擾動場域
   概念呼應 lab 核心 "Adaptive"：系統感知環境並即時重組
   ============================================================ */

let particles = [];
const NUM = 700;
const NOISE_SCALE = 0.0016;
let heroEl;

function setup() {
  heroEl = document.querySelector('.hero');
  const c = createCanvas(heroEl.offsetWidth, heroEl.offsetHeight);
  c.parent('hero-canvas');

  for (let i = 0; i < NUM; i++) particles.push(newParticle());

  stroke(17, 17, 17, 34);
  strokeWeight(1);
  background(255);

  // 尊重使用者的減少動態偏好
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    for (let i = 0; i < 240; i++) drawFrame();
    noLoop();
  }
}

function newParticle() {
  return {
    x: random(width),
    y: random(height),
    px: 0, py: 0,
    speed: random(0.6, 2.2)
  };
}

function drawFrame() {
  for (const p of particles) {
    p.px = p.x;
    p.py = p.y;

    // 基礎流場
    let a = noise(p.x * NOISE_SCALE, p.y * NOISE_SCALE, frameCount * 0.0012) * TWO_PI * 2;

    // 游標擾動：靠近游標的粒子繞行 — adaptive behaviour
    const dx = p.x - mouseX;
    const dy = p.y - mouseY;
    const d = sqrt(dx * dx + dy * dy);
    if (d < 160 && d > 0.01) {
      const repel = map(d, 0, 160, 1, 0);
      a = lerp(a, atan2(dy, dx) + HALF_PI, repel * 0.85);
    }

    p.x += cos(a) * p.speed;
    p.y += sin(a) * p.speed;

    line(p.px, p.py, p.x, p.y);

    if (p.x < -10 || p.x > width + 10 || p.y < -10 || p.y > height + 10) {
      Object.assign(p, newParticle());
      p.px = p.x; p.py = p.y;
    }
  }

  // 殘影快速消除：背景保持乾淨，游標擾動的 pattern 更明顯
  noStroke();
  fill(255, 255, 255, 18);
  rect(0, 0, width, height);
  stroke(17, 17, 17, 34);
}

function draw() {
  // 捲出視窗時暫停，省電
  if (heroEl.getBoundingClientRect().bottom < 0) return;
  drawFrame();
}

function windowResized() {
  resizeCanvas(heroEl.offsetWidth, heroEl.offsetHeight);
  background(255);
}
