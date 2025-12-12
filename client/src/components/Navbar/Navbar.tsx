import { useState, useEffect } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      const sections = ["home", "about", "work", "blog", "contact"];

      let current = "home";

      sections.forEach((sec) => {
        const el = document.getElementById(sec);
        if (!el) return;

        const rect = el.getBoundingClientRect();

        if (rect.top <= 120 && rect.bottom >= 120) {
          current = sec;
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#work", label: "Work" },
    { href: "#blog", label: "Blog" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header
      className="fixed top-0 left-0 w-full z-50 bg-gradient-to-br from-[#0F0F14] via-[#1a1a24] to-[#0F0F14] backdrop-blur-xl border-b border-white/5 shadow-lg shadow-violet-500/5 transition-all duration-500"
    >
      <nav className="w-full mx-auto px-6 sm:px-10 lg:px-20">
        <div className="flex items-center justify-between h-20">

          {/* LOGO */}
          <a
            href="#home"
            onClick={() => setActiveSection("home")}
            className="group flex items-center gap-4"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-violet-600 via-purple-600 to-indigo-600 rounded-full blur-md opacity-40 group-hover:opacity-70 transition duration-300"></div>

              <div className="relative rounded-full p-2.5 bg-gradient-to-tr from-violet-600 via-purple-500 to-indigo-600 shadow-md shadow-violet-500/20">
                <span className="text-white font-bold text-lg">ሒ</span>
              </div>
            </div>

            <div className="hidden sm:block leading-tight">
              <span className="font-bold text-xl bg-gradient-to-r from-violet-500 to-purple-400 bg-clip-text text-transparent tracking-wide">
                ሒLARY
              </span>
              <div className="text-[11px] text-gray-400 font-medium tracking-wide">
                Full-Stack Developer
              </div>
            </div>
          </a>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => {
              const id = link.href.replace("#", "");
              const isActive = activeSection === id;

              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setActiveSection(id)}
                  className={`group relative px-4 py-2 text-sm font-semibold rounded-xl transition-all duration-300 ${
                    isActive
                      ? "text-violet-400"
                      : "text-gray-300 hover:text-violet-300"
                  }`}
                >
                  {isActive && (
                    <span className="absolute inset-0 bg-violet-500/10 rounded-xl -z-10"></span>
                  )}

                  <span className="relative z-10 flex items-center gap-1">
                    {link.label}
                    {isActive && (
                      <span className="w-1.5 h-1.5 bg-violet-400 rounded-full"></span>
                    )}
                  </span>

                  <span
                    className={`absolute bottom-1 left-1/2 -translate-x-1/2 h-[2px] rounded-full bg-gradient-to-r from-violet-500 to-purple-500 transition-all duration-300 ${
                      isActive ? "w-8" : "w-0 group-hover:w-8"
                    }`}
                  />
                </a>
              );
            })}

            {/* RESUME BUTTON */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 group relative px-6 py-2.5 rounded-xl font-semibold text-sm text-white overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600"></span>
              <span className="absolute inset-0 bg-gradient-to-r from-purple-500 via-violet-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition duration-500"></span>
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition duration-1000"></span>
              <span className="relative z-10 flex items-center gap-2">
                Resume <i className="bx bx-download text-lg"></i>
              </span>
            </a>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2.5 rounded-lg bg-white/10 text-gray-300 hover:text-white border border-white/10 transition-all"
          >
            <i className={`bx text-2xl ${open ? "bx-x" : "bx-menu"}`}></i>
          </button>
        </div>

        {/* MOBILE MENU */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ${
            open ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="pt-4 pb-6 space-y-2 border-t border-white/10 mt-2">
            {navLinks.map((link) => {
              const id = link.href.replace("#", "");
              const isActive = activeSection === id;

              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => {
                    setActiveSection(id);
                    setOpen(false);
                  }}
                  className={`block px-4 py-3 text-base font-medium rounded-xl transition-all ${
                    isActive
                      ? "text-violet-400 bg-violet-500/10"
                      : "text-gray-300 hover:text-violet-300 hover:bg-white/5"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-3 relative px-6 py-3 rounded-xl font-semibold text-white flex items-center gap-2 overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600"></span>
              <span className="relative z-10 flex items-center gap-2">
                <i className="bx bx-download text-lg"></i> Resume
              </span>
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
