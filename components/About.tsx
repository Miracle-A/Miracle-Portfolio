import React from "react";
import { motion } from "framer-motion";
import { PageInfo } from "../typings";
import { urlFor } from "../sanity";

type Props = { pageInfo: PageInfo };

export default function About({ pageInfo }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
      whileInView={{ opacity: 1 }}
      className="flex flex-col relative h-screen text-center lg:text-left lg:flex-row max-w-7xl px-5 md:px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 md:top-20 uppercase tracking-[10px] md:tracking-[17px] text-gray-500 text-xl md:text-2xl">
        About
      </h3>
      <motion.img
        initial={{ x: -200, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        src={urlFor(pageInfo?.profilePic).url()}
        // className="mt-20 md:mt-0 mb-10 md:-mb-20 flex-shrink-0 w-40 h-40  rounded-full object-cover md:rounded-lg md:w-[350px] md:h-[450px] lg:w-[400px] lg:h-[500px] xl:w-[560px] xl:h-[660px]"
        className="xs:mt-36 se:mt-28 sm:mt-20 mb-0 md:-mb-1 flex-shrink-0  object-cover rounded-full sm:rounded-lg w-[200px] h-[200px] se:w-[230px] se:h-[230px] sm:w-[300px] sm:h-[400px] md:w-[350px] md:h-[450px] lg:w-[400px] lg:h-[600px] xl:w-[560px] xl:h-[660px]"
      />

      <div className="px-3 sm:px-10 mb-12">
        <h4 className="mb-3 text-2xl md:text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#F7ab0a]/50">little</span>{" "}
          background
        </h4>
        <span className="hidden sm:flex text-sm md:text-base">
          I am Miracle Adeoye, a senior Information Technology student at Texas
          Tech University with a 3.9 GPA, specializing in Data Analytics and
          Systems. I’m passionate about continuous learning, teamwork, and
          dedication to every project I take on. I’m seeking opportunities in
          Software Development, Data Analysis, Software Engineering, Data
          Engineering, and Web Development, where I can apply my technical
          skills and creative problem-solving abilities to drive meaningful
          innovation. What sets me apart is my strong foundation in both
          technical expertise and the soft skills that recruiters
          value—adaptability, communication, and a results-oriented mindset. I
          thrive in fast-paced environments and am highly motivated to solve
          complex challenges that make a tangible impact. With hands-on
          experience through hackathons and team projects, I’ve proven my
          ability to contribute to cross-functional teams and deliver solutions
          under tight deadlines. I am looking for a role where I can immediately
          add value and grow within a company that embraces innovation and
          collaboration. Let’s connect if you’re seeking someone who is driven,
          results-focused, and eager to make a positive contribution to your
          team!
        </span>
        <span className="flex sm:hidden text-sm md:text-base">
          I am Miracle Adeoye, a senior Information Technology student at Texas
          Tech University with a 3.9 GPA, specializing in Data Analytics and
          Systems. I’m passionate about continuous learning, teamwork, and
          dedication to every project I take on. I’m seeking opportunities in
          Software Development, Data Analysis, Software Engineering, Data
          Engineering, and Web Development, where I can apply my technical
          skills and creative problem-solving abilities to drive meaningful
          innovation. Let’s connect if you’re seeking someone who is driven,
          results-focused, and eager to make a positive contribution to your
          team!
        </span>
      </div>
    </motion.div>
  );
}
