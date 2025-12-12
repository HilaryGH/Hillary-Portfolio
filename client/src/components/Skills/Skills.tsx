import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import { SiTypescript, SiGit, SiMongodb } from "react-icons/si";
import { useEffect, useRef, useState } from "react";

const Skills = () => {
  const skills = [
    { name: "HTML5", icon: <FaHtml5 />, level: 95, color: "from-orange-500 to-red-600" },
    { name: "CSS3", icon: <FaCss3Alt />, level: 90, color: "from-blue-500 to-cyan-600" },
    { name: "JavaScript", icon: <FaJs />, level: 90, color: "from-yellow-400 to-yellow-600" },
    { name: "React", icon: <FaReact />, level: 75, color: "from-cyan-400 to-blue-500" },
    { name: "TypeScript", icon: <SiTypescript />, level: 70, color: "from-blue-500 to-indigo-600" },
    { name: "Node.js", icon: <FaNodeJs />, level: 50, color: "from-green-500 to-green-700" },
    { name: "Git", icon: <SiGit />, level: 80, color: "from-orange-600 to-red-600" },
    { name: "MongoDB", icon: <SiMongodb />, level: 60, color: "from-green-600 to-green-800" },
  ];

  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="skills" 
      ref={sectionRef}
      className="relative min-h-screen py-20 px-4 sm:px-6 md:px-12 lg:px-20 bg-gradient-to-br from-[#0F0F14] via-[#1a1a24] to-[#0F0F14] overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(124,58,237,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(124,58,237,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      {/* Section Header */}
      <div className="relative z-10 text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 w-fit mb-6">
          <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></span>
          <span className="text-sm text-gray-300">Skills & Technologies</span>
        </div>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-4">
          My{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400">
            Skills
          </span>
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Technologies and tools I work with to bring ideas to life
        </p>
      </div>

      {/* Skills Grid */}
      <div className="relative z-10 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/50 hover:shadow-2xl hover:shadow-cyan-500/20"
          >
            {/* Icon */}
            <div className={`text-5xl sm:text-6xl mb-4 flex justify-center items-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6`}>
              <div className="text-white/90 group-hover:text-white">
                {skill.icon}
              </div>
            </div>

            {/* Skill Name */}
            <h4 className="text-lg sm:text-xl mb-3 font-semibold text-white">
              {skill.name}
            </h4>

            {/* Percentage */}
            <p className="text-sm mb-3 text-gray-400 font-medium">
              {skill.level}%
            </p>

            {/* Progress Bar */}
            <div className="w-full bg-white/10 rounded-full h-2.5 overflow-hidden">
              <div
                className={`bg-gradient-to-r ${skill.color} h-2.5 rounded-full transition-all duration-1000 ease-out ${
                  isVisible ? "w-full" : "w-0"
                }`}
                style={{ 
                  width: isVisible ? `${skill.level}%` : "0%",
                  transitionDelay: `${index * 100}ms`
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
