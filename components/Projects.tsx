import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Project } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  projects: Project[];
};

function Projects({ projects }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
      className="relative flex flex-col items-center justify-center h-screen overflow-hidden"
    >
      {/* Project Title Section */}
      <h3 className="absolute text-xl md:text-2xl text-gray-500 uppercase tracking-[10px] md:tracking-[17px] top-20 se:top-28 md:top-20">
        Projects
      </h3>
      {/* Projects Scroll Container */}
      <div className="mt-24 se:mt-10 sm:mt-20 flex space-x-5 p-3 se:p-5 md:p-10 snap-x snap-mandatory overflow-x-scroll scrollbar-hide w-full scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
        {/* Projects Container */}
        {projects.map((project, i) => (
          <div
            key={project._id}
            id={`project-${i}`}
            className="w-full h-full flex-shrink-0 snap-center flex flex-col items-center justify-center p-1 sm:p-5 md:p-20"
          >
            {/* Project Image */}
            <motion.img
              src={urlFor(project?.image).url()}
              alt={`Project ${project.title}`}
              className="w-full max-w-xs md:max-w-4xl h-40 se:h-40 md:h-96 object-contain"
            />

            {/* Project Title and Case Study Link */}
            <h4 className="text-xl sm:text-2xl md:text-4xl font-semibold text-center mb-2 sm:mb-5">
              <span className="underline decoration-[#F7AB0A]/50">
                Case Study {i + 1} of {projects.length}:
              </span>{" "}
              {project?.linkToBuild ? (
                <a
                  href={project.linkToBuild}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 underline"
                >
                  {project?.title}
                </a>
              ) : (
                project?.title
              )}
            </h4>

            {/* Project Summary and Details */}
            <div className="text-center">
              <p className="text-[14px] md:text-lg lg:text-xl xl:text-2xl">
                {" "}
                {/* Adjusted sizes for larger screens */}
                {project.summary}
              </p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default Projects;
