import { useEffect, useState } from "react";

const Home = () => {
  const phrases = ["Hi, I'm Hillary", "Full-Stack Developer"];
  const [text, setText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(150);

  // Typing Animation
  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];
    const timeout = setTimeout(() => {
      setText((prev) =>
        isDeleting
          ? currentPhrase.substring(0, prev.length - 1)
          : currentPhrase.substring(0, prev.length + 1)
      );

      if (!isDeleting && text === currentPhrase) {
        setTimeout(() => setIsDeleting(true), 1000);
        setSpeed(60);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % phrases.length);
        setSpeed(150);
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, phraseIndex]);

  return (
    <section
      id="home"
      className="relative h-[100vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-violet-600 via-purple-600 to-violet-600"
    >
      {/* Brand Color Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-600 via-purple-600 to-violet-600"></div>

      {/* Creative SVG Curves with Brand Colors */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Top Right Curve with Image - More Visible */}
        <svg className="absolute top-0 right-0 w-full h-3/4" style={{ zIndex: 1 }}>
          <defs>
            <clipPath id="topRightCurve">
              <path d="M1440,0 Q1200,100 1000,150 T700,200 Q500,230 300,250 T0,280 L0,0 Z" />
            </clipPath>
            <filter id="imageGlow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          <image
            href="20200511_110505.jpg"
            x="-10%"
            y="-5%"
            width="120%"
            height="110%"
            preserveAspectRatio="xMidYMid cover"
            clipPath="url(#topRightCurve)"
            filter="url(#imageGlow)"
            opacity="0.9"
            className="animate-pulse"
            style={{ animationDuration: '4s' }}
          />
        </svg>

        {/* Additional Image Layer for More Visibility */}
        <div className="absolute top-0 right-0 w-1/2 h-full overflow-hidden" style={{ zIndex: 1 }}>
          <img
            src="20200511_110505.jpg"
            alt="Hillary"
            className="w-full h-full object-cover opacity-30 mix-blend-overlay"
            style={{ transform: 'scale(1.1)' }}
          />
        </div>

        {/* Bottom Right Flowing Curve - Purple */}
        
        {/* Center Wave Curve - Connecting Element */}
        <svg 
          className="absolute top-1/2 left-0 w-full h-full transform -translate-y-1/2" 
          viewBox="0 0 1440 400" 
          preserveAspectRatio="none"
          style={{ zIndex: 1 }}
        >
          <defs>
            <linearGradient id="gradient3" x1="0%" y1="50%" x2="100%" y2="50%">
              <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.6" />
              <stop offset="50%" stopColor="#a855f7" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.5" />
            </linearGradient>
          </defs>
          <path
            d="M0,200 Q360,150 720,200 T1440,200 L1440,400 Q1080,350 720,400 T0,400 Z"
            fill="url(#gradient3)"
            className="animate-pulse"
            style={{ animationDuration: '6s', animationDelay: '2s' }}
          />
        </svg>

        {/* Left Side Accent Curve */}
     
        
        {/* Right Side Accent Curve */}
       
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 mb-6 bg-white/15 backdrop-blur-md rounded-full border border-white/30 shadow-2xl">
            <span className="w-2 h-2 bg-violet-400 rounded-full animate-pulse mr-2"></span>
            <span className="text-xs font-semibold text-white drop-shadow-2xl font-bold">
              Available for opportunities
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 leading-tight">
            <span className="block text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)] mb-2">
              {text || "Hi, I'm Hillary"}
            </span>
           
          </h1>

          {/* Subheadline */}
          <p className="text-base md:text-lg text-white mb-8 leading-relaxed max-w-3xl mx-auto drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)] font-semibold">
            Crafting scalable, modern, and user-centered applications using cutting-edge full-stack technologies.
            <span className="block mt-2 text-violet-100 font-medium">
              Turning ideas into digital experiences.
            </span>
          </p>

          {/* CTA Buttons */}
          <div className="flex justify-center items-center gap-4 mb-8 flex-wrap">
            <a
              href="#hire"
              className="group relative px-12 py-4 bg-gradient-to-r from-violet-600 via-purple-600 to-violet-600 text-white text-lg font-bold rounded-2xl shadow-2xl hover:shadow-violet-500/50 transform hover:scale-110 transition-all duration-300 overflow-hidden inline-block text-center backdrop-blur-sm border-2 border-white/30"
            >
              <span className="relative z-10 flex items-center gap-3">
                <span>Hire Me</span>
                <i className="bx bx-right-arrow-alt text-xl group-hover:translate-x-2 transition-transform duration-300"></i>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-violet-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </a>

            <a
              href="#contact"
              className="group relative px-12 py-4 bg-white/15 backdrop-blur-md text-white text-lg font-bold rounded-2xl shadow-2xl hover:shadow-violet-500/50 transform hover:scale-110 transition-all duration-300 overflow-hidden inline-block text-center border-2 border-white/30"
            >
              <span className="relative z-10 flex items-center gap-3">
                <span>Let's Talk</span>
                <i className="bx bx-message-rounded text-xl group-hover:rotate-12 group-hover:scale-110 transition-all duration-300"></i>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-violet-600 via-purple-600 to-violet-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center gap-5 pt-4">
            {[
              {
                href: "https://web.facebook.com/hilary.gebremedhn/",
                icon: "bxl-facebook",
              },
              { 
                href: "https://x.com/hilarygebr71591", 
                icon: "bxl-twitter",
              },
              {
                href: "https://www.linkedin.com/in/hilary-gebremedhn-97528b20b",
                icon: "bxl-linkedin",
              },
              { 
                href: "https://github.com/HilaryGH", 
                icon: "bxl-github",
              },
            ].map((s, index) => (
              <a
                key={index}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex justify-center items-center text-white hover:text-violet-200 transition-all duration-300 ease-out hover:scale-125 active:scale-95"
                aria-label={`Visit ${s.icon.replace('bxl-', '').replace('bx-', '')} profile`}
              >
                <i className={`bx ${s.icon} text-2xl group-hover:scale-110 transition-transform duration-300 drop-shadow-lg`} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <a href="#about" className="flex flex-col items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center shadow-lg">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </a>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 3s ease infinite;
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          33% { transform: translateY(-20px) translateX(10px); }
          66% { transform: translateY(10px) translateX(-10px); }
        }
        @keyframes smooth-pulse {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.05); }
        }
      `}</style>
    </section>
  );
};

export default Home;
