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

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 640); // Adjust based on `sm` breakpoint
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const scrollToProject = (index: number) => {
    const element = document.getElementById(`data-${index}`);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  };

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % data.length;
    setCurrentIndex(nextIndex);
    scrollToProject(nextIndex);
  };

  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + data.length) % data.length;
    setCurrentIndex(prevIndex);
    scrollToProject(prevIndex);
  };

  return (
    <div className=" flex flex-col items-center justify-center w-full h-screen overflow-hidden">
      {/* Scroll Container for Experience Cards */}
      <div
        className="relative mt-24 flex space-x-5 p-3 md:p-10 snap-x snap-mandatory overflow-x-scroll w-full"
        style={{
          scrollbarWidth: "thin", // Firefox scrollbar styling
          scrollbarColor: "#F7AB0A #292929", // Firefox scrollbar colors
        }}
      >
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
        `}</style>

        {data.map((experience, index) => (
          <div
            id={`data-${index}`}
            key={index}
            className={`flex-shrink-0 h-full snap-center flex flex-col items-center justify-between bg-[#292929] text-white rounded-lg p-3 sm:p-6 opacity-75 hover:opacity-100 transition-opacity duration-200 relative`}
            style={{
              width: isMobileView ? "100%" : "80%", // Adjust width for mobile vs desktop
              maxWidth: "1000px", // Maximum width for larger screens
              opacity: currentIndex === index ? "1" : "0.5", // Highlight current card
            }}
          >
            {/* Company logo */}
            <div className="flex justify-center w-full h-[90px] se:h-[100px] overflow-hidden">
              <Image
                src={experience.image}
                alt={`${experience.company} logo`}
                className="object-contain w-[90px] h-[90px] se:w-[100px] se:h-[100px] rounded-full"
              />
            </div>
            {/* Company Info */}
            <h4 className="text-2xl sm:text-3xl font-light text-center">
              {experience.company}
            </h4>
            <p className="font-bold text-lg sm:text-2xl mt-2 text-center">
              {experience.jobTitle}
            </p>
            <p className="uppercase py-4 text-gray-300 text-center">
              {experience.date}
            </p>
            {/* Points */}
            <ul className="list-disc list-inside space-y-4 text-base sm:text-lg h-60 overflow-y-auto scrollbar text-left">
              {experience.points.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
            {/* Arrow for scrolling */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black rounded-full p-3 animate-pulse">
              <FaArrowDown className="text-white" />
            </div>
          </div>
        ))}
      </div>

      {isMobileView && (
        <>
          <button
            onClick={handlePrev}
            className="absolute  right-[60px] se:right-[80px] top-[150px] se:top-[160px] transform -translate-y-1/2 bg-black text-white rounded-full p-[10px] hover:bg-gray-800 transition-all"
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-2 se:right-7 top-[150px] se:top-[160px] transform -translate-y-1/2 bg-black text-white rounded-full p-[10px] hover:bg-gray-800 transition-all"
          >
            <FaArrowRight />
          </button>
        </>
      )}
    </div>
  );
}
