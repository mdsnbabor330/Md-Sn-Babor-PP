import { motion } from 'framer-motion';
import { TbBrandAdobeIllustrator, TbBrandAdobePhotoshop, TbBrandAdobeXd } from "react-icons/tb";
import { FaFigma } from "react-icons/fa";
import { SiCanva } from 'react-icons/si';

const skills = [
    { name: 'Figma', percentage: 85, icon: FaFigma },
    { name: 'AI', percentage: 85, icon: TbBrandAdobeIllustrator },
    { name: 'PS', percentage: 70, icon: TbBrandAdobePhotoshop},
    { name: 'XD', percentage: 75, icon: TbBrandAdobeXd},
    { name: 'Canva', percentage: 80, icon: SiCanva},
];
const SkillCircle = ({ percentage, icon: Icon, name}) => {
    const radius = 35;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (percentage / 100) * circumference;

    return (
        <div className="bg-[#999999]/10 border w-full h-full border-white/5 rounded-[4px] p-4 flex flex-col items-center group hover:bg-[#999999]/[0.04] transition-all duration-300">
            <div className="relative w-28 h-28 flex items-center justify-center">
                {/* SVG Circle Background */}
                <svg className="w-full h-full transform -rotate-90">
                    <circle
                        cx="56"
                        cy="56"
                        r={radius}
                        stroke="currentColor"
                        strokeWidth="4"
                        fill="transparent"
                        className="text-[#222222]"
                    />
                    <motion.circle
                        cx="56"
                        cy="56"
                        r={radius}
                        stroke="currentColor"
                        strokeWidth="4"
                        fill="transparent"
                        strokeDasharray={circumference}
                        initial={{ strokeDashoffset: circumference }}
                        whileInView={{ strokeDashoffset }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                        className="text-[#78CC6D]"
                        strokeLinecap="round"
                    />
                </svg>
                <div className="absolute flex flex-col items-center justify-center">
                    <div className="mb-1 group-hover:scale-110 transition-transform duration-300">
                        <Icon size={28} className="text-[#78cc6d]"/>
                    </div>
                    <span className="text-[12px] font-bold text-text-main">{percentage}%</span>
                </div>
                
            </div>
            <h4 className="text-[14px] font-bold text-[#999999] uppercase tracking-[2px]">{name}</h4>
        </div>
    );
};

const DeSkills = () => {
    // Duplicate the skills array to create a seamless infinite loop
    const duplicatedSkills = [...skills, ...skills, ...skills];

    return (
        <div className="w-full overflow-hidden py-5 relative">
            <motion.div 
                className="flex gap-6 w-max"
                animate={{
                    x: [0, "-33.333%"],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                }}
            >
                {duplicatedSkills.map((skill, index) => (
                    <div key={index} className="w-[160px] h-[170px] flex-shrink-0">
                        <SkillCircle 
                            name={skill.name}
                            percentage={skill.percentage}
                            icon={skill.icon}
                        />
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export default DeSkills;