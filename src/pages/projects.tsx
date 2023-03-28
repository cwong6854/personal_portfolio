import rimble_web from "../../public/rimble_website.png";
import pley_web from "../../public/pley_page.png";
import ProjectItem from "@/components/ProjectItem";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Project = () => {
  return (
    <div id="projects" className="w-full p-2 flex items-center py-16">
      <div className="max-w-[1240px] mx-auto px-2 py-6 text-center flex flex-col justify-center items-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.25, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="uppercase text-sm tracking-widest text-gray-500">
            View my previous work
          </p>
          <h1 className="pb-16 pt-4 text-gray-700">Projects</h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.25, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="max-w-[800px] md:grid grid-cols-1 pt-4">
            <ProjectItem title="Rimble" imagebg={rimble_web} tech="React JS" url="/rimble" />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.25, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="max-w-[800px] md:grid grid-cols-1 pt-4">
            <ProjectItem title="PLEY" imagebg={pley_web} tech="React JS" url="/pley" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Project;
