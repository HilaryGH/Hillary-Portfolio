const Footer = () => {
  return (
    <footer className="bg-[#C0C0C0] text-[hsl(10,10%,45%)] text-center p-5 font-sans">
      <p>© 2024 ሂላሪ ገብረመድህን. All Rights Reserved.</p>
      <p className="mt-1">
        Designed and coded with{" "}
        <span className="text-red-500 animate-pulse text-base">❤️</span> using{" "}
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[hsl(10,10%,35%)] font-bold no-underline hover:underline"
        >
          React
        </a>
        &{" "}
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[hsl(10,10%,35%)] font-bold no-underline hover:underline"
        >
          Node.js
        </a>
      </p>
    </footer>
  );
};

export default Footer;
