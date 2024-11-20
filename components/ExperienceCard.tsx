import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FaArrowDown, FaArrowLeft, FaArrowRight } from "react-icons/fa";

interface ExperienceData {
  company: string;
  jobTitle: string;
  date: string;
  points: string[];
  image: string;
}

interface ExperienceCardProps {
  data: ExperienceData[];
}

export default function ExperienceCard({ data }: ExperienceCardProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobileView, setIsMobileView] = useState(false);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % data.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + data.length) % data.length);
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
    <div className="relative flex items-center justify-center w-full overflow-hidden">
      {/* Render the current card */}
      <article
        key={currentIndex}
        className="mt-20 se:mt-16 text-white flex flex-col items-center justify-center rounded-lg space-y-6 flex-shrink-0 w-full sm:w-[500px] md:w-[600px] xl:w-[850px] xs:h-[500px] se:h-[600px] sm:h-auto xl:h-[650px] snap-center bg-[#292929] p-2 se:p-6 hover:opacity-100 opacity-75 cursor-pointer transition-opacity duration-200 overflow-hidden relative"
      >
        <div className="w-full flex items-center space-y-6">
          <div className="text-center flex flex-col items-center">
            {/* Center the image */}
            <div className="flex justify-center w-full h-[90px] se:h-[110px] overflow-hidden">
              <Image
                src={data[currentIndex].image}
                alt={`${data[currentIndex].company} logo`}
                className="object-contain w-[90px] h-[90px] se:w-[110px] se:h-[110px] rounded-full"
              />
            </div>

            {/* Text content */}
            <div className="px-1 sm:px-10 w-full">
              <h4 className="text-xl se:text-2xl sm:text-3xl font-light text-center">
                {data[currentIndex].company}
              </h4>
              <p className="font-bold text-lg se:text-xl sm:text-2xl mt-1 text-center">
                {data[currentIndex].jobTitle}
              </p>
              <p className="uppercase py-3 sm:py-5 text-gray-300 text-center">
                {data[currentIndex].date}
              </p>

              {/* Points list */}
              <ul className="list-disc list-inside space-y-4 text-base sm:text-lg h-72 sm:h-80 overflow-y-auto scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 text-left">
                {data[currentIndex].points.map((point, j) => (
                  <li key={j}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Arrow Button */}
        <div
          className={`sm:hidden absolute bottom-5 left-[50%] transform -translate-x-1/2 flex justify-center items-center w-[40px] h-[40px] bg-black rounded-full animate-pulse`}
        >
          <span className="text-white text-[19px]">
            <FaArrowDown />
          </span>
        </div>
      </article>

      {/* Navigation buttons for smaller screens */}
      {isMobileView && (
        <>
          <button
            onClick={handlePrev}
            className="absolute  right-[60px] se:right-[70px] top-28 se:top-24 transform -translate-y-1/2 bg-black text-white rounded-full p-[10px] hover:bg-gray-800 transition-all"
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-2 se:right-4 top-28 se:top-24 transform -translate-y-1/2 bg-black text-white rounded-full p-[10px] hover:bg-gray-800 transition-all"
          >
            <FaArrowRight />
          </button>
        </>
      )}
    </div>
  );
}
