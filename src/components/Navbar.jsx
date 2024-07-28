import React from "react";
import logo from "../assets/kevinRushLogo.png";
import { FaEnvelope, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex-grow"></div>
      <div className="m-8 flex items-center justify-end gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/shaurya-pratap-singh-/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/sp2003s"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.instagram.com/_shauryapsingh_.26/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
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
