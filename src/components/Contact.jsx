import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";
// import SocialLinks from "./SocialLinks";
// import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  const linkes = [
    {
      id: 1,
      child: (
        <>
          <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/ayush-chouksey-6692a91a2/",
    },
    {
      id: 2,
      child: (
        <>
          <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/Ayu727575",
    },
    {
      id: 3,
      child: (
        <>
          <SiLeetcode size={30} />
        </>
      ),
      href: "https://leetcode.com/ayushchouksey12/",
    },
    {
      id: 4,
      child: (
        <>
          <SiGeeksforgeeks size={30} />
        </>
      ),
      href: "https://auth.geeksforgeeks.org/user/ayushchouksey12",
    },
    {
      id: 5,
      child: (
        <>
          <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:ayushchouksey12@gmail.com",
    },
    {
      id: 6,
      child: (
        <>
          <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: "/Ayush_Chouksey_Resume.pdf",
      download: true,
    },
  ];
  return (
    <div
      name="contact"
      className="w-full bg-gradient-to-b from-black to-gray-800 p-4 text-white lg:h-full md:h-full sm:h-full"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6">Submit the form below to get in touch with me</p>
        </div>
        <div className=" flex justify-center items-center">
          <form
            action="https://getform.io/f/9b6nn7bE"
            method="POST"
            className="flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none "
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className=" my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none "
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>
            <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Let's talk
            </button>
          </form>
        </div>
        <div className="lg:hidden max-w-screen-lg mx-auto flex flex-col justify-center w-full text-white">
          <ul className="flex items-center justify-center gap-4 py-8 px-12 sm:px-0">
            {linkes.map(({ id, child, href, style, download }) => {
              return (
                <li key={id} className={""}>
                  <a
                    href={href}
                    download={download}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {child}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
