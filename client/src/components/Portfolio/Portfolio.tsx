import { FaChevronRight } from "react-icons/fa";

const Portfolio = () => {
  return (
    <section id="portfolio" className="relative min-h-screen px-4 sm:px-6 md:px-12 lg:px-20 py-20 bg-gradient-to-br from-[#0F0F14] via-[#1a1a24] to-[#0F0F14] overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(124,58,237,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(124,58,237,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      {/* Section Header */}
      <div className="relative z-10 text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 w-fit mb-6">
          <span className="w-2 h-2 bg-violet-400 rounded-full animate-pulse"></span>
          <span className="text-sm text-gray-300">Certifications</span>
        </div>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-4">
          My{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-purple-400 to-violet-400">
            Certifications
          </span>
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Professional certifications and achievements that validate my skills and knowledge
        </p>
      </div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
        {/* Portfolio Item 1 */}
        <div className="relative overflow-hidden rounded-2xl shadow-2xl group border border-white/10 bg-white/5 backdrop-blur-sm">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <img
            src="responsive web app certificate.PNG"
            alt="Responsive Web Design Certificate"
            className="w-full h-[350px] object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F14]/95 via-[#0F0F14]/90 to-transparent flex flex-col justify-end items-center px-8 py-6 text-white transform translate-y-full group-hover:translate-y-0 transition-all duration-500">
            <h4 className="text-xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Projects Completed:</h4>
            <ul className="text-sm space-y-1.5 mb-4 text-gray-300">
              <li className="flex items-center gap-2">
                <i className="bx bx-check text-cyan-400"></i>
                Project 1: Build a Survey Form
              </li>
              <li className="flex items-center gap-2">
                <i className="bx bx-check text-cyan-400"></i>
                Project 2: Build a Tribute Page
              </li>
              <li className="flex items-center gap-2">
                <i className="bx bx-check text-cyan-400"></i>
                Project 3: Build a Technical Documentation Page
              </li>
              <li className="flex items-center gap-2">
                <i className="bx bx-check text-cyan-400"></i>
                Project 4: Build a Product Landing Page
              </li>
              <li className="flex items-center gap-2">
                <i className="bx bx-check text-cyan-400"></i>
                Project 5: Build a Personal Portfolio Webpage
              </li>
            </ul>
            <a
              href="https://www.freecodecamp.org/certification/fcc17d09948-8ce7-4a77-ace5-a75f86d4688c/responsive-web-design"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 text-white font-semibold text-sm py-2.5 px-6 rounded-xl shadow-lg transition-all duration-300 hover:scale-105"
            >
              View Certificate <FaChevronRight className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* Portfolio Item 2 */}
        <div className="relative overflow-hidden rounded-2xl shadow-2xl group border border-white/10 bg-white/5 backdrop-blur-sm">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <img
            src="Javascript certification.PNG"
            alt="JavaScript Certificate"
            className="w-full h-[350px] object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F14]/95 via-[#0F0F14]/90 to-transparent flex flex-col justify-end items-center px-8 py-6 text-white transform translate-y-full group-hover:translate-y-0 transition-all duration-500">
            <h4 className="text-xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Projects Completed:</h4>
            <ul className="text-sm space-y-1.5 mb-4 text-gray-300">
              <li className="flex items-center gap-2">
                <i className="bx bx-check text-cyan-400"></i>
                Project 1: Palindrome Checker
              </li>
              <li className="flex items-center gap-2">
                <i className="bx bx-check text-cyan-400"></i>
                Project 2: Roman Numeral Converter
              </li>
              <li className="flex items-center gap-2">
                <i className="bx bx-check text-cyan-400"></i>
                Project 3: Telephone Number Validator
              </li>
              <li className="flex items-center gap-2">
                <i className="bx bx-check text-cyan-400"></i>
                Project 4: Cash Register
              </li>
              <li className="flex items-center gap-2">
                <i className="bx bx-check text-cyan-400"></i>
                Project 5: Pokemon Search App
              </li>
            </ul>
            <a
              href="https://www.freecodecamp.org/certification/fcc17d09948-8ce7-4a77-ace5-a75f86d4688c/javascript-algorithms-and-data-structures-v8"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 text-white font-semibold text-sm py-2.5 px-6 rounded-xl shadow-lg transition-all duration-300 hover:scale-105"
            >
              View Certificate <FaChevronRight className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* Portfolio Item 3 */}
        <div className="relative overflow-hidden rounded-2xl shadow-2xl group border border-white/10 bg-white/5 backdrop-blur-sm">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <img
            src="FrontEnd Development certification.PNG"
            alt="Frontend Libraries Certificate"
            className="w-full h-[350px] object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F14]/95 via-[#0F0F14]/90 to-transparent text-white flex flex-col justify-end items-center px-8 py-6 transform translate-y-full group-hover:translate-y-0 transition-all duration-500">
            <h4 className="text-xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              Projects Completed:
            </h4>
            <ul className="text-sm space-y-1.5 mb-4 text-gray-300">
              <li className="flex items-center gap-2">
                <i className="bx bx-check text-cyan-400"></i>
                Project 1: Random Quote Machine
              </li>
              <li className="flex items-center gap-2">
                <i className="bx bx-check text-cyan-400"></i>
                Project 2: Markdown Previewer
              </li>
              <li className="flex items-center gap-2">
                <i className="bx bx-check text-cyan-400"></i>
                Project 3: Drum Machine
              </li>
              <li className="flex items-center gap-2">
                <i className="bx bx-check text-cyan-400"></i>
                Project 4: JavaScript Calculator
              </li>
              <li className="flex items-center gap-2">
                <i className="bx bx-check text-cyan-400"></i>
                Project 5: 25 + 5 Clock
              </li>
            </ul>
            <a
              href="https://www.freecodecamp.org/certification/fcc17d09948-8ce7-4a77-ace5-a75f86d4688c/front-end-development-libraries"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 text-white font-semibold text-sm py-2.5 px-6 rounded-xl shadow-lg transition-all duration-300 hover:scale-105"
            >
              View Certificate <FaChevronRight className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* Portfolio Item 4 */}
        <div className="relative overflow-hidden rounded-2xl shadow-2xl group border border-white/10 bg-white/5 backdrop-blur-sm">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <img
            src="Go2Cod.PNG"
            alt="Go2Cod Projects"
            className="w-full h-[350px] object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F14]/95 via-[#0F0F14]/90 to-transparent text-white flex flex-col justify-end items-center px-8 py-6 transform translate-y-full group-hover:translate-y-0 transition-all duration-500">
            <h4 className="text-xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              Projects Completed:
            </h4>
            <ul className="text-sm space-y-2 mb-4 text-gray-300">
              <li>
                <a
                  href="https://hilarygh.github.io/GO2COD_WD_01/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-cyan-400 transition-colors"
                >
                  <i className="bx bx-link-external text-cyan-400"></i>
                  Project 1: To-Do List App
                </a>
              </li>
              <li>
                <a
                  href="https://hilarygh.github.io/GO2COD_WD_02/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-cyan-400 transition-colors"
                >
                  <i className="bx bx-link-external text-cyan-400"></i>
                  Project 2: Quiz App
                </a>
              </li>
              <li>
                <a
                  href="https://hilarygh.github.io/GO2COD_WD_03/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-cyan-400 transition-colors"
                >
                  <i className="bx bx-link-external text-cyan-400"></i>
                  Project 3: Calculator App
                </a>
              </li>
              <li>
                <a
                  href="https://hilarygh.github.io/GO2COD_WD_04/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-cyan-400 transition-colors"
                >
                  <i className="bx bx-link-external text-cyan-400"></i>
                  Project 4: Responsive Image Gallery
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Portfolio Item 5 */}
        <div className="relative overflow-hidden rounded-2xl shadow-2xl group border border-white/10 bg-white/5 backdrop-blur-sm">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <img
            src="Backend development and API.PNG"
            alt="Backend Certificate"
            className="w-full h-[350px] object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F14]/95 via-[#0F0F14]/90 to-transparent text-white flex flex-col justify-end items-center px-8 py-6 transform translate-y-full group-hover:translate-y-0 transition-all duration-500">
            <h4 className="text-xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              Projects Completed:
            </h4>
            <ul className="text-sm space-y-1.5 mb-4 text-gray-300">
              <li className="flex items-center gap-2">
                <i className="bx bx-check text-cyan-400"></i>
                Project 1: Timestamp Microservice
              </li>
              <li className="flex items-center gap-2">
                <i className="bx bx-check text-cyan-400"></i>
                Project 2: Request Header Parser Microservice
              </li>
              <li className="flex items-center gap-2">
                <i className="bx bx-check text-cyan-400"></i>
                Project 3: URL Shortener Microservice
              </li>
              <li className="flex items-center gap-2">
                <i className="bx bx-check text-cyan-400"></i>
                Project 4: Exercise Tracker
              </li>
              <li className="flex items-center gap-2">
                <i className="bx bx-check text-cyan-400"></i>
                Project 5: File Metadata Microservice
              </li>
            </ul>
            <a
              href="https://www.freecodecamp.org/certification/fcc17d09948-8ce7-4a77-ace5-a75f86d4688c/back-end-development-and-apis"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 text-white font-semibold text-sm py-2.5 px-6 rounded-xl shadow-lg transition-all duration-300 hover:scale-105"
            >
              View Certificate <FaChevronRight className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
