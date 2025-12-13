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
      className="relative flex flex-col lg:flex-row items-center justify-center overflow-hidden"
      style={{ height: 'calc(100vh - 80px)', marginTop: '80px', backgroundColor: 'transparent', paddingTop: '0px', paddingBottom: '20px' }}
    >
      {/* Desktop: Right Side Background Image with Opacity */}
      <div 
        className="hidden lg:block absolute top-0 bottom-0 right-0 left-1/2 w-1/2 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/20200511_110505.jpg)',
          opacity: 0.7,
          zIndex: 1
        }}
      >
        {/* Brand Color Overlay on Image - Very light for better visibility */}
        <div className="absolute inset-0 bg-gradient-to-l from-violet-600/15 via-purple-600/10 to-transparent"></div>
      </div>

      {/* Mobile: Bottom Background Image with Opacity */}
      <div 
        className="lg:hidden absolute top-1/2 bottom-0 left-0 right-0 w-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/20200511_110505.jpg)',
          opacity: 0.7,
          zIndex: 1
        }}
      >
        {/* Brand Color Overlay on Image - Very light for better visibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-violet-600/15 via-purple-600/10 to-transparent"></div>
      </div>

      {/* Desktop: Creative Curved Separator - Vertical */}
      <div className="hidden lg:block absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 2 }}>
        <svg 
          className="absolute top-0 left-0 w-full h-full" 
          viewBox="0 0 1440 800" 
          preserveAspectRatio="none"
        >
          <defs>
            {/* Brand color gradients - More visible, fade out on right side to show image */}
            <linearGradient id="curveGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#7c3aed" stopOpacity="1" />
              <stop offset="40%" stopColor="#8b5cf6" stopOpacity="0.95" />
              <stop offset="60%" stopColor="#9333ea" stopOpacity="0.85" />
              <stop offset="80%" stopColor="#9333ea" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#9333ea" stopOpacity="0" />
            </linearGradient>
            
            <linearGradient id="curveGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.9" />
              <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.75" />
              <stop offset="80%" stopColor="#8b5cf6" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
            </linearGradient>
            
            <linearGradient id="curveGradient3" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.8" />
              <stop offset="60%" stopColor="#a855f7" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#a855f7" stopOpacity="0" />
            </linearGradient>
            
            {/* Glow filter for depth */}
            <filter id="glow">
              <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          
          {/* Main Organic Curve Separator - Smooth Wave Design */}
          <path
            d="M 0,0 L 0,800 C 200,800 400,750 600,600 C 700,500 750,400 800,300 C 850,200 880,100 900,0 L 0,0 Z"
            fill="url(#curveGradient1)"
            stroke="none"
            filter="url(#glow)"
          />
          
          {/* Secondary Curve for Depth - More pronounced wave */}
          <path
            d="M 0,0 L 0,800 C 250,800 450,720 650,580 C 750,500 800,400 850,280 C 880,180 900,100 920,0 L 0,0 Z"
            fill="url(#curveGradient3)"
            stroke="none"
            opacity="0.9"
          />
          
          {/* Tertiary Curve for Layered Effect - Subtle wave */}
          <path
            d="M 0,0 L 0,800 C 300,800 500,700 700,560 C 800,480 850,380 900,260 C 930,160 950,80 960,0 L 0,0 Z"
            fill="url(#curveGradient2)"
            stroke="none"
            opacity="0.7"
          />
          
          {/* Decorative Floating Elements */}
          <circle cx="780" cy="200" r="8" fill="#8b5cf6" opacity="0.6" className="animate-pulse" />
          <circle cx="820" cy="350" r="6" fill="#a855f7" opacity="0.5" className="animate-pulse" style={{ animationDelay: '1s' }} />
          <circle cx="860" cy="550" r="10" fill="#7c3aed" opacity="0.4" className="animate-pulse" style={{ animationDelay: '2s' }} />
        </svg>
      </div>

      {/* Mobile: Creative Curved Separator - Horizontal */}
      <div className="lg:hidden absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 2 }}>
        <svg 
          className="absolute top-0 left-0 w-full h-full" 
          viewBox="0 0 800 1440" 
          preserveAspectRatio="none"
        >
          <defs>
            {/* Brand color gradients - Vertical for mobile */}
            <linearGradient id="mobileCurveGradient1" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#7c3aed" stopOpacity="1" />
              <stop offset="40%" stopColor="#8b5cf6" stopOpacity="0.95" />
              <stop offset="60%" stopColor="#9333ea" stopOpacity="0.85" />
              <stop offset="80%" stopColor="#9333ea" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#9333ea" stopOpacity="0" />
            </linearGradient>
            
            <linearGradient id="mobileCurveGradient2" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.9" />
              <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.75" />
              <stop offset="80%" stopColor="#8b5cf6" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
            </linearGradient>
            
            <linearGradient id="mobileCurveGradient3" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.8" />
              <stop offset="60%" stopColor="#a855f7" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#a855f7" stopOpacity="0" />
            </linearGradient>
            
            {/* Glow filter for depth */}
            <filter id="mobileGlow">
              <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          
          {/* Main Organic Curve Separator - Horizontal Wave Design for Mobile */}
          <path
            d="M 0,0 L 800,0 L 800,500 C 750,500 600,550 500,600 C 400,650 300,700 200,750 C 100,800 50,850 0,900 L 0,0 Z"
            fill="url(#mobileCurveGradient1)"
            stroke="none"
            filter="url(#mobileGlow)"
          />
          
          {/* Secondary Curve for Depth */}
          <path
            d="M 0,0 L 800,0 L 800,480 C 720,480 650,520 550,580 C 450,640 350,690 250,740 C 150,790 80,840 0,880 L 0,0 Z"
            fill="url(#mobileCurveGradient3)"
            stroke="none"
            opacity="0.9"
          />
          
          {/* Tertiary Curve for Layered Effect */}
          <path
            d="M 0,0 L 800,0 L 800,460 C 700,460 600,510 500,560 C 400,610 300,660 200,710 C 100,760 50,810 0,860 L 0,0 Z"
            fill="url(#mobileCurveGradient2)"
            stroke="none"
            opacity="0.7"
          />
        </svg>
      </div>
      
      {/* Additional Decorative Wave at Bottom */}
     
      {/* Hero Content - Top on Mobile, Left on Desktop */}
      <div className="relative z-10 w-full pl-4 sm:pl-6 lg:pl-8 xl:pl-12 pr-4 sm:pr-6 lg:pr-8 pt-0 pb-8 lg:py-20">
        <div className="max-w-4xl text-left">
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
          <p className="text-base md:text-lg text-white mb-8 leading-relaxed max-w-3xl drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)] font-semibold">
            Crafting scalable, modern, and user-centered applications using cutting-edge full-stack technologies.
            <span className="block mt-2 text-violet-100 font-medium">
              Turning ideas into digital experiences.
            </span>
          </p>

          {/* CTA Buttons */}
          <div className="flex items-center gap-4 mb-8 flex-wrap">
            <a
              href="#hire"
              className="group relative px-12 py-4 bg-gradient-to-r from-violet-600 via-purple-600 to-violet-600 text-white text-lg font-bold rounded-2xl shadow-2xl hover:shadow-violet-500/50 transform hover:scale-110 transition-all duration-300 overflow-hidden inline-flex items-center backdrop-blur-sm border-2 border-white/30"
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
              className="group relative px-12 py-4 bg-white/15 backdrop-blur-md text-white text-lg font-bold rounded-2xl shadow-2xl hover:shadow-violet-500/50 transform hover:scale-110 transition-all duration-300 overflow-hidden inline-flex items-center border-2 border-white/30"
            >
              <span className="relative z-10 flex items-center gap-3">
                <span>Let's Talk</span>
                <i className="bx bx-message-rounded text-xl group-hover:rotate-12 group-hover:scale-110 transition-all duration-300"></i>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-violet-600 via-purple-600 to-violet-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex gap-5 pt-4">
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

      {/* Scroll Indicator - Hidden on mobile */}
      <div className="hidden lg:block absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
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
