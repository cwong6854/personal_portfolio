import Image from "next/image";
import react_logo from "../../public/skills/react.png";
import tailwind_logo from "../../public/skills/tailwind.png";
import python_logo from "../../public/skills/python.png";
import html_logo from "../../public/skills/html.png";
import css_logo from "../../public/skills/css.png";
import ts_logo from "../../public/skills/typescript.png";
import js_logo from "../../public/skills/javascript.png";
import nextjs_logo from "../../public/skills/nextjs.png";
import { motion } from "framer-motion";

const Skills: React.FC = () => {
  return (
    <div id="skills" className="w-full p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center py-20 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.25, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="uppercase text-sm tracking-widest text-gray-500">
            Relevant tech stack
          </p>
          <h1 className="pb-16 pt-4 text-gray-700">Skills</h1>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.25, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image src={python_logo} alt="/" width="64" />
                </div>
                <div>Python</div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.25, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image src={js_logo} alt="/" width="64" />
                </div>
                <div>JavaScript</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.25, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image src={ts_logo} alt="/" width="64" />
                </div>
                <div>TypeScript</div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.25, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image src={html_logo} alt="/" width="64" />
                </div>
                <div>HTML</div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.25, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image src={css_logo} alt="/" width="64" />
                </div>
                <div>CSS</div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.25, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image src={nextjs_logo} alt="/" width="64" />
                </div>
                <div>NextJs</div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.25, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image src={react_logo} alt="/" width="64" />
                </div>
                <div>React</div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.25, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image src={tailwind_logo} alt="/" width="64" />
                </div>
                <div>Tailwind</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
export default Skills;
