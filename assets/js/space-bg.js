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

  // Mouse parallax target in [-1, 1]
  let mx = 0, my = 0;
  window.addEventListener("mousemove", (e) => {
    mx = (e.clientX / w - 0.5) * 2;
    my = (e.clientY / h - 0.5) * 2;
  });

  const stars = [];
  const N = 750;

  function resetStar(s) {
    s.x = Math.random() * w;
    s.y = Math.random() * h;
    s.z = Math.random(); // 0..1 (near..far)
    s.r = 0.6 + Math.random() * 1.4;
    s.a = 0.2 + Math.random() * 0.6;
    s.tw = Math.random() * Math.PI * 2;
    s.ts = 0.6 + Math.random() * 1.5;

    // drift velocity: far stars drift slower, near stars drift faster
    const par = 1 - s.z;
    const base = 0.02 + 0.06 * par; // overall drift speed
    const angle = -Math.PI / 2 + (Math.random() - 0.5) * 0.25; // mostly upward
    s.vx = Math.cos(angle) * base;
    s.vy = Math.sin(angle) * base;
  }

  for (let i = 0; i < N; i++) {
    const s = {};
    resetStar(s);
    stars.push(s);
  }

  let lastT = performance.now();

  function frame(t) {
    const dt = Math.min(33, t - lastT); // ms clamp
    lastT = t;

    // black base
    ctx.fillStyle = "#000";
    ctx.fillRect(0, 0, w, h);

    for (const s of stars) {
      // Update drift (dt-scaled so consistent across refresh rates)
      const speedScale = dt * 0.01; // tune overall drift here
      s.x += s.vx * speedScale * 60;
      s.y += s.vy * speedScale * 60;

      // Wrap edges (keeps density constant)
      if (s.x < -20) s.x = w + 20;
      if (s.x > w + 20) s.x = -20;
      if (s.y < -20) s.y = h + 20;
      if (s.y > h + 20) s.y = -20;

      // Parallax shift
      const par = 1 - s.z;              // near -> 1, far -> 0
      const px = s.x + mx * 22 * par;   // parallax strength
      const py = s.y + my * 22 * par;

      // Twinkle
      const tw = 0.75 + 0.25 * Math.sin((t * 0.001) * s.ts + s.tw);
      const alpha = Math.min(1, s.a * tw);

      const size = Math.max(0.6, s.r * (0.5 + par));

      ctx.beginPath();
      ctx.fillStyle = `rgba(255,255,255,${alpha})`;
      ctx.arc(px, py, size, 0, Math.PI * 2);
      ctx.fill();
    }

    requestAnimationFrame(frame);
  }

  requestAnimationFrame(frame);
});
