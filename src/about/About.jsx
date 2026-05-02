import { MdDeveloperMode } from "react-icons/md";
import { IoIosColorPalette } from "react-icons/io";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { GrAnnounce } from "react-icons/gr";
import { useLoaderData } from "react-router";
import { memo } from "react";

const iconMap = {
  MdDeveloperMode: <MdDeveloperMode />,
  IoIosColorPalette: <IoIosColorPalette />,
  FaMagnifyingGlass: <FaMagnifyingGlass />,
  GrAnnounce: <GrAnnounce />,
};

const About = () => {
  const services = useLoaderData();

  return (
    <section className="p-4 sm:p-6 w-full" aria-label="About Me">
      <h2 className="text-xl sm:text-2xl font-bold underline underline-offset-8 mb-5 sm:mb-6">
        About <span className="text-[#78cc6d]">Me</span>
      </h2>

      {/* Bio + Info */}
      <div className="flex flex-col md:flex-row mb-6 sm:mb-8 gap-5 sm:gap-6">
        <div className="flex-1 min-w-0">
          <p className="text-[#999999] text-sm sm:text-base text-justify leading-relaxed">
            I'm a passionate{" "}
            <span className="text-[#78cc6d] font-medium">Frontend Developer</span>{" "}
            specializing in building high-performance, accessible, and visually
            stunning web applications. Expert in{" "}
            <span className="text-[#78cc6d] font-medium">
              HTML, CSS, Tailwind CSS, Modern JavaScript, React.js and Next.js
            </span>
            . I bridge the gap between complex backend logic and seamless user
            experiences.
          </p>
        </div>

        {/* Quick info */}
        <div className="flex gap-4 md:pl-6 md:border-l border-gray-50/20 shrink-0">
          <ul className="space-y-3 text-[#222222] font-semibold text-xs sm:text-sm">
            <li className="px-2 py-0.5 bg-[#78cc6d] w-fit rounded-sm">AGE</li>
            <li className="px-2 py-0.5 bg-[#78cc6d] w-fit rounded-sm">LOCATION</li>
            <li className="px-2 py-0.5 bg-[#78cc6d] w-fit rounded-sm">E-MAIL</li>
          </ul>
          <ul className="space-y-3 text-[#999999] text-xs sm:text-sm">
            <li className="pt-0.5">22</li>
            <li className="pt-0.5">Chittagong, BD</li>
            <li className="pt-0.5 break-all">mdsnbabor828@gmail.com</li>
          </ul>
        </div>
      </div>

      {/* Services */}
      <h2 className="text-xl sm:text-2xl font-bold underline underline-offset-8 mb-5">
        My <span className="text-[#78cc6d]">Services</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 pb-4">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </section>
  );
};

const ServiceCard = memo(({ service }) => (
  <div className="p-4 sm:p-5 border border-gray-50/20 space-y-3 transition-all duration-300 hover:shadow-lg hover:shadow-[#78cc6d]/10 hover:border-[#78cc6d]/30 bg-[#252525] rounded-md group">
    <div className="p-2.5 text-2xl sm:text-3xl bg-[#78cc6d] rounded-xl text-[#222222] w-fit group-hover:scale-105 transition-transform duration-300">
      {iconMap[service.icon]}
    </div>
    <h3 className="text-base sm:text-lg font-bold">{service.title}</h3>
    <p className="text-[#999999] text-xs sm:text-sm italic leading-relaxed">
      {service.desc}
    </p>
  </div>
));

ServiceCard.displayName = "ServiceCard";
export default About;
