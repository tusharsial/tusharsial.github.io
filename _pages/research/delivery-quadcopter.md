---
layout: archive
permalink: /research/delivery-quadcopter/
author_profile: false
custom_css: research-project
---

<div class="pd-page">

  <div class="pd-header">
    <div class="pd-eyebrow">Robotics · Control Systems</div>
    <div class="pd-title">Vitran Drone: Autonomous Delivery Quadcopter</div>
    <div class="pd-date">February 9, 2022</div>
  </div>

  <div class="pd-divider"></div>

  <div class="pd-section-label">Project Overview</div>
  <div class="pd-body">
    This project was designed for the <a href="https://portal.e-yantra.org/" target="_blank" rel="noopener">e-Yantra Robotics Competition</a> hosted by IIT Bombay and sponsored by the Ministry of Education of India. I designed autonomous navigation algorithms for a 3D-simulated quadcopter capable of autonomously delivering packages in an urban environment.
    <br/><br/>
    The system was implemented using <strong>ROS, Python, and Gazebo</strong>, covering the full navigation stack: flight attitude control, position control, and obstacle avoidance. To detect QR tags on delivery packages and identify drop-off locations, I implemented a <strong>pyzbar library-based computer vision algorithm</strong>.
    <br/><br/>
    The complete flight control architecture integrates a cascaded PID controller for attitude stabilization, a position controller for waypoint navigation, and a local planner for obstacle avoidance — all operating in a realistic simulated urban environment with dynamic obstacles and constrained airspace.
  </div>

  <div class="pd-divider"></div>

  <div class="pd-section-label">Results &amp; Figures</div>
  <div class="pd-figures">
    <div class="pd-fig-placeholder">Figure 1</div>
    <div class="pd-fig-placeholder">Figure 2</div>
    <div class="pd-fig-placeholder">Figure 3</div>
    <div class="pd-fig-placeholder">Figure 4</div>
  </div>

  <div class="pd-links">
    <a href="https://github.com/tusharsial/Autonomous-Delivery-Quadcopter/tree/main" target="_blank" rel="noopener" class="pd-btn"><svg class="pd-btn-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/></svg>Code</a>
    <a href="#" class="pd-btn"><svg class="pd-btn-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>Simulation Video</a>
  </div>

</div>
