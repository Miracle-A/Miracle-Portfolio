import React, { useEffect, useState } from "react";
import Image from "next/image";
import data from "./skillData";

type Props = {
  directionLeft?: boolean; // Controls from which direction the items should slide
};

function Skill({ directionLeft }: Props) {
  const [isVisible, setIsVisible] = useState(false);

  // Trigger animation on component mount
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      {data.map((item, i) => (
        <div
          key={i}
          className={`group relative flex cursor-pointer transition-transform duration-500 ease-in-out transform `}
        >
          <Image
            src={item.image} // Correctly resolved path
            alt={`${i} logo`}
            className="rounded-full border border-gray-500 object-cover w-12 h-12 se:w-16 se:h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out"
          />
          <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-16 w-16 md:w-24 md:h-24 xl:w-32 xl:h-32 rounded-full z-0">
            <div className="flex items-center justify-center h-full">
              <p className="text-xl md:text-3xl font-bold text-black opacity-100">
                {item.percntage}%
              </p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Skill;
