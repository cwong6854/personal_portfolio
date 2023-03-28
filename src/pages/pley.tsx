import Image from "next/image";
import Link from "next/link";
import React from "react";
import pley_web from "../../public/pley_page.png";
import { RiRadioButtonFill } from "react-icons/ri";

const pley = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          style={{ objectFit: "cover" }}
          fill
          src={pley_web}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">PLEY</h2>
          <h3>React JS</h3>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <h2>Overview</h2>
          <p className="py-2 tracking-widest text-md">
            Pley is a restaurant recommendation app that gives curated recommendations based on user’s taste profiles. Tailored towards Gen Z users, save your favorite search results into your personal profile for safe keep.
          </p>
          <Link href={"https://www.youtube.com/watch?v=k72RueGnOwk&ab_channel=NalinDwivedi"} target="_blank">
            <button className="px-8 py-2 mt-4 mr-8">Demo</button>
          </Link>
          <Link href={"https://github.com/cwong6854/pley"} target="_blank">
            <button className="px-8 py-2 mt-4">Code</button>
          </Link>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1 min-w-[16px]" /> React
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1 min-w-[16px]" /> JavaScript
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1 min-w-[16px]" /> Express.js
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1 min-w-[16px]" /> Node.js
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1 min-w-[16px]" /> MongoDB
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1 min-w-[16px]" /> HTML
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1 min-w-[16px]" /> CSS
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
};
export default pley;
