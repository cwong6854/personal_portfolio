import Image from "next/image";
import react_logo from "../../public/skills/react.png"
import aws_logo from "../../public/skills/aws.png"
import tailwind_logo from "../../public/skills/tailwind.png"
import python_logo from "../../public/skills/python.png" 
import html_logo from "../../public/skills/html.png"
import css_logo from "../../public/skills/css.png"
import ts_logo from "../../public/skills/typescript.png"
import js_logo from "../../public/skills/javascript.png"
import css from "styled-jsx/css";


const Skills = () => {
  return (
    <div id="skills" className="w-full p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center py-20">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Skills
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
          <div className="grid grid-cols-2 gap-4 justify-center items-center">
            <div className="m-auto">
              <Image src={react_logo} alt="/" width="64" />
            </div>
            <div>React</div>
          </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
          <div className="grid grid-cols-2 gap-4 justify-center items-center">
            <div className="m-auto">
              <Image src={ts_logo} alt="/" width="64" />
            </div>
            <div>TypeScript</div>
          </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
          <div className="grid grid-cols-2 gap-4 justify-center items-center">
            <div className="m-auto">
              <Image src={js_logo} alt="/" width="64" />
            </div>
            <div>JavaScript</div>
          </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
          <div className="grid grid-cols-2 gap-4 justify-center items-center">
            <div className="m-auto">
              <Image src={html_logo} alt="/" width="64" />
            </div>
            <div>HTML</div>
          </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
          <div className="grid grid-cols-2 gap-4 justify-center items-center">
            <div className="m-auto">
              <Image src={css_logo} alt="/" width="64" />
            </div>
            <div>CSS</div>
          </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
          <div className="grid grid-cols-2 gap-4 justify-center items-center">
            <div className="m-auto">
              <Image src={python_logo} alt="/" width="64" height="64" />
            </div>
            <div>Python</div>
          </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
          <div className="grid grid-cols-2 gap-4 justify-center items-center">
            <div className="m-auto">
              <Image src={aws_logo} alt="/" width="64" height="64"/>
            </div>
            <div>AWS</div>
          </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
          <div className="grid grid-cols-2 gap-4 justify-center items-center">
            <div className="m-auto">
              <Image src={tailwind_logo} alt="/" width="64" height="64" />
            </div>
            <div>Tailwind</div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Skills;
