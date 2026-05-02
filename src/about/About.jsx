import { MdDeveloperMode } from "react-icons/md";
import { IoIosColorPalette } from "react-icons/io";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { GrAnnounce } from "react-icons/gr";
import { useLoaderData } from "react-router";

const iconMap = {
  MdDeveloperMode: <MdDeveloperMode />,
  IoIosColorPalette: <IoIosColorPalette />,
  FaMagnifyingGlass: <FaMagnifyingGlass />,
  GrAnnounce: <GrAnnounce />,
};

const About = () => {
  const services = useLoaderData();

  return (
    <div className="p-4 w-full">
      <h2 className="text-2xl font-bold underline underline-offset-8 mb-4">
        About <span className="text-[#78cc6d]">Me</span>
      </h2>
      <div className="flex flex-col lg:flex-row mb-8 gap-6">
        <div className="flex-1">
          <p className="text-[#999999] text-justify leading-relaxed">
            I'm a passionate{" "}
            <span className="text-[#78cc6d]">Frontend Developer</span>{" "}
            specializing in building high-performance, accessible, and visually
            stunning web applications. Expert in{" "}
            <span className="text-[#78cc6d]">
              HTML, CSS, Tailwind CSS, Modern JavaScript, React.js and Next.js
            </span>
            . I bridge the gap between complex backend logic and seamless user
            experiences.
          </p>
        </div>
        <div className="flex gap-4 lg:pl-6 lg:border-l border-gray-50/20">
          <ul className="space-y-3 text-[#222222] font-semibold">
            <li className="px-2 bg-[#78cc6d] w-fit">AGE</li>
            <li className="px-2 bg-[#78cc6d] w-fit">LOCATION</li>
            <li className="px-2 bg-[#78cc6d] w-fit">E-MAIL</li>
          </ul>
          <ul className="space-y-3 text-[#999999]">
            <li>22</li>
            <li>Chittagong, BD</li>
            <li>mdsnbabor828@gmail.com</li>
          </ul>
        </div>
      </div>
      <h2 className="text-2xl font-bold underline underline-offset-8 mb-4">
        My <span className="text-[#78cc6d]">Services</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:px-10 py-5 gap-6">
        {services.map((service) => {
          return (
            <div key={service.id} className="p-6 border border-gray-50/20 space-y-3 transition-all duration-400 hover:shadow-lg shadow-[#78cc6d]/20 bg-[#252525]">
              <div className="p-3 text-3xl bg-[#78cc6d] rounded-2xl text-[#222222] w-fit">
                {iconMap[service.icon]}
              </div>
              <h2 className="text-xl font-bold">{service.title}</h2>
              <p className="text-[#999999] italic leading-relaxed">
                {service.desc}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default About;
