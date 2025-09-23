---
layout: archive
#title: "Projects"
permalink: /projects/
author_profile: true

---

{% include base_path %}

Optimal Covariance Control
------

<div style="width: 100%; margin: 20px 0;">
    <div style="display: flex; gap: 15px; justify-content: space-between;">
        <div style="flex: 1;">
            <img src="/images/StateCovariancesAndSamplePaths_CW.png" alt="Marginal position covariances" style="width: 100%;">
            <p style="text-align: center; font-style: italic; margin: 5px 0 0 0;">(a) Position covariances</p>
        </div>
        <div style="flex: 1;">
            <img src="/images/VelocityCovariancesAndSamplePaths_CW.png" alt="Marginal velocity covariances" style="width: 100%;">
            <p style="text-align: center; font-style: italic; margin: 5px 0 0 0;">(b) Velocity covariances</p>
        </div>
    </div>
    <p style="font-style: italic; margin-top: 10px; text-align: center;">
        <strong>Fig.</strong> Optimally controlled covariances (gray wireframe ellipsoids) and 5 closed-loop state sample paths for the Noisy CW model in the (a) position and (b) velocity coordinates. The hollow circular markers denote the initial conditions for these sample paths. The red wireframe ellipsoids correspond to the position and velocity marginal covariances of Σ<sub>d</sub>.
    </p>
</div>

My thesis is focused on designing an **Optimal Covariance Steering Algorithm in Continuous Time with Hilbert-Schmidt Terminal Cost for Linear Stochastic Systems over a finite time horizon**. The earlier works focused on generalizing the Schrodinger Bridge Problem (SBP) with a hard constraint on the final marginal distribution, which finds the most likely stochastic evolution between two probability distributions at two distinct points in time. My current focus is on developing a framework incorporating a soft constraint (Frobenius terminal cost) and a quadratic cost function for control input and state. This modification will improve system performance and computational efficiency by optimizing control efforts and the desired system states. For this problem, the necessary conditions of optimality become a coupled matrix ODE two-point boundary value problem. To solve this system of equations, I've designed a **Matricial Recursive Algorithm** and provided a guarantee for its convergence. The proposed algorithm and its analysis make use of the linear fractional transforms parameterized by the state transition matrix of the associated Hamiltonian matrix. The proposed algorithm was tested on a close-proximity rendezvous scenario by modeling the relative motion of a service spacecraft to a target satellite in LEO using Clohessy–Wiltshire dynamics with stochastic disturbances. This project is expected to be completed by the end of 2025. The code for this project can be found [here](https://github.com/tusharsial/Covariance-Steering). 

Flight Stabilizing Controllers for Agile Fixed-Wing UAV
------
<video src="https://user-images.githubusercontent.com/74113713/188335543-a0279f09-67d2-4ec2-a6ab-815ede3acb67.mp4" 
       class="align-right" 
       width="380px" 
       autoplay 
       loop 
       muted 
       playsinline
       style="margin-left: 20px;">
</video>
<!-- ![Fixed Drone Photo](/images/Fixed Drone.jpeg){: .align-right width="240px"} !-->
In this project, I've designed **flight stability controllers** for an agile fixed-wing UAV under Professor Bijoy Krishna Mukherjee, Department of EEE at BITS Pilani. In particular, I designed and modeled the Longitudinal and Lateral-Directional stability movement controllers of the UAV using the **Backstepping Control technique** using MATLAB and Simulink. Additionally, I created a **wind observer** to incorporate environmental disturbances(like wind shears, wind gusts, and atmospheric disturbances) to make the controllers robust and, thus, improve flight capability. The code for this project can be found [here](https://github.com/tusharsial/Agile-Fixed-Wing-UAV).

Autonomous Mars Rover
---
![Mars Rover Photo](/images/Mars Rover Image.png){: .align-right width="200px"}
In 2020, I co-founded <a href="https://criss-robotics.in/" style="color: red;">CRISS Robotics</a>, a student research technical team for designing and manufacturing an all-terrain 6-wheeled autonomous Mars rover. I developed the **high-level electrical architecture** and an **electronic differential-based drive control system** for the rover there, capable of autonomous traversal, equipment servicing using a 6-DOF robotic manipulator, and life detection using a science module. CRISS qualified for the International Rover Challenge in the 2022 finals at Chennai, India, among 16 international teams, then won the **International Rover Design Challenge** in 2023. You can check out the [IRC Report](https://drive.google.com/file/d/1kP_tj-SH4lCFHxSWdpxNRr5fvlEZZh0U/view) and [IRDC Report](https://drive.google.com/file/d/1R8cpztHJwczZH3zVnijbmGaEj1i9xp4E/view) here. 
