---
layout: archive
title: " "
permalink: /publications/
author_profile: false
---

<div class="pub-hero fade-in">
  <div class="section-eyebrow">Scholarly Work</div>
  <div class="pub-page-title">Publications</div>
</div>

<div class="orbit-divider fade-in"></div>

<!-- ── Preprint ── -->
<div class="pub-group">
  <div class="pub-group-label fade-in">Preprint</div>
  
  <div class="pub-item fade-in">
    <div class="pub-title">
        Continuous Time LQ Covariance Control over a Fixed Horizon: Optimal Transport and Bregman Divergence Terminal Costs
    </div>
    <div class="pub-authors"><strong>Tushar Sial</strong>, and Abhishek Halder.</div>
    <div class="pub-venue">65th IEEE Conference on Decision and Control <span class="pub-status">· Under Review</span></div>
  </div>
  
  <div class="pub-item fade-in">
    <div class="pub-title">
      <a href="https://arxiv.org/abs/2510.21944" target="_blank" rel="noopener">
        Fixed Horizon Linear Quadratic Covariance Steering in Continuous Time with Hilbert-Schmidt Terminal Cost
      </a>
    </div>
    <div class="pub-authors"><strong>Tushar Sial</strong>, and Abhishek Halder.</div>
    <div class="pub-venue">IEEE Transactions on Automatic Control <span class="pub-status">· Under Review</span></div>
  </div>
</div>

<!-- ── Journal ── -->
<div class="pub-group">
  <div class="pub-group-label fade-in">Journal</div>

  <div class="pub-item fade-in">
    <div class="pub-title">
      <a href="https://dl.acm.org/doi/pdf/10.1145/3761814" target="_blank" rel="noopener">
        Rasco: Resource Allocation and Scheduling Co-design for DAG Applications on Multicore
      </a>
    </div>
    <div class="pub-authors">Abigail Eisenklam, Robert Gifford, Georgiy A. Bondar, Yifan Cai, <strong>Tushar Sial</strong>, Linh Thi Xuan Phan, and Abhishek Halder.</div>
    <div class="pub-venue">ACM Transactions on Embedded Computing Systems (also in EMSOFT 2025) </div>
    <div class="pub-meta">Last 5-yr acceptance rate: <a href="https://openaccept.org/c/new/emsoft/" target="_blank" rel="noopener">24.21%</a></div>
  </div>
</div>

<!-- ── Conference ── -->
<div class="pub-group">
  <div class="pub-group-label fade-in">Conference</div>

  <div class="pub-item fade-in">
    <div class="pub-title">
      LQ Covariance Control with Deadline Constraint and Frobenius Terminal Loss
    </div>
    <div class="pub-authors"> <strong>Tushar Sial</strong>, and Abhishek Halder.</div>
    <div class="pub-venue">2026 AIAA Regional Student Conference <span class="pub-status">· To appear </span></div>
  </div>
  
  <div class="pub-item fade-in">
    <div class="pub-title">
      <a href="https://arxiv.org/abs/2603.03479" target="_blank" rel="noopener">
      Multidisciplinary Design Optimization of a Low-Thrust Asteroid Orbit Insertion Using Electric Propulsion
      </a>
    </div>
    <div class="pub-authors">Yacob Medhin, <strong>Tushar Sial</strong>, and Simone Servadio.</div>
    <div class="pub-venue">2026 AIAA Regional Student Conference <span class="pub-status">· To appear </span></div>
  </div>
  
  <div class="pub-item fade-in">
    <div class="pub-title">
      Generative Profiling for Soft Real-Time Systems and its Applications to Resource Allocation
    </div>
    <div class="pub-authors">Georgiy A. Bondar, Abigail Eisenklam, Yifan Cai, Robert Gifford, <strong>Tushar Sial</strong>, Linh Thi Xuan Phan, and Abhishek Halder.</div>
    <div class="pub-venue">32nd IEEE Real-Time and Embedded Technology and Applications Symposium (RTAS 2026) <span class="pub-status">· To appear</span></div>
    <div class="pub-meta">Last 5-yr acceptance rate: <a href="https://openaccept.org/c/sys/rtas/" target="_blank" rel="noopener">25.83%</a></div>
    <div class="pub-primordial" style="margin-top:10px;">
      <span class="pub-primordial-label">Primordial version:</span> <a href="https://arxiv.org/pdf/2501.08484" target="_blank" rel="noopener">CORD: Co-design of Resource Allocation and Deadline Decomposition with Generative Profiling</a>
    </div>
  </div>
  
</div>

<style>

