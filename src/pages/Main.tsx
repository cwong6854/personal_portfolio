import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import {motion} from "framer-motion"


const Main = () => {
  const linkedin_icon = <FaLinkedinIn />;
  const github_icon = <FaGithub />;
  const mail_icon = <AiOutlineMail />;
  const person_icon = <BsFillPersonLinesFill />;
  return (
    <div className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
        <motion.div
        initial={{ opacity: 0, x: -100}}
        animate={{ opacity: 1, x: 0}}
        transition={{duration: 0.25}}
        >
          <p className="uppercase text-sm tracking-widest text-gray-500">
            LETS BUILD SOMETHING!
          </p>
          <h1 className="py-4 text-gray-700">
            Hi, I'm <span className="text-[#4855e5]">Curtis</span>
          </h1>
          <h1 className="py-4 text-gray-700">A Software Engineer</h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto text-left">
            I'm a recent UC Berkeley graduate specializing in building (and
            occasionally designing) exceptional digital experiences. Currently,
            I'm focused on building responsive front-end web applications while
            learning back-end technologies.
          </p>
          </motion.div>
          <div className="flex items-center justify-between m-auto max-w-[330px]">
            <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-105 ease-in duration-300">
              {github_icon}
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-105 ease-in duration-300">
              {linkedin_icon}
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-105 ease-in duration-300">
              {mail_icon}
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-105 ease-in duration-300">
              {person_icon}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
