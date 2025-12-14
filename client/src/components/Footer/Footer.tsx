const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-[#0F0F14] via-[#1a1a24] to-[#0F0F14] border-t border-white/10 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(124,58,237,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(124,58,237,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      <div className="relative z-10 text-center py-12 px-4 sm:px-6 md:px-12 lg:px-20">
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Logo/Brand */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="rounded-full p-2 bg-gradient-to-tr from-purple-600 via-cyan-500 to-purple-600 shadow-lg">
              <span className="text-white font-semibold text-lg leading-none">ሒ</span>
            </div>
            <div>
              <span className="font-semibold text-xl text-white tracking-wide">ሒLARY</span>
              <div className="text-xs text-gray-400">Full‑Stack Developer</div>
            </div>
          </div>

          {/* Copyright */}
          <p className="text-gray-400 text-sm md:text-base">
            © 2024 <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 font-semibold">ሂላሪ ገብረመድህን</span>. All Rights Reserved.
          </p>

          {/* Credits */}
          <p className="text-gray-500 text-sm">
            Designed and coded with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-red-500 animate-pulse inline-block">
              ❤️
            </span>{" "}
            using{" "}
            <a
              href="https://react.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 font-semibold hover:from-cyan-300 hover:to-blue-400 transition-all duration-300"
            >
              React
            </a>
            {" & "}
            <a
              href="https://nodejs.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600 font-semibold hover:from-green-300 hover:to-green-500 transition-all duration-300"
            >
              Node.js
            </a>
          </p>

          {/* Social Links */}
          <div className="flex justify-center gap-4 pt-4">
            <a
              href="https://web.facebook.com/hilary.gebremedhn/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 hover:border-cyan-400/50 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/20"
            >
              <i className="bx bxl-facebook text-xl" />
            </a>
            <a
              href="https://www.linkedin.com/in/hilary-gebremedhn-97528b20b"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 hover:border-cyan-400/50 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/20"
            >
              <i className="bx bxl-linkedin text-xl" />
            </a>
            <a
              href="https://x.com/hilarygebr71591"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 hover:border-cyan-400/50 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/20"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a
              href="https://github.com/HilaryGH"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 hover:border-cyan-400/50 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/20"
            >
              <i className="bx bxl-github text-xl" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
