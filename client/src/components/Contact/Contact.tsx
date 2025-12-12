import { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await axios.post(
        "https://hillary-portfolio.onrender.com/send-email",
        formData
      );
      alert("Message sent successfully!");
    } catch (error) {
      alert("Failed to send message.");
    }
  };

  return (
    <section id="contact" className="relative min-h-screen py-20 px-4 sm:px-6 md:px-12 lg:px-20 bg-gradient-to-br from-[#0F0F14] via-[#1a1a24] to-[#0F0F14] overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(124,58,237,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(124,58,237,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      {/* Section Header */}
      <div className="relative z-10 text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 w-fit mb-6">
          <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></span>
          <span className="text-sm text-gray-300">Get In Touch</span>
        </div>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-4">
          Contact{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400">
            Me
          </span>
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Feel free to reach out for collaborations, questions, or just to say hi!
        </p>
      </div>

      <div className="relative z-10 flex flex-col md:flex-row justify-center gap-12 items-start max-w-6xl mx-auto">
        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 shadow-2xl"
        >
          <div className="space-y-6">
            <div>
              <label htmlFor="name" className="block font-semibold mb-2 text-white">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="w-full p-3 rounded-xl bg-white/5 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all"
              />
            </div>

            <div>
              <label htmlFor="email" className="block font-semibold mb-2 text-white">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                className="w-full p-3 rounded-xl bg-white/5 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all"
              />
            </div>

            <div>
              <label htmlFor="message" className="block font-semibold mb-2 text-white">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows={5}
                required
                className="w-full p-3 rounded-xl bg-white/5 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="group w-full relative px-8 py-4 rounded-xl font-semibold text-white overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-purple-600 via-purple-500 to-indigo-600"></span>
              <span className="absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative flex items-center justify-center gap-2">
                <i className="bx bx-send text-xl"></i>
                Send Message
                <i className="bx bx-right-arrow-alt text-xl group-hover:translate-x-1 transition-transform"></i>
              </span>
            </button>
          </div>
        </form>

        {/* Contact Info */}
        <div className="w-full max-w-md bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 shadow-2xl">
          <h3 className="text-2xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
            Get in Touch
          </h3>
          
          <div className="space-y-6 mb-8">
            <div className="flex items-start gap-4 group">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <i className="bx bxs-envelope text-xl text-white"></i>
              </div>
              <div>
                <p className="text-gray-400 text-sm mb-1">Email</p>
                <a 
                  href="mailto:hilarygebremedhn28@gmail.com"
                  className="text-white hover:text-cyan-400 transition-colors"
                >
                  hilarygebremedhn28@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 group">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <i className="bx bx-phone text-xl text-white"></i>
              </div>
              <div>
                <p className="text-gray-400 text-sm mb-1">Phone</p>
                <a 
                  href="tel:+251989834889"
                  className="text-white hover:text-cyan-400 transition-colors"
                >
                  +251 989834889
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 group">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <i className="bx bx-map text-xl text-white"></i>
              </div>
              <div>
                <p className="text-gray-400 text-sm mb-1">Location</p>
                <p className="text-white">Addis Ababa, Ethiopia</p>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <p className="text-gray-400 text-sm mb-4">Connect with me</p>
            <ul className="flex gap-4">
              {[
                { href: "https://web.facebook.com/hilary.gebremedhn/", icon: "bxl-facebook", color: "hover:text-blue-500" },
                { href: "https://www.linkedin.com/in/hilary-gebremedhn-97528b20b", icon: "bxl-linkedin", color: "hover:text-blue-600" },
                { href: "https://x.com/hilarygebr71591", icon: "bxl-twitter", color: "hover:text-sky-400" },
                { href: "https://github.com/HilaryGH", icon: "bxl-github", color: "hover:text-gray-300" },
              ].map((social, index) => (
                <li key={index}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-white ${social.color} transition-all duration-300 hover:scale-110 hover:bg-white/10 hover:border-white/30 hover:shadow-lg hover:shadow-cyan-500/20`}
                  >
                    <i className={`bx ${social.icon} text-2xl`} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
