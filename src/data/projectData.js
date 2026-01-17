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
      "Quadruped robot design and control using reinforcement learning with sim-to-real transfer via PyBullet and ROS2.",
    imagen: quadruped.src,
    tecnologias: ["Python", "Reinforcement Learning", "ROS2", "PyBullet", "Fusion 360"],
    demo: "https://github.com/tejasms03/TUM_ri/blob/main/hexapod-movement-project.mp4",
    codigo: "https://github.com/tejasms03/TUM_ri",
    categoria: ["reinforcement", "mechanical", "software"],
  },
  {
    titulo: "MuJoCo Robotic Arm Simulation (UR10e)",
    descripcion:
      "Robotic arm simulation using the MuJoCo physics engine with UR10e model and control experiments.",
    imagen: mujocoArm.src,
    tecnologias: ["Python", "MuJoCo", "Control Systems"],
    demo: "https://github.com/tejasms03/mujoco_arm/tree/main/outputs",
    codigo: "https://github.com/tejasms03/mujoco_arm",
    categoria: ["software"],
  },
  {
    titulo: "Interactive 2D Robotic Arm Simulator",
    descripcion:
      "2D robotic arm simulator with inverse kinematics, joystick control, and spline-based trajectories.",
    imagen: robarmSim.src,
    tecnologias: ["Python", "Pygame", "Inverse Kinematics"],
    demo: "https://github.com/tejasms03/robarm-sim/blob/main/robarm-sim_demo.mov",
    codigo: "https://github.com/tejasms03/robarm-sim",
    categoria: ["software"],
  },
  {
    titulo: "Multi-Agent Localization with Noisy Range Measurements",
    descripcion:
      "Multi-agent localization using UWB-style distance measurements and nonlinear optimization.",
    imagen: mapper.src,
    tecnologias: ["Python", "Multi-Agent Systems", "Localization"],
    demo: "https://github.com/tejasms03/mapper/blob/main/mapper_demo.mov",
    codigo: "https://github.com/tejasms03/mapper",
    categoria: ["multiagent", "software"],
  },
  {
    titulo: "Gesture-Controlled Humanoid Finger",
    descripcion:
      "Gesture-based robotic finger control using computer vision and embedded motor actuation.",
    imagen: gestureFinger.src,
    tecnologias: ["Python", "MediaPipe", "Arduino"],
    demo: "https://github.com/tejasms03/mediapipe_finger/blob/main/mediapipe_finger_demo.mp4",
    codigo: "https://github.com/tejasms03/mediapipe_finger",
    categoria: ["embedded", "software"],
  },
  {
    titulo: "Multi-Robot Task Allocation and Path Planning",
    descripcion:
      "Multi-robot task allocation and A* path planning using image-based environment mapping.",
    imagen: multiRobot.src,
    tecnologias: ["Python", "OpenCV", "A* Algorithm"],
    demo: "https://github.com/tejasms03/Multi_robot_task_transfer/blob/main/End-Semester%20Report.pdf",
    codigo: "https://github.com/tejasms03/Multi_robot_task_transfer",
    categoria: ["multiagent", "software"],
  },
  {
    titulo: "Robotic Arm Pose Control with Inverse Kinematics",
    descripcion:
      "Robotic arm design and inverse kinematics control using ROS and Arduino.",
    imagen: roboticArm.src,
    tecnologias: ["Python", "ROS", "Arduino", "Fusion 360"],
    demo: "#",
    codigo: "https://github.com/tejasms03/robotic-arm-ik",
    categoria: ["mechanical", "embedded"],
  },
  {
    titulo: "IoT-Controlled Light Balance System",
    descripcion:
      "Embedded system synchronizing lighting effects with sound using microcontrollers.",
    imagen: iotLight.src,
    tecnologias: ["C++", "Arduino", "IoT"],
    demo: "https://github.com/tejasms03/light-sound-syncro-act",
    codigo: "https://github.com/tejasms03/light-sound-syncro-act",
    categoria: ["embedded"],
  },
  {
    titulo: "Voronoi-Based Collaborative Drone Swarm Target Tracking",
    descripcion:
      "Published research on drone swarm target tracking using Voronoi partitioning and data fusion.",
    imagen: droneSwarm.src,
    tecnologias: ["Swarm Robotics", "Multi-Agent Systems", "Computer Vision"],
    demo: "https://github.com/tejasms03/drone_swarm/tree/main/demo",
    codigo: "https://github.com/tejasms03/drone_swarm",
    categoria: ["multiagent", "software"],
  },
];
