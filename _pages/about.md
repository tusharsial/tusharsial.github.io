---
permalink: /
title: " "
excerpt: "PhD Researcher · Aerospace Engineering"
author_profile: false
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
    <a href="/research/" class="btn btn-space-primary">View Research</a>
    <a href="/files/CV.pdf" target="_blank" rel="noopener" class="btn btn-space-outline">Download CV</a>
    <a href="#contact" class="btn btn-space-outline">Get in Touch</a>
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

<div class="fade-in">
  <div class="section-eyebrow" style="margin-top:48px;">Latest</div>
  <div class="news-heading">News</div>

  <div class="news-table-wrap">
    <table class="news-table">
      <tr>
        <td class="news-date">RTAS 2026</td>
        <td>Paper accepted at the 32nd IEEE Real-Time and Embedded Technology and Applications Symposium (RTAS 2026).</td>
      </tr>
      <tr>
        <td class="news-date">EMSOFT 2025</td>
        <td>Journal paper published in <em>ACM Transactions on Embedded Computing Systems</em> (TECS), also presented at EMSOFT 2025.</td>
      </tr>
      <tr>
        <td class="news-date">Oct 2024</td>
        <td>Preprint submitted — <em>Fixed Horizon Linear Quadratic Covariance Steering in Continuous Time with Hilbert-Schmidt Terminal Cost</em>. Under review at IEEE TAC.</td>
      </tr>
      <tr>
        <td class="news-date">Fall 2024</td>
        <td>Started PhD program at Iowa State University. Joined Prof. Halder's lab as Graduate Research Assistant.</td>
      </tr>
    </table>
  </div>

  <div class="news-divider"></div>
</div>

<div class="fade-in" id="contact">
  <div class="section-eyebrow">Let's Connect</div>
  <div class="section-heading">Get In Touch</div>
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
        Launch Message 
      </button>
      <p class="form-note" id="form-success" style="display:none;">✓ Message sent! I'll get back to you soon.</p>
    </div>
  </div>
</div>

<style>
  
/* Orbit rings */
.orbit-wrap {
  position: absolute;
  top: 50%;
  left: 50%;
  width: min(460px, 90vw);
  aspect-ratio: 1 / 1;
  transform: translate(-50%, -50%);
  pointer-events: none;
  z-index: 0;
}

.o-ring {
  position: absolute;
  border-radius: 50%;
  border: 1px solid rgba(255, 107, 0, 0.22);
  box-sizing: border-box;
  animation: o-spin linear infinite;
  transform-origin: center center;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
}

.ring-1 {
  inset: 0;
  animation-duration: 35s;
}

.ring-2 {
  inset: 50px;
  border-color: rgba(255,154,60,0.13);
  animation-duration: 25s;
}

.ring-3 {
  inset: 100px;
  border-color: rgba(255,107,0,0.20);
  animation-duration: 14s;
}

.o-dot {
  position: absolute;
  width: 7px;
  height: 7px;
  background: #FF6B00;
  border-radius: 50%;
  box-shadow: 0 0 10px #FF6B00;
  top: -3.5px;
  left: 50%;
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

/* ── NEWS TABLE ── */
.news-heading {
  font-family: 'Orbitron', sans-serif;
  font-size: clamp(1.4rem, 3vw, 2rem);
  font-weight: 800;
  color: #ffffff;
  margin: 6px 0 0 0;
  padding-bottom: 12px;
  border: none;
  position: relative;
  display: inline-block;
  line-height: 1.2;
}
.news-heading::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 50px;
  height: 2px;
  background: #FF6B00;
}
.news-table-wrap {
  margin-top: 24px;
  background: none !important;
  border: none !important;
  box-shadow: none !important;
  padding: 0 !important;
}
.news-table {
  width: 100%;
  border-collapse: collapse;
  background: none !important;
  border: none !important;
  box-shadow: none !important;
}
.news-table tr {
  border-bottom: 1px solid rgba(255, 107, 0, 0.1) !important;
  background: none !important;
  box-shadow: none !important;
}
.news-table tr:last-child {
  border-bottom: none !important;
}
.news-table td,
.news-table th {
  padding: 14px 8px !important;
  font-size: 0.9rem !important;
  color: #b0b8c8 !important;
  vertical-align: top !important;
  line-height: 1.6 !important;
  background: none !important;
  border: none !important;
  box-shadow: none !important;
}
.news-date,
.news-table td.news-date,
table.news-table td.news-date {
  font-family: 'Orbitron', sans-serif !important;
  font-size: 0.68rem !important;
  letter-spacing: 2px !important;
  color: #FF6B00 !important;
  white-space: nowrap !important;
  padding-right: 32px !important;
  width: 140px !important;
}
.news-divider {
  width: 100%;
  height: 1px;
  background: linear-gradient(to right, transparent, rgba(255,107,0,0.35), transparent);
  margin: 40px 0 0;
}

/* ── GET IN TOUCH ── */
.section-eyebrow {
  font-family: 'Orbitron', sans-serif;
  font-size: 0.65rem;
  letter-spacing: 5px;
  color: #FF6B00;
  text-transform: uppercase;
  margin-bottom: 6px;
  margin-top: 48px;
}
.section-heading {
  font-family: 'Orbitron', sans-serif !important;
  font-size: clamp(1.4rem, 3vw, 2rem) !important;
  font-weight: 800 !important;
  color: #ffffff;
  margin: 0 0 0 0 !important;
  padding-bottom: 12px !important;
  border: none !important;
  position: relative;
  display: inline-block;
  line-height: 1.2;
}
.section-heading::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 50px;
  height: 2px;
  background: #FF6B00;
}
.contact-intro {
  color: #b0b8c8;
  line-height: 1.85;
  margin: 20px 0 28px;
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


/* ── MOBILE ── */
@media (max-width: 768px) {
  .hero-intro {
    padding: 70px 0px 40px !important;
    min-height: 320px !important;
    overflow: hidden !important;
  }

  .orbit-wrap {
    width: min(280px, 82vw) !important;
  }

  .ring-2 {
    inset: 32px !important;
  }

  .ring-3 {
    inset: 64px !important;
  }

  .hero-title {
    font-size: clamp(1.6rem, 8vw, 2.4rem) !important;
  }

  .hero-badge {
    font-size: 0.6rem !important;
    letter-spacing: 2px !important;
  }

  .hero-sub {
    font-size: 0.88rem !important;
    max-width: 100% !important;
  }

  .hero-btns {
    flex-direction: column !important;
    align-items: center !important;
    width: 100% !important;
  }

  .btn-space-primary,
  .btn-space-outline {
    width: 100% !important;
    text-align: center !important;
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
