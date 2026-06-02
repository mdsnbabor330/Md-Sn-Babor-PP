import { useParams, Link } from "react-router";
import { FaGithub, FaExternalLinkAlt, FaArrowLeft } from "react-icons/fa";
import projectsData from "../data/projectsData";

const ProjectDetails = () => {
  const { id } = useParams();
  const data = projectsData;
  
  // Handle various data formats (direct array or wrapped object)
  const projects = Array.isArray(data) ? data : (data && data.projects) || [];
  const project = projects.find((p) => String(p.id) === String(id));

  if (!project) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh] text-white p-6">
        <h2 className="text-2xl font-bold mb-4 text-[#78cc6d]">Project not found</h2>
        <p className="text-[#999999] mb-6 text-center max-w-md">We couldn't find the project you're looking for.</p>
        <Link
          to="/portfolio"
          className="flex items-center gap-2 px-6 py-2 bg-[#78cc6d]/10 border border-[#78cc6d]/20 text-[#78cc6d] rounded-full hover:bg-[#78cc6d] hover:text-[#222222] transition-all"
        >
          <FaArrowLeft /> Back to Portfolio
        </Link>
      </div>
    );
  }

  return (
    <section className="p-4 sm:p-6 lg:p-8 w-full max-w-4xl mx-auto text-white custom-scrollbar">
      {/* Back Button */}
      <Link
        to="/portfolio"
        className="inline-flex items-center gap-2 text-[#999999] hover:text-[#78cc6d] transition-colors mb-6 group"
      >
        <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
        <span className="text-sm font-medium uppercase tracking-wider">Back to Projects</span>
      </Link>

      {/* Project Image */}
      <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-white/10 mb-8 shadow-2xl">
        <img
          src={project.img}
          alt={project.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent opacity-60" />
      </div>

      {/* Project Header */}
      <div className="space-y-4 mb-10">
        <div className="flex items-center gap-3">
          <span className="text-[#78cc6d] text-xs font-bold tracking-[0.2em] uppercase">
            Project Detail
          </span>
          <div className="h-px flex-1 bg-white/10" />
        </div>
        
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
          {project.name}
        </h1>

        <p className="text-[#cccccc] text-lg leading-relaxed max-w-3xl">
          {project.description}
        </p>

        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-2 pt-2">
          {project.tags?.map((tag) => (
            <span
              key={tag}
              className="px-4 py-1.5 rounded-full bg-[#222222] border border-white/10 text-[#999999] text-xs font-semibold tracking-widest uppercase hover:border-[#78cc6d]/40 hover:text-[#78cc6d] transition-all cursor-default"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Challenge Section */}
      <div className="grid grid-cols-1 gap-6 mb-12">
        <div className="bg-[#1a1a1a]/50 border border-white/5 rounded-2xl p-6 sm:p-8 hover:border-[#78cc6d]/20 transition-colors group">
          <h2 className="text-[#78cc6d] text-xs font-bold tracking-[0.2em] uppercase mb-4">
            Challenge
          </h2>
          <p className="text-[#999999] leading-relaxed group-hover:text-[#bbbbbb] transition-colors">
            {project.challenge}
          </p>
        </div>

        {/* Improvements Section */}
        <div className="bg-[#1a1a1a]/50 border border-white/5 rounded-2xl p-6 sm:p-8 hover:border-[#78cc6d]/20 transition-colors group">
          <h2 className="text-[#78cc6d] text-xs font-bold tracking-[0.2em] uppercase mb-4">
            Improvements
          </h2>
          <p className="text-[#999999] leading-relaxed group-hover:text-[#bbbbbb] transition-colors">
            {project.improvements}
          </p>
        </div>
      </div>

      {/* Footer Actions */}
      <div className="flex flex-wrap gap-4 pt-4 border-t border-white/10">
        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-8 py-3 rounded-full bg-[#78cc6d]/10 border border-[#78cc6d]/20 text-white font-bold hover:bg-[#78cc6d] hover:text-[#222222] transition-all duration-300 shadow-lg shadow-[#78cc6d]/5"
        >
          Live Site <FaExternalLinkAlt className="text-xs" />
        </a>
        <a
          href={project.repo}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-8 py-3 rounded-full bg-white/5 border border-white/10 text-white font-bold hover:bg-white hover:text-black transition-all duration-300"
        >
          GitHub <FaGithub className="text-base" />
        </a>
      </div>
    </section>
  );
};

export default ProjectDetails;
