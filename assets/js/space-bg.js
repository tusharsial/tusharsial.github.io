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

  // Also support gentle motion on mobile via device orientation (optional)
  window.addEventListener("deviceorientation", (e) => {
    if (e.gamma == null || e.beta == null) return;
    mx = Math.max(-1, Math.min(1, e.gamma / 30));
    my = Math.max(-1, Math.min(1, e.beta / 30));
  });

  // Stars with depth (z): nearer stars move more (parallax)
  const stars = [];
  const N = 700;

  function resetStar(s) {
    s.x = Math.random() * w;
    s.y = Math.random() * h;
    s.z = Math.random(); // 0..1 (near..far)
    s.r = 0.6 + Math.random() * 1.4;
    s.a = 0.25 + Math.random() * 0.6;
    s.tw = Math.random() * Math.PI * 2;
    s.ts = 0.6 + Math.random() * 1.5;
  }

  for (let i = 0; i < N; i++) {
    const s = {};
    resetStar(s);
    stars.push(s);
  }

  function frame(t) {
    // black base
    ctx.fillStyle = "#000";
    ctx.fillRect(0, 0, w, h);

    for (const s of stars) {
      const par = 1 - s.z;              // near -> 1, far -> 0
      const px = s.x + mx * 22 * par;   // parallax strength
      const py = s.y + my * 22 * par;

      // wrap around edges so it stays dense
      const x = (px + w) % w;
      const y = (py + h) % h;

      // subtle twinkle
      const tw = 0.75 + 0.25 * Math.sin((t * 0.001) * s.ts + s.tw);
      const alpha = Math.min(1, s.a * tw);

      const size = Math.max(0.6, s.r * (0.5 + par));

      ctx.beginPath();
      ctx.fillStyle = `rgba(255,255,255,${alpha})`;
      ctx.arc(x, y, size, 0, Math.PI * 2);
      ctx.fill();
    }

    requestAnimationFrame(frame);
  }

  requestAnimationFrame(frame);
});
