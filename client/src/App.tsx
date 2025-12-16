import { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import "./index.css";
import "./App.css";
import "boxicons/css/boxicons.min.css";
import Home from "./components/Home/Home";
import Portfolio from "./components/Portfolio/Portfolio";
import Work from "./components/Work/Work";
import Blog from "./components/Blog/Blog";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  const [isPortfolioPage, setIsPortfolioPage] = useState(false);

  useEffect(() => {
    const checkHash = () => {
      setIsPortfolioPage(window.location.hash === "#portfolio");
    };

    // Check on mount
    checkHash();

    // Listen for hash changes
    window.addEventListener("hashchange", checkHash);

    return () => {
      window.removeEventListener("hashchange", checkHash);
    };
  }, []);

  // If portfolio page, show only Portfolio section
  if (isPortfolioPage) {
    return (
      <>
        <Navbar />
        <Portfolio />
      </>
    );
  }

  // Normal page flow
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Work />
      <Blog />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
