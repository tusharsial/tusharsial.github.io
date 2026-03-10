---
layout: archive
permalink: /research/coupled-trajectory-power/
author_profile: false
custom_css: research-project
custom_js: research-project
---

<div class="pd-page">
  <div class="pd-header">
    <div class="pd-title">Coupled Spacecraft Trajectory–Power Subsystem Design Optimization</div>
    <div class="pd-meta">
      <div class="pd-date">January 14, 2026</div>
      <div class="pd-links">
        <a href="https://github.com/tusharsial/Coupled-Power-Space-Trajectory-Optimization-using-MDO" target="_blank" rel="noopener" class="pd-btn"><svg class="pd-btn-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/></svg>Code</a>
        <a href="https://arxiv.org/abs/2603.03479" target="_blank" rel="noopener" class="pd-btn"><svg class="pd-btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>Preprint</a>
      </div>
    </div>
  </div>

  <div class="pd-divider"></div>

  <div class="pd-section-label">Overview</div>
  <div class="pd-body">
    This work was completed as part of my final project for the course: <span class="pd-highlight">AERE 5630 Multidisciplinary Design Optimization</span> under Prof. <a href="https://idesign-lab.github.io/" target="_blank" rel="noopener">Ping He</a>. Working in a three-member team, I developed a Multidisciplinary Design Optimization (MDO) framework for a low-thrust orbit-lowering maneuver around asteroid 16 Psyche. The framework couples trajectory dynamics, physics-based power generation, and electric propulsion models to ensure that thrust and propellant remain consistent with available onboard power.
    <br/><br/>
    Unlike traditional trajectory optimization, which assumes constant thrust or specific impulse, this framework uses a high-fidelity Variable Specific Impulse (VSI) model based on the SPT-140 Hall thruster, accounting for solar-array degradation over time. The problem is formulated as a time-optimal control problem and solved using OpenMDAO and Dymos with IPOPT as the nonlinear programming solver. A Fast Fourier Series (FFS) shape-based method provides an initial guess for the low-thrust trajectory to improve convergence robustness.
    <br/><br/>
    Due to the computational complexity of the fully coupled problem, the final optimization was performed on a high-performance computing platform. The simulation results show that the coupled optimization model outperforms the baseline trajectory-only model by simultaneously optimizing the trajectory, power usage, and solar array area. The coupled model reduces the transfer time by <span class="pd-highlight">8.09%</span> while satisfying all physical and system constraints.
  </div>

  <div class="pd-divider fade-in"></div>

  <div class="pd-section-label fade-in">Results &amp; Figures</div>
  <div class="pd-figures fade-in">
    <div class="pd-fig-placeholder">Figure 1</div>
    <div class="pd-fig-placeholder">Figure 2</div>
    <div class="pd-fig-placeholder">Figure 3</div>
    <div class="pd-fig-placeholder">Figure 4</div>
  </div>

  <div class="pd-divider"></div>

  <div class="pd-section-title fade-in">Publications</div>
  <div class="pub-group">
    <div class="pub-group-label fade-in">Conference</div>
    <div class="pub-item fade-in">
      <div class="pub-title">Multidisciplinary Design Optimization of a Low-Thrust Asteroid Orbit Insertion Using Electric Propulsion</div>
      <div class="pub-authors">Yacob Medhin, <strong>Tushar Sial</strong>, and Simone Servadio.</div>
      <div class="pub-venue">2026 AIAA Regional Student Conference <span class="pub-status">· To appear</span></div>
    </div>
  </div>

</div>


