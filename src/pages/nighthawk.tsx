import Image from "next/image";
import Link from "next/link";
import React from "react";
import nighthawk_img from "../../public/nighthawk_img.png";
import { RiRadioButtonFill } from "react-icons/ri";

const nighthawk: React.FC = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          style={{ objectFit: "cover" }}
          fill
          src={nighthawk_img}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Nighthawk</h2>
          <h3>React TS</h3>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <h2>Overview</h2>
          <p className="py-2 tracking-widest text-md">
            At Nighthawk, I created a full-stack agronomist solution application powered by several GPT models and RAG, tailored for robust agricultural context and recommendations.
          </p>
          <br/>
          <p className="py-2 tracking-widest text-md">
            My efforts produced deeper insights on thousands of agricultural products and enhanced farm product recommendations personalized for the user.
          </p>
          <Link href={"https://www.nighthawk.ag/"} target="_blank">
            <button className="px-8 py-2 mt-4 mr-8">Explore</button>
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
                <RiRadioButtonFill className="pr-1 min-w-[16px]" /> Python
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1 min-w-[16px]" /> TypeScript
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1 min-w-[16px]" /> AWS
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1 min-w-[16px]" /> Material UI
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1 min-w-[16px]" /> DynamoDB
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
export default nighthawk;
