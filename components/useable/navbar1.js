"use client";
import React, { useState, useEffect } from "react";

const navLinks = [
  { name: "Explore", dropdown: true },
  { name: "Hire a Designer", dropdown: true },
  { name: "Find Jobs" },
  { name: "Blog" },
];

const DropdownIcon = () => (
  <svg
    className="w-4 h-4 ml-1 text-gray-700"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
  </svg>
);

const HamburgerIcon = ({ open }) => (
  <svg
    className="w-7 h-7 text-gray-900"
    fill="none"
    stroke="currentColor"
    strokeWidth={2.5}
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    {open ? (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18L18 6M6 6l12 12"
      />
    ) : (
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
    )}
  </svg>
);

const Navbar1 = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <header className="w-full bg-transparent py-3 px-2 md:px-8">
      {/* Background blurs */}
      <div className="absolute z-0 w-40 h-40 left-[-60px] top-[-120px] bg-teal-600/20 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute z-0 w-96 h-40 right-[-100px] top-[-100px] bg-teal-600/10 rounded-full blur-2xl pointer-events-none" />

      <nav className="relative z-10 max-w-7xl mx-auto rounded-2xl bg-white/20 outline outline-1 outline-white flex items-center px-3 sm:px-6 md:px-12 py-3">
        {/* Logo + Nav Links */}
        <div className="flex items-center gap-6 flex-1">
          {/* Logo */}
          <img
            src="/logo1.png"
            alt="Logo"
            className="w-10 h-10 object-contain"
          />

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="flex items-center text-slate-950 text-base md:text-lg font-normal font-['Arial'] cursor-pointer hover:text-pink-600 transition"
              >
                {link.name}
                {link.dropdown && <DropdownIcon />}
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Auth Buttons */}
        <div className="hidden md:flex items-center gap-4 ml-auto">
          <button className="px-4 py-2 rounded-xl outline outline-1 outline-gray-900 bg-transparent text-slate-950 text-base md:text-lg font-bold font-['Arial'] hover:bg-gray-100 transition">
            Log in
          </button>
          <button className="px-4 py-2 rounded-xl outline outline-1 outline-gray-900 bg-gray-900 text-white text-base md:text-lg font-bold font-['Arial'] hover:bg-gray-800 transition">
            Sign up
          </button>
        </div>

        {/* Hamburger for mobile */}
        <button
          className="md:hidden ml-auto"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Open menu"
        >
          <HamburgerIcon open={menuOpen} />
        </button>

        {/* Mobile menu: Render only on client to avoid hydration issues */}
        {isClient && menuOpen && (
          <div className="absolute top-full left-0 w-full bg-white/95 shadow-lg rounded-b-2xl flex flex-col items-center py-4 gap-4 md:hidden animate-fade-in z-20">
            <div className="flex flex-col gap-2 w-full items-center">
              {navLinks.map((link) => (
                <div
                  key={link.name}
                  className="flex items-center text-slate-950 text-base font-normal font-['Arial'] cursor-pointer hover:text-pink-600 transition py-2"
                >
                  {link.name}
                  {link.dropdown && <DropdownIcon />}
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-2 w-full items-center pt-2 border-t border-gray-200">
              <button className="w-11/12 px-4 py-2 rounded-xl outline outline-1 outline-gray-900 bg-transparent text-slate-950 text-base font-bold font-['Arial'] hover:bg-gray-100 transition">
                Log in
              </button>
              <button className="w-11/12 px-4 py-2 rounded-xl outline outline-1 outline-gray-900 bg-gray-900 text-white text-base font-bold font-['Arial'] hover:bg-gray-800 transition">
                Sign up
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar1;
