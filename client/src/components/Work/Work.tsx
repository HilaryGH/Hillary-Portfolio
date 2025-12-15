import { FaExternalLinkAlt, FaCode } from "react-icons/fa";

const Work = () => {
  const projects = [
    {
      name: "WANAW",
      tagline: "Digital Gifting & Community Support Platform",
      description: "WANAW is a full-stack digital gifting and service marketplace designed around Ethiopian, international, and corporate occasions. Service providers can list giftable services, while individuals can purchase them for themselves or send them as gifts.",
      extendedDescription: "Beyond commerce, the platform includes community-driven support systems, enabling users to request help, donations, and essential services.",
      liveUrl: "https://www.wanaw.et",
      status: "Paid client project (Production)",
      statusType: "paid",
      techStack: ["React", "Tailwind CSS", "Node.js", "Express.js", "MySQL"],
      features: [
        "Multi-vendor service marketplace",
        "Gifting based on Ethiopian holidays, International holidays, Corporate occasions",
        "User authentication & role-based dashboards",
        "Service provider dashboards for managing services",
        "Individual user dashboards for orders & gifting",
        "Community sections: Diaspora community, Embassy support, Medical support",
        "Donation & help request forms",
        "Secure data handling and structured backend APIs"
      ],
      role: [
        "Full-stack developer",
        "Designed database schema",
        "Built REST APIs",
        "Implemented authentication & dashboards",
        "Developed responsive UI with Tailwind"
      ],
      image: "/wanaw.png"
    },
    {
      name: "HomeHub Digital Solution",
      tagline: "Service Marketplace Platform",
      description: "HomeHub is a service marketplace that connects service providers with customers, focusing mainly on home-delivered and on-demand services. Providers can post services under structured categories, while users can easily discover and book them.",
      extendedDescription: "The platform emphasizes discoverability, engagement, and community inclusion.",
      liveUrl: "https://homehubdigital.netlify.app/",
      status: "Production-ready",
      statusType: "production",
      techStack: ["React", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "OAuth"],
      features: [
        "Service provider & customer accounts",
        "Services organized under 6 major categories",
        "Smart service feeds: Most recent, Most booked, Special offers",
        "Promotional banners fetched dynamically",
        "Community sections: Diaspora community, Women's initiatives",
        "Social authentication: Google login, Facebook login",
        "Responsive, mobile-friendly UI"
      ],
      role: [
        "Full-stack development",
        "Backend API design",
        "Authentication integration",
        "UI implementation & responsiveness",
        "Data modeling with MongoDB"
      ],
      image: "/homehub.png"
    }
  ];

  return (
    <section id="work" className="relative min-h-screen px-4 sm:px-6 md:px-12 lg:px-20 py-20 bg-gradient-to-br from-[#0F0F14] via-[#1a1a24] to-[#0F0F14] overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(124,58,237,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(124,58,237,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      {/* Section Header */}
      <div className="relative z-10 text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 w-fit mb-6 mx-auto">
          <span className="w-2 h-2 bg-violet-400 rounded-full animate-pulse"></span>
          <span className="text-sm text-gray-300">Work / Projects</span>
        </div>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-4">
          Featured{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-purple-400 to-violet-400">
            Projects
          </span>
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Real-world applications built with modern technologies and best practices
        </p>
      </div>

      {/* Projects Grid */}
      <div className="relative z-10 max-w-7xl mx-auto space-y-16">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-12 items-center`}
          >
            {/* Project Image */}
            <div className="w-full lg:w-1/2 relative group">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
                <div className="absolute inset-0 bg-gradient-to-br from-violet-600/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                <div className="bg-gradient-to-br from-violet-900/20 to-purple-900/20 flex items-center justify-center relative overflow-hidden min-h-[400px]">
                  <img
                    src={project.image}
                    alt={`${project.name} - Project Screenshot`}
                    className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      // Fallback if image doesn't exist
                      const parent = e.currentTarget.parentElement;
                      if (parent) {
                        e.currentTarget.style.display = 'none';
                        parent.innerHTML = `
                          <div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-violet-900/30 to-purple-900/30">
                            <div class="text-center p-8">
                              <i class="bx bx-code-alt text-6xl text-violet-400/50 mb-4"></i>
                              <p class="text-violet-300/70 text-lg font-semibold">${project.name}</p>
                              <p class="text-violet-400/50 text-sm mt-2">Project Screenshot</p>
                            </div>
                          </div>
                        `;
                      }
                    }}
                  />
                  {/* Fallback placeholder - shown if image fails to load */}
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-violet-900/30 to-purple-900/30 opacity-0 pointer-events-none" id={`fallback-${index}`}>
                    <div className="text-center p-8">
                      <i className="bx bx-code-alt text-6xl text-violet-400/50 mb-4"></i>
                      <p className="text-violet-300/70 text-lg font-semibold">{project.name}</p>
                      <p className="text-violet-400/50 text-sm mt-2">Project Screenshot</p>
                    </div>
                  </div>
                </div>
                {/* Status Badge */}
                <div className="absolute top-4 right-4 z-20">
                  <span className={`inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold backdrop-blur-md ${
                    project.statusType === 'paid' 
                      ? 'bg-green-500/20 text-green-300 border border-green-400/30' 
                      : 'bg-blue-500/20 text-blue-300 border border-blue-400/30'
                  }`}>
                    <span className={`w-2 h-2 rounded-full mr-2 ${
                      project.statusType === 'paid' ? 'bg-green-400' : 'bg-blue-400'
                    }`}></span>
                    {project.status}
                  </span>
                </div>
              </div>
            </div>

            {/* Project Content */}
            <div className="w-full lg:w-1/2 space-y-6">
              {/* Project Title & Tagline */}
              <div>
                <h3 className="text-3xl sm:text-4xl font-extrabold text-white mb-2">
                  <span className="text-violet-400">🟢</span> {project.name}
                </h3>
                <p className="text-xl text-gray-300 mb-4">{project.tagline}</p>
              </div>

              {/* Description */}
              <div className="space-y-3">
                <p className="text-gray-300 leading-relaxed">{project.description}</p>
                <p className="text-gray-400 leading-relaxed">{project.extendedDescription}</p>
              </div>

              {/* Key Features */}
              <div>
                <h4 className="text-lg font-semibold text-violet-300 mb-3 flex items-center gap-2">
                  <FaCode className="text-violet-400" />
                  Key Features
                </h4>
                <ul className="space-y-2">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-300">
                      <i className="bx bx-check-circle text-violet-400 mt-0.5 flex-shrink-0"></i>
                      <span className="text-sm leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack */}
              <div>
                <h4 className="text-lg font-semibold text-violet-300 mb-3">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 rounded-lg bg-violet-500/10 border border-violet-400/20 text-violet-300 text-sm font-medium backdrop-blur-sm hover:bg-violet-500/20 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* My Role */}
              <div>
                <h4 className="text-lg font-semibold text-violet-300 mb-3">My Role</h4>
                <ul className="space-y-1.5">
                  {project.role.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-300 text-sm">
                      <i className="bx bx-right-arrow-alt text-violet-400"></i>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 pt-4">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 text-white font-semibold rounded-xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-violet-500/50"
                >
                  <FaExternalLinkAlt />
                  Live Demo
                </a>
                <button className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300 hover:scale-105">
                  <FaCode />
                  Case Study
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Work;

