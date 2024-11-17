import React from "react";
import { motion } from "framer-motion";
import { Experience } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  experience: Experience;
};

export default function ExperienceCard({ experience }: Props) {
  // Function to safely try to get URL for images
  const getImageUrl = (source: any) => {
    return source ? urlFor(source).url() : undefined; // Return 'undefined' instead of 'null'
  };

  return (
    <article className="flex flex-col rounded-lg items-center space-y-3 flex-shrink-0 w-full sm:w-[500px] md:w-[600px] xl:w-[850px] xs:h-[430px] se:h-[550px] sm:h-auto xl:h-[650px] snap-center bg-[#292929] p-2 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className=" rounded-full w-32 h-24 xl:w-[200px] xl:h-[150px] object-cover object-center"
        src={getImageUrl(experience?.companyImage)}
        alt={`${experience?.company} logo`}
      />
      <div className="px-4 sm:px-10 w-full">
        <h4 className="text-2xl sm:text-3xl font-light text-center">
          {experience?.company}
        </h4>
        <p className="font-bold text-xl sm:text-2xl mt-1 text-center">
          {experience?.jobTitle}
        </p>
        <div className="flex space-x-2 my-0 sm:my-2 justify-center flex-wrap">
          {experience.technologies?.map((technology) => (
            <img
              key={technology._id}
              className="h-8 w-8 sm:h-10 sm:w-10 rounded-full"
              src={urlFor(technology?.image).url()}
              alt={``}
            />
          ))}
        </div>
        <p className="uppercase py-3 sm:py-5 text-gray-300 text-center">
          {new Date(experience.dateStarted).toDateString()} -{" "}
          {experience.isCurrentlyWorkingHere
            ? "Present"
            : new Date(experience.dateEnded).toDateString()}
        </p>

        {/* Explicitly reset list styles */}
        <ul className="list-disc list-inside space-y-4 text-base sm:text-lg h-80 overflow-y-auto scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
          {experience.points?.map((point, i) => (
            <li key={i} className="text-left">
              {point}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
