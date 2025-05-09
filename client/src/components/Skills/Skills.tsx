import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import { SiTypescript, SiGit, SiMongodb } from "react-icons/si";

const Skills = () => {
  const skills = [
    { name: "HTML5", icon: <FaHtml5 />, level: 95 },
    { name: "CSS3", icon: <FaCss3Alt />, level: 90 },
    { name: "JavaScript", icon: <FaJs />, level: 90 },
    { name: "React", icon: <FaReact />, level: 75 },
    { name: "TypeScript", icon: <SiTypescript />, level: 70 },
    { name: "Node.js", icon: <FaNodeJs />, level: 50 },
    { name: "Git", icon: <SiGit />, level: 80 },
    { name: "MongoDB", icon: <SiMongodb />, level: 60 },
  ];

  return (
    <section id="skills" className="py-12">
      <h2 className="text-center text-xl sm:text-2xl md:text-3xl font-bold mb-10">
        My{" "}
        <span className="text-[#6B6B6B] text-lg sm:text-xl md:text-2xl">
          Skills
        </span>
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 px-4 sm:px-6 md:px-10 lg:px-20">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-[#B3B3B3] rounded-lg p-4 sm:p-6 shadow-md text-center transition-transform duration-300 hover:-translate-y-1"
          >
            <div className="text-3xl sm:text-4xl md:text-5xl mb-4 text-[#283618] flex justify-center items-center">
              {skill.icon}
            </div>
            <h4 className="text-base sm:text-lg mb-2 font-semibold">
              {skill.name}
            </h4>
            <p className="text-xs sm:text-sm mb-1 text-[#4B4B4B]">
              {skill.level}%
            </p>
            <div className="w-full bg-gray-300 rounded-full h-2">
              <div
                className="bg-[#6B6B6B] h-2 rounded-full"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
