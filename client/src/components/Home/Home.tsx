import { useEffect, useState } from "react";

const Home = () => {
  const phrases = ["Hi, I'm Hillary", "Full-Stack Developer"];
  const [text, setText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(150); // typing speed

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];
    const timeout = setTimeout(() => {
      setText((prev) =>
        isDeleting
          ? currentPhrase.substring(0, prev.length - 1)
          : currentPhrase.substring(0, prev.length + 1)
      );

      if (!isDeleting && text === currentPhrase) {
        setTimeout(() => setIsDeleting(true), 1000);
        setSpeed(50);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % phrases.length);
        setSpeed(150);
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, phraseIndex]);

  useEffect(() => {
    const image = document.querySelector(".profile-img") as HTMLElement;
    if (image) {
      image.animate(
        [
          { borderRadius: "50% 40% 30% 70%/60% 30% 70% 40%" },
          { borderRadius: "40% 60% 70% 40%/50% 60% 30% 60%" },
          { borderRadius: "50% 40% 30% 70%/60% 30% 70% 40%" },
        ],
        {
          duration: 8000,
          iterations: Infinity,
        }
      );
    }
  }, []);

  return (
    <section
      id="home"
      className="flex flex-col-reverse md:flex-row justify-center items-center min-h-screen px-5 md:px-20 pt-20 text-white gap-2 shadow-md"
    >
      {/* Left Content */}
      <div className="max-w-xl text-center md:text-left">
        <h1 className="text-2xl md:text-3xl font-bold leading-tight mb-4 w-fit mx-auto md:mx-0">
          <span className="text-[#6B6B6B]">{text}</span>
          <span className="border-r-2 border-white animate-pulse ml-1"></span>
        </h1>
        <p className="text-sm md:text-lg mb-8 w-full max-w-xs sm:max-w-sm md:w-[500px] px-4 text-[#333] mx-auto md:mx-0">
          Proficient in creating dynamic web applications with expertise in both
          frontend and backend technologies.
        </p>

        {/* Buttons */}
        <div className="flex w-[620px] gap-[20px] justify-center md:justify-start mb-8">
          <a
            href="#hire"
            className="relative inline-flex items-center justify-center px-4 py-1 overflow-hidden font-semibold text-[#ffffff] transition duration-500 bg-[#6B6B6B] shadow-md rounded-md group hover:text-[#6B6B6B]"
          >
            <span className="absolute inset-0 w-0 h-full transition-all bg-[#ffffff] group-hover:w-full duration-500 ease-in-out"></span>
            <span className="relative">Hire Me</span>
          </a>
          <a
            href="#contact"
            className="relative inline-flex items-center justify-center px-4 py-1 overflow-hidden font-semibold text-[#6B6B6B] transition duration-500  shadow-md border-2 border-white rounded-md group hover:text-[#ffffff]"
          >
            <span className="absolute inset-0 w-0 h-full transition-all bg-[#6B6B6B] group-hover:w-full duration-500 ease-in-out"></span>
            <span className="relative">Let's Talk</span>
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center md:justify-start gap-6">
          <a
            href="https://www.facebook.com/yourprofile"
            className="relative w-10 h-10 flex items-center justify-center border-2 border-[#6B6B6B] rounded-full text-[#6B6B6B] group hover:text-white overflow-hidden focus:outline-none focus:ring-0"
          >
            <i className="bx bxl-facebook text-xl z-10 transition-colors duration-500 group-hover:text-white"></i>
            <span className="absolute inset-[-2px] w-0 h-[calc(100%+4px)] bg-[#1877F2] group-hover:w-[calc(100%+4px)] transition-all duration-500 ease-in-out z-0 rounded-full"></span>
          </a>
          <a
            href="https://twitter.com/yourhandle"
            className="relative w-10 h-10 flex items-center justify-center border-2 border-[#6B6B6B] rounded-full text-[#6B6B6B] group hover:text-white overflow-hidden focus:outline-none focus:ring-0"
          >
            <i className="bx bxl-twitter text-xl z-10 transition-colors duration-500 group-hover:text-white"></i>
            <span className="absolute inset-[-2px] w-0 h-[calc(100%+4px)] bg-[#1DA1F2] group-hover:w-[calc(100%+4px)] transition-all duration-500 ease-in-out z-0 rounded-full"></span>
          </a>
          <a
            href="https://www.linkedin.com/in/hilary-gebremedhn-97528b20b"
            className="relative w-10 h-10 flex items-center justify-center border-2 border-[#6B6B6B] rounded-full text-[#6B6B6B] group hover:text-white overflow-hidden focus:outline-none focus:ring-0"
          >
            <i className="bx bxl-linkedin text-xl z-10 transition-colors duration-500 group-hover:text-white"></i>
            <span className="absolute inset-[-2px] w-0 h-[calc(100%+4px)] bg-[#0A66C2] group-hover:w-[calc(100%+4px)] transition-all duration-500 ease-in-out z-0 rounded-full"></span>
          </a>
          <a
            href="https://github.com/yourusername"
            className="relative w-10 h-10 flex items-center justify-center border-2 border-[#6B6B6B] rounded-full text-[#6B6B6B] group hover:text-white overflow-hidden focus:outline-none focus:ring-0"
          >
            <i className="bx bxl-github text-xl z-10 transition-colors duration-500 group-hover:text-white"></i>
            <span className="absolute inset-[-2px] w-0 h-[calc(100%+4px)] bg-[#181717] group-hover:w-[calc(100%+4px)] transition-all duration-500 ease-in-out z-0 rounded-full"></span>
          </a>
        </div>
      </div>

      {/* Right Image */}
      <div className="mt-10 md:mt-0">
        <img
          src="20200511_110505.jpg"
          alt="Profile"
          className="w-50 h-50      /* Mobile size */
      md:w-70 md:h-70
      lg:w-90 lg:h-90
     object-cover shadow-2xl profile-img"
        />
      </div>
    </section>
  );
};

export default Home;
