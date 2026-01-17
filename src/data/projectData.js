import quadruped from "../assets/img-projects/quadruped.png";
import mujocoArm from "../assets/img-projects/mujoco-arm.gif";
import robarmSim from "../assets/img-projects/robarm-sim.gif";
import mapper from "../assets/img-projects/mapper.gif";
import gestureFinger from "../assets/img-projects/gesture-finger.gif";
import multiRobot from "../assets/img-projects/multi-robot.jpeg";
import roboticArm from "../assets/img-projects/robotic-arm.png";
import iotLight from "../assets/img-projects/iot-light.gif";
import droneSwarm from "../assets/img-projects/drone-swarm.gif";

export const proyectos = [
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
    titulo: "MuJoCo Robotic Arm Simulation (UR10e)",
    descripcion:
      "This project involves the simulation and control of a UR10e robotic manipulator using the MuJoCo physics engine. It explores robotic control concepts such as joint-space and task-space control, dynamics, and trajectory tracking through Python-based experiments. The simulation provides a realistic environment for testing control strategies and analyzing robot behavior under physical constraints.",
    imagen: mujocoArm.src,
    tecnologias: ["Python", "MuJoCo", "Control Systems"],
    demo: "https://github.com/tejasms03/mujoco_arm/tree/main/outputs",
    codigo: "https://github.com/tejasms03/mujoco_arm",
    categoria: ["software"],
  },
  {
    titulo: "Interactive 2D Robotic Arm Simulator",
    descripcion:
      "An interactive 2D robotic arm simulator developed using Python and Pygame, designed to visualize and experiment with inverse kinematics. The simulator supports joystick control, spline-based trajectory generation, and real-time interaction, making it a useful educational tool for understanding kinematic chains, motion planning, and smooth path execution in robotic manipulators.",
    imagen: robarmSim.src,
    tecnologias: ["Python", "Pygame", "Inverse Kinematics"],
    demo: "https://github.com/tejasms03/robarm-sim/blob/main/robarm-sim_demo.mov",
    codigo: "https://github.com/tejasms03/robarm-sim",
    categoria: ["software"],
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
    titulo: "Gesture-Controlled Humanoid Finger",
    descripcion:
      "A gesture-based robotic finger control system that combines computer vision and embedded hardware. Hand gestures are detected using MediaPipe in Python, translated into control signals, and sent to an Arduino to actuate motors in a humanoid finger. This project demonstrates intuitive human-robot interaction and real-time vision-based control of robotic hardware.",
    imagen: gestureFinger.src,
    tecnologias: ["Python", "MediaPipe", "Arduino"],
    demo: "https://github.com/tejasms03/mediapipe_finger/blob/main/mediapipe_finger_demo.mp4",
    codigo: "https://github.com/tejasms03/mediapipe_finger",
    categoria: ["embedded", "software","mechanical design","Computer Vision"],
  },
  {
    titulo: "Multi-Robot Task Allocation and Path Planning",
    descripcion:
      "This project implements a multi-robot coordination system where robots are assigned tasks and navigate through an environment using A* path planning. OpenCV is used for image-based environment mapping, enabling robots to plan collision-free paths efficiently. The project showcases concepts in task allocation, global planning, and cooperative robotics.",
    imagen: multiRobot.src,
    tecnologias: ["Python", "OpenCV", "A* Algorithm"],
    demo: "https://github.com/tejasms03/Multi_robot_task_transfer/blob/main/End-Semester%20Report.pdf",
    codigo: "https://github.com/tejasms03/Multi_robot_task_transfer",
    categoria: ["multiagent", "software","Computer Vision"],
  },
  {
    titulo: "Robotic Arm Pose Control with Inverse Kinematics",
    descripcion:
      "A complete robotic arm project involving mechanical design, inverse kinematics, and real-world control. The arm is designed in Fusion 360, controlled via Arduino, and integrated with ROS for higher-level communication and motion planning. The project demonstrates accurate pose control and end-effector positioning through analytical and numerical inverse kinematics methods.",
    imagen: roboticArm.src,
    tecnologias: ["Python", "ROS", "Arduino", "Fusion 360"],
    demo: "#",
    codigo: "https://github.com/tejasms03/robotic-arm-ik",
    categoria: ["mechanical", "embedded"],
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
    titulo: "Voronoi-Based Collaborative Drone Swarm Target Tracking",
    descripcion:
      "This project explores collaborative target tracking using a swarm of drones coordinated through Voronoi partitioning. The approach enables decentralized coverage and efficient area monitoring, allowing drones to adapt their positions dynamically based on target movement. The project demonstrates swarm intelligence, distributed control, and cooperative perception strategies.",
    imagen: droneSwarm.src,
    tecnologias: ["Swarm Robotics", "Multi-Agent Systems", "Computer Vision"],
    demo: "https://github.com/tejasms03/drone_swarm/tree/main/demo",
    codigo: "https://github.com/tejasms03/drone_swarm",
    categoria: ["multiagent", "software"],
  },
];
