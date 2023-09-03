import React from "react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

const Home = () => {
  return (
    <div className=" bg-[#0a192f] w-full h-screen">
      {/* container */}
      <div className=" max-w[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className=" text-pink-600">Hi, My name is</p>
        <h1 className=" text-4xl sm:text-7xl font-bold text-[#ccd6f6]">Rajan Shahi</h1>
        <h2 className=" text-4xl sm:text-7xl font-bold text-[#8892b0]">I'm a frontend Developer.</h2>
        <p className=" text-[#8892b0] py-4 max-w-[700px]">
          I’m a Frontend developer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I’m focused on
          building responsive frontend web applications.
          <div>
            <button className=" text-white  border-2 px-6 py-3 my-2 flex items-center  hover:bg-pink-600 hover:border-pink-600">View Work 
            <span className=" hover:rotate-90 duration-300"><BsFillArrowRightCircleFill className=" ml-3"/>
            </span>
            </button>
          </div>
        </p>
      </div>
    </div>
  );
};

export default Home;
