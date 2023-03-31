import Link from "next/link";

const PageNotFound = () => {
    
    return (
        <div className="w-full h-screen flex flex-col justify-center py-16">
        <div className="max-w-[1240px] mx-auto text-center ">
            <p className="tracking-widest text-2xl md:text-4xl">404: Page Not Found</p>
            <br/>
            <p className="text-xl md:text-2xl">Return to <Link className="text-xl md:text-2xl text-[#565ef1]" href="/">home</Link>!</p>
        </div>
        </div>
    )
}
export default PageNotFound;