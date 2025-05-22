import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const nav_sections = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'categories', label: 'Categories' },
  { id: 'blog', label: 'Blog' },
  { id: 'colours', label: 'Colours' },
  { id: 'join', label: 'Join Us' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
  }, [isOpen]);

  return (
    <nav className="sticky top-0 z-50 bg-[#0060af] shadow font-poppins">
      <div className="flex justify-between items-center px-6 md:px-16 py-6">
        <div className="text-2xl font-bold text-white">Astral Paints</div>

        <div className="hidden md:flex space-x-10">
          {nav_sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="text-white font-medium hover:text-[#ffffc5] transition-colors duration-200"
            >
              {section.label}
            </a>
          ))}
        </div>
          
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-[#0060af] px-6 pb-4 space-y-4 animate-slide-down">
          {nav_sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="block text-white font-medium hover:text-yellow-300 transition"
              onClick={() => setIsOpen(false)}
            >
              {section.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
