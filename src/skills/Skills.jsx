import {
  FaCss3Alt, FaGitAlt, FaHtml5, FaJava, FaJs, FaReact,
} from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { motion } from "framer-motion";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { TbBrandCpp } from "react-icons/tb";
import { memo, useMemo } from "react";

const skills = [
  { name: "HTML5",       percentage: 97, icon: FaHtml5 },
  { name: "CSS3",        percentage: 96, icon: FaCss3Alt },
  { name: "Tailwind",    percentage: 95, icon: RiTailwindCssFill },
  { name: "JavaScript",  percentage: 95, icon: FaJs },
  { name: "React.js",    percentage: 90, icon: FaReact },
  { name: "Next.js",     percentage: 70, icon: RiNextjsFill },
  { name: "C++",         percentage: 90, icon: TbBrandCpp },
  { name: "Java",        percentage: 85, icon: FaJava },
  { name: "VS Code",     percentage: 75, icon: VscVscode },
  { name: "Git",         percentage: 80, icon: FaGitAlt },
];

const RADIUS = 35;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

const SkillCircle = memo(({ percentage, icon: Icon, name }) => {
  const strokeDashoffset = CIRCUMFERENCE - (percentage / 100) * CIRCUMFERENCE;

  return (
    <div className="bg-[#999999]/10 border w-full h-full border-white/5 rounded p-3 flex flex-col items-center group hover:bg-[#78cc6d]/5 hover:border-[#78cc6d]/20 transition-all duration-300">
      <div className="relative w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center">
        <svg
          className="w-full h-full -rotate-90"
          viewBox="0 0 112 112"
          aria-hidden="true"
        >
          <circle cx="56" cy="56" r={RADIUS} stroke="#333" strokeWidth="4" fill="transparent" />
          <motion.circle
            cx="56"
            cy="56"
            r={RADIUS}
            stroke="#78CC6D"
            strokeWidth="4"
            fill="transparent"
            strokeDasharray={CIRCUMFERENCE}
            initial={{ strokeDashoffset: CIRCUMFERENCE }}
            whileInView={{ strokeDashoffset }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.1 }}
            strokeLinecap="round"
          />
        </svg>
        <div className="absolute flex flex-col items-center justify-center">
          <div className="mb-0.5 group-hover:scale-110 transition-transform duration-300">
            <Icon size={22} className="text-[#78cc6d]" />
          </div>
          <span className="text-[11px] font-bold text-white">{percentage}%</span>
        </div>
      </div>
      <h4 className="text-[11px] sm:text-[12px] font-bold text-[#999999] uppercase tracking-[1.5px] mt-1 text-center">
        {name}
      </h4>
    </div>
  );
});

SkillCircle.displayName = "SkillCircle";

const Skills = () => {
  const duplicated = useMemo(() => [...skills, ...skills, ...skills], []);

  return (
    <div className="w-full overflow-hidden py-4 relative" role="list" aria-label="Programming skills">
      <motion.div
        className="flex gap-3 sm:gap-4 w-max"
        animate={{ x: [0, "-33.333%"] }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
        style={{ willChange: "transform" }}
      >
        {duplicated.map((skill, index) => (
          <div key={index} className="w-[130px] sm:w-[150px] h-[160px] sm:h-[170px] flex-shrink-0" role="listitem">
            <SkillCircle name={skill.name} percentage={skill.percentage} icon={skill.icon} />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Skills;