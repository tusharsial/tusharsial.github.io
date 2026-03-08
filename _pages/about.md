---
permalink: /
title: " "
excerpt: "PhD Researcher · Aerospace Engineering"
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

<div class="hero-intro">

  <!-- Orbit rings -->
  <div class="orbit-wrap">
    <div class="o-ring ring-1"><div class="o-dot"></div></div>
    <div class="o-ring ring-2"><div class="o-dot"></div></div>
    <div class="o-ring ring-3"><div class="o-dot"></div></div>
  </div>

  <div class="hero-badge">PhD Researcher · Aerospace Engineering</div>
  <h1 class="hero-title">Exploring the<br/>Final Frontier</h1>
  <p class="hero-sub">
    Bridging astrodynamics, control theory, optimization, and stochastic systems
    to advance the GNC architectures of space systems — enabling autonomous
    decision-making in uncertain multi-body environments.
  </p>
  <div class="hero-btns">
    <a href="/publications/" class="btn btn-space-primary">View Research</a>
    <a href="/contact/" class="btn btn-space-outline">Get in Touch</a>
  </div>
  <div class="scroll-hint">Scroll</div>
</div>

<div class="orbit-divider fade-in"></div>

<div class="fade-in" markdown="1">
## About Me

I am a **PhD candidate in Aerospace Engineering** at [University Name]. Since fall 2024, I have been working as a Graduate Research Assistant under [Professor Abhishek Halder](https://abhishekhalder.org/index.html), at the intersection of **Stochastic Systems, Dynamics & Control, and Optimization**.

My enduring curiosity for control systems led me to major in Electrical and Electronics Engineering at **Birla Institute of Technology and Science (BITS) Pilani**. My undergraduate and master's research experiences have helped me identify my interests in bridging astrodynamics, control theory, optimization, and stochastic systems to advance **Guidance, Navigation, and Control (GNC)** architectures of space systems.

Apart from research, I keep a keen interest in **Electric Vehicles**. My hobbies include trekking, cricket, badminton, running, and cycling.
</div>

<div class="fade-in" markdown="1">
## Research Interests

<div class="research-tags">
  <span class="rtag">Orbital Mechanics & Astrodynamics</span>
  <span class="rtag">Stochastic Systems & Control</span>
  <span class="rtag">GNC Architectures</span>
  <span class="rtag">Spacecraft Mission Design</span>
  <span class="rtag">Optimization in Dynamical Systems</span>
  <span class="rtag">Multi-body Dynamics</span>
</div>
</div>

<div class="fade-in" markdown="1">

## News

<table>
  <tr><th>Date</th><th>Update</th></tr>
  <tr><td><strong>Fall 2024</strong></td><td>Started PhD program at [University Name]</td></tr>
  <tr><td><strong>Fall 2024</strong></td><td>Joined Prof. Halder's lab as Graduate Research Assistant</td></tr>
</table>

</div>

<div class="fade-in">
  <div class="section-eyebrow">Let's Connect</div>
  <h2 class="section-heading">Get In Touch</h2>
  <p class="contact-intro">Whether you're interested in collaborating on research, discussing GNC and stochastic control, or just want to say hello — my inbox is always open.</p>

  <div class="contact-grid">
    <div class="contact-links">
      <a href="mailto:sialtushar@gmail.com" class="c-link">
        <span class="c-icon">✉️</span>sialtushar@gmail.com
      </a>
      <a href="https://www.linkedin.com/in/tushar-sial-726001195" class="c-link" target="_blank">
        <span class="c-icon">🔗</span>linkedin.com/in/tushar-sial
      </a>
      <a href="https://github.com/tusharsial" class="c-link" target="_blank">
        <span class="c-icon">🐙</span>github.com/tusharsial
      </a>
      <a href="https://scholar.google.com/citations?hl=en&user=2vdL-1wAAAAJ" class="c-link" target="_blank">
        <span class="c-icon">📄</span>Google Scholar Profile
      </a>
      <a href="https://orcid.org/0009-0003-3864-1217" class="c-link" target="_blank">
        <span class="c-icon">🔬</span>ORCID: 0009-0003-3864-1217
      </a>
    </div>

    <div class="contact-form">
      <div class="form-group">
        <label class="form-label">Name</label>
        <input type="text" class="form-input" placeholder="Your name"/>
      </div>
      <div class="form-group">
        <label class="form-label">Email</label>
        <input type="email" class="form-input" placeholder="your@email.com"/>
      </div>
      <div class="form-group">
        <label class="form-label">Message</label>
        <textarea class="form-input form-textarea" placeholder="Research collaboration, questions, or just hello..."></textarea>
      </div>
      <button class="btn btn-space-primary" style="width:100%;cursor:pointer;border:none;" onclick="handleContactSubmit(this)">
        Launch Message 🚀
      </button>
      <p class="form-note" id="form-success" style="display:none;">✓ Message sent! I'll get back to you soon.</p>
    </div>
  </div>
</div>

<style>
/* Orbit rings */
.orbit-wrap {
  position: absolute;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
}
.o-ring {
  position: absolute;
  border-radius: 50%;
  border: 1px solid rgba(255, 107, 0, 0.22);
  top: 50%; left: 50%;
  animation: o-spin linear infinite;
}
.ring-1 { width: 460px; height: 460px; margin: -230px 0 0 -230px; animation-duration: 35s; }
.ring-2 { width: 360px; height: 360px; margin: -180px 0 0 -180px; animation-duration: 25s; border-color: rgba(255,154,60,0.13); }
.ring-3 { width: 260px; height: 260px; margin: -130px 0 0 -130px; animation-duration: 14s; border-color: rgba(255,107,0,0.20); }
.o-dot {
  position: absolute;
  width: 7px; height: 7px;
  background: #FF6B00;
  border-radius: 50%;
  box-shadow: 0 0 10px #FF6B00;
  top: -3.5px; left: 50%;
  margin-left: -3.5px;
}
@keyframes o-spin {
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
}

/* Hero Section */
.hero-intro {
  text-align: center;
  padding: 80px 20px 60px;
  position: relative;
  min-height: 420px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.hero-badge {
  font-family: 'Orbitron', sans-serif;
  font-size: 0.7rem;
  letter-spacing: 4px;
  color: #FF6B00;
  text-transform: uppercase;
  margin-bottom: 18px;
}
.hero-title {
  font-family: 'Orbitron', sans-serif !important;
  font-size: clamp(2rem, 5vw, 3.6rem) !important;
  font-weight: 900 !important;
  line-height: 1.15 !important;
  margin-bottom: 20px !important;
  border: none !important;
  background: linear-gradient(135deg, #fff 40%, #FF9A3C);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.hero-sub {
  font-size: 1rem;
  color: #b0b8c8;
  max-width: 580px;
  margin: 0 auto 32px;
  line-height: 1.8;
}
.hero-btns {
  display: flex;
  gap: 14px;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 10px;
}
.btn-space-primary {
  padding: 12px 28px;
  background: #FF6B00 !important;
  color: #000 !important;
  font-family: 'Orbitron', sans-serif;
  font-size: 0.7rem;
  letter-spacing: 2px;
  text-transform: uppercase;
  border-radius: 4px;
  text-decoration: none !important;
  font-weight: 700;
  transition: all 0.3s;
}
.btn-space-primary:hover {
  background: #FF9A3C !important;
  box-shadow: 0 0 20px rgba(255,107,0,0.5);
  color: #000 !important;
}  
.btn-space-outline {
  padding: 12px 28px;
  background: transparent !important;
  color: #fff !important;
  font-family: 'Orbitron', sans-serif;
  font-size: 0.7rem;
  letter-spacing: 2px;
  text-transform: uppercase;
  border-radius: 4px;
  border: 1px solid rgba(255,107,0,0.5) !important;
  text-decoration: none !important;
  transition: all 0.3s;
}
.btn-space-outline:hover {
  background: rgba(255, 107, 0, 0.15) !important;
  border-color: #FF6B00 !important;
  color: #FF9A3C !important;
  box-shadow: 0 0 16px rgba(255, 107, 0, 0.3) !important;
}

/* Divider */
.orbit-divider {
  width: 100%;
  height: 1px;
  background: linear-gradient(to right, transparent, rgba(255,107,0,0.35), transparent);
  margin: 20px 0 40px;
}

/* Research Tags */
.research-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin: 16px 0 32px;
}
.rtag {
  padding: 6px 16px;
  border: 1px solid rgba(255,107,0,0.35);
  border-radius: 20px;
  font-size: 0.75rem;
  color: #FF9A3C;
  font-family: 'Orbitron', sans-serif;
  letter-spacing: 0.5px;
}

/* Scroll hint */
.scroll-hint {
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  opacity: 0.4;
  font-size: 0.7rem;
  letter-spacing: 3px;
  text-transform: uppercase;
  font-family: 'Orbitron', sans-serif;
  color: #ffffff;
}
.scroll-hint::after {
  content: '';
  width: 1px;
  height: 40px;
  background: linear-gradient(to bottom, #FF6B00, transparent);
}

/* Fade-in animation */
.fade-in {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.7s ease, transform 0.7s ease;
}
.fade-in.visible {
  opacity: 1;
  transform: none;
}

/* ── GET IN TOUCH ── */
.section-eyebrow {
  font-family: 'Orbitron', sans-serif;
  font-size: 0.65rem;
  letter-spacing: 5px;
  color: #FF6B00;
  text-transform: uppercase;
  margin-bottom: 10px;
}
.section-heading {
  font-family: 'Orbitron', sans-serif !important;
  font-size: clamp(1.4rem, 3vw, 2rem) !important;
  font-weight: 800 !important;
  margin-bottom: 12px !important;
  border: none !important;
  position: relative;
  display: inline-block;
}
.section-heading::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 0;
  width: 50px;
  height: 2px;
  background: #FF6B00;
}
.contact-intro {
  color: #b0b8c8;
  line-height: 1.85;
  margin: 24px 0 32px;
  max-width: 580px;
  font-size: 0.95rem;
}
.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  align-items: start;
}
.contact-links {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.c-link {
  display: flex;
  align-items: center;
  gap: 12px;
  color: #b0b8c8 !important;
  text-decoration: none !important;
  font-size: 0.88rem;
  padding: 11px 14px;
  border: 1px solid rgba(255,255,255,0.06);
  border-radius: 6px;
  transition: all 0.3s;
}
.c-link:hover {
  color: #FF9A3C !important;
  border-color: rgba(255,107,0,0.35) !important;
  background: rgba(255,107,0,0.04);
}
.c-icon {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: rgba(255,107,0,0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;
  flex-shrink: 0;
}
.contact-form {
  display: flex;
  flex-direction: column;
  gap: 0;
}
.form-group {
  margin-bottom: 18px;
}
.form-label {
  display: block;
  font-family: 'Orbitron', sans-serif;
  font-size: 0.62rem;
  letter-spacing: 2px;
  color: #FF6B00;
  margin-bottom: 7px;
  text-transform: uppercase;
}
.form-input {
  width: 100%;
  background: rgba(255,255,255,0.03);
  border: 1px solid rgba(255,107,0,0.2);
  border-radius: 4px;
  padding: 11px 14px;
  color: #ffffff;
  font-family: 'Exo 2', sans-serif;
  font-size: 0.92rem;
  outline: none;
  transition: border 0.3s;
  box-sizing: border-box;
}
.form-input:focus {
  border-color: #FF6B00;
}
.form-textarea {
  resize: vertical;
  min-height: 110px;
}
.form-note {
  margin-top: 12px;
  font-size: 0.82rem;
  color: #FF9A3C;
  font-family: 'Orbitron', sans-serif;
  letter-spacing: 1px;
}

@media (max-width: 700px) {
  .contact-grid {
    grid-template-columns: 1fr;
    gap: 32px;
  }
}
</style>

<script>
// Fade-in on scroll
(function(){
  var obs = new IntersectionObserver(function(entries){
    entries.forEach(function(e){ if(e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.1 });
  document.querySelectorAll('.fade-in').forEach(function(el){ obs.observe(el); });
})();

function handleContactSubmit(btn) {
  var name    = document.querySelector('.contact-form .form-input[type="text"]').value.trim();
  var email   = document.querySelector('.contact-form .form-input[type="email"]').value.trim();
  var message = document.querySelector('.contact-form .form-textarea').value.trim();
  if (!name || !email || !message) {
    alert('Please fill in all fields before sending.');
    return;
  }
  btn.disabled = true;
  btn.textContent = 'Launching… 🚀';
  setTimeout(function(){
    btn.textContent = 'Sent ✓';
    document.getElementById('form-success').style.display = 'block';
  }, 1000);
}
</script>
