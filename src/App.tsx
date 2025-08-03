import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Header from "./components/Header";
import Home from "./components/Home";
import Comments from "./components/Comments";
import HireMe from "./components/HireMe";
import Resume from "./components/Resume";
import Nonogram from "./components/Nonogram";

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<string>("home"); // Track the current page

  // Define animation variants
  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  // Render content dynamically
  const renderContent = () => {
    switch (currentPage) {
      case "home":
        return (
          <motion.div
            key="home"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.5 }}
          >
            <Home setCurrentPage={setCurrentPage} />
            <Comments />
          </motion.div>
        );

      case "contact":
        return (
          <motion.div
            key="contact"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.5 }}
          >
            <HireMe />
          </motion.div>
        );

      case "resume":
        return (
          <motion.div
            key="resume"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.5 }}
          >
            <Resume />
          </motion.div>
        );

      case "nonogram":
        return (
          <motion.div
            key="nonogram"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.5 }}
          >
            <Nonogram/>
          </motion.div>
        );

      default:
        return null;
    }
  };

  return (
    <div>
      {/* Static layout */}
      <Navbar setCurrentPage={setCurrentPage} />
      <Banner />
      <Header />

      {/* Animated content */}
      <div className="content">
        <AnimatePresence mode="wait">{renderContent()}</AnimatePresence>
      </div>
    </div>
  );
};

export default App;
