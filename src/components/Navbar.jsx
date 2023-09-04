import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonPlusFill } from "react-icons/bs";
import logo from "../assets/logo1.png";
import { Link } from "react-scroll";
const Navbar = () => {
  const [nav, setNev] = useState(false);
  const handleClick = () => setNev(!nav);
  return (
    <div className=" fixed w-full h-[80px] flex justify-center items-center px-4 bg-[#0a192f] text-gray-300">
      <div>
        <img src={logo} alt="/" style={{ width: "50px" }} />
      </div>
      {/* menu */}

      <ul className="  hidden md:flex">
        <li>
          <Link to="home" spy={true} smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" spy={true} smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to="skills" spy={true} smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li>
        <Link to='works' smooth={true} duration={500}>
            Works
          </Link>
        </li>
        <li>
        <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* hamburger */}
      <div onClick={handleClick} className=" md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      {/* mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0  w-full h-screen bg-[#0a192f] flex flex-col justify-center  items-center"
        }
      >
        <li className=" py-4 text-4xl">
        <Link onClick={handleClick} to="home" spy={true} smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className=" py-4 text-4xl">
        <Link onClick={handleClick} to="about" spy={true} smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className=" py-4 text-4xl">
        <Link onClick={handleClick} to="skills" spy={true} smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className=" py-4 text-4xl">
        <Link onClick={handleClick} to='works' smooth={true} duration={500}>
            Works
          </Link>
        </li>
        <li className=" py-4 text-4xl">
        <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
      {/* social icons */}
      <div className=" hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className=" w-[160px] h-[60px] flex justify-between items-center ml-[-100px]  hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              className=" flex justify-between items-center w-full text-gray-300"
              href="http://www.linkedin.com " target="_blank"
            >
              Linkedin <BsLinkedin size={30} />
            </a>
          </li>
          <li className=" w-[160px] h-[60px] flex justify-between items-center ml-[-100px]  hover:ml-[-10px] duration-300 bg-[#333333]">
            <a
              className=" flex justify-between items-center w-full text-gray-300"
              href="https://github.com/rajan-shahi"
              target="_blank"
            >
              Github <BsGithub size={30} />
            </a>
          </li>
          <li className=" w-[160px] h-[60px] flex justify-between items-center ml-[-100px]  hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
            <a
              className=" flex justify-between items-center w-full text-gray-300"
              href="https://rajanshahi1267@gmail.com"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className=" w-[160px] h-[60px] flex justify-between items-center ml-[-100px]  hover:ml-[-10px] duration-300 bg-[#565f69]">
            <a
              className=" flex justify-between items-center w-full text-gray-300"
              href="/"
            >
              Resume <BsFillPersonPlusFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
