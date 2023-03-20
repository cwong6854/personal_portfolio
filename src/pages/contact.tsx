import { AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import {HiOutlineChevronDoubleUp} from "react-icons/hi";
import linkedin_headshot from "../../public/linkedin_photo.png"
import Image from "next/image";
import Link from "next/link";

const Contact = () => {
  const linkedin_icon = <FaLinkedinIn />;
  const github_icon = <FaGithub />;
  const mail_icon = <AiOutlineMail />;
  const person_icon = <BsFillPersonLinesFill />;

  return (
    <div id="contact" className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Contact
        </p>
        <h2 className="py-4">Get In Touch</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          {/* left */}
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
            <div className="lg:p-4 h-full">
              <div>
                <Image
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                  src={linkedin_headshot}
                  alt="/"
                />
              </div>
              <div>
                <h2 className="py-2">Curtis Wong</h2>
                <p className="py-2">Front-end Developer</p>
                <p className="py-4">
                  I am available for freelance or full-time positions. Contact
                  me and lets's talk.
                </p>
                <div>
                  <p className="uppercase pt-8">Connect With Me</p>
                  <div className="flex items-center justify-between">
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
          </div>
          {/* Right */}
          <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
            <div className="p-4">
                <form className="grid md:grid-cols-2 gap-4 w-full py-2" action="">
                    <div className="flex flex-col">
                        <label className="uppercase text-sm py-2">Name</label>
                        <input className="border-2 rounded-lg p-3 flex border-gray-300" type="text" />
                    </div>
                    <div className="flex flex-col">
                        <label className="uppercase text-sm py-2">Phone Number</label>
                        <input className="border-2 rounded-lg p-3 flex border-gray-300" type="text" />
                    </div>
                </form>
                <div className="flex flex-col py-2 w-full">
                        <label className="uppercase text-sm py-2">Email</label>
                        <input className="border-2 rounded-lg p-3 flex border-gray-300" type="email"/>
                    </div>
                    <div className="flex flex-col py-2 w-full">
                        <label className="uppercase text-sm py-2">Message</label>
                        <textarea className="border-2 rounded-lg p-3 border-gray-300" name="" id="" rows={10}></textarea>
                    </div>
                    <button className="w-full p-4 text-gray-100 mt-4">Send Message</button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center py-12">
        <Link href="/">
            <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                <HiOutlineChevronDoubleUp className="text-[#5651e5]" size={30}/>
            </div>
        </Link>
      </div>
    </div>
  );
};

export default Contact;
