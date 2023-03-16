import { createElement, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {AiOutlineMail, AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import {FaLinkedinIn, FaGithub} from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs'

const NavBar = () => {

    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }
    const menu_icon = <AiOutlineMenu size={25}/>
    const close_icon = <AiOutlineClose />
    const linkedin_icon = <FaLinkedinIn/>
    const github_icon = <FaGithub/>
    const mail_icon = <AiOutlineMail/>
    const person_icon = <BsFillPersonLinesFill/>

    return (
        <div className="fixed w-full h-20 shadow-xl z-[100]">
            <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
                <Image 
                    src="/../public/cw_logo.png" 
                    alt="/" 
                    width="125" 
                    height="50"
                />
                <div>
                    <ul className="hidden md:flex">
                    <Link className="ml-10 text-sm uppercase hover:border-b" href='/'>Home</Link>
                    <Link className="ml-10 text-sm uppercase hover:border-b" href='/about'>About</Link>
                    <Link className="ml-10 text-sm uppercase hover:border-b" href='/projects'>Projects</Link>
                    <Link className="ml-10 text-sm uppercase hover:border-b" href='/contact'>Contact</Link>
                    </ul>
                <div onClick={handleNav} className="md:hidden">
                    {menu_icon}
                </div>
            </div>

            </div>
            <div className={nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""}>
                <div className={nav ?
                "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500":
                "fixed left-[-100%] top-0 p-10 ease-in duration-500"}>
                    <div>
                        <div className="flex w-full items-center justify-between">
                            <Image
                            src="/../public/cw_logo.png"
                            alt="/"
                            width="87"
                            height="35"
                            />
                            <div onClick={handleNav} className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer">
                                {close_icon}
                            </div>
                        </div>
                        <div className='border-b border-gray-300 my-4'>
                            <p className="w-[85] md:w-[90%] py-4">Let's build something legendary together</p>
                        </div>
                    </div>
                    <div className="py-4 flex flex-col">
                        <ul className="uppercase">
                            <Link href='/'>
                                <li className="py-4 text-sm">Home</li>
                            </Link>
                            <Link href='/'>
                                <li className="py-4 text-sm">About</li>
                            </Link>
                            <Link href='/'>
                                <li className="py-4 text-sm">Projects</li>
                            </Link>
                            <Link href='/'>
                                <li className="py-4 text-sm">Contact</li>
                            </Link>
                        </ul>
                        <div className="pt-40">
                            <p className="uppercase tracking-widest text-[#5651e5]">Let's Connect</p>
                            <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                                    {github_icon}
                                </div>
                                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                                    {linkedin_icon}
                                </div>
                                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                                    {mail_icon}
                                </div>
                                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                                    {person_icon}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <h1 className="ml-3"><Link href="/">Curtis</Link></h1>
            <ul className="flex space-x-2 mr-3">
                <li>
                    <Link href='/about'>About</Link>
                </li>
                <li>
                    <Link href='/projects'>Projects</Link>
                </li>
                <li>
                <Link href='/contact'>Contact</Link>
                </li>
            </ul> */}
        </div>
    )
}
export default NavBar