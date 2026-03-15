---
layout: archive
#title: "Experience"
permalink: /experience/
author_profile: false
---
{% include base_path %}

<style>
/* ── RESET ── */
.exp-page *, .exp-page *::before, .exp-page *::after { box-sizing: border-box !important; }

/* ── PAGE SHELL ── */
.C-wrap { max-width: 1100px !important; margin: 0 auto !important; padding: 48px 32px !important; }
.C-hero { margin-bottom: 40px !important; }
.C-eyebrow {
  font-family: 'Orbitron', sans-serif !important; font-size: 0.38rem !important;
  letter-spacing: 4px !important; color: rgba(255,107,0,0.6) !important;
  text-transform: uppercase !important; margin-bottom: 8px !important; display: block !important;
}
.C-title {
  font-family: 'Orbitron', sans-serif !important;
  font-size: clamp(1.4rem, 3vw, 2rem) !important; font-weight: 900 !important;
  color: #fff !important; position: relative !important; display: inline-block !important;
  padding-bottom: 12px !important;
}
.C-title::after {
  content: '' !important; position: absolute !important; bottom: 0 !important;
  left: 0 !important; width: 40px !important; height: 2px !important; background: #FF6B00 !important;
}

/* ── LAYOUT ── */
.C-layout { display: grid !important; grid-template-columns: 190px 1fr !important; gap: 40px !important; align-items: start !important; }

