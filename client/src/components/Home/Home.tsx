import { useEffect, useState } from "react";

const Home = () => {
  const phrases = ["Hi, I'm Hillary", "Full-Stack Developer"];
  const [text, setText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(150);

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
      className="flex flex-col-reverse md:flex-row justify-center items-center min-h-screen px-5 md:px-20 pt-20 text-white gap-6 shadow-md"
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
        <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-8">
          <a
            href="#hire"
            className="relative inline-flex items-center shadow-md justify-center px-6 py-2 overflow-hidden font-semibold text-white transition duration-500 bg-[#6B6B6B] rounded-md group"
          >
            <span className="absolute inset-0 w-0 bg-white transition-all duration-500 ease-in-out group-hover:w-full z-0"></span>
            <span className="relative z-10 group-hover:text-[#6B6B6B]">
              Hire Me
            </span>
          </a>
          <a
            href="#contact"
            className="relative inline-flex shadow-md items-center justify-center px-6 py-2 overflow-hidden font-semibold text-[#6B6B6B] border-2 border-white rounded-md group"
          >
            <span className="absolute inset-0 w-0 bg-[#6B6B6B] transition-all duration-500 ease-in-out group-hover:w-full z-0"></span>
            <span className="relative z-10 group-hover:text-white">
              Let's Talk
            </span>
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center md:justify-start gap-6">
          {[
            {
              href: "https://web.facebook.com/hilary.gebremedhn/",
              icon: "bxl-facebook",
              bg: "bg-[#1877F2]",
            },
            {
              href: "https://x.com/hilarygebr71591",
              icon: "bxl-twitter",
              bg: "bg-[#1DA1F2]",
            },
            {
              href: "https://www.linkedin.com/in/hilary-gebremedhn-97528b20b",
              icon: "bxl-linkedin",
              bg: "bg-[#0A66C2]",
            },
            {
              href: "https://github.com/HilaryGH",
              icon: "bxl-github",
              bg: "bg-[#181717]",
            },
          ].map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`relative w-10 h-10 flex items-center justify-center border-2 border-[#6B6B6B] rounded-full text-[#6B6B6B] group overflow-hidden`}
            >
              <i
                className={`bx ${social.icon} text-xl z-10 transition-colors duration-500 group-hover:text-white`}
              ></i>
              <span
                className={`absolute inset-[-2px] w-0 h-[calc(100%+4px)] ${social.bg} group-hover:w-[calc(100%+4px)] transition-all duration-500 ease-in-out z-0 rounded-full`}
              ></span>
            </a>
          ))}
        </div>
      </div>

      {/* Right Image */}
      <div className="mt-10 md:mt-0">
        <img
          src="20200511_110505.jpg"
          alt="Profile"
          className="w-48 h-48 md:w-60 md:h-60 lg:w-72 lg:h-72 object-cover shadow-2xl profile-img"
        />
      </div>
    </section>
  );
};

export default Home;
