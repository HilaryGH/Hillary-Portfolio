const About = () => {
  return (
    <section
      id="about"
      className="flex flex-col md:flex-row justify-center md:justify-between items-center text-center md:text-left shadow-md px-4 md:px-16 py-12 text-off-white gap-6 md:gap-20"
    >
      <div className="Avatar hidden md:block">
        <figure className="w-40 md:w-[400px] h-40 md:h-[400px]">
          <img
            src="20200511_110505.jpg"
            alt="Hilari Gebremedhin"
            className="rounded-full shadow-[0_0_2rem_var(--light-cream)] object-cover w-full h-full"
          />
          <figcaption className="text-center text-lg md:text-xl mt-2">
            ሂላሪ ገብረመድህን
          </figcaption>
        </figure>
      </div>

      <div className="content max-w-2xl">
        <h2 className="text-3xl md:text-5xl font-bold text-center md:text-left">
          About <span className="text-[#6B6B6B] text-xl md:text-3xl">me</span>
        </h2>
        <h3 className="text-2xl md:text-3xl font-semibold mt-2 text-center md:text-left">
          Full Stack <span className="text-warm-yellow">Developer</span>
        </h3>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl mt-6 mb-8 leading-relaxed text-justify max-w-full md:max-w-xl px-4 sm:px-6 md:px-0">
          Hi, I'm Hilari Gebremedhin, a passionate full stack developer with a
          strong foundation in engineering and problem-solving. I hold a degree
          in Mechanical Engineering from Addis Ababa University, where I honed
          my analytical and technical skills. My journey into software
          development began with a desire to create impactful and user-friendly
          web applications. I've built a solid foundation in HTML, CSS,
          JavaScript, React, and am expanding my backend skills with Node.js and
          databases. My hands-on projects showcase creativity, performance, and
          attention to detail. I’m also learning Scrum methodologies to improve
          team collaboration. My goal is to lead meaningful tech projects that
          solve real-world problems. Let's connect and build something impactful
          together!
        </p>

        <a
          href="Hillary resume-1-2.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-5 py-2 bg-[#6B6B6B] text-white text-sm md:text-base rounded shadow-lg transition-transform hover:-translate-y-1"
        >
          Download My Resume
        </a>
      </div>
    </section>
  );
};

export default About;
