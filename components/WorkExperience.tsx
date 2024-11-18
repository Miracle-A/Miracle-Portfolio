import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
import data from "./ExperienceData";

function WorkExperience() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
      whileInView={{ opacity: 1 }}
      className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-2 se:px-4 sm:px-10 justify-evenly mx-auto items-center"
    >
      {/* Section Title */}
      <h3 className="absolute top-20 se:top-24 md:top-20 uppercase tracking-[9px] sm:tracking-[13px] text-gray-500 text-xl md:text-2xl">
        Experience
      </h3>

      {/* Experience Cards */}
      <div
        className="w-full flex space-x-5 overflow-x-scroll p-1 sm:p-10 snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80"
        style={{ overflowX: "scroll" }} // Ensures scrollbar is always visible
      >
        <ExperienceCard data={data} />
      </div>
    </motion.div>
  );
}

export default WorkExperience;
