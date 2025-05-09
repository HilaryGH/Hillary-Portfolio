import { FaChevronRight } from "react-icons/fa";

const Portfolio = () => {
  return (
    <section id="portfolio" className="px-6 py-12">
      <h2 className="text-center text-2xl md:text-3xl font-bold mb-10">
        My
        <span className="text-[#6B6B6B] text-xl md:text-2xl">
          {" "}
          Development Journey
        </span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-3">
        {/* Portfolio Item 1 */}
        <div className="relative overflow-hidden rounded-xl shadow-lg group">
          <img
            src="FrontEnd Development certification.PNG"
            alt="Responsive Web Design Certificate"
            className="w-full h-[350px] object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#4B4B4B]/90 via-black/80 to-transparent flex flex-col justify-center items-center px-8 text-white transform translate-y-full group-hover:translate-y-0 transition-all duration-500">
            <h4 className="text-xl font-bold mb-2">Projects Completed:</h4>
            <ul className="text-sm space-y-1 mb-4">
              <li>Project 1: Build a Survey Form</li>
              <li>Project 2:Build a Tribute Page</li>
              <li>Project 3: Build a Technical Documentation Page</li>
              <li>Project 4: Build a Product Landing Page</li>
              <li>Project 5:Build a Personal Portfolio Webpage</li>
            </ul>
            <a
              href="https://www.freecodecamp.org/certification/fcc17d09948-8ce7-4a77-ace5-a75f86d4688c/responsive-web-design"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#4B4B4B] hover:bg-[#6B6B6B] text-white font-semibold text-sm py-2 px-4 rounded shadow"
            >
              Show <FaChevronRight />
            </a>
          </div>
        </div>

        {/* Portfolio Item 2 */}
        <div className="relative overflow-hidden rounded-xl shadow-lg group">
          <img
            src="Javascript certification.PNG"
            alt="JavaScript Certificate"
            className="w-full h-[350px] object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#4B4B4B]/90 via-black/80 to-transparent flex flex-col justify-center items-center px-8 text-white transform translate-y-full group-hover:translate-y-0 transition-all duration-500">
            <h4 className="text-xl font-bold mb-2">Projects Completed:</h4>
            <ul className="text-sm space-y-1 mb-4">
              <li>Project 1: Palindrome Checker</li>
              <li>Project 2: Roman Numeral Converter</li>
              <li>Project 3: Telephone Number Validator</li>
              <li>Project 4: Cash Register</li>
              <li>Project 5: Pokemon Search App</li>
            </ul>
            <a
              href="https://www.freecodecamp.org/certification/fcc17d09948-8ce7-4a77-ace5-a75f86d4688c/javascript-algorithms-and-data-structures-v8"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#4B4B4B] hover:bg-[#6B6B6B] text-white font-semibold text-sm py-2 px-4 rounded shadow"
            >
              Show <FaChevronRight />
            </a>
          </div>
        </div>

        {/* Portfolio Item 3 */}
        <div className="relative overflow-hidden rounded-xl shadow-lg group">
          <img
            src="FrontEnd Development certification.PNG"
            alt="Frontend Libraries Certificate"
            className="w-full h-[350px] object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#4B4B4B] via-black/80 to-transparent text-white flex flex-col justify-center items-center p-8 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
            <h4 className="text-xl md:text-2xl font-semibold mb-2">
              Projects Completed:
            </h4>
            <ul className="text-sm md:text-base space-y-2 mb-4">
              <li>Project 1: Random Quote Machine</li>
              <li>Project 2: Markdown Previewer</li>
              <li>Project 3: Drum Machine</li>
              <li>Project 4: JavaScript Calculator</li>
              <li>Project 5: 25 + 5 Clock</li>
            </ul>
            <a
              href="https://www.freecodecamp.org/certification/fcc17d09948-8ce7-4a77-ace5-a75f86d4688c/front-end-development-libraries"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#4B4B4B] hover:bg-[#6B6B6B] text-white font-semibold text-sm py-2 px-4 rounded shadow"
            >
              Show <FaChevronRight />
            </a>
          </div>
        </div>

        {/* Portfolio Item 4 */}
        <div className="relative overflow-hidden rounded-xl shadow-lg group">
          <img
            src="Go2Cod.PNG"
            alt="Go2Cod Projects"
            className="w-full h-[350px] object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#4B4B4B] via-black/80 to-transparent text-white flex flex-col justify-center items-center p-8 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
            <h4 className="text-xl md:text-2xl font-semibold mb-2">
              Projects Completed:
            </h4>
            <ul className="text-sm md:text-base space-y-2">
              <li>
                <a
                  href="https://hilarygh.github.io/GO2COD_WD_01/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="no-underline hover:text-[#6B6B6B]"
                >
                  Project 1: To-Do List App
                </a>
              </li>
              <li>
                <a
                  href="https://hilarygh.github.io/GO2COD_WD_02/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="no-underline hover:text-[#6B6B6B]"
                >
                  Project 2: Quiz App
                </a>
              </li>
              <li>
                <a
                  href="https://hilarygh.github.io/GO2COD_WD_03/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="no-underline hover:text-[#6B6B6B]"
                >
                  Project 3: Calculator App
                </a>
              </li>
              <li>
                <a
                  href="https://hilarygh.github.io/GO2COD_WD_04/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="no-underline hover:text-[#6B6B6B]"
                >
                  Project 4: Responsive Image Gallery
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* Portfolio Item 5 */}
        <div className="relative overflow-hidden rounded-xl shadow-lg group">
          <img
            src="Backend development and API.PNG"
            alt="Responsive Web App Certificate"
            className="w-full h-[350px] object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#4B4B4B] via-black/80 to-transparent text-white flex flex-col justify-center items-center p-8 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
            <h4 className="text-xl md:text-2xl font-semibold mb-2">
              Projects Completed:
            </h4>
            <ul className="text-sm md:text-base space-y-2">
              <li>Project 1: Timestamp Microservice</li>
              <li>Project 2: Request Header Parser Microservice</li>
              <li>Project 3:URL Shortener Microservice</li>
              <li>Project 4:Exercise Tracker</li>
              <li>Project 5: File Metadata Microservice</li>
            </ul>
            <a
              href="https://www.freecodecamp.org/certification/fcc17d09948-8ce7-4a77-ace5-a75f86d4688c/responsive-web-design"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center px-5 py-2 font-bold bg-[#4B4B4B] text-white rounded shadow-lg hover:bg-[#6B6B6B]"
            >
              Show <FaChevronRight className="ml-2 text-lg" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
