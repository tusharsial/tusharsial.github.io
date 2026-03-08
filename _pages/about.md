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
</div>

<div class="orbit-divider"></div>

## About Me

I am a **PhD candidate in Aerospace Engineering** at [University Name]. Since fall 2024, I have been working as a Graduate Research Assistant under [Professor Abhishek Halder](https://abhishekhalder.org/index.html), at the intersection of **Stochastic Systems, Dynamics & Control, and Optimization**.

My enduring curiosity for control systems led me to major in Electrical and Electronics Engineering at **Birla Institute of Technology and Science (BITS) Pilani**. My undergraduate and master's research experiences have helped me identify my interests in bridging astrodynamics, control theory, optimization, and stochastic systems to advance **Guidance, Navigation, and Control (GNC)** architectures of space systems.

Apart from research, I keep a keen interest in **Electric Vehicles**. My hobbies include trekking, cricket, badminton, running, and cycling.

## Research Interests

<div class="research-tags">
  <span class="rtag">Orbital Mechanics & Astrodynamics</span>
  <span class="rtag">Stochastic Systems & Control</span>
  <span class="rtag">GNC Architectures</span>
  <span class="rtag">Spacecraft Mission Design</span>
  <span class="rtag">Optimization in Dynamical Systems</span>
  <span class="rtag">Multi-body Dynamics</span>
</div>

## News

| Date | Update |
|------|--------|
| **Fall 2024** | Started PhD program at [University Name] |
| **Fall 2024** | Joined Prof. Halder's lab as Graduate Research Assistant |

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
  border-color: #FF6B00 !important;
  color: #FF9A3C !important;
  box-shadow: 0 0 14px rgba(255,107,0,0.2);
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
</style>
