import React from "react";
import cw_photo from "../../public/photo_headshot.png";
import Image from "next/image";
import { useState, useEffect } from "react";
import cw_resume from "../../public/cw_resume.pdf"
import { motion } from "framer-motion";
// import {PDFDownloadLink} from "@react-pdf/renderer";
import Link from "next/link";


const About = () => {

  const [width, setWidth] = useState(0);
  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);
  console.log(width);

  function downloadPDF() {
    const fileUrl = "../../public/cw_resume.pdf";
    const fileName = 'curtis_wong_resume.pdf';
    const a = document.createElement('a');
    document.body.appendChild(a);
    a.href = fileUrl;
    a.download = fileName;
    a.click();
    document.body.removeChild(a);
  }

  return (
    <div id="about" className="w-full px-4">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center py-20 text-center">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.25, delay: 0.2 }}
        viewport={{ once: true }}
        >
        <p className="w-full uppercase text-sm tracking-widest text-gray-500">Get to know more</p>
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
              className="w-64 h-64 max-md:rounded-full border-solid border-black border-2"
              src={cw_photo}
              alt="/"
            />
            </div>
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
                 <p className="py-2">Email: <a className="text-blue-500" href="mailto:cwong990@berkeley.edu">cwong990@berkeley.edu</a></p>
                  <p className="py-2">Availability: Open to work</p>
                </div>
              </div>
              {/* <button className="py-3 w-[200px]"><a>Download CV</a></button> */}
              {/* <a href="/../../public/cw_resume.pdf" download><p>Click on me</p></a> */}
            </div>
          </div>
          </motion.div>
      </div>
    </div>
  );
};

export default About;
