import React from "react";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";

interface Source {
  title: String;
  imagebg: StaticImageData;
  tech: String;
  url: string;
}

const ProjectItem: React.FC<Source> = ({ title, imagebg, tech, url }) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
      <Image
        className="rounded-xl group-hover:opacity-10"
        src={imagebg}
        alt="/"
      />
      <div className="hidden group-hover:flex flex-col justify-center self-center absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-2xl text-white tracking-wider text-center">
          {title}
        </h3>
        <p className="pb-4 pt-2 text-white text-center">{tech}</p>
        <Link href={url} className="flex justify-center">
          <p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer px-2">
            Learn More
          </p>
        </Link>
      </div>
    </div>
  );
};
export default ProjectItem;
