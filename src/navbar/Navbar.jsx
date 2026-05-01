import { FaBook,FaUser } from "react-icons/fa";
import { FaMessage} from "react-icons/fa6";
import { MdWork } from "react-icons/md";
import { NavLink } from "react-router";


const Navbar = () => {
    return (
        <div className="h-full w-17 border-r-2 border-gray-50/20 flex flex-col items-center py-10 ">
            <figure className="h-20 w-25 mb-10">
                <img src="./src/assets/cocosign.png" alt="" />
            </figure>
            <NavLink to="/" className=" flex flex-col justify-center gap-1 items-center text-[#999999] hover:text-[#78cc6d] transition-all duration-300 w-full py-3">
                <FaUser></FaUser>
                <span className="text-[14px] font-medium">About</span>
            </NavLink>
            <NavLink to="/resume" className=" flex flex-col justify-center gap-1 items-center text-[#999999] hover:text-[#78cc6d] transition-all duration-300 w-full py-3">
                <FaBook></FaBook>
                <span className="text-[14px] font-medium">Resume</span>
            </NavLink>
            <NavLink to="/portfolio" className=" flex flex-col justify-center gap-1 items-center text-[#999999] hover:text-[#78cc6d] transition-all duration-300 w-full  py-3">
                <MdWork></MdWork>
                <span className="text-[14px] font-medium">Portfolio</span>
            </NavLink>
            <NavLink to="/contact" className=" flex flex-col justify-center gap-1 items-center text-[#999999] hover:text-[#78cc6d] transition-all duration-300 w-full  py-3">
                <FaMessage />
                <span className="text-[14px] font-medium">Contact</span>
            </NavLink>
        </div>
    );
};

export default Navbar;
