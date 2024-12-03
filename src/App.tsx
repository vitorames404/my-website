import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Header from "./components/Header";
import Home from "./components/Home";
import Comments from "./components/Comments";
import HireMe from "./components/HireMe";

function App() {
  const [currentPage, setCurrentPage] = useState("home"); // Track the current visible page

  // Function to render the content dynamically
  const renderContent = () => {
    switch (currentPage) {
      case "home":
        return (
          <motion.div
            key="home"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <Home />
            <Comments />
          </motion.div>
        );
      case "contact":
        return (
          <motion.div
            key="contact"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <HireMe />
          </motion.div>
        );
      default:
        return <Home />;
    }
  };

  return (
    <div>
      {/* Static parts of the page */}
      <Navbar setCurrentPage={setCurrentPage} />
      <Banner />
      <Header />
      {/* Dynamic content */}
      <div className="content">{renderContent()}</div>
    </div>
  );
}

export default App;
