

const Project = () => {
    return (
    <div className="w-full h-full md:h-screen p-2 flex justify-center items-center py-16">
        <div className="w-full h-full text-center">
            <h1 className="text-black-400">Portfolio</h1>
            <div className="max-w-[1240px] md:grid grid-cols-2 pt-10">
                <div className="max-w-[900px] h-[350px] bg-black m-2 rounded-xl"></div>
                <div className="max-w-[900px] h-[350px] bg-yellow-500 m-2 rounded-xl"></div>
                <div className="max-w-[900px] h-[350px] bg-blue-900 m-2 rounded-xl"></div>
                <div className="max-w-[900px] h-[350px] bg-orange-700 m-2 rounded-xl"></div>
                <div className="max-w-[900px] h-[350px] bg-teal-400 m-2 rounded-xl"></div>
                <div className="max-w-[900px] h-[350px] bg-green-800 m-2 rounded-xl"></div>
            </div>
        </div>
    </div>
    )
}

export default Project;

