const About = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col md:flex-row justify-center items-center gap-12 md:gap-20 px-4 sm:px-8 md:px-12 lg:px-20 py-20 bg-gradient-to-br from-[#0F0F14] via-[#1a1a24] to-[#0F0F14] overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(124,58,237,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(124,58,237,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      {/* Avatar Section */}
      <div className="relative flex-shrink-0 w-full md:w-auto">
        <div className="relative group mx-auto md:mx-0 w-64 h-64 md:w-80 md:h-80">
          {/* Glow Effect */}
          <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 via-cyan-500 to-purple-600 rounded-full blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-500 animate-pulse"></div>
          
          {/* Image Container */}
          <div className="relative overflow-hidden rounded-full border-4 border-white/10 shadow-2xl transform transition-all duration-500 group-hover:scale-105 group-hover:border-cyan-400/50 w-full h-full">
            <img
              src="20200511_110505.jpg"
              alt="Hilari Gebremedhin"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"></div>
          </div>

          {/* Name Badge */}
          <div className="mt-6 text-center">
            <figcaption className="text-xl md:text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              ሂላሪ ገብረመድህን
            </figcaption>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="relative z-10 text-white max-w-2xl w-full space-y-6">
        {/* Section Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 w-fit">
          <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></span>
          <span className="text-sm text-gray-300">About Me</span>
        </div>

        {/* Heading */}
        <div className="space-y-3">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400">
              About
            </span>{" "}
            <span className="text-gray-300">me</span>
          </h2>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
            Full Stack{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
              Developer
            </span>
          </h3>
        </div>

        {/* Description */}
        <div className="space-y-4">
          <p className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed">
            Hi, I'm Hilari Gebremedhin, a passionate full stack developer with a
            strong foundation in engineering and problem-solving. I hold a degree
            in Mechanical Engineering from Addis Ababa University, where I honed
            my analytical and technical skills.
          </p>
          <p className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed">
            My journey into software development began with a desire to create impactful and user-friendly
            web applications. I've built a solid foundation in HTML, CSS,
            JavaScript, React, and am expanding my backend skills with Node.js and
            databases. My hands-on projects showcase creativity, performance, and
            attention to detail.
          </p>
          <p className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed">
            I'm also learning Scrum methodologies to improve team collaboration. My goal is to lead meaningful tech projects that
            solve real-world problems. Let's connect and build something impactful
            together!
          </p>
        </div>

        {/* CTA Button */}
        <div className="pt-4">
          <a
            href="Hillary resume-1-2.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-white overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-purple-600 via-purple-500 to-indigo-600"></span>
            <span className="absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <span className="relative flex items-center gap-2">
              <i className="bx bx-download text-xl"></i>
              Download My Resume
              <i className="bx bx-right-arrow-alt text-xl group-hover:translate-x-1 transition-transform"></i>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
