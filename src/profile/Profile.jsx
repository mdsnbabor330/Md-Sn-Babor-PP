import { FaArrowDown, FaFacebook, FaGithub, FaInstagramSquare, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router";
import meImg from "../assets/me.png";

const Profile = () => {
    return (
        <div className="lg:border-r-2 border-b-2 lg:border-b-0 border-gray-50/20 w-full lg:w-100 lg:max-w-100 h-auto lg:h-full relative overflow-hidden">
            <div className="relative h-80 lg:h-auto">
                <figure className="w-full h-full">
                    <img src={meImg} alt="Profile" className="h-full w-full object-cover lg:object-contain"/>
                </figure>
                <div className="absolute w-full inset-0 bg-gradient-to-t from-[#222222] via-transparent to-transparent opacity-100 z-10"></div>
                
            </div>
            <div className="flex flex-col relative lg:absolute bottom-0 w-full lg:h-40 bg-[#222222] lg:bg-transparent z-20  lg:pb-0">
                    <div className="flex flex-col items-center gap-2 w-full mb-5 px-4 text-center">
                        <h1 className="text-xl lg:text-2xl font-bold">MD NAHID UDDIN BABOR</h1>
                        <p className="text-[#78cc6d] text-sm lg:text-base">FRONTEND DEVELOPER</p>
                        <div className="flex gap-4 text-[#999999] items-center cursor-pointer">
                            <FaGithub className="hover:text-[#78cc6d] text-xl"/>
                            <FaLinkedin className="hover:text-[#78cc6d] text-xl"/>
                            <FaFacebook className="hover:text-[#78cc6d] text-xl"/>
                            <FaInstagramSquare className="hover:text-[#78cc6d] text-xl"/>
                        </div>
                    </div>
                    <div className="border-t border-gray-50/20 w-full h-14 lg:h-full flex">
                            <Link className="btn gap-3 bg-[#222222] h-full w-6/12 border-0 border-r border-gray-50/20 rounded-none text-[#999999] hover:text-[#78cc6d] text-xs lg:text-sm">DOWNLOAD CV <FaArrowDown /></Link>
                            <Link className="btn gap-3  bg-[#222222] h-full w-6/12 border-0 rounded-none text-[#999999] hover:text-[#78cc6d] text-xs lg:text-sm">CONTACT <FaPhoneAlt/></Link>
                    </div>
            </div>
        </div>
    );
};

export default Profile;