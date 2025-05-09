import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full px-10 py-4 shadow-md fixed bg-[#FAFAFA] top-0 left-0 z-50">
      <div className="flex flex-wrap justify-between items-center">
        {/* Logo */}
        <p className="text-xl font-bold text-off-white hover:text-[#6B6B6B] hover:scale-10 transition duration-300 ease-in-out cursor-pointer hover:filter hover:blur-sm">
          <span className="text-[#6B6B6B] text-3xl">ሒ</span>LARY
        </p>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          {menuOpen ? (
            <X
              className="w-6 h-6 text-off-white cursor-pointer"
              onClick={() => setMenuOpen(false)}
            />
          ) : (
            <Menu
              className="w-6 h-6 text-off-white cursor-pointer"
              onClick={() => setMenuOpen(true)}
            />
          )}
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:block">
          <ul className="flex gap-8 text-off-white font-medium">
            {["Home", "About", "Portfolio", "Skills", "Contact"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-[#6B6B6B] cursor-pointer transition duration-300"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="md:hidden mt-4">
          <ul className="flex flex-col space-y-4 text-off-white  align-center font-medium">
            {["Home", "About", "Portfolio", "Skills", "Contact"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-[#6B6B6B] cursor-pointer transition duration-300"
                  onClick={() => setMenuOpen(false)} // Close menu on click
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
};

export default Navbar;
