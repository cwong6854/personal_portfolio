

const Project = () => {
    return (
    <div className="w-full h-full bg-red-500 md:h-screen p-2 flex justify-center items-center py-16">
        <div className="w-full h-full text-center">
            <h1 className="text-black-400">Portfolio</h1>
            <div className="max-w-[1240px] m-auto md:grid grid-cols-2 gap-8 pt-10">
                <div className="min-w-[400px] max-w-[900px] h-[350px] bg-black"></div>
                <div className="min-w-[400px] max-w-[900px] h-[350px] bg-yellow-500"></div>
                <div className="min-w-[400px] max-w-[900px] h-[350px] bg-blue-900"></div>
                <div className="min-w-[400px] max-w-[900px] h-[350px] bg-orange-700"></div>
                <div className="min-w-[400px] max-w-[900px] h-[350px] bg-white"></div>
                <div className="min-w-[400px] max-w-[900px] h-[350px] bg-green-800"></div>


            </div>
        </div>
    </div>
    )
}

export default Project;

