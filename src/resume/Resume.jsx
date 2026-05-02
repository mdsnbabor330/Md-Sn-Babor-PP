import { BiBriefcase } from "react-icons/bi";
import { FaGraduationCap } from "react-icons/fa";
import Skills from "../skills/Skills";
import DeSkills from "../skills/DeSkills";

const ExperienceItem = ({ date, title, company, desc }) => (
  <div className="relative pl-8 lg:pl-10 pb-12 border-l border-[#999999]/10 last:pb-0 group">
    {/* Marker Dot */}
    <div className="absolute left-[-5px] top-0 w-[9px] h-[9px] rounded-full bg-[#222222] border-2 border-[#999999]/30 group-hover:border-[#78cc6d] transition-colors" />

    {/* Date Tag */}
    <div className="inline-block px-2 p-[2px] rounded-[2px] bg-[#78cc6d]/30 border border-[#999999]/30 text-[10px] text-[#ffffff] uppercase font-bold tracking-[1px] mb-4 group-hover:bg-[#78cc6d] group-hover:text-[#222222] transition-all duration-300">
      {date}
    </div>

    <div className="flex justify-between items-start mb-2">
      <h4 className="text-[17px] text-[#78cc6d] font-bold uppercase tracking-tight">
        {title}
      </h4>
    </div>
    <div className="text-text-main/50 text-[13px] uppercase tracking-[1px] mb-4">
      {company}
    </div>
    <p className="text-[#999999] text-[14px] leading-relaxed mb-6">{desc}</p>
  </div>
);
const Resume = () => {
  return (
    <div className="p-4 w-full">
      <h2 className="text-2xl font-bold underline underline-offset-8 mb-4">
        Resu<span className="text-[#78cc6d]">me</span>
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 my-8">
        {/* Experience Column */}
        <div>
          <h3 className="flex items-center gap-1 text-[20px] font-bold mb-10 border-b border-[#999999]/10 pb-4 text-[#999999]">
            <BiBriefcase className="text-[#78cc6d]" size={24} /> Experience
          </h3>
          <div className="space-y-0">
            <ExperienceItem
              date="2026 - Present"
              title="Personal Portfolio Website"
              company="SELF-INITIATED PROJECT"
              desc="Designed and built a personal portfolio from scratch to showcase projects and skills. Focused on clean layout, smooth animations, and full mobile responsiveness."
            />
            <ExperienceItem
              date="2026 - Present"
              title="React Projects"
              company="SELF-LEARNING "
              desc="Built several beginner React apps including a to-do list, weather app using OpenWeather API, and a movie search app. Practiced component structure, hooks, and state management."
            />
            <ExperienceItem
              date="2025"
              title="UI Clone Projects"
              company="SELF-LEARNING "
              desc="Recreated popular website UI Spotify clone. Strengthened CSS Flexbox, Grid, and layout skills through hands-on practice."
            />
            <ExperienceItem
              date="2024-2025"
              title="Frontend Development Learning"
              company="YOUTUBE"
              desc="Completed structured courses covering HTML, CSS, and JavaScript fundamentals. Built small exercises and challenges to solidify core web development concepts."
            />
          </div>
        </div>

        {/* Education Column */}
        <div>
          <h3 className="flex items-center gap-1 text-[20px] text-[#999999] font-bold mb-10 border-b border-[#999999]/10 pb-4">
            <FaGraduationCap className="text-[#78cc6d]" size={24} /> Education
          </h3>
          <div className="space-y-0">
            <ExperienceItem
              date="2024 - PRESENT"
              title="B.Sc IN COMPUTER SCIENCE AND ENGINEERING"
              company="International Islamic Univarsity Chittagong "
              desc="RUNNING-5TH SEMESTER"
            />
            <ExperienceItem
              date="2021 - 2023"
              title="HIGHER SECONDARY CERTIFICATE (HSC)"
              company="KULGAON CITY CORPORATION COLLEGE, CHITTAGONG"
              desc="3.50 OUT OF 5.00"
            />
            <ExperienceItem
              date="2019 - 2021"
              title="SECONDARY SCHOOL CERTIFICATE (SSC)"
              company="MADARSHA MULTILATERAL HIGH SCHOOL, CHITTAGONG"
              desc="4.08 OUT OF 5.00"
            />
          </div>
        </div>
      </div>
      <h2 className="text-2xl font-bold underline underline-offset-8 mb-8">
        My<span className="text-[#78cc6d]">Skills</span>
      </h2>
      <h3 className="uppercase font-medium text-[#999999] border-b border-[#78cc6d] pb-2">Programing Skills</h3>
      <Skills></Skills>
      <h3 className="uppercase font-medium text-[#999999] border-b border-[#78cc6d] pb-2">Desgine Skills</h3>
      <DeSkills></DeSkills>
    </div>
  );
};

export default Resume;
