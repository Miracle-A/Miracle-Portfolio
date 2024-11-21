import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaArrowDown, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Project } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  projects: Project[];
};

function Projects({ projects }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobileView, setIsMobileView] = useState(false);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
    scrollToProject((currentIndex + 1) % projects.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
    scrollToProject((currentIndex - 1 + projects.length) % projects.length);
  };

  const scrollToProject = (index: number) => {
    const element = document.getElementById(`project-${index}`);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 640); // Update based on `sm` breakpoint
    };

    // Initial check
    handleResize();

    // Add event listener for resize
    window.addEventListener("resize", handleResize);

    // Cleanup event listener
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
      className="relative flex flex-col items-center justify-center h-screen overflow-hidden"
    >
      {/* Project Title Section */}
      <h3 className="absolute text-xl md:text-2xl text-gray-500 uppercase tracking-[10px] md:tracking-[17px] top-20">
        Projects
      </h3>

      {/* Projects Scroll Container with custom scrollbar */}
      <div
        className="mt-24 flex space-x-5 p-3 md:p-10 snap-x snap-mandatory overflow-x-scroll w-full"
        style={{
          scrollbarWidth: "thin", // Firefox scrollbar styling
          scrollbarColor: "#F7AB0A #292929", // Firefox scrollbar colors
        }}
      >
        {" "}
        <style jsx>{`
          /* Webkit-based browser scrollbar styling */
          ::-webkit-scrollbar {
            width: 8px;
          }
          ::-webkit-scrollbar-track {
            background: #292929;
          }
          ::-webkit-scrollbar-thumb {
            background-color: #f7ab0a;
            border-radius: 10px;
            border: 2px solid #292929;
          }
        `}</style>{" "}
        {projects.map((project, i) => (
          <div
            key={project._id}
            id={`project-${i}`}
            className="w-full h-full flex-shrink-0 snap-center flex flex-col items-center justify-center p-2 se:p-5 md:p-20"
          >
            {/* Project Image */}
            <motion.img
              src={urlFor(project?.image).url() || "/placeholder.png"}
              alt={`Project ${project.title}`}
              className="pt-5 w-full max-w-xs md:max-w-4xl h-40 md:h-96 object-contain"
            />

            {/* Project Title and Case Study Link */}
            <h4 className="text-lg sm:text-2xl md:text-4xl font-semibold text-center mb-5">
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

            {/* Project Summary */}
            <p className="text-center text-sm md:text-lg">{project.summary}</p>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      {isMobileView && projects.length > 1 && (
        <>
          <button
            onClick={handlePrev}
            className="absolute right-24 top-[140px] se:top-40 transform -translate-y-1/2 bg-black text-white rounded-full p-3 hover:bg-gray-800 transition-all"
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-10 top-[140px] se:top-40 transform -translate-y-1/2 bg-black text-white rounded-full p-3 hover:bg-gray-800 transition-all"
          >
            <FaArrowRight />
          </button>
        </>
      )}
    </motion.div>
  );
}

export default Projects;
