---
layout: archive
#title: "News"
permalink: /news/
author_profile: false
---
{% include base_path %}

<span class="news-eyebrow">Updates &amp; Announcements</span>
<div class="news-title">News</div>
<div class="news-divider"></div>

<div class="filter-bar">
  <span class="filter-label">Year</span>
  <select class="year-select" id="yearSelect">
    <option value="2026">2026</option>
    <option value="2025">2025</option>
    <option value="2024">2024</option>
  </select>
</div>

<!-- 2026 -->
<div class="news-year-group" data-group="2026">
  <table class="news-table">
     <tr>
          <td class="news-date">Mar 27, 2026</td>
          <td>Presented my work: <a href="/files/Tushar_2026_AIAA_regional_conference_Covariance_Control.pdf" target="_blank" rel="noopener" style="color:#FF9A3C;text-decoration:none;">LQ Covariance Control with Deadline Constraint and Frobenius Terminal Loss</a> in the <a href="https://aiaa.org/events/2026-region-v-student-conference/" target="_blank" rel="noopener" style="color:#FF9A3C;text-decoration:none;"> 2026 AIAA Region V Student Conference</a>. <a href="/files/Tushar_2026_AIAA_regional_conference_Covariance_Control_Slides.pdf" target="_blank" rel="noopener" style="color:#FF9A3C;text-decoration:none;">[slides]</a></td>
        </tr> 
        <tr>
          <td class="news-date">Mar 26, 2026</td>
          <td>Presented my work: <a href="/files/Tushar_2026_AIAA_regional_conference_MDO.pdf" target="_blank" rel="noopener" style="color:#FF9A3C;text-decoration:none;">Multidisciplinary Design Optimization of a Low-Thrust Asteroid Orbit Insertion Using Electric Propulsion</a> in the <a href="https://aiaa.org/events/2026-region-v-student-conference/" target="_blank" rel="noopener" style="color:#FF9A3C;text-decoration:none;">2026 AIAA Region V Student Conference </a>. <a href="/files/Tushar_2026_AIAA_regional_conference_MDO_slides.pdf" target="_blank" rel="noopener" style="color:#FF9A3C;text-decoration:none;">[slides]</a></td>
          </tr>
    <tr>
      <td class="news-date">Feb 27, 2026</td>
      <td>Successfully defended my MS thesis: <a href="/files/Tushar_MS_Thesis_Slides.pdf" target="_blank" rel="noopener" style="color:#FF9A3C;text-decoration:none;">Fixed Horizon Linear Quadratic Optimal Covariance Steering in Continuous Time with Hilbert-Schmidt Terminal Cost</a>.</td>
    </tr>
    <tr>
      <td class="news-date">Jan 29, 2026</td>
      <td>Conference Paper: <span class="hl">Generative Profiling for Soft Real-Time Systems and its Applications to Resource Allocation</span> accepted at the <a href="https://2026.rtas.org/" target="_blank" rel="noopener" style="color:#FF9A3C;text-decoration:none;">32nd IEEE Real-Time and Embedded Technology and Applications Symposium (RTAS 2026)</a>.</td>
    </tr>
  </table>
</div>

<!-- 2025 -->
<div class="news-year-group" data-group="2025">
  <table class="news-table">
     <tr>
      <td class="news-date">Oct 24, 2025</td>
      <td>New Manuscript: <a href="https://arxiv.org/abs/2510.21944" target="_blank" rel="noopener" style="color:#FF9A3C;text-decoration:none;">Fixed Horizon Linear Quadratic Covariance Steering in Continuous Time with Hilbert-Schmidt Terminal Cost</a>.</td>
    </tr>
    <tr>
      <td class="news-date">July 11, 2025</td>
      <td>Journal paper: <a href="https://dl.acm.org/doi/pdf/10.1145/3761814" target="_blank" rel="noopener" style="color:#FF9A3C;text-decoration:none;">Rasco: Resource Allocation and Scheduling Co-design for DAG Applications on Multicore</a> accepted in ACM Transactions on Embedded Computing Systems (TECS). Also accepted to be presented at <a href="https://esweek.org/emsoft/" target="_blank" rel="noopener" style="color:#FF9A3C;text-decoration:none;">2025 ACM SIGBED International Conference on Embedded Software (EMSOFT)</a>.</td>
    </tr>
  </table>
</div>

