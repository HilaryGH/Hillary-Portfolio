import Navbar from "./components/Navbar/Navbar";
import "./index.css";
import "./App.css";
import "boxicons/css/boxicons.min.css";
import Home from "./components/Home/Home";
import Portfolio from "./components/Portfolio/Portfolio";
import Work from "./components/Work/Work";
import Blog from "./components/Blog/Blog";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Work />
      <Blog />
      <Portfolio />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
