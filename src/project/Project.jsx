import { Link, useLoaderData } from "react-router";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
const Project = () => {
    const projects = useLoaderData();
    
    return (
        <div className="p-4 w-full">
             <h2 className="text-2xl font-bold underline underline-offset-8 mb-4">
        My <span className="text-[#78cc6d]">Project</span>
      </h2>
             <div className="grid grid-cols-1 md:grid-cols-2 p-6 lg:p-7 gap-8">
            {
                projects.map((project) => (
                    <div 
                        key={project.id} 
                        className="group relative flex flex-col bg-[#222222] border border-[#999999]/10 overflow-hidden transition-all duration-500 hover:border-[#78cc6d]/40 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                    >
                        {/* Image Container */}
                        <div className="relative h-60 w-full overflow-hidden">
                            <img 
                                src={project.img} 
                                alt={project.name} 
                                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                            />
                            
                            {/* Overlay Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#222222] via-transparent to-transparent opacity-80 z-10"></div>
                        </div>

                        {/* Content Section */}
                        <div className="relative  flex flex-col items-center">
                            <h3 className="text-xl lg:text-2xl font-bold text-white text-center mb-6 group-hover:text-[#78cc6d] transition-colors duration-300 p-6">
                                {project.name}
                            </h3>
                            
                            {/* Action Buttons */}
                            <div className="flex w-full justify-between border-t border-white/10 p-4">
                                <Link 
                                    to={project.live} 
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 flex items-center justify-center gap-2 text-xs font-bold tracking-widest text-[#999999] hover:text-[#78cc6d] transition-all duration-300 uppercase"
                                >
                                    Live Demo
                                    <FaExternalLinkAlt className="text-[10px]" />
                                </Link>
                                
                                <div className="w-[2px] bg-[#999999]/10 h-5 self-center"></div>
                                
                                <Link 
                                    to={project.repo} 
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 flex items-center justify-center gap-2 text-xs font-bold tracking-widest text-[#999999] hover:text-[#78cc6d] transition-all duration-300 uppercase"
                                >
                                    Source Code
                                    <FaGithub className="text-[10px]" />
                                </Link>
                            </div>
                        </div>

                        {/* Decorative Accent Line */}
                        <div className="absolute bottom-0 left-0 h-[2px] bg-[#78cc6d] w-0 transition-all duration-500 group-hover:w-full"></div>
                    </div>
                ))
            }
        </div>
        </div>
       
    );
};

export default Project;
