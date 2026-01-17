import quadruped from "../assets/img-projects/quadruped.png";
import mujocoArm from "../assets/img-projects/mujoco-arm.gif";
import mapper from "../assets/img-projects/mapper.gif";
import droneSwarm from "../assets/img-projects/drone-swarm.gif";

export const proyectos = [
  {
    titulo: "Quadruped Robot Locomotion with Reinforcement Learning",
    imagen: quadruped.src,
    tecnologias: [
      "Python",
      "Reinforcement Learning",
      "ROS2",
      "PyBullet",
      "Robotics"
    ],
    demo: "#",
    codigo: "https://github.com/tejasms03/quadruped-rl",
  },
  {
    titulo: "MuJoCo Robotic Arm Simulation (UR10e)",
    imagen: mujocoArm.src,
    tecnologias: [
      "Python",
      "MuJoCo",
      "Robotics Simulation",
      "Control Systems"
    ],
    demo: "#",
    codigo: "https://github.com/tejasms03/mujoco_arm",
  },
  {
    titulo: "Multi-Agent Localization with Noisy Range Measurements",
    imagen: mapper.src,
    tecnologias: [
      "Python",
      "Multi-Agent Systems",
      "Localization",
      "Optimization"
    ],
    demo: "#",
    codigo: "https://github.com/tejasms03/mapper",
  },
  {
    titulo: "Voronoi-Based Collaborative Drone Swarm Target Tracking",
    imagen: droneSwarm.src,
    tecnologias: [
      "Swarm Robotics",
      "Computer Vision",
      "Data Fusion",
      "Research"
    ],
    demo: "https://ieeexplore.ieee.org",
    codigo: "#",
  },
];
