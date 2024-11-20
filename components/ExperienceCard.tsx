import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FaArrowDown } from "react-icons/fa";

// Define the structure of each item in the data array
interface ExperienceData {
  company: string;
  jobTitle: string;
  date: string;
  points: string[];
  image: string;
}

// Define the props for the ExperienceCard component
interface ExperienceCardProps {
  data: ExperienceData[]; // Array of ExperienceData items
}

export default function ExperienceCard({ data }: ExperienceCardProps) {
  const [isArrowVisible, setIsArrowVisible] = useState(true);

  useEffect(() => {
    // Function to handle window resize
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setIsArrowVisible(false); // Hide arrow on smaller screens
      } else {
        setIsArrowVisible(true); // Show arrow on larger screens
      }
    };

    // Initial check
    handleResize();

    // Attach event listener
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {data.map((item, i) => (
        <article
          key={i}
          className="mt-20 se:mt-16 text-white flex flex-col items-center justify-center rounded-lg space-y-6 flex-shrink-0 w-full sm:w-[500px] md:w-[600px] xl:w-[850px] xs:h-[500px] se:h-[600px] sm:h-auto xl:h-[650px] snap-center bg-[#292929] p-2 se:p-6 hover:opacity-100 opacity-75 cursor-pointer transition-opacity duration-200 overflow-hidden relative"
        >
          <div className="w-full flex items-center space-y-6">
            <div key={i} className="text-center flex flex-col items-center">
              {/* Center the image */}
              <div className="flex justify-center w-full h-[90px] se:h-[110px] overflow-hidden">
                <Image
                  src={item.image}
                  alt={`${item.company} logo`}
                  className="object-contain w-[90px] h-[90px] se:w-[110px] se:h-[110px] rounded-full"
                />
              </div>

              {/* Text content */}
              <div className="px-1 sm:px-10 w-full">
                <h4 className="text-xl se:text-2xl sm:text-3xl font-light text-center">
                  {item.company}
                </h4>
                <p className="font-bold text-lg se:text-xl sm:text-2xl mt-1 text-center">
                  {item.jobTitle}
                </p>
                <p className="uppercase py-3 sm:py-5 text-gray-300 text-center">
                  {item.date}
                </p>

                {/* Points list */}
                <ul className="list-disc list-inside space-y-4 text-base sm:text-lg h-72 sm:h-80 overflow-y-auto scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 text-left">
                  {item.points.map((point, j) => (
                    <li key={j}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Arrow Button - Positioned at the bottom of each card */}
          <div
            className={`sm:hidden absolute bottom-0 left-[45%] transform -translate-x-1/2 flex justify-center items-center w-[40px] h-[40px] bg-black rounded-full animate-pulse`}
          >
            <span className="text-white text-[19px]">
              <FaArrowDown />
            </span>
          </div>
        </article>
      ))}
    </>
  );
}
