document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.createElement("canvas");
  canvas.id = "starfield";
  document.body.appendChild(canvas);

  const ctx = canvas.getContext("2d");
  let w = 0, h = 0, dpr = 1;

  function resize() {
    dpr = window.devicePixelRatio || 1;
    w = window.innerWidth;
    h = window.innerHeight;
    canvas.width = Math.floor(w * dpr);
    canvas.height = Math.floor(h * dpr);
    canvas.style.width = w + "px";
    canvas.style.height = h + "px";
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  window.addEventListener("resize", resize);
  resize();

  // Interactive parallax target
  let mx = 0, my = 0;
  window.addEventListener("mousemove", (e) => {
    mx = (e.clientX / w - 0.5) * 2; // [-1,1]
    my = (e.clientY / h - 0.5) * 2;
  });

  // Stars + Milky Way band (Gaussian around a diagonal line)
  const stars = [];
  const N = 900;

  // Band angle (tilted Milky Way)
  const theta = -20 * Math.PI / 180;
  const ct = Math.cos(theta), st = Math.sin(theta);

  function randn() {
    // Box-Muller
    let u = 0, v = 0;
    while (u === 0) u = Math.random();
    while (v === 0) v = Math.random();
    return Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
  }

  for (let i = 0; i < N; i++) {
    // Mix: 70% in Milky Way band, 30% uniform background
    const inBand = Math.random() < 0.7;

    let x, y;
    if (inBand) {
      // Create points around a diagonal band using rotated coords
      const u = (Math.random() - 0.5) * w * 1.4;      // along-band
      const v = randn() * (h * 0.08);                 // across-band thickness
      x = u * ct - v * st + w / 2;
      y = u * st + v * ct + h / 2;
    } else {
      x = Math.random() * w;
      y = Math.random() * h;
    }

    const depth = Math.random(); // 0..1 (near..far)
    const baseR = inBand ? (0.6 + Math.random() * 1.2) : (0.4 + Math.random() * 0.9);

    stars.push({
      x, y,
      z: depth,
      r: baseR,
      tw: Math.random() * 2 * Math.PI,          // twinkle phase
      ts: 0.6 + Math.random() * 1.4,            // twinkle speed
      a: inBand ? (0.35 + Math.random() * 0.55) : (0.2 + Math.random() * 0.45)
    });
  }

  function drawHaze() {
    // Soft milky way haze (layered gradients along the band)
    ctx.save();
    ctx.globalCompositeOperation = "lighter";
    ctx.translate(w / 2, h / 2);
    ctx.rotate(theta);

    const grad = ctx.createLinearGradient(-w * 0.8, 0, w * 0.8, 0);
    grad.addColorStop(0.0, "rgba(255,255,255,0)");
    grad.addColorStop(0.25, "rgba(180,220,255,0.05)");
    grad.addColorStop(0.5, "rgba(200,230,255,0.09)");
    grad.addColorStop(0.75, "rgba(180,220,255,0.05)");
    grad.addColorStop(1.0, "rgba(255,255,255,0)");

    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.ellipse(0, 0, w * 0.85, h * 0.12, 0, 0, Math.PI * 2);
    ctx.fill();

    ctx.restore();
    ctx.globalCompositeOperation = "source-over";
  }

  function frame(t) {
    ctx.clearRect(0, 0, w, h);

    // Haze first so stars sit on top
    drawHaze();

    for (const s of stars) {
      // Parallax: nearer stars move more with mouse
      const par = (1.0 - s.z);
      const px = s.x + mx * 18 * par;
      const py = s.y + my * 18 * par;

      if (px < -20 || px > w + 20 || py < -20 || py > h + 20) continue;

      // Twinkle
      const tw = 0.65 + 0.35 * Math.sin((t * 0.001) * s.ts + s.tw);
      const alpha = Math.min(1, s.a * tw);

      // Slightly bigger/stronger for nearer stars
      const size = s.r * (0.7 + 0.9 * par);

      ctx.beginPath();
      ctx.fillStyle = `rgba(255,255,255,${alpha})`;
      ctx.arc(px, py, size, 0, Math.PI * 2);
      ctx.fill();
    }

    requestAnimationFrame(frame);
  }

  requestAnimationFrame(frame);
});