/* ── PAGE HERO ── */
/*.pub-hero {
  padding: 48px 0 8px;
}*/
.pub-page-title {
  font-family: 'Orbitron', sans-serif;
  font-size: clamp(1.8rem, 4vw, 3rem);
  font-weight: 900;
  color: #ffffff;
  margin: 6px 0 0 0;
  padding-bottom: 14px;
  border: none;
  position: relative;
  display: inline-block;
  line-height: 1.15;
  background: linear-gradient(135deg, #fff 40%, #FF9A3C);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.pub-page-title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 60px;
  height: 2px;
  background: #FF6B00;
}

/* ── DIVIDER ── */
.orbit-divider {
  width: 100%;
  height: 1px;
  background: linear-gradient(to right, transparent, rgba(255,107,0,0.35), transparent);
  margin: 24px 0 40px;
}

/* ── EYEBROW ── */
.section-eyebrow {
  font-family: 'Orbitron', sans-serif;
  font-size: 0.65rem;
  letter-spacing: 5px;
  color: #FF6B00;
  text-transform: uppercase;
  margin-bottom: 6px;
}

/* ── PUB GROUPS ── */
.pub-group {
  margin-bottom: 44px;
}
.pub-group-label {
  font-family: 'Orbitron', sans-serif;
  font-size: 0.68rem;
  letter-spacing: 4px;
  color: #FF6B00;
  text-transform: uppercase;
  margin-bottom: 18px;
  padding-bottom: 10px;
  border-bottom: 1px solid rgba(255, 107, 0, 0.25);
}

/* ── PUB ITEMS ── */
.pub-item {
  padding: 22px 26px;
  background: rgba(255, 255, 255, 0.02) !important;
  border: 1px solid rgba(255, 107, 0, 0.15) !important;
  border-radius: 8px;
  margin-bottom: 18px;
  transition: all 0.3s;
  position: relative;
  overflow: hidden;
  box-shadow: none !important;
}
.pub-item::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 2px;
  background: linear-gradient(to right, #FF6B00, transparent);
  opacity: 0;
  transition: opacity 0.3s;
}
.pub-item:hover {
  border-color: rgba(255, 107, 0, 0.4) !important;
  box-shadow: 0 0 32px rgba(255, 107, 0, 0.07) !important;
  transform: translateY(-3px);
}
.pub-item:hover::before {
  opacity: 1;
}
.pub-title {
  font-size: 0.97rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 8px;
  line-height: 1.55;
}
.pub-title a {
  color: #FF9A3C !important;
  text-decoration: none !important;
  border-bottom: none !important;
}
.pub-title a:hover {
  color: #FF9A3C !important;
  text-decoration: none !important;
  border-bottom: 1px dotted #cc4400 !important;
}
.pub-authors {
  font-size: 0.87rem;
  color: #b0b8c8;
  margin-bottom: 6px;
  line-height: 1.6;
}
.pub-authors strong {
  color: #ffffff;
}
.pub-venue {
  font-size: 0.85rem;
  color: #FF9A3C;
  font-style: italic;
  margin-bottom: 8px;
  line-height: 1.5;
}
.pub-status {
  color: rgba(255, 154, 60, 0.7);
  font-style: normal;
  font-size: 0.8rem;
}
.pub-meta {
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.3);
  font-family: 'Orbitron', sans-serif;
  letter-spacing: 1px;
  margin-bottom: 6px;
}
.pub-meta a {
  color: rgba(255, 154, 60, 0.6) !important;
  text-decoration: none !important;
}
.pub-meta a:hover {
  color: #FF9A3C !important;
}
.pub-primordial-label {
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.3);
  font-family: 'Orbitron', sans-serif;
  letter-spacing: 1px;
}
.pub-primordial {
  font-size: 0.97rem;
  font-weight: 600;
  line-height: 1.55;
  color: rgba(255, 255, 255, 0.3);
}
.pub-primordial a {
  color: #FF9A3C !important;
  text-decoration: none !important;
  transition: text-decoration 0.3s;
}
.pub-primordial a:hover {
  color: #FF9A3C !important;
  text-decoration: none !important;
  border-bottom: 1px dotted #cc4400 !important;
} 

/* ── FADE IN ── */
.fade-in {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.7s ease, transform 0.7s ease;
}
.fade-in.visible {
  opacity: 1;
  transform: none;
}
</style>

<script>
(function(){
  var obs = new IntersectionObserver(function(entries){
    entries.forEach(function(e){ if(e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.1 });
  document.querySelectorAll('.fade-in').forEach(function(el){ obs.observe(el); });
})();
</script>