<!-- 2024 -->
<div class="news-year-group" data-group="2024">
  <table class="news-table">
    <tr>
      <td class="news-date">Aug 15, 2024</td>
      <td>Joined Prof. <a href="https://abhishekhalder.org/index.html" target="_blank" rel="noopener" style="color:#FF9A3C;text-decoration:none;">Abhishek Halder's group</a> as a Graduate Research Assistant at ISU.</td>
    </tr>
    <tr>
      <td class="news-date">Aug 07, 2024</td>
      <td>Started MS in the <a href="https://www.aere.iastate.edu/" target="_blank" rel="noopener" style="color:#FF9A3C;text-decoration:none;">Department of Aerospace Engineering, Iowa State University</a>.</td>
    </tr>
  </table>
</div>

<style>
.news-eyebrow{font-family:'Orbitron',sans-serif;font-size:0.56rem;letter-spacing:5px;color:#FF6B00 !important;text-transform:uppercase;display:block;margin-bottom:6px;margin-top:0}
.news-title{font-family:'Orbitron',sans-serif;font-size:clamp(1.8rem,4vw,3rem);font-weight:900;padding-bottom:14px;border:none;position:relative;display:inline-block;line-height:1.15;background:linear-gradient(135deg,#fff 40%,#FF9A3C);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
.news-title::after{content:'';position:absolute;bottom:0;left:0;width:60px;height:2px;background:#FF6B00}
.news-divider{width:100%;height:1px;background:linear-gradient(to right,transparent,rgba(255,107,0,0.35),transparent);margin:24px 0 40px}
.filter-bar{display:flex;align-items:center;gap:12px;margin-bottom:32px}
.filter-label{font-family:'Orbitron',sans-serif;font-size:0.38rem;letter-spacing:3px;color:rgba(255,107,0,0.7) !important;text-transform:uppercase}
.year-select{font-family:'Orbitron',sans-serif;font-size:0.38rem;letter-spacing:2px;text-transform:uppercase;padding:7px 28px 7px 14px;background:rgba(3,3,10,0.8);border:1px solid rgba(255,107,0,0.5);border-radius:3px;color:#fff !important;cursor:pointer;transition:all 0.2s;appearance:none;-webkit-appearance:none;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'%3E%3Cpath d='M1 1l4 4 4-4' stroke='%23FF6B00' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E");background-repeat:no-repeat;background-position:right 10px center}
.year-select:hover{border-color:#FF6B00}
.year-select:focus{outline:none;border-color:#FF6B00;box-shadow:0 0 0 2px rgba(255,107,0,0.15)}
.year-select option{background:#0a0a14;color:#fff}
.news-year-group{margin-bottom:48px;transition:opacity 0.3s ease}
.news-year-group.hidden{display:none}
.news-year-label{font-family:'Orbitron',sans-serif;font-size:0.44rem;letter-spacing:3px;color:#FF6B00 !important;text-transform:uppercase;margin-bottom:16px;padding-bottom:10px;position:relative}
.news-year-label::after{content:'';position:absolute;bottom:0;left:0;right:0;height:1px;background:linear-gradient(to right,rgba(255,107,0,0.4),rgba(255,107,0,0.05),transparent)}
.news-table{width:100%;border-collapse:collapse;background:none !important;border:none !important;box-shadow:none !important}
.news-table tr{border-bottom:1px solid rgba(255,107,0,0.08) !important;background:none !important;box-shadow:none !important;transition:background 0.15s}
.news-table tr:last-child{border-bottom:none !important}
.news-table tr:hover{background:rgba(255,107,0,0.03) !important}
.news-table td{padding:14px 8px !important;font-size:0.88rem !important;color:#b0b8c8 !important;vertical-align:top !important;line-height:1.65 !important;background:none !important;border:none !important}
.news-date{font-family:'Orbitron',sans-serif !important;font-size:0.64rem !important;letter-spacing:2px !important;color:#ffffff !important;white-space:nowrap !important;padding-right:32px !important;width:150px !important}
.hl{color:#FF9A3C !important}  
</style>

<script>
var sel=document.getElementById('yearSelect');
function applyFilter(){
  var year=sel.value;
  document.querySelectorAll('.news-year-group').forEach(function(g){
    g.classList.toggle('hidden',g.dataset.group!==year);
  });
}
applyFilter();
sel.addEventListener('change',applyFilter);
</script>
