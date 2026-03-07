(function () {
  // Create and inject canvas as first child of body
  const c = document.createElement('canvas');
  c.id = 'star-canvas';
  c.style.cssText = [
    'position:fixed',
    'top:0',
    'left:0',
    'width:100%',
    'height:100%',
    'z-index:1',
    'pointer-events:none',
    'display:block'
  ].join(';');
  document.body.insertBefore(c, document.body.firstChild);

  const ctx = c.getContext('2d');
  let W, H, stars = [], asteroids = [];

  function resize() { W = c.width = innerWidth; H = c.height = innerHeight; }
  resize();
  window.addEventListener('resize', () => { resize(); init(); });

  function rand(a, b) { return Math.random() * (b - a) + a; }

  function init() {
    stars = [];
    for (let i = 0; i < 250; i++) {
      stars.push({
        x: rand(0, W), y: rand(0, H),
        r: rand(0.3, 1.8), alpha: rand(0.3, 1),
        speed: rand(0.0002, 0.001), phase: rand(0, Math.PI * 2)
      });
    }
    asteroids = [];
    for (let i = 0; i < 5; i++) asteroids.push(makeAsteroid(false));
  }

  function makeAsteroid(reset) {
    return {
      x: reset ? -80 : rand(-80, W + 80),
      y: rand(40, H - 40),
      vx: rand(0.1, 0.3), vy: rand(-0.05, 0.05),
      size: rand(3, 8), angle: rand(0, Math.PI * 2),
      spin: rand(-0.012, 0.012), alpha: rand(0.4, 0.8)
    };
  }

  function drawAsteroid(a) {
    ctx.save();
    ctx.translate(a.x, a.y);
    ctx.rotate(a.angle);
    ctx.globalAlpha = a.alpha;
    ctx.fillStyle = '#7a6a5a';
    ctx.beginPath();
    for (let i = 0; i < 7; i++) {
      const ang = (i / 7) * Math.PI * 2;
      const r = a.size * (1 + Math.sin(i * 2.3) * 0.25);
      i === 0
        ? ctx.moveTo(Math.cos(ang) * r, Math.sin(ang) * r)
        : ctx.lineTo(Math.cos(ang) * r, Math.sin(ang) * r);
    }
    ctx.closePath();
    ctx.fill();
    ctx.restore();
  }

  let t = 0;
  function draw() {
    ctx.clearRect(0, 0, W, H);

    // Twinkling stars
    stars.forEach(s => {
      const a = s.alpha * 0.5 + Math.sin(t * s.speed * 1000 + s.phase) * 0.5 * s.alpha;
      ctx.globalAlpha = Math.max(0, Math.min(1, a));
      ctx.fillStyle = '#ffffff';
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fill();
    });

    // Drifting asteroids
    asteroids.forEach(a => {
      a.x += a.vx; a.y += a.vy; a.angle += a.spin;
      if (a.x > W + 100) Object.assign(a, makeAsteroid(true));
      drawAsteroid(a);
    });

    // Subtle orange nebula glow
    const g = ctx.createRadialGradient(W * 0.75, H * 0.25, 0, W * 0.75, H * 0.25, W * 0.4);
    g.addColorStop(0, 'rgba(255,107,0,0.03)');
    g.addColorStop(1, 'transparent');
    ctx.globalAlpha = 1;
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, W, H);

    t += 0.016;
    requestAnimationFrame(draw);
  }

  init();
  draw();
})();