/* ── SIDEBAR ── */
.C-sidenav { position: sticky !important; top: 72px !important; display: flex !important; flex-direction: column !important; gap: 2px !important; }
.C-navitem {
  font-family: 'Orbitron', sans-serif !important; font-size: 0.38rem !important;
  letter-spacing: 2px !important; text-transform: uppercase !important;
  padding: 11px 14px !important; background: transparent !important; border: none !important;
  color: #8a94a8 !important; cursor: pointer !important; text-align: left !important;
  border-radius: 4px !important; border-left: 2px solid transparent !important;
  transition: all 0.2s !important; line-height: 1.4 !important; display: block !important; width: 100% !important;
}
.C-navitem:hover { color: #fff !important; background: rgba(255,255,255,0.04) !important; border-left-color: rgba(255,107,0,0.4) !important; }
.C-navitem.active { color: #FF9A3C !important; background: rgba(255,107,0,0.07) !important; border-left-color: #FF6B00 !important; }
.C-navdivider { height: 1px !important; background: rgba(255,255,255,0.07) !important; margin: 6px 0 !important; }

/* ── PANELS ── */
.C-panel { display: none !important; animation: expFadeIn 0.3s ease !important; }
.C-panel.active { display: block !important; }
@keyframes expFadeIn { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: none; } }
.C-sechead {
  font-family: 'Orbitron', sans-serif !important; font-size: 0.44rem !important;
  letter-spacing: 3px !important; color: #FF6B00 !important; text-transform: uppercase !important;
  margin-bottom: 28px !important; padding-bottom: 10px !important;
  border-bottom: 1px solid rgba(255,107,0,0.15) !important; position: relative !important;
}
.C-sechead::after {
  content: '' !important; position: absolute !important; bottom: -1px !important;
  left: 0 !important; width: 36px !important; height: 1px !important; background: #FF6B00 !important;
}

/* ── ENTRY CARD ── */
.C-entry {
  display: grid !important; grid-template-columns: 1fr 280px !important; gap: 28px !important;
  padding: 28px !important; margin-bottom: 20px !important;
  background: rgba(255,255,255,0.025) !important; border: 1px solid rgba(255,255,255,0.07) !important;
  border-radius: 8px !important; transition: border-color 0.3s, transform 0.3s, box-shadow 0.3s !important;
  position: relative !important; overflow: hidden !important;
}
.C-entry::before {
  content: '' !important; position: absolute !important; top: 0 !important; left: 0 !important;
  right: 0 !important; height: 1px !important;
  background: linear-gradient(to right, transparent, #FF6B00, transparent) !important;
  transform: scaleX(0) !important; transition: transform 0.35s !important;
}
.C-entry:hover { border-color: rgba(255,107,0,0.3) !important; transform: translateY(-2px) !important; box-shadow: 0 10px 32px rgba(255,107,0,0.07) !important; }
.C-entry:hover::before { transform: scaleX(1) !important; }
.C-entry.no-photo { grid-template-columns: 1fr !important; }

/* ── TEXT SIDE ── */
.C-meta { display: flex !important; align-items: center !important; gap: 10px !important; margin-bottom: 10px !important; flex-wrap: wrap !important; }
.C-period {
  font-family: 'Orbitron', sans-serif !important; font-size: 0.36rem !important;
  letter-spacing: 2px !important; color: #FF6B00 !important; text-transform: uppercase !important;
}
.C-badge {
  font-family: 'Orbitron', sans-serif !important; font-size: 0.32rem !important;
  letter-spacing: 1.5px !important; padding: 2px 7px !important;
  border: 1px solid rgba(255,107,0,0.3) !important; border-radius: 2px !important;
  color: rgba(255,107,0,0.7) !important; text-transform: uppercase !important;
}
.C-role {
  font-family: 'Orbitron', sans-serif !important; font-size: 0.8rem !important;
  font-weight: 700 !important; color: #fff !important; margin-bottom: 3px !important; line-height: 1.3 !important;
}
.C-org { font-size: 0.82rem !important; color: #FF9A3C !important; font-weight: 500 !important; margin-bottom: 6px !important; }
.C-loc { font-size: 0.72rem !important; color: #8a94a8 !important; margin-bottom: 12px !important; }
.C-desc { font-size: 0.78rem !important; color: #8a94a8 !important; line-height: 1.78 !important; }
.C-tags { display: flex !important; flex-wrap: wrap !important; gap: 6px !important; margin-top: 14px !important; }
.C-tag {
  font-family: 'Orbitron', sans-serif !important; font-size: 0.32rem !important;
  letter-spacing: 1.5px !important; text-transform: uppercase !important;
  padding: 3px 8px !important; border: 1px solid rgba(255,107,0,0.2) !important;
  border-radius: 2px !important; color: rgba(255,107,0,0.6) !important;
}

/* ── PHOTO SIDE ── */
.C-photo {
  width: 100% !important; aspect-ratio: 4/3 !important; border-radius: 6px !important;
  overflow: hidden !important; background: linear-gradient(135deg, rgba(255,107,0,0.08), rgba(3,3,10,0.95)) !important;
  border: 1px solid rgba(255,255,255,0.07) !important; position: relative !important; flex-shrink: 0 !important;
  align-self: center !important;
}
.C-photo::after {
  content: '' !important; position: absolute !important; inset: 0 !important;
  background-image: linear-gradient(rgba(255,107,0,0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,107,0,0.04) 1px, transparent 1px) !important;
  background-size: 22px 22px !important; pointer-events: none !important; z-index: 0 !important;
}
.C-photo img {
  width: 100% !important; height: 100% !important; object-fit: cover !important;
  display: block !important; position: relative !important; z-index: 1 !important;
  transition: transform 0.4s ease !important;
}
.C-entry:hover .C-photo img { transform: scale(1.04) !important; }

/* ── SERVICE LIST ── */
.C-review-list { list-style: none !important; margin-top: 10px !important; display: flex !important; flex-direction: column !important; gap: 8px !important; }
.C-review-item {
  display: flex !important; align-items: center !important; gap: 10px !important;
  font-size: 0.78rem !important; color: #8a94a8 !important; line-height: 1.6 !important;
}
.C-review-item::before {
  content: '' !important; width: 5px !important; height: 5px !important; border-radius: 50% !important;
  background: #FF6B00 !important; flex-shrink: 0 !important;
}
.C-review-count {
  font-family: 'Orbitron', sans-serif !important; font-size: 0.32rem !important;
  letter-spacing: 1.5px !important; padding: 2px 7px !important;
  border: 1px solid rgba(255,107,0,0.3) !important; border-radius: 2px !important;
  color: rgba(255,107,0,0.7) !important; margin-left: auto !important;
}

/* ── RESPONSIVE ── */
@media (max-width: 900px) {
  .C-layout { grid-template-columns: 1fr !important; }
  .C-sidenav { flex-direction: row !important; position: static !important; gap: 4px !important; margin-bottom: 28px !important; border-bottom: 1px solid rgba(255,255,255,0.07) !important; padding-bottom: 12px !important; }
  .C-entry { grid-template-columns: 1fr !important; }
  .C-photo { aspect-ratio: 16/9 !important; }
}
@media (max-width: 600px) {
  .C-sidenav { flex-direction: column !important; }
  .C-wrap { padding: 32px 20px !important; }
}
</style>

<div class="exp-page">
<div class="C-wrap">

  <div class="C-hero">
    <span class="C-eyebrow">Career &amp; Contributions</span>
    <div class="C-title">Experience</div>
  </div>

  <div class="C-layout">

    <!-- ── SIDEBAR NAV ── -->
    <nav class="C-sidenav">
      <button class="C-navitem active" onclick="cNav('C-research',this)">Research</button>
      <div class="C-navdivider"></div>
      <button class="C-navitem" onclick="cNav('C-industry',this)">Industry</button>
      <div class="C-navdivider"></div>
      <button class="C-navitem" onclick="cNav('C-service',this)">Review Service</button>
    </nav>

    <div>

      <!-- ══ RESEARCH ══ -->
      <div class="C-panel active" id="C-research">
        <div class="C-sechead">Research Experience</div>

        <!-- Halder Group -->
        <div class="C-entry">
          <div class="C-body">
            <div class="C-meta">
              <span class="C-period">August 2024 — Present</span>
              <span class="C-badge">MS</span>
            </div>
            <div class="C-role">Graduate Research Assistant</div>
            <div class="C-org">Halder Group (Stochastic Control &amp; Optimization)</div>
            <div class="C-loc">Iowa State University · Ames, IA · Prof. Abhishek Halder</div>
            <div class="C-desc">I'm researching the intersection of Stochastic Systems, Dynamics & Control, and Optimization under Professor Abhishek Halder. The current project that I'm working on involves designing an Optimal Covariance Steering Algorithm for a Stochastic System over a finite time horizon. In addition, I'm contributing to the design and testing of generative profiling algorithms for adaptive resource allocation and scheduling on single- and multicore real-time embedded systems. This project was in collaboration between researchers from the University of California, Santa Cruz, Iowa State University, and the University of Pennsylvania.</div>
            <div class="C-tags">
              <span class="C-tag">Covariance Steering</span>
              <span class="C-tag">Stochastic Control</span>
              <span class="C-tag">Optimization</span>
              <span class="C-tag">GNC</span>
            </div>
          </div>
          <div class="C-photo">
            <img src="/images/ISU.jpeg" alt="ISU Research" onerror="this.style.display='none'"/>
          </div>
        </div>

        <!-- GCDSL / IISc -->
        <div class="C-entry">
          <div class="C-body">
            <div class="C-meta">
              <span class="C-period">June 2022 — June 2023</span>
              <span class="C-badge">UG</span>
            </div>
            <div class="C-role">Research Intern</div>
            <div class="C-org">Guidance, Control &amp; Decision Systems Lab (GCDSL)</div>
            <div class="C-loc">Indian Institute of Science · Bengaluru, India · Prof. Debasish Ghose</div>
            <div class="C-desc">With a growing debris population in low Earth orbit, robots performing routine tasks autonomously (such as simple repairs/maintenance, refueling, or debris removal) may become increasingly essential for actively preventing disasters. Several missions to uncooperative targets will require <strong style="color:#e0e8f0">Autonomous Rendezvous and Docking (AR&amp;D)</strong> operations. I interned in the Aerospace Department at the Indian Institute of Science, Bengaluru, under the guidance of Professor Debasish Ghose, where I developed control algorithms for <strong style="color:#e0e8f0">AR&amp;D</strong> of spacecraft with non-cooperative tumbling satellites.</div>
            <div class="C-tags">
              <span class="C-tag">AR&amp;D</span>
              <span class="C-tag">Rendezvous</span>
              <span class="C-tag">Proximity Ops</span>
              <span class="C-tag">Non-Cooperative Targets</span>
            </div>
          </div>
          <div class="C-photo">
            <img src="/images/IISc Team.jpg" alt="IISc GCDSL" onerror="this.style.display='none'"/>
          </div>
        </div>
      </div>

      <!-- ══ INDUSTRY ══ -->
      <div class="C-panel" id="C-industry">
        <div class="C-sechead">Professional Experience</div>

        <!-- HDFC Bank -->
        <div class="C-entry">
          <div class="C-body">
            <div class="C-meta">
              <span class="C-period">July 2023 — July 2024</span>
              <span class="C-badge">Full-Time</span>
            </div>
            <div class="C-role">DevSecOps Engineer</div>
            <div class="C-org">HDFC Bank</div>
            <div class="C-loc">Digital Factory Vertical · IT Team · Bengaluru, India</div>
            <div class="C-desc">I worked as a <strong style="color:#e0e8f0">DevSecOps</strong> (Development, Security, &amp; Operations) Engineer in the Digital Factory Vertical of the IT Team at HDFC Bank, Bengaluru. My primary tasks involved designing, maintaining &amp; securing <strong style="color:#e0e8f0">CI/CD pipelines</strong> using Jenkins, Git, Kubernetes, and Docker. In addition, I was tasked with implementing <strong style="color:#e0e8f0">infrastructure-as-code (IAC) principles</strong> using tools such as Terraform and Ansible, ensuring secure, compliant cloud environments.</div>
            <div class="C-tags">
              <span class="C-tag">DevSecOps</span>
              <span class="C-tag">CI/CD</span>
              <span class="C-tag">Kubernetes</span>
              <span class="C-tag">Docker</span>
              <span class="C-tag">Terraform</span>
              <span class="C-tag">Ansible</span>
            </div>
          </div>
          <div class="C-photo">
            <img src="/images/HDFC Team.jpg" alt="HDFC Bank" onerror="this.style.display='none'"/>
          </div>
        </div>
      </div>

      <!-- ══ REVIEW SERVICE ══ -->
      <div class="C-panel" id="C-service">
        <div class="C-sechead">Review Service</div>

        <div class="C-entry no-photo">
          <div class="C-body">
            <div class="C-meta">
              <span class="C-period">2024 — Present</span>
              <span class="C-badge">Journal Reviewer</span>
            </div>
            <div class="C-role">Journal Manuscript Reviewer</div>
            <div class="C-desc">Peer review of manuscripts submitted to the following journals:</div>
            <ul class="C-review-list">
              <li class="C-review-item">
                Systems and Control Letters
                <span class="C-review-count">5 reviews</span>
              </li>
              <li class="C-review-item">
                ASME Journal of Dynamical Systems, Measurement, and Control
                <span class="C-review-count">1 review</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

    </div><!-- end content col -->
  </div><!-- end C-layout -->
</div><!-- end C-wrap -->
</div><!-- end exp-page -->

<script>
function cNav(id, btn) {
  document.querySelectorAll('.C-navitem').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.C-panel').forEach(p => p.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById(id).classList.add('active');
}
</script>


<!-- ---
layout: archive
#title: "Experience"
permalink: /experience/
author_profile: false

---

{% include base_path %}

Research Experience
------
**Halder Group (Stochastic Control & Optimization)** <span style="float: right;">(August 2024 – Present)</span> 

![ISU RA](/images/ISU.jpeg){: .align-right width="350px"}
I'm researching the intersection of Stochastic Systems, Dynamics & Control, and Optimization under Professor Abhishek Halder. The current project that I'm working on involves designing an Optimal Covariance Steering Algorithm for a Stochastic System over a finite time horizon. In addition, I'm contributing to the design and testing of generative profiling algorithms for adaptive resource allocation and scheduling on single- and multicore real-time embedded systems. This project was in collaboration between researchers from the University of California, Santa Cruz, Iowa State University, and the University of Pennsylvania.

**Guidance, Control & Decision Systems Lab (GCDSL)** <span style="float: right;">(June 2022 – June 2023)</span> 

![IISc](/images/IISc Team.jpg){: .align-right width="350px"}
With a growing debris population in low Earth orbit, robots performing routine tasks autonomously (such as simple repairs/maintenance, refueling, or debris removal) may become increasingly essential for actively preventing disasters. Several missions to uncooperative targets will require **Autonomous Rendezvous and Docking (AR&D)** operations. I interned in the Aerospace Department at the Indian Institute of Science, Bengaluru, under the guidance of Professor [Debasish Ghose](https://sites.google.com/view/gcdsl-iisc/home), where I developed control algorithms for **AR&D** of spacecraft with non-cooperative tumbling satellites.

Professional Experience
------------
**HDFC Bank** <span style="float: right;">(July 2023 – July 2024)</span>

![HDFC Team Photo](/images/HDFC Team.jpg){: .align-right width="350px"}
I worked as a **DevSecOps** (Development, Security, & Operations) Engineer in the Digital Factory Vertical of the IT Team at HDFC Bank, Bengaluru. My primary tasks involved designing, maintaining & securing **CI/CD pipelines** using Jenkins, Git, Kubernetes, and Docker. In addition, I was tasked with implementing **infrastructure-as-code (IAC) principles** using tools such as Terraform and Ansible, ensuring secure, compliant cloud environments.

Review Service
------------
**Journal Manuscript Reviewer**         
* System and Control Letters. (5)
* ASME Journal of Dynamical Systems, Measurement, and Control. (1)
-->
