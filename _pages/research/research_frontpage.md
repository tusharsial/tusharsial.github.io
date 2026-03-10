---
layout: archive
permalink: /research/
author_profile: false
---

<!-- SVG defs -->
<svg width="0" height="0" style="position:absolute">
  <defs>
    <symbol id="ico-gh" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/>
    </symbol>
    <symbol id="ico-yt" viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </symbol>
    <symbol id="ico-doc" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
      <polyline points="14 2 14 8 20 8"/>
      <line x1="16" y1="13" x2="8" y2="13"/>
      <line x1="16" y1="17" x2="8" y2="17"/>
    </symbol>
  </defs>
</svg>

<div class="rp-page">

  <div class="rp-hero">
    <div>
      <div class="rp-eyebrow">Ideas in Action</div>
      <div class="rp-pagetitle">Research Projects</div>
    </div>
    <div class="rp-filters">
      <button class="rp-filter active" onclick="rpFilter('all',this)">All</button>
      <button class="rp-filter" onclick="rpFilter('ms',this)">MS</button>
      <button class="rp-filter" onclick="rpFilter('ug',this)">UG</button>
    </div>
  </div>
  <div class="rp-divider"></div>

  <!-- ── MASTERS ── -->
  <div class="rp-group" data-filter="ms">
    <div class="rp-sectiontitle">MS Research</div>
    <div class="opt1-grid">

      <div class="opt1-card">
        <div class="opt1-img">
          <img src="/images/Trajectory_only.jpeg" alt="Coupled Trajectory-Power"/>
        </div>
        <div class="opt1-body">
          <span class="opt1-tag">MDO · Astrodynamics</span>
          <div class="opt1-title">Coupled Spacecraft Trajectory–Power Subsystem Design Optimization</div>
          <div class="opt1-desc">Developed an MDO framework coupling trajectory dynamics and power subsystem design for a low-thrust orbit-lowering maneuver around asteroid 16-Psyche.</div>
          <div class="opt1-btns">
            <a href="/research/coupled-trajectory-power/" class="opt1-btn opt1-btn-primary">Learn More</a>
            <a href="https://github.com/tusharsial/Coupled-Power-Space-Trajectory-Optimization-using-MDO" target="_blank" rel="noopener" class="opt1-btn opt1-btn-ghost"><svg class="opt1-icon"><use href="#ico-gh"/></svg>Code</a>
            <a href="#" class="opt1-btn opt1-btn-ghost"><svg class="opt1-icon"><use href="#ico-doc"/></svg>Preprint</a>
          </div>
        </div>
      </div>

      <div class="opt1-card">
        <div class="opt1-img">
          <img src="/images/StateCovariancesAndSamplePaths_CW.png" alt="Optimal Covariance Control"/>
        </div>
        <div class="opt1-body">
          <span class="opt1-tag">Stochastic Control · Optimization</span>
          <div class="opt1-title">Optimal Covariance Control</div>
          <div class="opt1-desc">Developed a computationally efficient novel covariance steering algorithm in continuous time with applications to control of aerospace and robotic systems under stochastic disturbances.</div>
          <div class="opt1-btns">
            <a href="/research/optimal-covariance-control/" class="opt1-btn opt1-btn-primary">Learn More</a>
            <a href="https://github.com/tusharsial/Covariance-Steering" target="_blank" rel="noopener" class="opt1-btn opt1-btn-ghost"><svg class="opt1-icon"><use href="#ico-gh"/></svg>Code</a>
            <a href="https://arxiv.org/abs/2510.21944" target="_blank" rel="noopener" class="opt1-btn opt1-btn-ghost"><svg class="opt1-icon"><use href="#ico-doc"/></svg>Preprint</a>
          </div>
        </div>
      </div>

      <div class="opt1-card">
        <div class="opt1-img">
          <img src="https://github.com/user-attachments/assets/25a0be0b-ef75-42e4-be34-c95b650defdb" alt="Earth-Moon Trajectory"/>
        </div>
        <div class="opt1-body">
          <span class="opt1-tag">Astrodynamics · Optimal Control</span>
          <div class="opt1-title">Earth–Moon Low-Thrust Trajectory Optimization</div>
          <div class="opt1-desc">Extended the classical Pierson–Kluever three-stage method for optimal low-thrust cislunar transfers by allowing variable thrust magnitude under CR3BP dynamics.</div>
          <div class="opt1-btns">
            <a href="/research/earth-moon-trajectory/" class="opt1-btn opt1-btn-primary">Learn More</a>
            <a href="https://github.com/tusharsial/Earth-Moon-Low-Thrust-Trajectory-Optimization/tree/main" target="_blank" rel="noopener" class="opt1-btn opt1-btn-ghost"><svg class="opt1-icon"><use href="#ico-gh"/></svg>Code</a>
            <a href="#" class="opt1-btn opt1-btn-ghost"><svg class="opt1-icon"><use href="#ico-doc"/></svg>Report</a>
          </div>
        </div>
      </div>

    </div>
  </div>

  <!-- ── UNDERGRAD ── -->
  <div class="rp-group" data-filter="ug">
    <div class="rp-sectiontitle">UG Research</div>
    <div class="opt1-grid">

      <div class="opt1-card">
        <div class="opt1-img">
          <video autoplay loop muted playsinline>
            <source src="https://github.com/user-attachments/assets/b0d779a0-9210-41bb-9884-691e1c44e9d4" type="video/mp4"/>
          </video>
        </div>
        <div class="opt1-body">
          <span class="opt1-tag">Astrodynamics · Optimal Control</span>
          <div class="opt1-title">In-Orbit Autonomous Servicing</div>
          <div class="opt1-desc">Developed a guidance and control framework for an autonomous spacecraft capable of performing in-orbit servicing on noncooperative tumbling satellites.</div>
          <div class="opt1-btns">
            <a href="/research/in-orbit-servicing/" class="opt1-btn opt1-btn-primary">Learn More</a>
            <a href="https://github.com/tusharsial/Spacecraft-Rendezvous" target="_blank" rel="noopener" class="opt1-btn opt1-btn-ghost"><svg class="opt1-icon"><use href="#ico-gh"/></svg>Code</a>
            <a href="https://drive.google.com/file/d/1sgt0afIj0nHNnJGHqSqTLT09nrHZbITw/view?usp=sharing" target="_blank" rel="noopener" class="opt1-btn opt1-btn-ghost"><svg class="opt1-icon"><use href="#ico-doc"/></svg>Thesis</a>
          </div>
        </div>
      </div>

      <div class="opt1-card">
        <div class="opt1-img">
          <img src="/images/Mars Rover Image.png" alt="Autonomous Mars Rover"/>
        </div>
        <div class="opt1-body">
          <span class="opt1-tag">Robotics · Control Systems</span>
          <div class="opt1-title">Autonomous Mars Rover</div>
          <div class="opt1-desc">Co-founded CRISS Robotics, a student research technical team consisting of 60+ members for designing and manufacturing an all-terrain 6-wheeled Mars Rover.</div>
          <div class="opt1-btns">
            <a href="/research/mars-rover/" class="opt1-btn opt1-btn-primary">Learn More</a>
            <a href="https://drive.google.com/file/d/1kP_tj-SH4lCFHxSWdpxNRr5fvlEZZh0U/view" target="_blank" rel="noopener" class="opt1-btn opt1-btn-ghost"><svg class="opt1-icon"><use href="#ico-doc"/></svg>IRC</a>
            <a href="https://drive.google.com/file/d/1R8cpztHJwczZH3zVnijbmGaEj1i9xp4E/view" target="_blank" rel="noopener" class="opt1-btn opt1-btn-ghost"><svg class="opt1-icon"><use href="#ico-doc"/></svg>IRDC</a>
          </div>
        </div>
      </div>

      <div class="opt1-card">
        <div class="opt1-img">
          <video autoplay loop muted playsinline>
            <source src="https://user-images.githubusercontent.com/74113713/188335543-a0279f09-67d2-4ec2-a6ab-815ede3acb67.mp4" type="video/mp4"/>
          </video>
        </div>
        <div class="opt1-body">
          <span class="opt1-tag">Control Systems · UAV</span>
          <div class="opt1-title">Control of Agile Fixed-Wing UAV</div>
          <div class="opt1-desc">Backstepping-based longitudinal and lateral-directional stability controllers with a wind observer for robustness against atmospheric disturbances.</div>
          <div class="opt1-btns">
            <a href="/research/fixed-wing-uav/" class="opt1-btn opt1-btn-primary">Learn More</a>
            <a href="https://github.com/tusharsial/Agile-Fixed-Wing-UAV" target="_blank" rel="noopener" class="opt1-btn opt1-btn-ghost"><svg class="opt1-icon"><use href="#ico-gh"/></svg>Code</a>
          </div>
        </div>
      </div>

      <div class="opt1-card">
        <div class="opt1-img">
          <img src="https://github.com/user-attachments/assets/87618281-0039-48f7-b009-a133d43f052f" alt="Formula Electric Vehicle"/>
        </div>
        <div class="opt1-body">
          <span class="opt1-tag">Motor Control · CAD</span>
          <div class="opt1-title">Powertrain of a Formula-Style Electric Vehicle</div>
          <div class="opt1-desc">Designed a high-fidelity Simulink powertrain model for motor selection, battery sizing, and motor control optimization.</div>
          <div class="opt1-btns">
            <a href="/research/electric-vehicle/" class="opt1-btn opt1-btn-primary">Learn More</a>
            <a href="https://docs.google.com/document/u/1/d/e/2PACX-1vQuObctRIT1pGiuUQN05OE-FDu31f3r085TjL3lFPOHDcydQl3Sj4Ll3P8LhzXQuDx47tkLKqnTsIDy/pub" target="_blank" rel="noopener" class="opt1-btn opt1-btn-ghost"><svg class="opt1-icon"><use href="#ico-doc"/></svg>Report</a>
            <a href="https://youtu.be/fUpCTI_xb6E" target="_blank" rel="noopener" class="opt1-btn opt1-btn-ghost"><svg class="opt1-icon"><use href="#ico-yt"/></svg>Video</a>
          </div>
        </div>
      </div>

      <div class="opt1-card">
        <div class="opt1-img">
          <img src="https://github.com/tusharsial/Autonomous-Delivery-Quadcopter/assets/74113713/c56264c6-2ec6-44e3-9ae6-a69bd2d922ca" alt="Delivery Quadcopter"/>
        </div>
        <div class="opt1-body">
          <span class="opt1-tag">Robotics · Control Systems · DL</span>
          <div class="opt1-title">Vitran Drone: Autonomous Delivery Quadcopter</div>
          <div class="opt1-desc">Designed an autonomous navigation framework for an autonomous delivery quadcopter.</div>
          <div class="opt1-btns">
            <a href="/research/delivery-quadcopter/" class="opt1-btn opt1-btn-primary">Learn More</a>
            <a href="https://github.com/tusharsial/Autonomous-Delivery-Quadcopter/tree/main" target="_blank" rel="noopener" class="opt1-btn opt1-btn-ghost"><svg class="opt1-icon"><use href="#ico-gh"/></svg>Code</a>
            <a href="#" class="opt1-btn opt1-btn-ghost"><svg class="opt1-icon"><use href="#ico-yt"/></svg>Video</a>
          </div>
        </div>
      </div>

    </div>
  </div>
