import React from "react";

const Contact = () => {
  return (
    <div name='contact' className=" w-full h-screen bg-[#0a192f] flex justify-center items-center p-4">
      <form action="" className=" flex flex-col max-w-[600px] w-full">
        <div className=" pb-8">
          <p className=" text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 py-4">
            // Submit the form below or shoot me an email -
            rajanshahi1267@gmail.com
          </p>
        </div>
        <input
          className=" bg-[#ccd6f6] p-2"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className=" my-4 p-2 bg-[#ccd6f6]"
          type="Email"
          placeholder="Email"
          name="email"
        />
        <textarea className="bg-[#ccd6f6] p-2" name="message" rows="10" placeholder="Message"></textarea>
        <button className=" text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4  py-3 mx-auto my-8 flex items-center">Let's Collaborate</button>
      <p className=" text-gray-500 flex justify-center mt-2 text-3xl">copy right by @rajan shahi 2023.</p>
      </form>
 
    </div>
  );
};

export default Contact;
