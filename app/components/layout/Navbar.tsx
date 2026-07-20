'use client';

import { useEffect, useState } from 'react';
import { LINKS, NAV_LINKS } from '@/app/constants/links';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header
      className={`
        fixed
        top-0
        left-0
        w-full
        h-20
        z-50
        transition-all
        duration-300
        ${
          scrolled || isOpen
            ? 'bg-black/80 backdrop-blur-xl border-b border-white/10'
            : 'bg-transparent'
        }
      `}
    >
      {/* Navbar Container */}
      <nav className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          onClick={closeMenu}
          className="
            text-xl
            font-black
            tracking-tight
          "
        >
          Umar
          <span className="text-blue-500">.</span>
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(link => (
            <li key={link.name}>
              <a
                href={link.href}
                className="
                  text-zinc-300
                  hover:text-white
                  transition-colors
                "
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop Resume */}
        <a
          href={LINKS.resume}
          target="_blank"
          rel="noopener noreferrer"
          className="
            hidden
            md:inline-flex
            items-center
            rounded-xl
            bg-blue-500
            px-5
            py-2.5
            font-medium
            text-white
            hover:bg-blue-600
            transition-colors
          "
        >
          Resume
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          className="
            md:hidden
            text-3xl
            text-white
          "
        >
          {isOpen ? 'X' : '☰'}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`
          bg-black/95
          md:hidden
          overflow-hidden
          transition-all
          duration-300
          ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
        `}
      >
        <div className="max-w-7xl mx-auto px-6 pb-6">
          <ul className="flex flex-col gap-5">
            {NAV_LINKS.map(link => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={closeMenu}
                  className="
                    text-lg
                    text-zinc-300
                    hover:text-white
                    transition-colors
                  "
                >
                  {link.name}
                </a>
              </li>
            ))}

            <li>
              <a
                href={LINKS.resume}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="
                  inline-flex
                  rounded-xl
                  bg-blue-500
                  px-5
                  py-3
                  font-medium
                  text-white
                  hover:bg-blue-600
                  transition-colors
                "
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
