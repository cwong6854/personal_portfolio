import rimble_web from "../../public/rimble_website.png"
import ProjectItem from "@/components/ProjectItem";
import Image from "next/image";
import Link from "next/link";



const Project = () => {
    return (
    <div id="projects" className="w-full p-2 flex items-center py-16">
        <div className="max-w-[1240px] mx-auto px-2 py-6 text-center flex flex-col justify-center items-center">
            <p className="uppercase text-sm tracking-widest text-gray-500">View my previous work</p>
            <h1 className="pb-16 pt-4 text-gray-700">Projects</h1>
            <div className="max-w-[600px] md:grid grid-cols-1 pt-4">
                <ProjectItem
                title="Rimble"
                imagebg={rimble_web}
                url="/rimble"
                />
            </div>
        </div>
    </div>
    )
}

export default Project;

