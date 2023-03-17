import React from "react";
import cw_photo from "../../../public/linkedin_photo.png";
import Image from "next/image";
import { useState, useEffect } from "react";

const About = () => {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    setWidth(window.innerWidth)
  }, [])
  console.log(width)
  return (
    <div className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="text-center">
        <p className="text-gray-400">Let me introduce myself</p>
        <h1>About Me</h1>
        <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8 pt-10">
          <div className="flex items-center justify-center">
            <Image
              className="max-md:rounded-full max-md:w-[75%] border-solid border-black border-2"
              src={cw_photo}
              alt="/"
            />
          </div>
          <div className="col-span-2">
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
      </div>
    </div>
  );
};

export default About;
