import { BiBriefcase } from "react-icons/bi";
import { FaGraduationCap } from "react-icons/fa";
import Skills from "../skills/Skills";
import DeSkills from "../skills/DeSkills";
import { memo } from "react";

const ExperienceItem = memo(({ date, title, company, desc }) => (
  <div className="relative pl-7 sm:pl-9 pb-10 border-l border-[#999999]/10 last:pb-0 group">
    {/* Marker dot */}
    <div
      className="absolute left-[-5px] top-0 w-[9px] h-[9px] rounded-full bg-[#222222] border-2 border-[#999999]/30 group-hover:border-[#78cc6d] transition-colors duration-300"
      aria-hidden="true"
    />

    {/* Date badge */}
    <div className="inline-block px-2 py-[2px] rounded-sm bg-[#78cc6d]/20 border border-[#999999]/20 text-[10px] text-white uppercase font-bold tracking-[1px] mb-3 group-hover:bg-[#78cc6d] group-hover:text-[#222222] group-hover:border-[#78cc6d] transition-all duration-300">
      {date}
    </div>

    <div className="mb-1.5">
      <h4 className="text-[14px] sm:text-[15px] text-[#78cc6d] font-bold uppercase tracking-tight leading-snug">
        {title}
      </h4>
    </div>
    <div className="text-[#999999]/70 text-[11px] sm:text-[12px] uppercase tracking-[1px] mb-3">
      {company}
    </div>
    <p className="text-[#999999] text-[13px] sm:text-[14px] leading-relaxed">
      {desc}
    </p>
  </div>
));

ExperienceItem.displayName = "ExperienceItem";

const experienceItems = [
  {
    date: "2026 - Present",
    title: "Personal Portfolio Website",
    company: "SELF-INITIATED PROJECT",
    desc: "Designed and built a personal portfolio from scratch to showcase projects and skills. Focused on clean layout, smooth animations, and full mobile responsiveness.",
  },
  {
    date: "2026 - Present",
    title: "React Projects",
    company: "SELF-LEARNING",
    desc: "Built several beginner React apps including a to-do list, weather app using OpenWeather API, and a movie search app. Practiced component structure, hooks, and state management.",
  },
  {
    date: "2025",
    title: "UI Clone Projects",
    company: "SELF-LEARNING",
    desc: "Recreated popular website UIs like Spotify clone. Strengthened CSS Flexbox, Grid, and layout skills through hands-on practice.",
  },
  {
    date: "2024 - 2025",
    title: "Frontend Development Learning",
    company: "YOUTUBE",
    desc: "Completed structured courses covering HTML, CSS, and JavaScript fundamentals. Built small exercises and challenges to solidify core web development concepts.",
  },
];

const educationItems = [
  {
    date: "2024 - PRESENT",
    title: "B.Sc in Computer Science & Engineering",
    company: "INTERNATIONAL ISLAMIC UNIVERSITY CHITTAGONG",
    desc: "Running — 5th Semester",
  },
  {
    date: "2021 - 2023",
    title: "Higher Secondary Certificate (HSC)",
    company: "KULGAON CITY CORPORATION COLLEGE, CHITTAGONG",
    desc: "GPA: 3.50 / 5.00",
  },
  {
    date: "2019 - 2021",
    title: "Secondary School Certificate (SSC)",
    company: "MADARSHA MULTILATERAL HIGH SCHOOL, CHITTAGONG",
    desc: "GPA: 4.08 / 5.00",
  },
];

const Resume = () => {
  return (
    <section className="p-4 sm:p-6 w-full" aria-label="Resume">
      <div className="flex flex-col mb-10">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
          Resu<span className="text-[#78cc6d]">me</span>
        </h2>
        <div className="h-1 w-20 bg-[#78cc6d] mt-2 rounded-full" />
      </div>

      {/* Experience + Education grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 mb-8 sm:mb-10">
        {/* Experience */}
        <div>
          <h3 className="flex items-center gap-2 text-base sm:text-[18px] font-bold mb-7 border-b border-[#999999]/10 pb-3 text-[#999999]">
            <BiBriefcase className="text-[#78cc6d] shrink-0" size={20} />
            Experience
          </h3>
          <div>
            {experienceItems.map((item, i) => (
              <ExperienceItem key={i} {...item} />
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <h3 className="flex items-center gap-2 text-base sm:text-[18px] font-bold mb-7 border-b border-[#999999]/10 pb-3 text-[#999999]">
            <FaGraduationCap className="text-[#78cc6d] shrink-0" size={20} />
            Education
          </h3>
          <div>
            {educationItems.map((item, i) => (
              <ExperienceItem key={i} {...item} />
            ))}
          </div>
        </div>
      </div>

      {/* Skills */}
      <div className="flex flex-col mb-10">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
          My <span className="text-[#78cc6d]">Skills</span>
        </h2>
        <div className="h-1 w-20 bg-[#78cc6d] mt-2 rounded-full" />
      </div>

      <h3 className="text-base sm:text-lg font-bold text-[#999999] border-b border-white/5 pb-3 mb-6 flex items-center gap-2">
        <span className="text-[#78cc6d]">Programming</span> Skills
      </h3>
      <Skills />

      <h3 className="text-base sm:text-lg font-bold text-[#999999] border-b border-white/5 pb-3 mb-6 flex items-center gap-2 mt-10">
        <span className="text-[#78cc6d]">Design</span> Skills
      </h3>
      <DeSkills />
    </section>
  );
};

export default Resume;
