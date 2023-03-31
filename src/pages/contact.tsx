import React, { useState, useRef } from "react";
import { useRouter } from "next/router";
import { AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import { motion } from "framer-motion";
import linkedin_headshot from "../../public/linkedin_photo.png";
import emailjs from "@emailjs/browser";
import Image from "next/image";
import Link from "next/link";

const Contact = () => {
  const linkedin_icon = <FaLinkedinIn />;
  const github_icon = <FaGithub />;
  const mail_icon = <AiOutlineMail />;
  const person_icon = <BsFillPersonLinesFill />;

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // EmailJS

  const router = useRouter();

  const form = useRef(null);
  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm("gmail", "template_l4juqb9", e.target, "8mGVXzo77MLLMclo2")
      .then(
        (res) => {
          console.log(res.text);
        },
        (err) => {
          console.log(err.text);
        }
      );
    console.log(e.target);

    if (document.getElementById("contact-form") === null) {
      return;
    } else {
      e.target.reset();
    }
  };

  return (
    <div id="contact" className="w-full p-2 flex flex-col items-center py-16">
      <div className="max-w-[1240px] flex flex-col justify-center py-6 text-center items-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.25, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="uppercase text-sm tracking-widest text-gray-500 text-center">
            Get in touch
          </p>
          <h1 className="pb-16 pt-4 text-gray-700 text-center">Contact</h1>
        </motion.div>
        <div className="grid lg:grid-cols-5 gap-8">
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.25, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="lg:p-4 h-full">
                <div className="flex justify-center">
                  <Image
                    className="rounded-xl hover:scale-105 ease-in duration-300"
                    src={linkedin_headshot}
                    alt="/"
                  />
                </div>
                <div>
                  <h2 className="py-2">Curtis Wong</h2>
                  <p className="py-2 tracking-widest">Software Engineer</p>
                  <p className="py-4  tracking-widest text-sm">
                    I am available for freelance or full-time positions. Contact
                    me and lets's talk.
                  </p>
                  <div>
                    <div className="flex items-center pt-8 pb-2 justify-between">
                      <Link
                        href={"https://github.com/cwong6854"}
                        target="_blank"
                      >
                        <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-105 ease-in duration-300">
                          {github_icon}
                        </div>
                      </Link>
                      <Link
                        href={"https://www.linkedin.com/in/curtiswong990/"}
                        target="_blank"
                      >
                        <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-105 ease-in duration-300">
                          {linkedin_icon}
                        </div>
                      </Link>
                      <Link href={"mailto:cwong990@berkeley.edu"}>
                        <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-105 ease-in duration-300">
                          {mail_icon}
                        </div>
                      </Link>
                      <Link href={"/#contact"}>
                        <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-105 ease-in duration-300">
                          {person_icon}
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          {/* Right */}

          <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.25, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="p-4">
                <form
                  id="contact-form"
                  ref={form}
                  onSubmit={sendEmail}
                  className="py-4"
                >
                  <div className="w-full grid grid-cols-2">
                    <div className="flex flex-col pr-2">
                      <label className="uppercase text-left text-md py-2 text-gray-700">
                        Name
                      </label>
                      <input
                        className="flex shrink border-2 rounded-lg p-3 border-gray-300 min-w-0"
                        placeholder="Your Name"
                        name="fullName"
                        type="text"
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div className="flex flex-col pl-2">
                      <label className="uppercase text-left text-md py-2 text-gray-700">
                        Phone Number
                      </label>
                      <input
                        className="flex shrink border-2 rounded-lg p-3 border-gray-300 min-w-0"
                        placeholder="e.g. 999-999-9999"
                        name="phone"
                        type="text"
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col py-2 w-full">
                    <label className="uppercase text-left text-sm py-2 text-gray-700 tracking-widest">
                      Email
                    </label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      placeholder="myemail@email.com"
                      name="email"
                      type="email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <div className="flex flex-col py-2 w-full">
                      <label className="uppercase text-left text-sm py-2 text-gray-700 tracking-widest">
                        Subject
                      </label>
                      <input
                        className="border-2 rounded-lg p-3 flex border-gray-300"
                        placeholder="Subject"
                        name="subject"
                        type="text"
                        onChange={(e) => setSubject(e.target.value)}
                      />
                    </div>
                    <div className="flex flex-col py-2 w-full">
                      <label className="uppercase text-left text-sm py-2 text-gray-700 tracking-widest">
                        Message
                      </label>
                      <textarea
                        className="border-2 rounded-lg p-3 border-gray-300"
                        name="message"
                        placeholder="Message"
                        id=""
                        rows={6}
                        onChange={(e) => setMessage(e.target.value)}
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className={name && email && message && subject && phone ?
                        "w-full my-4 p-4 shadow-xl shadow-gray-400 rounded-xl uppercase bg-gradient-to-r from-[#5651e5] to-[#709dff] text-white text-center cursor-pointer" :
                        "w-full my-4 p-4 shadow-xl shadow-gray-400 rounded-xl uppercase bg-gray-400 text-black text-center"
                      }
                      disabled={
                        name && email && message && subject && phone
                          ? false
                          : true
                      }
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>
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
