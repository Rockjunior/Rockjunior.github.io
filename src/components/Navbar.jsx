import React, { useState } from "react";

const navLinks = [
  { name: "Home", to: "home" },
  { name: "About", to: "about" },
  { name: "Skills", to: "skills" },
  { name: "Projects", to: "projects" },
  { name: "Contact", to: "contact" },
];

export default function Navbar({ theme, toggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  return (
    <nav className="fixed w-full z-50 bg-gray-900/80 dark:bg-gray-900/80 backdrop-blur border-b border-gray-800 dark:border-gray-700">
      <div className="max-w-5xl mx-auto flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-2">
          <img
            src="/rom2.png"
            alt="Logo"
            className="h-8 w-8 rounded-full object-cover"
          />
          <span className="text-2xl font-bold tracking-tight text-primary-400">RODGERS MARAGIA</span>
        </div>
        <div className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <button
              key={link.to}
              onClick={() => handleScroll(link.to)}
              className="text-lg font-medium hover:text-primary-400 focus:outline-none focus:text-primary-400 transition-colors"
            >
              {link.name}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <button
            aria-label="Toggle dark mode"
            onClick={toggleTheme}
            className="p-2 rounded focus:outline-none focus:ring-2 focus:ring-primary-400"
          >
            {theme === "dark" ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m8.66-13.66l-.71.71M4.05 19.95l-.71.71M21 12h-1M4 12H3m16.66 5.66l-.71-.71M4.05 4.05l-.71-.71M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m8.66-13.66l-.71.71M4.05 19.95l-.71.71M21 12h-1M4 12H3m16.66 5.66l-.71-.71M4.05 4.05l-.71-.71M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
            )}
          </button>
          <button
            className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-primary-400"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} /></svg>
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-gray-900/95 dark:bg-gray-900/95 px-4 pb-4">
          {navLinks.map((link) => (
            <button
              key={link.to}
              onClick={() => handleScroll(link.to)}
              className="block w-full text-left py-2 text-lg font-medium hover:text-primary-400 focus:outline-none focus:text-primary-400 transition-colors"
            >
              {link.name}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
} 