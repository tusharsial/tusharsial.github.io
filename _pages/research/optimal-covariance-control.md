---
layout: archive
permalink: /research/optimal-covariance-control/
author_profile: false
---

<div class="pd-page">

  <div class="pd-header">
    <div class="pd-eyebrow">Stochastic Control · Optimization</div>
    <div class="pd-title">Optimal Covariance Control</div>
    <div class="pd-date">August 2024 – Present · MS Thesis · Iowa State University</div>
  </div>

  <div class="pd-divider"></div>

  <div class="pd-section-label">Project Overview</div>
  <div class="pd-body">
    My Master's thesis under Prof. <a href="https://abhishekhalder.org/index.html" target="_blank" rel="noopener">Abhishek Halder</a> focuses on designing an <strong>Optimal Covariance Steering Algorithm in Continuous Time with Hilbert-Schmidt Terminal Cost for Linear Stochastic Systems over a finite time horizon</strong>. While there has been a growing literature on fixed-horizon LQ covariance steering problems with terminal cost for the discrete-time case, its continuous-time version remains relatively unexplored.
    <br/><br/>
    A key reason for the imbalance between discrete- and continuous-time formulations lies in computational tractability. The discrete-time problem naturally leads to a semidefinite program solvable via off-the-shelf interior-point solvers. In contrast, the continuous-time formulation with terminal cost gives rise to a coupled nonlinear system of matricial ODEs, for which a principled and computationally efficient algorithm had remained unclear.
    <br/><br/>
    My research introduces a soft constraint via the <strong>Hilbert–Schmidt Terminal Cost</strong>, together with a quadratic cost on control input and state. The necessary conditions of optimality lead to a coupled matrix ODE two-point boundary value problem with nonlinear split boundary conditions. To solve this, I designed a <strong>Matricial Recursive Algorithm</strong> with a fast convergence rate, grounded in linear fractional transformations parameterized by the state transition matrix of the associated Hamiltonian system.
    <br/><br/>
    The algorithm was validated on a close-proximity rendezvous scenario modeling the relative motion of a service spacecraft to a target satellite in LEO using Clohessy–Wiltshire dynamics with stochastic disturbances. Our broader motivation is to derive a custom algorithm to solve the boundary value problem with a Wasserstein terminal cost — this work lays the algorithmic groundwork toward that direction.
  </div>

  <div class="pd-divider"></div>

  <div class="pd-section-label">Results &amp; Figures</div>
  <div class="pd-figures">
    <div class="pd-fig-placeholder">Figure 1</div>
    <div class="pd-fig-placeholder">Figure 2</div>
    <div class="pd-fig-placeholder">Figure 3</div>
    <div class="pd-fig-placeholder">Figure 4</div>
  </div>

  <div class="pd-divider"></div>

  <div class="pd-section-label">Publications</div>

  <div class="pub-group">
    <div class="pub-group-label">Preprint</div>
    <div class="pub-item">
      <div class="pub-title"><a href="https://arxiv.org/abs/2510.21944" target="_blank" rel="noopener">Fixed Horizon Linear Quadratic Covariance Steering in Continuous Time with Hilbert-Schmidt Terminal Cost</a></div>
      <div class="pub-authors"><strong>Tushar Sial</strong>, and Abhishek Halder.</div>
      <div class="pub-venue">IEEE Transactions on Automatic Control <span class="pub-status">· Under Review</span></div>
    </div>
  </div>

  <div class="pub-group">
    <div class="pub-group-label">Conference</div>
    <div class="pub-item">
      <div class="pub-title">LQ Covariance Control with Deadline Constraint and Frobenius Terminal Loss</div>
      <div class="pub-authors"><strong>Tushar Sial</strong>, and Abhishek Halder.</div>
      <div class="pub-venue">To appear at AIAA Regional Student Conference <span class="pub-status">· 2026</span></div>
    </div>
  </div>

  <div class="pd-links">
    <a href="https://github.com/tusharsial/Covariance-Steering" target="_blank" rel="noopener" class="pd-btn"><svg class="pd-btn-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/></svg>Code</a>
    <a href="https://arxiv.org/abs/2510.21944" target="_blank" rel="noopener" class="pd-btn">Preprint</a>
  </div>

</div>

<style>
/* ── Project Detail Page ── */
.pd-page { max-width: 820px; margin: 0 auto; padding: 0 0 60px; }
.pd-page *, .pd-page *::before, .pd-page *::after { box-sizing: border-box !important; }

