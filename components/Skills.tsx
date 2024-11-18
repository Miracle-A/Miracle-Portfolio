import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";
import { Skill as SkillType } from "../typings";

type Props = { skills: SkillType[] };

function Skills({ skills }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
      whileInView={{ opacity: 1 }}
      className="h-screen flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
    >
      {/* Adjusted top value from top-12 to top-24 for the first heading */}
      <h3 className="absolute top-20 uppercase tracking-[11px] md:tracking-[16px] text-gray-500 text-xl md:text-2xl">
        Skills
      </h3>

      {/* Adjusted top value from top-20 md:top-24 to top-32 md:top-36 for the second heading */}
      <h3 className="absolute top-28  uppercase tracking-wider md:tracking-[3px] text-gray-500 text-xs md:text-sm">
        Hover over a skill for current proficiency
      </h3>

      <div>
        <motion.div
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 * 0.1 }}
          className="grid xs:grid-cols-4 se:grid-cols-4 md:grid-cols-6 gap-5"
        >
          <Skill />
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Skills;
