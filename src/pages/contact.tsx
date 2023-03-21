import { AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import linkedin_headshot from "../../public/linkedin_photo.png";
import Image from "next/image";
import Link from "next/link";

const Contact = () => {
  const linkedin_icon = <FaLinkedinIn />;
  const github_icon = <FaGithub />;
  const mail_icon = <AiOutlineMail />;
  const person_icon = <BsFillPersonLinesFill />;

  return (
    <div id="contact" className="w-full p-2 flex flex-col items-center py-16">
      <div className="max-w-[1240px] flex flex-col justify-center py-6 text-center items-center">
        <p className="uppercase text-sm tracking-widest text-gray-500 text-center">
          Get in touch
        </p>
        <h1 className="pb-16 pt-4 text-gray-700 text-center">Contact</h1>
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
                <p className="py-2">Software Developer</p>
                <p className="py-4">
                  I am available for freelance or full-time positions. Contact
                  me and lets's talk.
                </p>
                <div>
                  <div className="flex items-center pt-8 pb-2 justify-between">
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
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="text"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="uppercase text-sm py-2">Phone Number</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="text"
                  />
                </div>
              </form>
              <div className="flex flex-col py-2 w-full">
                <label className="uppercase text-sm py-2">Email</label>
                <input
                  className="border-2 rounded-lg p-3 flex border-gray-300"
                  type="email"
                />
              </div>
              <div className="flex flex-col py-2 w-full">
                <label className="uppercase text-sm py-2">Message</label>
                <textarea
                  className="border-2 rounded-lg p-3 border-gray-300"
                  name=""
                  id=""
                  rows={10}
                ></textarea>
              </div>
              <button className="w-full p-4 text-gray-100 mt-4">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center py-12">
        <Link href="/">
          <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
            <HiOutlineChevronDoubleUp className="text-[#5651e5]" size={30} />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Contact;
