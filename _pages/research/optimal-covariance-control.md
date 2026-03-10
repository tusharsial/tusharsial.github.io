---
layout: archive
permalink: /research/optimal-covariance-control/
author_profile: false
custom_css: research-project
custom_js: research-project
---

<div class="pd-page">
  <div class="pd-header">
    <div class="pd-title">Optimal Covariance Control</div>
    <div class="pd-meta">
      <div class="pd-date">October 28, 2025</div>
      <div class="pd-links">
        <a href="https://github.com/tusharsial/Covariance-Steering" target="_blank" rel="noopener" class="pd-btn"><svg class="pd-btn-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/></svg>Code</a>
        <a href="https://arxiv.org/abs/2510.21944" target="_blank" rel="noopener" class="pd-btn"><svg class="pd-btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>Preprint</a>
      </div>
    </div>
  </div>

  <div class="pd-divider"></div>

  <div class="pd-section-label">Overview</div>
  <div class="pd-body">
    My Master's thesis under Prof. <a href="https://abhishekhalder.org/index.html" target="_blank" rel="noopener">Abhishek Halder</a> focuses on designing an <span class="pd-highlight">Optimal Covariance Steering Algorithm in Continuous Time with Hilbert-Schmidt Terminal Cost for Linear Stochastic Systems over a finite time horizon</span>. While there has been a growing literature on fixed-horizon LQ covariance steering problems with terminal cost for the discrete-time case, its continuous-time version remains relatively unexplored.
    <br/><br/>
    A key reason for the imbalance between discrete- and continuous-time formulations lies in computational tractability. The discrete-time problem naturally leads to a semidefinite program that can be solved with off-the-shelf interior-point solvers. In contrast, the continuous-time formulation with terminal cost gives rise to a coupled nonlinear system of matricial ODEs, for which a principled and computationally efficient algorithm had remained unclear.
    <br/><br/>
    My research introduces a soft constraint via the <span class="pd-highlight">Hilbert–Schmidt Terminal Cost</span>, along with a quadratic cost on the control input and the state. The necessary conditions of optimality lead to a coupled matrix ODE two-point boundary value problem with nonlinear split boundary conditions. To solve this, I designed a <span class="pd-highlight">Matricial Recursive Algorithm</span> with a fast convergence rate, grounded in linear fractional transformations parameterized by the state transition matrix of the associated Hamiltonian system.
    <br/><br/>
    The proposed algorithm was tested and validated on a close-proximity rendezvous scenario by modeling the relative motion of a service spacecraft to a target satellite in LEO using Clohessy–Wiltshire dynamics with stochastic disturbances. Our broader motivation is to derive a custom algorithm to solve the boundary-value problem with a Wasserstein terminal cost. This work takes a significant step in that direction, laying the algorithmic groundwork toward handling the full Wasserstein gradient in future extensions.
  </div>

  <div class="pd-divider fade-in"></div>

  <div class="pd-section-label fade-in">Results &amp; Figures</div>
  <div class="pd-figures fade-in">
    <div class="pd-fig-placeholder">Figure 1</div>
    <div class="pd-fig-placeholder">Figure 2</div>
    <div class="pd-fig-placeholder">Figure 3</div>
    <div class="pd-fig-placeholder">Figure 4</div>
  </div>

  <div class="pd-divider fade-in"></div>

  <div class="pd-section-title fade-in">Publications</div>
  <div class="pub-group">
    <div class="pub-group-label fade-in">Preprint</div>
    <div class="pub-item fade-in">
      <div class="pub-title"><a href="https://arxiv.org/abs/2510.21944" target="_blank" rel="noopener">Fixed Horizon Linear Quadratic Covariance Steering in Continuous Time with Hilbert-Schmidt Terminal Cost</a></div>
      <div class="pub-authors"><strong>Tushar Sial</strong>, and Abhishek Halder.</div>
      <div class="pub-venue">IEEE Transactions on Automatic Control <span class="pub-status">· Under Review</span></div>
    </div>
  </div>
  <div class="pub-group">
    <div class="pub-group-label fade-in">Conference</div>
    <div class="pub-item fade-in">
      <div class="pub-title">LQ Covariance Control with Deadline Constraint and Frobenius Terminal Loss</div>
      <div class="pub-authors"><strong>Tushar Sial</strong>, and Abhishek Halder.</div>
      <div class="pub-venue">2026 AIAA Regional Student Conference <span class="pub-status">· To appear</span></div>
    </div>
  </div>

</div>
