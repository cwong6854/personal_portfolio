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
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center py-20 text-center">
        <h1 className="py-16">About Me</h1>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <div className="w-full mx-auto flex flex-row justify-center gap-8 max-md:flex-wrap">
            <Image
              className="max-h-[335px] block max-md:rounded-full border-solid border-black border-2"
              src={cw_photo}
              alt="/"
              width={300}
            />
            <div className="flex flex-col justify-between text-left">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestiae placeat consequuntur beatae, molestias perspiciatis
                maiores nemo quisquam nisi numquam. Corporis id cum blanditiis
                voluptates ut quibusdam repudiandae repellendus dolorum
                eligendi?
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti cumque a dicta, asperiores repudiandae veniam itaque
                odio eveniet amet numquam provident nihil sapiente voluptates in
                voluptatibus odit dolorum perferendis excepturi!
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
                  <p className="py-2">Email: cwong990@berkeley.edu</p>
                  <p className="py-2">Availability: Open to work</p>
                </div>
              </div>
              <button className="py-3 w-[200px]">Download CSV</button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
