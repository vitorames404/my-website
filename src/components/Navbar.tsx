import React, { useState } from "react";
import { FiTerminal, FiSend, FiUser, FiEdit2 } from "react-icons/fi";

type NavbarProps = {
  setCurrentPage: (page: string) => void; // Prop type for controlling page state
};

const Navbar: React.FC<NavbarProps> = ({ setCurrentPage }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const openMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-900 p-4 md:max-w-screen-md max-w-6xl mx-auto text-white">
      <div className="flex items-center justify-between">
        {/* Name / Logo */}
        <div className="text-white text-2xl font-bold">Vitor Ames</div>

        {/* Hamburger Menu Button (Mobile) */}
        <div className="md:hidden">
          <button className="text-white" onClick={openMenu}>
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              className="w-6 h-6"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex font-bold space-x-4">
          {/* <li
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => setCurrentPage("home")}
          >
            <FiTerminal />
            <span>Portfolio</span>
          </li> */}
          <li
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => setCurrentPage("resume")}
          >
            <FiUser />
            <span>Resumé</span>
          </li>
          <li
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => setCurrentPage("home")}
          >
            <FiEdit2 />
            <span>Bio</span>
          </li>
          <li
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => setCurrentPage("contact")}
          >
            <FiSend />
            <span>Contact Me</span>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <ul className="flex flex-col md:hidden space-y-2 mt-2">
          <li
            className="text-white cursor-pointer"
            onClick={() => {
              setCurrentPage("home");
              setMenuOpen(false);
            }}
          >
            Home
          </li>
          <li
            className="text-white cursor-pointer"
            onClick={() => {
              setCurrentPage("resume");
              setMenuOpen(false);
            }}
          >
            Resumé
          </li>
          <li
            className="text-white cursor-pointer"
            onClick={() => {
              setCurrentPage("bio");
              setMenuOpen(false);
            }}
          >
            Bio
          </li>
          <li
            className="text-white cursor-pointer"
            onClick={() => {
              setCurrentPage("contact");
              setMenuOpen(false);
            }}
          >
            Contact Me
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
