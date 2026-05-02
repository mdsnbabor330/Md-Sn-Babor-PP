import { FaBook, FaUser } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { MdWork } from "react-icons/md";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full lg:relative lg:bottom-auto lg:left-auto lg:h-full lg:w-17 lg:border-b-0 lg:border-r-2 border-t-2 lg:border-t-0 border-gray-50/20 flex lg:flex-col flex-row justify-between items-center py-2 lg:py-5 px-4 lg:px-0 bg-[#222222] z-[100]">
      <div className="hidden lg:flex items-start justify-center h-64 mt-10 pt-5">
        <h1 className="-rotate-90 whitespace-nowrap text-[38px] font-black uppercase tracking-[0.15em] flex items-baseline">
            <span className="text-white">Ba</span>
            <span className="text-[#78cc6d]">bor</span>
            <span className="text-[#78cc6d] text-[50px] leading-none">.</span>
        </h1>
      </div>
      <div className="flex lg:flex-col flex-row w-full lg:w-auto justify-around lg:justify-center">
        <NavLink
          to="/"
          className=" flex flex-col justify-center gap-1 items-center text-[#999999] hover:text-[#78cc6d] transition-all duration-300 py-3 px-2"
        >
          <FaUser></FaUser>
          <span className="text-[12px] lg:text-[14px] font-medium">About</span>
        </NavLink>
        <NavLink
          to="/resume"
          className=" flex flex-col justify-center gap-1 items-center text-[#999999] hover:text-[#78cc6d] transition-all duration-300 py-3 px-2"
        >
          <FaBook></FaBook>
          <span className="text-[12px] lg:text-[14px] font-medium">Resume</span>
        </NavLink>
        <NavLink
          to="/portfolio"
          className=" flex flex-col justify-center gap-1 items-center text-[#999999] hover:text-[#78cc6d] transition-all duration-300 py-3 px-2"
        >
          <MdWork></MdWork>
          <span className="text-[12px] lg:text-[14px] font-medium">Portfolio</span>
        </NavLink>
        <NavLink
          to="/contact"
          className=" flex flex-col justify-center gap-1 items-center text-[#999999] hover:text-[#78cc6d] transition-all duration-300 py-3 px-2"
        >
          <FaMessage />
          <span className="text-[12px] lg:text-[14px] font-medium">Contact</span>
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
