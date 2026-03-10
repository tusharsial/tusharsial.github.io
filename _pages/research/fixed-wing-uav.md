---
layout: archive
permalink: /research/fixed-wing-uav/
author_profile: false
custom_css: research-project
---

<div class="pd-page">
  <div class="pd-header">
    <div class="pd-title">Control of Agile Fixed-Wing UAV</div>
    <div class="pd-meta">
      <div class="pd-date">November 6, 2021</div>
      <div class="pd-links">
        <a href="https://github.com/tusharsial/Agile-Fixed-Wing-UAV" target="_blank" rel="noopener" class="pd-btn"><svg class="pd-btn-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/></svg>Code</a>
      </div>
    </div>
  </div>

  <div class="pd-divider"></div>

  <div class="pd-section-label">Overview</div>
  <div class="pd-body">
    In this project, conducted under Prof. <a href="https://nerist.ac.in/faculty/dr-bijoy-krishna-mukherjee/" target="_blank" rel="noopener">Bijoy Krishna Mukherjee</a>, I designed <span class="pd-highlight">flight stability controllers</span> for an agile fixed-wing UAV. In particular, I designed and modeled the Longitudinal and Lateral-Directional stability movement controllers of the UAV using the <span class="pd-highlight">Backstepping Control technique</span> in MATLAB and Simulink. Backstepping is a recursive Lyapunov-based design methodology that systematically handles the cascaded structure of flight dynamics, providing rigorous stability guarantees. The longitudinal controller manages pitch, altitude, and airspeed, while the lateral-directional controller handles roll and yaw coordination.
    <br/><br/>
    Additionally, I designed a <span class="pd-highlight">wind observer</span> to estimate environmental disturbances, including wind shears, wind gusts, and atmospheric turbulence. By incorporating the estimated disturbance into the control law, the controllers achieve robust performance under realistic flight conditions, significantly improving the UAV's agility and flight envelope.
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
