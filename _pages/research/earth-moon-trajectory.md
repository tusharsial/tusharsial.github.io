---
layout: archive
permalink: /research/earth-moon-trajectory/
author_profile: false
custom_css: research-project
---

<div class="pd-page">
  <div class="pd-header">
    <div class="pd-title">Cislunar Low-Thrust Trajectory Optimization</div>
    <div class="pd-meta">
      <div class="pd-date">May 7, 2025</div>
      <div class="pd-links">
        <a href="https://github.com/tusharsial/Earth-Moon-Low-Thrust-Trajectory-Optimization/tree/main" target="_blank" rel="noopener" class="pd-btn"><svg class="pd-btn-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/></svg>Code</a>
        <a href="/files/AERE-6510-Final-Project-Tushar-Sial.pdf" target="_blank" rel="noopener" class="pd-btn"><svg class="pd-btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>Report</a>
      </div>
    </div>
  </div>

  <div class="pd-divider"></div>

  <div class="pd-section-label">Overview</div>
  <div class="pd-body">
    This work was completed as my final project for the course: <span class="pd-highlight">AERE 6510 Space Trajectory Optimization</span> under Prof. <a href="https://www.aere.iastate.edu/ossama/" target="_blank" rel="noopener">Ossama Abdelkhalik</a>. I extended the classic three-stage method for computing optimal low-thrust trajectories from low Earth orbit (LEO) to low lunar orbit (LLO) originally proposed by <span class="pd-highlight">Pierson and Kluever (1994)</span>.
    <br/><br/>
    The original three-stage method systematically decomposes the complex optimal trajectory problem into simpler subproblems: maximum-energy Earth-escape and moon-capture spirals, an all-coasting translunar trajectory, and a complete optimization using a hybrid direct/indirect numerical method. Unlike the original formulation, which assumes constant thrust magnitude, my work allowed thrust magnitude to be a <span class="pd-highlight">free variable</span> within the optimal control framework.
    <br/><br/>
    Starting from the necessary conditions for optimality, I derived the modified equations and solved them numerically to obtain optimal trajectories. The classical restricted three-body problem (CR3BP) governs spacecraft trajectories and involves highly sensitive numerical computations. Our extended methodology enables a more flexible approach to modeling low-thrust cislunar transfers. Simulation results demonstrated the approach's effectiveness, yielding energy-efficient transfer trajectories that improve upon the constant-thrust assumption.
  </div>

  <div class="pd-divider"></div>

  <div class="pd-section-label">Results &amp; Figures</div>
  <div class="pd-figures">
    <div class="pd-fig-placeholder">Figure 1</div>
    <div class="pd-fig-placeholder">Figure 2</div>
    <div class="pd-fig-placeholder">Figure 3</div>
    <div class="pd-fig-placeholder">Figure 4</div>
  </div>

</div>
