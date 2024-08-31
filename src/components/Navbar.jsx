import React from "react";
import { FaEnvelope, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Navbar = ({openLink}) => {

  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex-grow"></div>
      <div className="m-8 flex items-center justify-end gap-4 text-2xl">
        <a
          onClick={() => {openLink("https://www.linkedin.com/in/shaurya-pratap-singh-/")}}
          className="cursor-pointer"
        >
          <FaLinkedin />
        </a>
        <a
          onClick={() => {openLink("https://github.com/sp2003s")}}
          className="cursor-pointer"
        >
          <FaGithub />
        </a>
        <a
          onClick={() => {openLink("https://leetcode.com/u/sps_2003/")}}
          className="cursor-pointer"
        >
          <SiLeetcode />
        </a>
        <a
          href="mailto:shauryajt3455@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaEnvelope />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
