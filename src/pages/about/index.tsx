import React from "react";
import cw_photo from "../../../public/photo_headshot.png";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const About = () => {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    setWidth(window.innerWidth)
  }, [])
  console.log(width)
  return (
    <div className="w-full md:h-screen p-2 flex justify-center items-center py-16">
      <div className="text-center">
        <p className="text-gray-400">Let me introduce myself</p>
        <h1>About Me</h1>
        <motion.div
        initial={{opacity: 0, x: -50}}
        animate={{opacity: 1, x: 0}}
        >

        <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8 pt-10">
          <div className="flex justify-center items-center">
            <Image
              className="block max-md:rounded-full max-md:w-[50%] border-solid border-black border-2"
              src={cw_photo}
              alt="/"
              width="200"
              height="200"
            />
          </div>
          <div className="pt-2 col-span-2">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
              placeat consequuntur beatae, molestias perspiciatis maiores nemo
              quisquam nisi numquam. Corporis id cum blanditiis voluptates ut
              quibusdam repudiandae repellendus dolorum eligendi?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              cumque a dicta, asperiores repudiandae veniam itaque odio eveniet
              amet numquam provident nihil sapiente voluptates in voluptatibus
              odit dolorum perferendis excepturi!
            </p>
          </div>
        </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
