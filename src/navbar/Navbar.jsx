import { FaBook, FaTools, FaUser } from "react-icons/fa";
import { FaMessage} from "react-icons/fa6";
import { MdWork } from "react-icons/md";
import { NavLink } from "react-router";


const Navbar = () => {
    return (
        <div className="h-full w-20 border-r-2 border-gray-50/20 flex flex-col justify-center items-center ">
            <NavLink to="/" className=" flex flex-col justify-center gap-2 items-center text-[#999999] hover:text-[#78cc6d] transition-all duration-300 w-full border-t border-gray-50/20 py-3">
                <FaUser></FaUser>
                About
            </NavLink>
            <NavLink to="/resume" className=" flex flex-col justify-center gap-2 items-center text-[#999999] hover:text-[#78cc6d] transition-all duration-300 w-full border-t border-gray-50/20 py-3">
                <FaBook></FaBook>
                Resume
            </NavLink>
            <NavLink to="/skills" className=" flex flex-col justify-center gap-2 items-center text-[#999999] hover:text-[#78cc6d] transition-all duration-300 w-full border-t border-gray-50/20 py-3">
                <FaTools></FaTools>
                Skills
            </NavLink>
            <NavLink to="/portfolio" className=" flex flex-col justify-center gap-2 items-center text-[#999999] hover:text-[#78cc6d] transition-all duration-300 w-full border-t border-gray-50/20 py-3">
                <MdWork></MdWork>
                Portfolio
            </NavLink>
            <NavLink to="/contact" className=" flex flex-col justify-center gap-2 items-center text-[#999999] hover:text-[#78cc6d] transition-all duration-300 w-full border-t border-b border-gray-50/20 py-3">
                <FaMessage />
                Contact
            </NavLink>
        </div>
    );
};

export default Navbar;
