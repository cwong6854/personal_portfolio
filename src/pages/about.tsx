import React from "react";
import cw_photo from "../../public/photo_headshot.png";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const About = () => {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);
  console.log(width);

  return (
    <div id="about" className="w-full px-4">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center py-20 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.25, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="w-full uppercase text-sm tracking-widest text-gray-500">
            Get to know more
          </p>
          <h1 className="pb-16 pt-4 text-gray-700">About Me</h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.25, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-row justify-center gap-8 mx-auto max-md:flex-wrap">
            <div className="w-[75%] min-w-fit flex justify-center ">
              <Image
                className="w-[300px] h-[300px] max-md:rounded-full border-solid border-black border-2"
                src={cw_photo}
                alt="/"
              />
            </div>
            <div className="flex flex-col justify-between text-left tracking-widest text-sm">
              <p className="">
                I am a proud first-generation college student from San
                Francisco, CA, and a recent graduate in Data Science from UC
                Berkeley. With a passion for technology and a focus on web
                development, I am currently pursuing roles in software
                development and data science within the tech industry.
              </p>
              <br />
              <p className="">
                My goal is to utilize my knowledge and skillsets in software and
                engineering tools to contribute to the improvement of modern-day
                technology, and to innovate products that have a positive impact
                on the world. As a lifelong learner, I am excited to join a team
                that values creativity, innovation, and continuous growth.
              </p>
              <div className="">
                <hr className="border-t-2 border-black/40 border-solid my-4" />
              </div>
              <div className="grid grid-cols-2 max-sm:grid-cols-1 text-left">
                <div className="py-2">
                  <p className="py-2">Location: Berkeley, CA</p>
                  <p className="py-2">Name: Curtis Wong</p>
                </div>
                <div className="py-2">
                  <p className="py-2">
                    Email:{" "}
                    <a
                      className="text-blue-500"
                      href="mailto:cwong990@berkeley.edu"
                    >
                      cwong990@berkeley.edu
                    </a>
                  </p>
                  <p className="py-2">Availability: Open to work</p>
                </div>
              </div>
              <a href="cw_resume.pdf" target="_blank">
                <button className="py-3 w-[200px] tracking-widest">
                  Resume
                </button>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
