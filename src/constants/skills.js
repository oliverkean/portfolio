import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaVuejs, FaLaravel,
  FaPhp, FaGithub, FaGitAlt, FaBootstrap, FaWordpress,
} from "react-icons/fa";
import {
  SiTailwindcss, SiMysql, SiVite, SiFigma, SiComposer ,
  SiNodedotjs
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { IoIosDocument } from "react-icons/io";

const SKILLS = {
  languages: [
    { name: "HTML", icon: FaHtml5, color: "text-orange-600" },
    { name: "CSS", icon: FaCss3Alt, color: "text-blue-600" },
    { name: "JavaScript (ES6+)", icon: FaJs, color: "text-yellow-500" },
    { name: "PHP", icon: FaPhp, color: "text-indigo-600" },
  ],
  frameworks: [
    { name: "Laravel", icon: FaLaravel, color: "text-red-500" },
    { name: "Vue.js", icon: FaVuejs, color: "text-green-500" },
    { name: "React", icon: FaReact, color: "text-sky-500" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-500" },
    { name: "Bootstrap", icon: FaBootstrap, color: "text-purple-900" },
  ],
  tools: [
    { name: "Git", icon: FaGitAlt, color: "text-orange-500" },
    { name: "GitHub", icon: FaGithub, color: "text-gray-400" },
    { name: "Node.js", icon: SiNodedotjs, color: "text-green-700" },
    { name: "Composer", icon: SiComposer, color: "text-gray-400" },
    { name: "VS Code", icon: VscVscode, color: "text-blue-500" },
    { name: "Figma", icon: SiFigma, color: "text-pink-500" },
    { name: "Vite", icon: SiVite, color: "text-violet-500" },
  ],
  others: [
    { name: "MySQL", icon: SiMysql, color: "text-teal-600" },
    { name: "WebSockets (Laravel Reverb)", icon: FaLaravel, color: "text-red-500" },
    { name: "WordPress", icon: FaWordpress, color: "text-blue-800" },
    { name: "Documentation", icon: IoIosDocument, color: "text-gray-400" },
  ]
};

export default SKILLS;
