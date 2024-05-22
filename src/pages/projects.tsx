import rimble_web from "../../public/rimble_website.png";
import pley_web from "../../public/pley_page.png";
import judah_web from "../../public/judah_website.png";
import verdant_web from "../../public/verdant_web.png"
import nighthawk_img from "../../public/nighthawk_img.png"
import ProjectItem from "@/components/ProjectItem";
import { motion } from "framer-motion";
import { StaticImageData } from "next/image";

const Project: React.FC = () => {
  const ProjectSection = ({title, tech, url, imagebg}: {title: string, tech: string, url: string, imagebg: StaticImageData}) => {
    return (
      <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.25, delay: 0.2 }}
      viewport={{ once: true }}
    >
      <div className="max-w-[800px] md:grid grid-cols-1 pt-4">
        <ProjectItem
          title={title}
          imagebg={imagebg}
          tech={tech}
          url={url}
        />
      </div>
    </motion.div>
    )
  }
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
            Explore into my previous
          </p>
          <h1 className="pb-16 pt-4 text-gray-700">Work</h1>
        </motion.div>
        <ProjectSection title="Nighthawk" imagebg={nighthawk_img} tech="React Ts" url="/nighthawk"/>
        <ProjectSection title="Verdant Robotics" imagebg={verdant_web} tech="React Ts" url="/verdant_robotics"/>
        <ProjectSection title="Doelger" imagebg={judah_web} tech="Next Js" url="/doelger"/>
        <ProjectSection title="Rimble" imagebg={rimble_web} tech="React Js" url="/rimble"/>
        <ProjectSection title="PLEY" imagebg={pley_web} tech="React Js" url="/pley"/>
      </div>
    </div>
  );
};

export default Project;
