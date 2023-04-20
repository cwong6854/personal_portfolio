import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineMail, AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { useRouter } from "next/router";
import cw_logo from "../../public/cw_logo.png";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBG, setNavBG] = useState("#ecf0f3");
  const [linkColor, setLinkColor] = useState("#ecf0f3");
  const [menuColor, setMenuColor] = useState("#ecf0f3");

  const router = useRouter();

  useEffect(() => {
    if (
      router.asPath === "/rimble" ||
      router.asPath === "/pley" ||
      router.asPath === "/320_judah"
    ) {
      setNavBG("transparent");
      setLinkColor("#ecf0f3");
      setMenuColor("#ecf0f4");
    } else {
      setNavBG("#ecf0f3");
      setLinkColor("black");
      setMenuColor("#000000");
    }
  }, [router]);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  const menu_icon = (
    <AiOutlineMenu size={25} style={{ color: `${menuColor}` }} />
  );
  const close_icon = <AiOutlineClose />;
  const linkedin_icon = <FaLinkedinIn />;
  const github_icon = <FaGithub />;
  const mail_icon = <AiOutlineMail />;
  const person_icon = <BsFillPersonLinesFill />;

  return (
    <div
      style={{ backgroundColor: `${navBG}` }}
      className={
        shadow
          ? "fixed w-full h-20 shadow-xl z-[100]"
          : "fixed w-full h-20 z-[100]"
      }
    >
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Link href="/">
          <Image src={cw_logo} alt="/" height={100} />
        </Link>

        <div>
          <ul
            style={{
              color: `${linkColor}`,
              borderColor: `${linkColor}`,
            }}
            className="hidden md:flex px-2"
          >
            <Link
              className={`ml-10 text-sm uppercase after:transition-all after:ease-in-out after:duration-300 h-[2px] after:bg-repeat after:bg-current after:border-current after:bg-scroll after:block after:h-[2px] after:w-0 hover:after:w-full`}
              href="/"
            >
              Home
            </Link>
            <Link
              className={`ml-10 text-sm uppercase after:transition-all after:ease-in-out after:duration-300 h-[2px] after:bg-repeat after:bg-current after:border-current after:bg-scroll after:block after:h-[2px] after:w-0 hover:after:w-full`}
              href="/#about"
            >
              About
            </Link>
            <Link
              className={`ml-10 text-sm uppercase after:transition-all after:ease-in-out after:duration-300 h-[2px] after:bg-repeat after:bg-current after:border-current after:bg-scroll after:block after:h-[2px] after:w-0 hover:after:w-full`}
              href="/#skills"
            >
              Skills
            </Link>
            <Link
              className={`ml-10 text-sm uppercase after:transition-all after:ease-in-out after:duration-300 h-[2px] after:bg-repeat after:bg-current after:border-current after:bg-scroll after:block after:h-[2px] after:w-0 hover:after:w-full`}
              href="cw_resume.pdf"
              target="_blank"
            >
              Resume
            </Link>
            <Link
              className={`ml-10 text-sm uppercase after:transition-all after:ease-in-out after:duration-300 h-[2px] after:bg-repeat after:bg-current after:border-current after:bg-scroll after:block after:h-[2px] after:w-0 hover:after:w-full`}
              href="/#projects"
            >
              Projects
            </Link>
            <Link
              className={`ml-10 text-sm uppercase after:transition-all after:ease-in-out after:duration-300 h-[2px] after:bg-repeat after:bg-current after:border-current after:bg-scroll after:block after:h-[2px] after:w-0 hover:after:w-full`}
              href="/#contact"
            >
              Contact
            </Link>
          </ul>
          <div onClick={handleNav} className="md:hidden cursor-pointer">
            {menu_icon}
          </div>
        </div>
      </div>
      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Link href="/" onClick={() => setNav(false)}>
                <Image src={cw_logo} alt="/" width="87" height="35" />
              </Link>
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
              >
                {close_icon}
              </div>
            </div>
            <div className="border-b border-gray-300 my-4 pb-2">
              <p className="tracking-widest text-sm">
                Let's connect and build things together!
              </p>
            </div>
          </div>
          <div className="py-2 flex flex-col">
            <ul className="uppercase">
              <Link href="/">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Home
                </li>
              </Link>
              <Link href="/#about">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  About
                </li>
              </Link>
              <Link href="/#skills">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Skills
                </li>
              </Link>
              <Link href="cw_resume.pdf" target="_blank">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Resume
                </li>
              </Link>
              <Link href="/#projects">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Projects
                </li>
              </Link>
              <Link href="/#contact">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Contact
                </li>
              </Link>
            </ul>
            <div className="pt-10">
              <p className="uppercase tracking-widest text-[#5651e5]">
                Let's Connect
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <Link href={"https://github.com/cwong6854"} target="_blank">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    {github_icon}
                  </div>
                </Link>
                <Link
                  href={"https://www.linkedin.com/in/curtiswong990/"}
                  target="_blank"
                >
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    {linkedin_icon}
                  </div>
                </Link>
                <Link href={"mailto:cwong990@berkeley.edu"} target="_blank">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    {mail_icon}
                  </div>
                </Link>
                <Link href={"/#contact"} onClick={() => setNav(false)}>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    {person_icon}
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NavBar;
