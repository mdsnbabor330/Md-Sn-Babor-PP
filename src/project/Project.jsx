import { Link } from "react-router";
import { FaArrowRight } from "react-icons/fa";
import { memo } from "react";
import { motion } from "framer-motion";
import projectsData from "../data/projectsData";

const ProjectCard = memo(({ project }) => (
  <article className="group relative flex flex-col h-full bg-[#1a1a1a] border border-white/5 overflow-hidden transition-all duration-500 hover:border-[#78cc6d]/30 rounded-2xl p-4 sm:p-5">
    {/* Image */}
    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl mb-6">
      <img
        src={project.img}
        alt={project.name}
        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        loading="lazy"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent opacity-40"
        aria-hidden="true"
      />
    </div>

    {/* Content */}
    <div className="flex flex-col flex-1 space-y-4">
      {/* Title */}
      <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-[#78cc6d] transition-colors duration-300 leading-tight">
        {project.name}
      </h3>

      {/* Description */}
      <p className="text-[#999999] text-sm sm:text-base leading-relaxed line-clamp-3">
        {project.description}
      </p>

      {/* Tags */}
      {project.tags && project.tags.length > 0 && (
        <div className="flex flex-wrap gap-2 pt-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[9px] sm:text-[10px] px-3 py-1 rounded-full border border-white/10 text-[#999999] font-bold uppercase tracking-widest group-hover:border-[#78cc6d]/20 transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* View Details Link */}
      <div className="pt-4 mt-auto">
        <Link
          to={`/portfolio/${project.id}`}
          className="inline-flex items-center gap-2 text-white font-semibold hover:text-[#78cc6d] transition-all duration-300 group/link"
        >
          View Details
          <FaArrowRight className="text-xs group-hover/link:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  </article>
));

ProjectCard.displayName = "ProjectCard";

const Project = () => {
  const projects = projectsData;

  return (
    <section className="p-4 sm:p-6 lg:p-8 w-full" aria-label="Portfolio">
      <div className="flex flex-col mb-10">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
          My <span className="text-[#78cc6d]">Portfolio</span>
        </h2>
        <div className="h-1 w-20 bg-[#78cc6d] mt-2 rounded-full" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="h-full"
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Project;
