import React, { useState } from "react";
import { FiSend, FiUser, FiEdit2 } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

type NavbarProps = {
  setCurrentPage: (page: string) => void;
};

const Navbar: React.FC<NavbarProps> = ({ setCurrentPage }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const openMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  // Animation for the entire mobile menu
  const menuVariants = {
    hidden: {
      opacity: 0,
      height: 0,
      transition: { duration: 0.3, ease: "easeOut" },
    },
    visible: {
      opacity: 1,
      height: "auto",
      transition: { duration: 0.3, ease: "easeIn", staggerChildren: 0.1 },
    },
  };

  // Animation for each menu item
  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.2 } },
  };

  return (
    <nav
      className="fixed top-0 left-0 w-full bg-background-primary bg-opacity-95 p-4 z-50 
                backdrop-blur-md shadow-lg border-b border-primary-500 border-opacity-30"
    >
      <div className="flex items-center justify-between max-w-6xl mx-auto">
        <div className="text-white text-2xl font-bold cursor-pointer hover:text-primary-400 transition-colors duration-200" onClick={() => setCurrentPage("home")}>Vitor Ames</div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button className="text-white p-2 hover:text-primary-400 transition-colors" onClick={openMenu}>
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
        <ul className="hidden md:flex font-semibold space-x-6 text-base">
          <li
            className="flex items-center space-x-2 cursor-pointer text-text-secondary hover:text-primary-400 transition-colors duration-200"
            onClick={() => setCurrentPage("resume")}
          >
            <FiUser className="text-lg" />
            <span>Résumé</span>
          </li>
          <li
            className="flex items-center space-x-2 cursor-pointer text-text-secondary hover:text-primary-400 transition-colors duration-200"
            onClick={() => setCurrentPage("home")}
          >
            <FiEdit2 className="text-lg" />
            <span>Bio</span>
          </li>
          <li
            className="flex items-center space-x-2 cursor-pointer text-text-secondary hover:text-primary-400 transition-colors duration-200"
            onClick={() => setCurrentPage("contact")}
          >
            <FiSend className="text-lg" />
            <span>Contact Me</span>
          </li>
        </ul>
      </div>

      {/* Mobile Menu with Smoother Animation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.ul
            className="flex flex-col md:hidden space-y-2 mt-4 bg-background-secondary bg-opacity-95 p-4 rounded-lg border border-primary-500 border-opacity-20"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <motion.li
              variants={itemVariants}
              className="flex items-center space-x-2 text-text-secondary cursor-pointer p-2 rounded hover:bg-background-tertiary hover:text-primary-400 transition-colors"
              onClick={() => {
                setCurrentPage("resume");
                setMenuOpen(false);
              }}
            >
              <FiUser />
              <span>Résumé</span>
            </motion.li>
            <motion.li
              variants={itemVariants}
              className="flex items-center space-x-2 text-text-secondary cursor-pointer p-2 rounded hover:bg-background-tertiary hover:text-primary-400 transition-colors"
              onClick={() => {
                setCurrentPage("home");
                setMenuOpen(false);
              }}
            >
              <FiEdit2 />
              <span>Bio</span>
            </motion.li>
            <motion.li
              variants={itemVariants}
              className="flex items-center space-x-2 text-text-secondary cursor-pointer p-2 rounded hover:bg-background-tertiary hover:text-primary-400 transition-colors"
              onClick={() => {
                setCurrentPage("contact");
                setMenuOpen(false);
              }}
            >
              <FiSend />
              <span>Contact Me</span>
            </motion.li>
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
