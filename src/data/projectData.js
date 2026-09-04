import spheroSwarm from "../assets/img-projects/sphero-swarm.gif";
import ukfMaze from "../assets/img-projects/ukf-maze.gif";
import motionBridge from "../assets/img-projects/motionbridge.gif";
import guidePlay from "../assets/img-projects/guideplay.gif";
import quadruped from "../assets/img-projects/quadruped.gif";
import mujocoArm from "../assets/img-projects/mujoco-arm.gif";
import mapper from "../assets/img-projects/mapper.gif";
import gestureFinger from "../assets/img-projects/gesture-finger.gif";
import multiRobot from "../assets/img-projects/multi-robot.jpeg";
import iotLight from "../assets/img-projects/iot-light.gif";
import droneSwarm from "../assets/img-projects/drone-swarm.gif";

export const proyectos = [
  {
    titulo: "Sphero Swarm Lab — Mixed Sim/Real Fleet with Learned Control",
    descripcion:
      "A swarm robotics platform where every robot is independently simulated or driven over Bluetooth in the same workspace, behind a single interface that nothing above the fleet layer branches on. An overhead colour tracker recovers pose and publishes it into a vision-language-model robotics framework over RPC, with the fleet exposed there as an agent with its own tool schemas, so a model can command real robots through the same calls the bench uses. Policies are trained in simulation with deliberate domain randomisation \u2014 command latency, motor lag, per-robot gain and heading bias randomised every episode, because a policy trained at zero latency oscillates on hardware \u2014 and the coverage reward mentions nothing about flocking or spacing, so spreading behaviour has to be discovered rather than written in. The hardware apps are kept as a deliberate lineage, single-robot through multi-robot to agent-driven, each left working as the fallback for the one above it.",
    imagen: spheroSwarm.src,
    tecnologias: ["Python", "Reinforcement Learning", "Swarm Robotics", "Sim-to-Real", "Computer Vision", "BLE"],
    demo: "#",
    codigo: "https://github.com/tejasms03/spheroswarm",
    categoria: ["reinforcement", "multiagent", "software"],
  },
  {
    titulo: "Depth-Gated UKF Localization with Maze Path Planning",
    descripcion:
      "Real-time external-camera localization for a differential-drive robot, built around an Unscented Kalman Filter whose measurement model is conditioned on a pre-recorded empty-scene depth baseline — a prior a fixed camera can build and a robot-mounted one cannot. An overhead RealSense gates out background pixels, ray-casts a cylinder at the current filter state, and reduces a 307,200-pixel frame to a few hundred pixels weighted jointly by depth and colour. A maze layer overlays a grid through the workspace homography, plans with A* on the cell graph, and executes it with a rotate-then-translate waypoint controller, running at roughly 25 Hz on a single CPU.",
    imagen: ukfMaze.src,
    tecnologias: ["Python", "UKF", "RealSense D435", "OpenCV", "A*", "ESP32"],
    demo: "https://github.com/tejasms03/depth-gated-ukf/blob/main/demo/ukf_maze_demo.mp4",
    codigo: "https://github.com/tejasms03/depth-gated-ukf",
    categoria: ["software", "embedded"],
  },
  {
    titulo: "MotionBridge — Motion Amplification for Post-Stroke Rehabilitation",
    descripcion:
      "A camera-based upper-limb rehabilitation system that turns partial arm movements into full on-screen gestures, letting stroke survivors practise high-repetition therapy with no controller and no grip strength required. Monocular pose estimation feeds a per-joint constant-velocity Kalman filter with Mahalanobis outlier gating, and a kinematic amplification transform scales reduced-range motion into a complete gesture driving four therapeutic games. An ESP32 streams dual-IMU and surface-EMG telemetry at 100 Hz, adding a live movement-quality metric and muscle-activation triggers on commodity hardware.",
    imagen: motionBridge.src,
    tecnologias: ["Python", "MediaPipe", "Kalman Filter", "PyOpenGL", "ESP32", "EMG"],
    demo: "https://github.com/tejasms03/MotionBridge/tree/main/demo",
    codigo: "https://github.com/tejasms03/MotionBridge",
    categoria: ["software", "embedded"],
  },
  {
    titulo: "GuidePlay — Gamified Haptic Smart Cane for Mobility Training",
    descripcion:
      "An instrumented white cane that turns orientation and mobility technique practice into a screen-free haptic training game. An IMU, three ultrasonic rangefinders, and three vibration motors on a Parallax Propeller board grade sweep arc width, tap rhythm, wall clearance, and ground contact, returning feedback purely as patterned vibration so the user's auditory spatial mapping stays intact. Modes are selected by wrist-twist gesture rather than buttons, and correct technique is signalled by silence — deviation is what triggers a motor.",
    imagen: guidePlay.src,
    tecnologias: ["C", "Parallax Propeller", "MPU-6050", "Ultrasonic Sensing", "OpenCV"],
    demo: "https://github.com/tejasms03/GuidePlay/blob/main/demo/guideplay_demo.mp4",
    codigo: "https://github.com/tejasms03/GuidePlay",
    categoria: ["embedded", "mechanical", "software"],
  },
  {
    titulo: "Quadruped and Hexapod Robot Locomotion using Reinforcement Learning",
    descripcion:
      "This project focuses on the design, simulation, and control of quadruped and hexapod robots using reinforcement learning techniques. The robots are trained in PyBullet to learn stable and efficient locomotion behaviors, with an emphasis on sim-to-real transfer using ROS2. The workflow integrates mechanical design in Fusion 360, physics-based simulation, and learned control policies, demonstrating robust walking and adaptability across different terrains and robot morphologies.",
    imagen: quadruped.src,
    tecnologias: ["Python", "Reinforcement Learning", "ROS2", "PyBullet", "Fusion 360"],
    demo: "https://github.com/tejasms03/TUM_ri/blob/main/hexapod-movement-project.mp4",
    codigo: "https://github.com/tejasms03/TUM_ri",
    categoria: ["reinforcement", "mechanical", "software"],
  },
  {
    titulo: "Voronoi-Based Collaborative Drone Swarm Target Tracking",
    descripcion:
      "This project explores collaborative target tracking using a swarm of drones coordinated through Voronoi partitioning. The approach enables decentralized coverage and efficient area monitoring, allowing drones to adapt their positions dynamically based on target movement. The project demonstrates swarm intelligence, distributed control, and cooperative perception strategies.",
    imagen: droneSwarm.src,
    tecnologias: ["Swarm Robotics", "Multi-Agent Systems", "Computer Vision"],
    demo: "https://github.com/tejasms03/drone_swarm/tree/main/demo",
    codigo: "https://github.com/tejasms03/drone_swarm",
    categoria: ["multiagent", "software"],
  },
  {
    titulo: "Gesture-Controlled Humanoid Finger",
    descripcion:
      "A gesture-based robotic finger control system that combines computer vision and embedded hardware. Hand gestures are detected using MediaPipe in Python, translated into control signals, and sent to an Arduino to actuate motors in a humanoid finger. This project demonstrates intuitive human-robot interaction and real-time vision-based control of robotic hardware.",
    imagen: gestureFinger.src,
    tecnologias: ["Python", "MediaPipe", "Arduino", "Computer Vision"],
    demo: "https://github.com/tejasms03/mediapipe_finger/blob/main/mediapipe_finger_demo.mp4",
    codigo: "https://github.com/tejasms03/mediapipe_finger",
    categoria: ["embedded", "software", "mechanical"],
  },
  {
    titulo: "Multi-Robot Task Allocation and Path Planning",
    descripcion:
      "This project implements a multi-robot coordination system where robots are assigned tasks and navigate through an environment using A* path planning. OpenCV is used for image-based environment mapping, enabling robots to plan collision-free paths efficiently. The project showcases concepts in task allocation, global planning, and cooperative robotics.",
    imagen: multiRobot.src,
    tecnologias: ["Python", "OpenCV", "A* Algorithm"],
    demo: "https://github.com/tejasms03/Multi_robot_task_transfer/blob/main/End-Semester%20Report.pdf",
    codigo: "https://github.com/tejasms03/Multi_robot_task_transfer",
    categoria: ["multiagent", "software"],
  },
  {
    titulo: "Multi-Agent Localization with Noisy Range Measurements",
    descripcion:
      "This project addresses the problem of localizing multiple agents using noisy inter-agent distance measurements inspired by UWB sensing. A nonlinear optimization framework is implemented in Python to estimate agent positions, demonstrating how cooperative localization can be achieved despite measurement uncertainty. The project highlights principles from multi-agent systems, estimation theory, and optimization.",
    imagen: mapper.src,
    tecnologias: ["Python", "Multi-Agent Systems", "Localization"],
    demo: "https://github.com/tejasms03/mapper/blob/main/mapper_demo.mov",
    codigo: "https://github.com/tejasms03/mapper",
    categoria: ["multiagent", "software"],
  },
  {
    titulo: "IoT-Controlled Light Balance System",
    descripcion:
      "An embedded systems project that synchronizes lighting effects with sound using Arduino and C++. The system leverages IoT principles to dynamically control light patterns, creating responsive visual effects driven by audio input. It highlights real-time signal processing, microcontroller programming, and hardware-software integration.",
    imagen: iotLight.src,
    tecnologias: ["C++", "Arduino", "IoT"],
    demo: "https://github.com/tejasms03/light-sound-syncro-act",
    codigo: "https://github.com/tejasms03/light-sound-syncro-act",
    categoria: ["embedded"],
  },
  {
    titulo: "MuJoCo Robotic Arm Simulation (UR10e)",
    descripcion:
      "This project involves the simulation and control of a UR10e robotic manipulator using the MuJoCo physics engine. It explores robotic control concepts such as joint-space and task-space control, dynamics, and trajectory tracking through Python-based experiments. The simulation provides a realistic environment for testing control strategies and analyzing robot behavior under physical constraints.",
    imagen: mujocoArm.src,
    tecnologias: ["Python", "MuJoCo", "Control Systems"],
    demo: "https://github.com/tejasms03/mujoco_arm/tree/main/outputs",
    codigo: "https://github.com/tejasms03/mujoco_arm",
    categoria: ["software"],
  },
];