.pd-header { padding: 20px 0 0; }
.pd-eyebrow {
  font-family: 'Orbitron', sans-serif !important;
  font-size: 0.56rem; letter-spacing: 5px;
  color: #FF6B00 !important; text-transform: uppercase;
  display: block; margin-bottom: 10px;
}
.pd-title {
  font-family: 'Orbitron', sans-serif !important;
  font-size: clamp(1.3rem, 3vw, 2rem) !important;
  font-weight: 900 !important;
  color: #ffffff !important;
  line-height: 1.2 !important;
  margin-bottom: 12px !important;
  border: none !important;
}
.pd-date {
  font-family: 'Orbitron', sans-serif !important;
  font-size: 0.58rem; letter-spacing: 3px;
  color: #FF6B00 !important; text-transform: uppercase;
}

.pd-divider {
  width: 100%; height: 1px;
  background: linear-gradient(to right, transparent, rgba(255,107,0,0.35), transparent);
  margin: 28px 0;
  display: block;
}

.pd-section-label {
  font-family: 'Orbitron', sans-serif !important;
  font-size: 0.58rem; letter-spacing: 4px;
  color: #FF6B00 !important; text-transform: uppercase;
  margin-bottom: 16px; display: block;
}

.pd-body {
  font-size: 0.95rem !important;
  line-height: 1.85 !important;
  color: #b0b8c8 !important;
}
.pd-body strong { color: #ffffff !important; }
.pd-body a { color: #FF9A3C !important; text-decoration: none !important; }
.pd-body a:hover { text-decoration: underline !important; }

/* Figures grid */
.pd-figures {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
  margin-bottom: 8px;
}
.pd-fig-placeholder {
  aspect-ratio: 16/9;
  background: rgba(255,107,0,0.03);
  border: 1px solid rgba(255,107,0,0.15);
  border-radius: 6px;
  display: flex; align-items: center; justify-content: center;
  font-family: 'Orbitron', sans-serif;
  font-size: 0.52rem; letter-spacing: 2px;
  color: rgba(255,107,0,0.3); text-transform: uppercase;
}
.pd-fig-real {
  aspect-ratio: 16/9; overflow: hidden;
  border-radius: 6px; border: 1px solid rgba(255,107,0,0.15);
}
.pd-fig-real img {
  width: 100%; height: 100%; object-fit: cover; display: block;
}
.pd-fig-caption {
  font-size: 0.78rem; color: #6a7385;
  text-align: center; margin-top: 6px; font-style: italic;
}

/* Publications — reuse publications.md styles */
.pub-group { margin-bottom: 44px; }
.pub-group-label {
  font-family: 'Orbitron', sans-serif;
  font-size: 0.68rem; letter-spacing: 4px;
  color: #FF6B00; text-transform: uppercase;
  margin-bottom: 18px; padding-bottom: 10px;
  border-bottom: 1px solid rgba(255,107,0,0.25);
}
.pub-item {
  padding: 22px 26px;
  background: rgba(255,255,255,0.02) !important;
  border: 1px solid rgba(255,107,0,0.15) !important;
  border-radius: 8px; margin-bottom: 18px;
  transition: all 0.3s; position: relative; overflow: hidden;
}
.pub-item::before {
  content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px;
  background: linear-gradient(to right, #FF6B00, transparent);
  opacity: 0; transition: opacity 0.3s;
}
.pub-item:hover { border-color: rgba(255,107,0,0.4) !important; box-shadow: 0 0 32px rgba(255,107,0,0.07) !important; transform: translateY(-3px); }
.pub-item:hover::before { opacity: 1; }
.pub-title { font-size: 0.97rem; font-weight: 600; color: #ffffff; margin-bottom: 8px; line-height: 1.55; }
.pub-title a { color: #FF9A3C !important; text-decoration: none !important; }
.pub-title a:hover { text-decoration: underline !important; }
.pub-authors { font-size: 0.87rem; color: #b0b8c8; margin-bottom: 6px; line-height: 1.6; }
.pub-authors strong { color: #ffffff; }
.pub-venue { font-size: 0.85rem; color: #FF9A3C; font-style: italic; margin-bottom: 8px; line-height: 1.5; }
.pub-status { color: rgba(255,154,60,0.7); font-style: normal; font-size: 0.8rem; }

/* Links row */
.pd-links { display: flex; gap: 10px; flex-wrap: wrap; margin-top: 8px; }
.pd-btn {
  padding: 8px 18px;
  font-family: 'Orbitron', sans-serif !important;
  font-size: 0.52rem; letter-spacing: 1.5px; text-transform: uppercase;
  background: transparent !important;
  color: #fff !important;
  border: 1px solid rgba(255,107,0,0.5) !important;
  border-radius: 3px; text-decoration: none !important;
  transition: all 0.2s; display: inline-flex; align-items: center; gap: 6px;
}
.pd-btn:hover { border-color: #FF6B00 !important; color: #FF9A3C !important; background: rgba(255,107,0,0.15) !important; }
.pd-btn-icon { width: 13px; height: 13px; flex-shrink: 0; }

@media (max-width: 600px) {
  .pd-figures { grid-template-columns: 1fr; }
  .pd-title { font-size: 1.2rem !important; }
}
</style>
