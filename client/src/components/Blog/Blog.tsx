import { FaArrowRight, FaCalendarAlt } from "react-icons/fa";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "What I Learned Building a Production-Level Marketplace with React and Node.js",
      summary: "Building WANAW and HomeHub taught me how to architect scalable marketplaces, handle multi-vendor systems, and manage complex data flows in real-world applications.",
      tags: ["React", "Node.js", "Full-Stack", "Marketplace"],
      date: "2024",
      readTime: "8 min read",
      slug: "building-production-marketplace"
    },
    {
      id: 2,
      title: "Designing Role-Based Dashboards in a Full-Stack Application",
      summary: "Creating separate dashboards for service providers, customers, and admins required careful state management, permission handling, and UX considerations.",
      tags: ["React", "UX Design", "State Management", "Full-Stack"],
      date: "2024",
      readTime: "6 min read",
      slug: "role-based-dashboards"
    },
    {
      id: 3,
      title: "What Working on My First Paid Web Project Taught Me",
      summary: "Working with real clients on WANAW changed how I approach development—from communication and deadlines to handling production challenges.",
      tags: ["Client Work", "Lessons Learned", "Production"],
      date: "2024",
      readTime: "5 min read",
      slug: "first-paid-project-lessons"
    }
  ];

  return (
    <section id="blog" className="relative min-h-screen px-4 sm:px-6 md:px-12 lg:px-20 py-20 bg-gradient-to-br from-[#0F0F14] via-[#1a1a24] to-[#0F0F14] overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-violet-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 w-fit mb-6 mx-auto">
            <span className="w-2 h-2 bg-violet-400 rounded-full animate-pulse"></span>
            <span className="text-sm text-gray-300">Blog</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-purple-400 to-violet-400">
              My Blog
            </span>
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
            I write about my journey as a full-stack developer, sharing lessons from real projects, 
            technical challenges I've solved, and things I learn along the way.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="group relative flex flex-col h-full rounded-2xl border border-white/10 hover:border-violet-400/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-violet-500/20 bg-transparent overflow-hidden"
            >
              {/* Content */}
              <div className="flex flex-col h-full p-6">
                {/* Date & Read Time */}
                <div className="flex items-center gap-4 mb-4 text-sm text-gray-400">
                  <span className="flex items-center gap-1.5">
                    <FaCalendarAlt className="text-violet-400" />
                    {post.date}
                  </span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-violet-300 transition-colors leading-tight">
                  {post.title}
                </h3>

                {/* Summary */}
                <p className="text-gray-300 text-sm leading-relaxed mb-6 flex-grow">
                  {post.summary}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {post.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 rounded-lg bg-violet-500/10 border border-violet-400/20 text-violet-300 text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Read More Button */}
                <a
                  href={`#blog/${post.slug}`}
                  className="inline-flex items-center gap-2 text-violet-400 hover:text-violet-300 font-semibold text-sm group-hover:gap-3 transition-all duration-300"
                >
                  Read More
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

              {/* Hover Gradient Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-violet-600/0 to-purple-600/0 group-hover:from-violet-600/5 group-hover:to-purple-600/5 transition-all duration-300 pointer-events-none -z-10"></div>
            </article>
          ))}
        </div>

        {/* View All Posts Link */}
        <div className="text-center mt-12">
          <a
            href="#blog/all"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-white border border-white/10 hover:border-violet-400/30 hover:bg-violet-500/10 transition-all duration-300"
          >
            View All Posts
            <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;





