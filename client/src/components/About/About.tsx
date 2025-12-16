const About = () => {
  const highlights = [
    {
      icon: "bx-code-alt",
      title: "Self-Taught Developer",
      description: "Passionate about continuous learning and staying updated with latest technologies"
    },
    {
      icon: "bx-briefcase",
      title: "Mechanical Engineer",
      description: "Engineering background from Addis Ababa University with strong analytical skills"
    },
    {
      icon: "bx-rocket",
      title: "Full Stack Expertise",
      description: "Building end-to-end solutions from frontend to backend with modern technologies"
    },
    {
      icon: "bx-group",
      title: "Agile Practitioner",
      description: "Experienced in Agile/Scrum methodologies for effective collaboration"
    }
  ];

  return (
    <section
      id="about"
      className="relative min-h-screen px-4 sm:px-6 md:px-12 lg:px-20 py-20 bg-gradient-to-br from-[#0F0F14] via-[#1a1a24] to-[#0F0F14] overflow-hidden"
    >

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 w-fit mb-6 mx-auto relative z-10">
            <span className="w-2 h-2 bg-violet-400 rounded-full animate-pulse"></span>
            <span className="text-sm text-gray-300">About Me</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-purple-400 to-violet-400">
              About
            </span>{" "}
            <span className="text-white">Me</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Self-Taught Full Stack Developer with an Engineering Mindset
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Left Column - Introduction */}
          <div className="space-y-6 lg:space-y-8">
            {/* Name Badge */}
            <div className="inline-flex items-center gap-3 px-4 py-2.5 sm:px-5 sm:py-3 rounded-xl border border-white/10 z-10 relative">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-r from-violet-600 to-purple-600 flex items-center justify-center relative z-10">
                <span className="text-white font-bold text-base sm:text-lg">ሒ</span>
              </div>
              <div className="relative z-10">
                <p className="text-white font-semibold text-base sm:text-lg">ሂላሪ ገብረመድህን</p>
                <p className="text-violet-300 text-xs sm:text-sm">Hilari Gebremedhin</p>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-4 sm:space-y-6">
              <div className="relative p-4 sm:p-6 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 z-10 bg-transparent">
                <p className="text-gray-100 text-sm sm:text-base lg:text-lg leading-relaxed relative z-10">
                  Hi, I'm <span className="text-violet-400 font-semibold">Hilari Gebremedhin</span>, a
                  self-taught Full Stack Developer with a strong engineering mindset and a passion
                  for creating meaningful digital experiences. I hold a Mechanical Engineering
                  degree from Addis Ababa University, which shaped my analytical thinking and
                  problem-solving skills.
                </p>
              </div>

              <div className="relative p-4 sm:p-6 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 z-10 bg-transparent">
                <p className="text-gray-100 text-sm sm:text-base lg:text-lg leading-relaxed relative z-10">
                  My journey into software development started from curiosity and a drive to build
                  solutions people actually use. I taught myself modern web technologies—HTML, CSS,
                  JavaScript, React, Node.js, and databases. Every project I build focuses on clean
                  design, high performance, and user-centered functionality.
                </p>
              </div>

              <div className="relative p-4 sm:p-6 rounded-2xl border border-white/10 hover:border-white/20 z-10 bg-transparent">
                <p className="text-gray-100 text-sm sm:text-base lg:text-lg leading-relaxed relative z-10">
                  Being self-taught made me resourceful, fast-learning, and deeply committed. I
                  enjoy turning ideas into complete products, and I apply Agile/Scrum practices to
                  collaborate effectively. My mission is to build scalable websites and powerful
                  digital solutions that solve real-world problems. Let's create something
                  exceptional together!
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 relative z-10">
              <a
                href="Hilari Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-sm sm:text-base text-white overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-white/20 z-10"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-violet-600 via-purple-600 to-violet-600 z-0"></span>
                <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-violet-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></span>
                <span className="relative z-10 flex items-center gap-2 sm:gap-3">
                  <i className="bx bx-download text-lg sm:text-xl"></i>
                  <span className="whitespace-nowrap">Download My Resume</span>
                  <i className="bx bx-right-arrow-alt text-lg sm:text-xl group-hover:translate-x-1 transition-transform"></i>
                </span>
              </a>
              <a
                href="#portfolio"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-sm sm:text-base text-white border border-white/20 hover:border-white/30 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-white/10"
              >
                <i className="bx bx-certificate text-lg sm:text-xl"></i>
                <span className="whitespace-nowrap">View Certifications</span>
                <i className="bx bx-right-arrow-alt text-lg sm:text-xl group-hover:translate-x-1 transition-transform"></i>
              </a>
            </div>
          </div>

          {/* Right Column - Highlights */}
          <div className="space-y-4 sm:space-y-6 mt-8 lg:mt-0">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-4 sm:mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-purple-400">
                Key Highlights
              </span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3 sm:gap-4">
              {highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="group relative p-4 sm:p-6 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-white/10 z-10 bg-transparent"
                >
                  <div className="flex items-start gap-3 sm:gap-4 relative z-10">
                    <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-violet-600 to-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 relative z-10">
                      <i className={`bx ${highlight.icon} text-white text-xl sm:text-2xl`}></i>
                    </div>
                    <div className="flex-1 relative z-10 min-w-0">
                      <h4 className="text-base sm:text-lg font-semibold text-white mb-1.5 sm:mb-2 transition-colors">
                        {highlight.title}
                      </h4>
                      <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