</div>

<style>
.rp-page { display: block; padding: 20px 0 80px; }
.rp-page *, .rp-page *::before, .rp-page *::after { box-sizing: border-box !important; }

.rp-page img, .rp-page video {
  width: 100% !important; height: 100% !important;
  object-fit: cover !important; display: block !important;
  margin: 0 !important; padding: 0 !important;
  position: relative; z-index: 1;
}

/* Hero row */
.rp-hero {
  display: flex !important;
  align-items: flex-end !important;
  justify-content: space-between !important;
  flex-wrap: wrap !important;
  gap: 20px !important;
}

/* Eyebrow */
.rp-eyebrow {
  font-family: 'Orbitron', sans-serif !important;
  font-size: 0.56rem; letter-spacing: 5px;
  color: #FF6B00 !important; text-transform: uppercase;
  display: block; margin-bottom: 6px !important;
}

/* Page title */
.rp-pagetitle {
  font-family: 'Orbitron', sans-serif !important;
  font-size: clamp(1.8rem, 4vw, 3rem) !important;
  font-weight: 900 !important;
  margin: 6px 0 0 !important;
  padding-bottom: 14px !important;
  border: none !important;
  position: relative !important;
  display: inline-block !important;
  line-height: 1.15 !important;
  background: linear-gradient(135deg, #fff 40%, #FF9A3C) !important;
  -webkit-background-clip: text !important;
  -webkit-text-fill-color: transparent !important;
  background-clip: text !important;
}
.rp-pagetitle::after {
  content: '' !important; position: absolute !important;
  bottom: 0; left: 0; width: 60px; height: 2px;
  background: #FF6B00 !important;
}

/* Divider */
.rp-divider {
  width: 100% !important; height: 1px !important;
  background: linear-gradient(to right, transparent, rgba(255,107,0,0.35), transparent) !important;
  margin: 24px 0 40px !important;
  display: block !important;
}

/* ── Filter buttons — match btn-space-outline from about.md ── */
.rp-filters {
  display: flex !important;
  gap: 8px !important;
  align-items: center !important;
  padding-bottom: 14px !important;
}
.rp-filter {
  padding: 7px 18px !important;
  font-family: 'Orbitron', sans-serif !important;
  font-size: 0.52rem !important; letter-spacing: 2px !important;
  text-transform: uppercase !important;
  border: 1px solid rgba(255,107,0,0.5) !important;
  border-radius: 3px !important;
  background: transparent !important;
  color: #fff !important;
  cursor: pointer !important;
  transition: all 0.2s !important;
}
.rp-filter:hover { border-color: #FF6B00 !important; color: #FF9A3C !important; background: rgba(255,107,0,0.15) !important; }
.rp-filter.active { border-color: #FF6B00 !important; color: #000 !important; background: #FF6B00 !important; font-weight: 700 !important; }

/* Section title — single heading, no eyebrow */
.rp-sectiontitle {
  font-family: 'Orbitron', sans-serif !important;
  font-size: clamp(1.1rem, 2.5vw, 1.6rem) !important;
  font-weight: 800 !important; color: #ffffff !important;
  padding-bottom: 10px !important; margin-bottom: 28px !important;
  position: relative; display: inline-block;
  border: none !important;
}
.rp-sectiontitle::after {
  content: ''; position: absolute;
  bottom: 0; left: 0; width: 36px; height: 2px; background: #FF6B00;
}

/* Group — fade transition */
.rp-group { margin-bottom: 64px; transition: opacity 0.35s, transform 0.35s; }
.rp-group.rp-hidden { opacity: 0 !important; transform: translateY(12px) !important; pointer-events: none !important; height: 0 !important; overflow: hidden !important; margin: 0 !important; }

/* Grid */
.opt1-grid {
  display: grid !important;
  grid-template-columns: repeat(auto-fill, minmax(290px, 1fr)) !important;
  gap: 18px !important;
}

/* Card */
.opt1-card {
  border: 1px solid rgba(255,107,0,0.15) !important;
  border-radius: 6px !important;
  background: rgba(255,255,255,0.02) !important;
  overflow: hidden !important;
  transition: transform 0.3s, border-color 0.3s, box-shadow 0.3s !important;
  position: relative !important;
  display: flex !important;
  flex-direction: column !important;
}
.opt1-card::before {
  content: '' !important;
  position: absolute !important;
  top: 0; left: 0; right: 0; height: 2px;
  background: linear-gradient(to right, transparent, #FF6B00, transparent) !important;
  transform: scaleX(0) !important;
  transition: transform 0.35s !important;
  z-index: 2;
}
.opt1-card:hover { transform: translateY(-4px) !important; border-color: rgba(255,107,0,0.4) !important; box-shadow: 0 12px 36px rgba(255,107,0,0.1) !important; }
.opt1-card:hover::before { transform: scaleX(1) !important; }

/* Image slot */
.opt1-img {
  width: 100% !important;
  aspect-ratio: 16/9 !important;
  background: linear-gradient(135deg, rgba(255,107,0,0.08), rgba(3,3,10,0.95)) !important;
  display: flex !important; align-items: center !important; justify-content: center !important;
  position: relative !important; overflow: hidden !important;
}
.opt1-img::after {
  content: '' !important; position: absolute !important; inset: 0;
  background-image: linear-gradient(rgba(255,107,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,107,0,0.04) 1px, transparent 1px) !important;
  background-size: 22px 22px !important; z-index: 0 !important; pointer-events: none;
}

/* Body — spotlight host */
.opt1-body {
  padding: 18px !important; display: flex !important; flex-direction: column !important; flex: 1 !important;
  position: relative !important; overflow: hidden !important;
}
.opt1-body::before {
  content: '' !important; position: absolute !important; inset: 0 !important;
  background: radial-gradient(circle 130px at var(--mx,50%) var(--my,50%), rgba(255,107,0,0.11) 0%, transparent 70%) !important;
  opacity: 0 !important; transition: opacity 0.4s !important;
  pointer-events: none !important; z-index: 0 !important;
}
.opt1-card:hover .opt1-body::before { opacity: 1 !important; }
.opt1-body > * { position: relative !important; z-index: 1 !important; }

/* Tag */
@property --tc { syntax: '<color>'; inherits: false; initial-value: #FF6B00; }
@property --bc { syntax: '<color>'; inherits: false; initial-value: rgba(255,107,0,0.28); }
.opt1-tag {
  display: inline-flex !important;
  align-self: flex-start !important;
  text-align: center !important;
  font-family: 'Orbitron', sans-serif !important;
  font-size: 0.5rem !important; letter-spacing: 2px;
  --tc: #FF6B00; --bc: rgba(255,107,0,0.28);
  color: var(--tc) !important;
  border: 1px solid var(--bc) !important;
  border-radius: 2px !important; padding: 3px 7px !important;
  text-transform: uppercase !important; margin-bottom: 9px !important;
}
@keyframes tagFlash {
  0%   { --tc: #FF6B00; --bc: rgba(255,107,0,0.28); }
  35%  { --tc: #994000; --bc: rgba(255,107,0,0.12); }
  100% { --tc: #FF6B00; --bc: rgba(255,107,0,0.28); }
}
.opt1-card:hover .opt1-tag { animation: tagFlash 0.4s ease-out forwards; }

/* Card title — pure #fff to match about.md hero brightness */
.opt1-title {
  font-family: 'Orbitron', sans-serif !important;
  font-size: 0.78rem !important; font-weight: 700 !important;
  color: #ffffff !important; line-height: 1.4 !important;
  margin-bottom: 9px !important; flex: 1 !important;
}
.opt1-desc {
  font-size: 0.8rem !important; color: #b0b8c8 !important;
  line-height: 1.6 !important; margin-bottom: 16px !important;
}

/* ── Ghost buttons — match btn-space-outline from about.md ── */
.opt1-btns { display: flex !important; gap: 7px !important; flex-wrap: wrap !important; }
.opt1-btn {
  padding: 6px 13px !important;
  border-radius: 3px !important;
  font-family: 'Orbitron', sans-serif !important;
  font-size: 0.5rem !important; letter-spacing: 1.5px !important;
  text-transform: uppercase !important;
  text-decoration: none !important;
  cursor: pointer !important;
  transition: all 0.2s !important;
  display: inline-flex !important; align-items: center !important; gap: 5px !important;
  line-height: 1 !important;
}
.opt1-btn-primary { background: #FF6B00 !important; color: #000 !important; font-weight: 700 !important; border: none !important; }
.opt1-btn-primary:hover { background: #FF9A3C !important; color: #000 !important; text-decoration: none !important; }
.opt1-btn-ghost {
  background: transparent !important;
  color: #fff !important;
  border: 1px solid rgba(255,107,0,0.5) !important;
}
.opt1-btn-ghost:hover { border-color: #FF6B00 !important; color: #FF9A3C !important; background: rgba(255,107,0,0.15) !important; text-decoration: none !important; }
.opt1-icon { width: 13px !important; height: 13px !important; flex-shrink: 0 !important; vertical-align: middle; }

@media (max-width: 900px) { .opt1-grid { grid-template-columns: repeat(2, 1fr) !important; } }
@media (max-width: 600px) { .opt1-grid { grid-template-columns: 1fr !important; } .rp-hero { flex-direction: column !important; align-items: flex-start !important; } }
</style>

<script>
function rpFilter(type, btn) {
  document.querySelectorAll('.rp-filter').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('.rp-group[data-filter]').forEach(function(g) {
    if (type === 'all' || g.dataset.filter === type) {
      g.classList.remove('rp-hidden');
    } else {
      g.classList.add('rp-hidden');
    }
  });
}

(function() {
  function attach() {
    document.querySelectorAll('.opt1-body').forEach(function(body) {
      if (body._spotInit) return;
      body._spotInit = true;
      body.addEventListener('mousemove', function(e) {
        var rect = body.getBoundingClientRect();
        var x = ((e.clientX - rect.left) / rect.width  * 100).toFixed(1) + '%';
        var y = ((e.clientY - rect.top)  / rect.height * 100).toFixed(1) + '%';
        body.style.setProperty('--mx', x);
        body.style.setProperty('--my', y);
      });
    });
  }
  document.addEventListener('DOMContentLoaded', attach);
  if (document.readyState !== 'loading') attach();
})();
</script>
