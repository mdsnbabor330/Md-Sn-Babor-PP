import { Link, useLoaderData } from "react-router";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { memo } from "react";

const ProjectCard = memo(({ project }) => (
  <article className="group relative flex flex-col bg-[#222222] border border-[#999999]/10 overflow-hidden transition-all duration-500 hover:border-[#78cc6d]/40 hover:shadow-[0_12px_40px_rgba(0,0,0,0.5)] rounded-md">
    {/* Image */}
    <div className="relative h-44 sm:h-52 md:h-56 w-full overflow-hidden">
      <img
        src={project.img}
        alt={project.name}
        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        loading="lazy"
        decoding="async"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-[#222222] via-transparent to-transparent opacity-80 z-10"
        aria-hidden="true"
      />
    </div>

    {/* Content */}
    <div className="relative flex flex-col items-center flex-1">
      <h3 className="text-base sm:text-lg lg:text-xl font-bold text-white text-center group-hover:text-[#78cc6d] transition-colors duration-300 px-4 pt-4 pb-3 leading-snug">
        {project.name}
      </h3>

      {/* Tags */}
      {project.tags && project.tags.length > 0 && (
        <div className="flex flex-wrap gap-1.5 px-4 pb-3 justify-center">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] px-2 py-0.5 rounded-full bg-[#78cc6d]/10 text-[#78cc6d] border border-[#78cc6d]/20 font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* Action buttons */}
      <div className="flex w-full justify-between border-t border-white/10 mt-auto">
        <Link
          to={project.live}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Live demo of ${project.name}`}
          className="flex-1 flex items-center justify-center gap-2 py-3 text-[10px] sm:text-xs font-bold tracking-widest text-[#999999] hover:text-[#78cc6d] hover:bg-[#78cc6d]/5 transition-all duration-300 uppercase"
        >
          Live Demo
          <FaExternalLinkAlt className="text-[9px]" />
        </Link>

        <div className="w-px bg-[#999999]/10 self-stretch" aria-hidden="true" />

        <Link
          to={project.repo}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Source code of ${project.name}`}
          className="flex-1 flex items-center justify-center gap-2 py-3 text-[10px] sm:text-xs font-bold tracking-widest text-[#999999] hover:text-[#78cc6d] hover:bg-[#78cc6d]/5 transition-all duration-300 uppercase"
        >
          Source Code
          <FaGithub className="text-[10px]" />
        </Link>
      </div>
    </div>

    {/* Bottom accent line */}
    <div
      className="absolute bottom-0 left-0 h-[2px] bg-[#78cc6d] w-0 transition-all duration-500 group-hover:w-full"
      aria-hidden="true"
    />
  </article>
));

ProjectCard.displayName = "ProjectCard";

const Project = () => {
  const projects = useLoaderData();

  return (
    <section className="p-4 sm:p-6 w-full" aria-label="Portfolio">
      <h2 className="text-xl sm:text-2xl font-bold underline underline-offset-8 mb-5 sm:mb-6">
        My <span className="text-[#78cc6d]">Project</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Project;
