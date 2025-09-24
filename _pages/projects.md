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

My Master's thesis under Professor Abhishek Halder is focused on designing an **Optimal Covariance Steering Algorithm in Continuous Time with Hilbert-Schmidt Terminal Cost for Linear Stochastic Systems over a finite time horizon**. The earlier works focused on generalizing the Schrodinger Bridge Problem (SBP) with a hard constraint on the final marginal distribution, which finds the most likely stochastic evolution between two probability distributions at two distinct points in time. My current focus is on developing a framework incorporating a soft constraint (Frobenius terminal cost) and a quadratic cost function for control input and state. This modification will improve system performance and computational efficiency by optimizing control efforts and the desired system states. For this problem, the necessary conditions of optimality become a coupled matrix ODE two-point boundary value problem. To solve this system of equations, I've designed a **Matricial Recursive Algorithm** and provided a guarantee for its convergence. The proposed algorithm and its analysis make use of the linear fractional transforms parameterized by the state transition matrix of the associated Hamiltonian matrix. The proposed algorithm was tested on a close-proximity rendezvous scenario by modeling the relative motion of a service spacecraft to a target satellite in LEO using Clohessy–Wiltshire dynamics with stochastic disturbances. This project is expected to be completed by the end of 2025. The code for this project can be found [here](https://github.com/tusharsial/Covariance-Steering). 

In-Orbit Servicing
------
<video src="https://github.com/user-attachments/assets/b0d779a0-9210-41bb-9884-691e1c44e9d4" 
       class="align-right" 
       width="480px" 
       autoplay 
       loop 
       muted 
       playsinline
       style="margin-left: 20px;">
</video>
Research into the autonomy of spacecraft has been of increasing interest. Indeed, with a growing debris population, robots that can perform routine tasks autonomously (such as simple repairs/maintenance, refueling, or debris removal) may become increasingly essential for actively preventing disaster. In this context, several autonomous missions to uncooperative targets (which generally can be tumbling and orbiting the Earth elliptically) will require rendezvous and docking procedures. In this project, I've worked on designing a Control Scheme for a Thrust vectoring Satellite using a Koopman operator-based approach for it to rendezvous with a tumbling noncooperative Satellite under the guidance of Dr. Debasish Ghose, a professor of the Department of Aerospace Engineering at the Indian Institute of Science (IISc), Bengaluru. You can check out my [Thesis manuscript](https://drive.google.com/file/d/1sgt0afIj0nHNnJGHqSqTLT09nrHZbITw/view?usp=sharing) and the [Codebase](https://github.com/tusharsial/Spacecraft-Rendezvous) for more details. 

Space Trajectory Optimization
---

Autonomous Mars Rover
---
![Mars Rover Photo](/images/Mars Rover Image.png){: .align-right width="200px"}
In 2020, I co-founded <a href="https://criss-robotics.in/" style="color: red;">CRISS Robotics</a>, a student research technical team for designing and manufacturing an all-terrain 6-wheeled autonomous Mars rover. I developed the **high-level electrical architecture** and an **electronic differential-based drive control system** for the rover there, capable of autonomous traversal, equipment servicing using a 6-DOF robotic manipulator, and life detection using a science module. CRISS qualified for the International Rover Challenge in the 2022 finals at Chennai, India, among 16 international teams, and then won the **International Rover Design Challenge** in 2023. You can check out the [IRC Report](https://drive.google.com/file/d/1kP_tj-SH4lCFHxSWdpxNRr5fvlEZZh0U/view) and [IRDC Report](https://drive.google.com/file/d/1R8cpztHJwczZH3zVnijbmGaEj1i9xp4E/view) here. 

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

Powertrain of a Formula-Style Electric Vehicle
---
<div style="float: right; width: 380px; margin-left: 20px;">
  <img src="https://github.com/user-attachments/assets/87618281-0039-48f7-b009-a133d43f052f" alt="System Overview" style="width: 100%;">
  <p style="text-align: center; font-style: italic; margin-top: 8px; font-size: 0.9em;">
    Fig: High-level Electrical Architecture of EV
  </p>
</div>
In my freshman year, I joined the Electric Powertrain Subsystem at Inspired Karters Electric, the Formula Student Electric Vehicle (FSEV) Team of BITS Pilani, Pilani Campus. The team comprises roughly 50 talented and focused members who work tirelessly throughout the year to build a single-seater Formula One Car. With endurance being the primary goal of our first electric vehicle, I developed a high-fidelity model of the electric powertrain package by leveraging Simulink & Simscape to calculate the torque and current requirements for motor selection, battery capacity requirements, and optimization of motor control strategies. The powertrain model was incorporated into our proprietary laptime simulator to validate our endurance-optimized design. My brief experience in the Mechanical subsystem also allowed me to assemble and package the electrical components of our car’s CAD model using Fusion 360. Our team achieved an overall first position across India in the 4th Annual Formula Student Electric Vehicle (FSEV) Concept Challenge, hosted by Formula Bharat in the summer of 2020. Subsequently, I gained the opportunity to head the Electric Powertrain Subsystem, as we began manufacturing the EV to showcase in the Formula Bharat competition. You can check out the [Design Report](https://docs.google.com/document/u/1/d/e/2PACX-1vQuObctRIT1pGiuUQN05OE-FDu31f3r085TjL3lFPOHDcydQl3Sj4Ll3P8LhzXQuDx47tkLKqnTsIDy/pub) and the [CAD video](https://youtu.be/fUpCTI_xb6E) here. 


Autonomous Cleaning Bot
---

Autonomous Delivery Quadcopter
---

<figure align="center">
  <img src="https://github.com/tusharsial/Autonomous-Delivery-Quadcopter/assets/74113713/c56264c6-2ec6-44e3-9ae6-a69bd2d922ca" alt="System Overview" width="600">
  <figcaption style="text-align: center; font-style: italic; margin-top: 10px;">
    <b>Figure 1:</b> Flight Control Architecture
  </figcaption>
</figure>
In today's fast-paced world, the integration of Unmanned Aerial Vehicles (UAVs) has marked a paradigm shift in various industries, particularly in transportation and logistics. Among these cutting-edge technologies, autonomous quadcopters have emerged as frontrunners in revolutionizing the delivery landscape. In this project, I've designed autonomous navigation (flight attitude, position control, & obstacle avoidance) algorithms using ROS, Python, and Gazebo for a 3-D simulated quadcopter capable of autonomously delivering packages in an urban environment. To detect QR tags on delivery packages, I implemented a pyzbar library-based computer vision algorithm. This project was designed for the e-Yantra Robotics Competition hosted by IIT Bombay and sponsored by the Ministry of Education of India.

