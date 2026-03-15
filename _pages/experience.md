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
/* .C-wrap { max-width: 1100px !important; margin: 0 auto !important; padding: 0 32px 48px !important; } */
.C-hero {
  display: flex !important; align-items: flex-end !important;
  justify-content: space-between !important; flex-wrap: wrap !important;
  gap: 20px !important; padding: 0 0 0 !important; margin-bottom: 0 !important;
}
.C-eyebrow {
  font-family: 'Orbitron', sans-serif !important; font-size: 0.56rem !important;
  letter-spacing: 5px !important; color: #FF6B00 !important;
  text-transform: uppercase !important; display: block !important; margin-bottom: 6px !important;
}
.C-title {
  font-family: 'Orbitron', sans-serif !important;
  font-size: clamp(1.8rem, 4vw, 3rem) !important; font-weight: 900 !important;
  margin: 6px 0 0 !important; padding-bottom: 14px !important;
  border: none !important; position: relative !important; display: inline-block !important;
  line-height: 1.15 !important;
  background: linear-gradient(135deg, #fff 40%, #FF9A3C) !important;
  -webkit-background-clip: text !important; -webkit-text-fill-color: transparent !important;
  background-clip: text !important;
}
.C-title::after {
  content: '' !important; position: absolute !important; bottom: 0 !important;
  left: 0 !important; width: 60px !important; height: 2px !important; background: #FF6B00 !important;
}
.C-divider {
  width: 100% !important; height: 1px !important;
  background: linear-gradient(to right, transparent, rgba(255,107,0,0.35), transparent) !important;
  margin: 24px 0 40px !important; display: block !important;
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
  margin-bottom: 28px !important; padding-bottom: 12px !important;
  border-bottom: none !important; position: relative !important;
}
.C-sechead::after {
  content: '' !important; position: absolute !important; bottom: 0 !important;
  left: 0 !important; right: 0 !important; height: 1px !important;
  background: linear-gradient(to right, rgba(255,107,0,0.5), rgba(255,107,0,0.08), transparent) !important;
}

/* ── ENTRY CARD ── */
.C-entry {
  display: grid !important; grid-template-columns: 1fr 220px !important; gap: 24px !important;
  padding: 24px !important; margin-bottom: 20px !important;
  background: rgba(255,255,255,0.025) !important; border: 1px solid rgba(255,255,255,0.07) !important;
  border-radius: 8px !important; transition: border-color 0.3s, transform 0.3s, box-shadow 0.3s !important;
  position: relative !important; overflow: hidden !important;
}
.C-entry::before {
  content: '' !important; position: absolute !important; top: 0 !important; left: 0 !important;
  right: 0 !important; height: 1px !important;
  background: linear-gradient(to right, transparent, #FF6B00, transparent) !important;
  transform: scaleX(0) !important; transition: transform 0.35s !important; z-index: 2 !important;
}
.C-entry::after { display: none !important; }
.C-spotlight {
  position: absolute !important; inset: 0 !important; pointer-events: none !important; z-index: 0 !important;
}
.C-entry:hover { border-color: rgba(255,107,0,0.3) !important; transform: translateY(-2px) !important; box-shadow: 0 10px 32px rgba(255,107,0,0.07) !important; }
.C-entry:hover::before { transform: scaleX(1) !important; }
.C-body { position: relative !important; z-index: 1 !important; }
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
  border: 1px solid rgba(255,255,255,0.07) !important; position: relative !important;
  flex-shrink: 0 !important; align-self: center !important; z-index: 1 !important;
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
.C-review-list { list-style: none !important; margin-top: 14px !important; display: flex !important; flex-direction: column !important; gap: 8px !important; }
.C-review-item {
  display: flex !important; align-items: center !important; justify-content: space-between !important;
  gap: 12px !important; padding: 8px 12px !important;
  border: 1px solid rgba(255,255,255,0.06) !important; border-radius: 4px !important;
  background: rgba(3,3,10,0.4) !important; transition: background 0.15s, color 0.15s !important;
}
.C-review-item:hover { background: rgba(255,107,0,0.07) !important; border-color: rgba(255,107,0,0.2) !important; }
.C-review-name { font-size: 0.78rem !important; color: #8a94a8 !important; flex: 1 !important; line-height: 1.5 !important; }
.C-review-item:hover .C-review-name { color: #d0d8e8 !important; }
.C-review-count {
  font-family: 'Orbitron', sans-serif !important; font-size: 0.30rem !important;
  letter-spacing: 1.5px !important; padding: 2px 8px !important; white-space: nowrap !important;
  border: 1px solid rgba(255,107,0,0.25) !important; border-radius: 2px !important;
  color: rgba(255,107,0,0.65) !important; flex-shrink: 0 !important;
}

.exp-page a { color: #FF9A3C !important; text-decoration: none !important; }
.exp-page a:hover { color: #FF6B00 !important; text-decoration: none !important; border-bottom: 1px dotted #cc4400 !important; }
  
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
    <div>
      <span class="C-eyebrow">Career &amp; Contributions</span>
      <div class="C-title">Experience</div>
    </div>
  </div>
  <div class="C-divider"></div>

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
        <div class="C-entry"><div class="C-spotlight"></div>
          <div class="C-body">
            <div class="C-meta">
              <span class="C-period">August 2024 — Present</span>
              <span class="C-badge">MS</span>
            </div>
            <div class="C-role">Graduate Research Assistant</div>
            <div class="C-org">Halder Group (Stochastic Control &amp; Optimization)</div>
            <div class="C-loc">Iowa State University, Ames, IA</div>
            <div class="C-desc">I'm researching the intersection of Stochastic Systems, Dynamics & Control, and Optimization under Professor <a href="https://abhishekhalder.org/index.html" target="_blank" style="color:#FF9A3C"><strong>Abhishek Halder</strong></a>. The current project that I'm working on involves designing an Optimal Covariance Steering Algorithm for a Stochastic System over a finite time horizon. In addition, I'm contributing to the design and testing of generative profiling algorithms for adaptive resource allocation and scheduling on single- and multicore real-time embedded systems. This project was in collaboration between researchers from the University of California, Santa Cruz, Iowa State University, and the University of Pennsylvania.</div>
            <div class="C-tags">
              <span class="C-tag">MATLAB</span>
              <span class="C-tag">Python</span>
            </div>
          </div>
          <div class="C-photo">
            <img src="/images/ISU.jpeg" alt="ISU Research" onerror="this.style.display='none'"/>
          </div>
        </div>

        <!-- GCDSL / IISc -->
        <div class="C-entry"><div class="C-spotlight"></div>
          <div class="C-body">
            <div class="C-meta">
              <span class="C-period">June 2022 — June 2023</span>
              <span class="C-badge">UG</span>
            </div>
            <div class="C-role">Research Intern</div>
            <div class="C-org">Guidance, Control &amp; Decision Systems Lab (GCDSL)</div>
            <div class="C-loc">Indian Institute of Science, Bengaluru, India</div>
            <div class="C-desc">With a growing debris population in low Earth orbit, robots performing routine tasks autonomously (such as simple repairs/maintenance, refueling, or debris removal) may become increasingly essential for actively preventing disasters. Several missions to uncooperative targets will require Autonomous Rendezvous and Docking (AR&amp;D) operations. I interned in the Aerospace Department at the Indian Institute of Science, Bengaluru, under the guidance of Professor <a href="https://aero.iisc.ac.in/people/debasish-ghose/" target="_blank">Debasish Ghose</a>, where I developed control algorithms for AR&amp;D of spacecraft with non-cooperative tumbling satellites.</div>
            <div class="C-tags">
              <span class="C-tag">MATLAB</span>
              <span class="C-tag">Simulink</span>
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
        <div class="C-entry"><div class="C-spotlight"></div>
          <div class="C-body">
            <div class="C-meta">
              <span class="C-period">July 2023 — July 2024</span>
              <span class="C-badge">Full-Time</span>
            </div>
            <div class="C-role">DevSecOps Engineer</div>
            <div class="C-org">HDFC Bank</div>
            <div class="C-loc">Digital Factory Vertical, HDFC Bank, Bengaluru, India</div>
            <div class="C-desc">I worked as a DevSecOps (Development, Security, &amp; Operations) Engineer in the Digital Factory Vertical of the IT Team at HDFC Bank, Bengaluru. My primary tasks involved designing, maintaining &amp; securing CI/CD pipelines using Jenkins, Git, Kubernetes, and Docker. In addition, I was tasked with implementing infrastructure-as-code (IAC) principles using tools such as Terraform and Ansible, ensuring secure, compliant cloud environments.</div>
            <div class="C-tags">
              <span class="C-tag">Docker</span>
              <span class="C-tag">Kubernetes</span>
              <span class="C-tag">Jenkins</span>
              <span class="C-tag">Groovy</span>
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

        <div class="C-entry no-photo"><div class="C-spotlight"></div>
          <div class="C-body">
            <div class="C-meta">
              <span class="C-period">2024 — Present</span>
            </div>
            <div class="C-role">Journal Manuscript Reviewer</div>
            <div class="C-desc">Peer review of manuscripts submitted to the following journals:</div>
            <ul class="C-review-list">
              <li class="C-review-item">
                <span class="C-review-name">Systems and Control Letters</span>
                <span class="C-review-count">8 reviews</span>
              </li>
              <li class="C-review-item">
                <span class="C-review-name">ASME Journal of Dynamical Systems, Measurement, and Control</span>
                <span class="C-review-count">2 reviews</span>
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

// Spotlight glow follows cursor on each card
document.querySelectorAll('.C-entry').forEach(card => {
  const spotlight = card.querySelector('.C-spotlight');
  if (!spotlight) return;
  card.addEventListener('mousemove', e => {
    const r = card.getBoundingClientRect();
    const x = (e.clientX - r.left).toFixed(0) + 'px';
    const y = (e.clientY - r.top).toFixed(0) + 'px';
    spotlight.style.background = `radial-gradient(circle 220px at ${x} ${y}, rgba(255,107,0,0.13) 0%, transparent 70%)`;
    spotlight.style.opacity = '1';
  });
  card.addEventListener('mouseleave', () => { spotlight.style.opacity = '0'; });
});
</script>
