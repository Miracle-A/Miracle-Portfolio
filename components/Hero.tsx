import React, { useEffect, useState } from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Image from "next/image";
import centerImage from "./images/Center Image.jpg";
import Link from "next/link";
import { PageInfo } from "../typings";

type Props = { pageInfo: PageInfo };

export default function Hero({ pageInfo }: Props) {
  const [playTypewriter, setPlayTypewriter] = useState(false);

  useEffect(() => {
    // Start the typewriter effect once the component is mounted
    setPlayTypewriter(true);
  }, []);

  const [text, count] = useTypewriter({
    words: [
      `Hi, The Name's ${pageInfo?.name}`,
      "Guy-who-loves-Football",
      "<ButLovesToCodeMore />",
    ],
    loop: true,
    delaySpeed: 2000,
    onLoopDone: () => setPlayTypewriter(false),
    onType: () => setPlayTypewriter(true),
  });

  if (!playTypewriter) return null;

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <Image
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
        src={centerImage} // Use the imported image object here
        alt="Centered"
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
          {pageInfo.role}
        </h2>
        <h1 className="text-2xl md:text-3xl lg:text-5xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>

        <div className="pt-5">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
          <Link
            href="https://www.dropbox.com/scl/fo/m89vpr74rww3d6jgh6k6o/h?rlkey=bo3jr65y2xkud1ttvibvwznwc&dl=0"
            target="_blank"
          >
            <button className="heroButton">Resume Folder</button>
          </Link>
          <Link
            href="https://www.dropbox.com/scl/fi/rbsqwntsg69zpkc26oc2c/Miracle-A-Academic-Transcript-12.28.23.pdf?rlkey=jlvug060olicz6z1d5kbgmlli&dl=0"
            target="_blank"
          >
            <button className="heroButton">My Transcript</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
