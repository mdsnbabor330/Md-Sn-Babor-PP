import { FaArrowDown, FaFacebook, FaGithub, FaInstagramSquare, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router";

const Profile = () => {
    return (
        <div className="border-r-2 border-gray-50/20 w-100 max-w-100 h-full relative">
            <div className="relative">
                <figure className="w-full">
                    <img src="src/assets/me.png" alt="" className="h-full w-full"/>
                </figure>
                <div className="absolute w-full inset-0 bg-gradient-to-t from-[#222222] via-transparent to-transparent opacity-100 z-10"></div>
                
            </div>
            <div className="flex flex-col bottom-0 w-full h-40 absolute z-20">
                    <div className="flex flex-col items-center gap-2 w-full mb-5">
                        <h1 className="text-2xl font-bold">MD NAHID UDDIN BABOR</h1>
                        <p className="text-[#78cc6d]">FRONTEND DEVELOPER</p>
                        <div className="flex gap-4 text-[#999999]  items-center cursor-pointer">
                            <FaGithub className="hover:text-[#78cc6d]"/>
                            <FaLinkedin className="hover:text-[#78cc6d]"/>
                            <FaFacebook className="hover:text-[#78cc6d]"/>
                            <FaInstagramSquare className="hover:text-[#78cc6d]"/>
                        </div>
                    </div>
                    <div className="border-t border-gray-50/20 w-full h-full flex">
                            <Link className="btn gap-3 bg-[#222222] h-full w-6/12 border-0 border-r border-gray-50/20 rounded-none text-[#999999] hover:text-[#78cc6d]">DOWNLOAD CV <FaArrowDown /></Link>
                            <Link className="btn gap-3  bg-[#222222] h-full w-6/12 border-0 rounded-none text-[#999999] hover:text-[#78cc6d]">CONTACT <FaPhoneAlt/></Link>
                    </div>
            </div>
        </div>
    );
};

export default Profile;