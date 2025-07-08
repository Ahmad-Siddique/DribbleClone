"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Bars3Icon, XMarkIcon, MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { useAuth } from "./AuthProvider";
import { useRouter } from "next/navigation";

const Navbar2 = () => {
  const { user, loading, logout } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [searchType, setSearchType] = useState("shots");
  const [searchValue, setSearchValue] = useState("");
  const router = useRouter();

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Nav items
  const navLinks = [
    { name: "Shots", href: "/shots" },
    { name: "Services", href: "/services" },
    { name: "Blogs", href: "/blogs" },
  ];

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (!router) return;
    if (searchValue.trim()) {
      performSearch(searchValue);
    } else {
      switch (searchType) {
        case "shots":
          router.push(`/shots`);
          break;
        case "blogs":
          router.push(`/blogs`);
          break;
        case "services":
          router.push(`/services`);
          break;
        default:
          router.push(`/shots`);
      }
    }
  };

  const performSearch = (query) => {
    if (!router) return;
    const encodedQuery = encodeURIComponent(query.trim());
    switch (searchType) {
      case "shots":
        router.push(`/shots?search=${encodedQuery}`);
        break;
      case "blogs":
        router.push(`/blogs?search=${encodedQuery}`);
        break;
      case "services":
        router.push(`/services?search=${encodedQuery}`);
        break;
      default:
        router.push(`/shots?search=${encodedQuery}`);
    }
  };

  return (
    <header className="w-full bg-transparent py-3 px-2 md:px-8">
      {/* Background blur */}
      <div className="fixed z-0 w-40 h-40 left-[-60px] top-[-120px] bg-teal-600/20 rounded-full blur-2xl pointer-events-none" />
      <nav className="relative z-10 max-w-screen-2xl mx-auto rounded-2xl bg-white/20 outline outline-1 outline-white flex items-center px-3 sm:px-6 md:px-12 py-3">
        <div className="flex w-full items-center justify-between gap-x-12">
          {/* Left: Logo + Nav Items */}
          <div className="flex items-center gap-x-16 flex-shrink-0">
            {/* Logo */}
            <Link href="/">
              <img src="/logo1.png" alt="Logo" className="w-12 h-12 object-contain" />
            </Link>
            {/* Nav Items */}
            <div className="hidden md:flex items-center gap-x-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-slate-950 text-base font-semibold font-['Inter',_sans-serif] tracking-wide px-4 py-2 rounded-full transition-all duration-150 cursor-pointer hover:bg-teal-100 hover:text-teal-700 focus:bg-teal-100 focus:text-teal-700"
                >
                  {link.name}
                </Link>
              ))}
              {!loading && user && (
                <Link
                  href="/admin"
                  className="text-slate-950 text-base font-semibold font-['Inter',_sans-serif] tracking-wide px-4 py-2 rounded-full transition-all duration-150 cursor-pointer hover:bg-teal-100 hover:text-teal-700 focus:bg-teal-100 focus:text-teal-700"
                >
                  Admin
                </Link>
              )}
            </div>
          </div>
          {/* Right: Search & Auth */}
          <div className="hidden md:flex items-center gap-x-6 flex-shrink-0">
            <form
              className="flex items-center w-[260px] lg:w-[320px] xl:w-[400px]"
              onSubmit={handleSearchSubmit}
              autoComplete="off"
            >
              <div className="flex items-center border border-black rounded-xl px-2 py-2 h-[40px] w-full">
                <input
                  type="text"
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  placeholder="Search shots, blogs, services…"
                  className="flex-1 bg-transparent px-3 py-2 text-gray-900 text-base focus:outline-none placeholder-black"
                  style={{ height: "24px" }}
                />
                {/* Dropdown with SVG */}
                <div className="relative flex items-center">
                  <select
                    value={searchType}
                    onChange={(e) => setSearchType(e.target.value)}
                    className="appearance-none bg-transparent border-0 text-gray-900 text-base font-semibold pr-8 pl-2 py-1 h-8 focus:outline-none cursor-pointer min-w-[90px]"
                  >
                    <option value="shots">Shots</option>
                    <option value="blogs">Blogs</option>
                    <option value="services">Services</option>
                  </select>
                  {/* Dropdown SVG */}
                  <svg
                    className="pointer-events-none absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-700"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
                <button
                  type="submit"
                  className="flex items-center justify-center aspect-square h-8 rounded-full bg-black hover:bg-gray-800 transition-colors ml-2 cursor-pointer"
                >
                  <MagnifyingGlassIcon className="h-4 w-4 text-white" />
                </button>
              </div>
            </form>
            {loading ? null : user ? (
              <div className="flex items-center space-x-2">
                {/* <span className="text-gray-700 font-medium">{user.name || "Admin"}</span> */}
                <button onClick={logout} className="px-4 py-2 rounded-xl outline outline-1 outline-gray-900 bg-transparent text-slate-950 text-lg font-bold font-['Arial'] hover:bg-gray-100 transition cursor-pointer">Logout</button>
              </div>
            ) : (
              <>
                <Link href="/login">
                  <button className="px-4 py-2 rounded-xl outline outline-1 outline-gray-900 bg-transparent text-slate-950 text-lg font-bold font-['Arial'] hover:bg-gray-100 transition cursor-pointer">Log in</button>
                </Link>
                <Link href="/signup">
                  <button className="px-4 py-2 rounded-xl outline outline-1 outline-gray-900 bg-gray-900 text-white text-lg font-bold font-['Arial'] hover:bg-gray-800 transition cursor-pointer">Sign up</button>
                </Link>
              </>
            )}
          </div>
          {/* Hamburger Icon */}
          <button
            className="md:hidden ml-auto"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <XMarkIcon className="h-6 w-6 text-gray-800" />
            ) : (
              <Bars3Icon className="h-6 w-6 text-gray-800" />
            )}
          </button>
        </div>
        {/* Mobile Menu */}
        {isClient && menuOpen && (
          <div className="absolute top-full left-0 w-full max-w-full bg-white shadow-lg rounded-b-2xl flex flex-col items-center py-4 gap-4 md:hidden z-30 overflow-x-hidden">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-slate-950 text-lg font-normal font-['Arial'] cursor-pointer hover:text-gray-700 transition"
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            {!loading && user && (
              <Link
                href="/admin"
                className="text-slate-950 text-lg font-normal font-['Arial'] cursor-pointer hover:text-gray-700 transition"
                onClick={() => setMenuOpen(false)}
              >
                Admin
              </Link>
            )}
            {/* Mobile Search */}
            <form
              className="flex items-center w-11/12 max-w-full my-2"
              onSubmit={handleSearchSubmit}
              autoComplete="off"
            >
              <div className="flex items-center border border-black rounded-xl px-2 py-2 h-[36px] w-full max-w-full min-w-0">
                <input
                  type="text"
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  placeholder="Search…"
                  className="flex-1 min-w-0 bg-transparent px-2 py-1 text-gray-900 text-sm focus:outline-none placeholder-black"
                />
                {/* Dropdown with SVG */}
                <div className="relative flex items-center">
                  <select
                    value={searchType}
                    onChange={(e) => setSearchType(e.target.value)}
                    className="bg-transparent border-0 text-gray-900 text-base font-semibold px-2 py-1 mr-2 h-8 focus:outline-none cursor-pointer appearance-none pr-8"
                  >
                    <option value="shots">Shots</option>
                    <option value="blogs">Blogs</option>
                    <option value="services">Services</option>
                  </select>
                  {/* Dropdown SVG */}
                  <svg
                    className="pointer-events-none absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-700"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
                <button
                  type="submit"
                  className="flex items-center justify-center aspect-square h-8 rounded-full bg-black hover:bg-gray-800 transition-colors ml-2"
                  aria-label="Search"
                >
                  <MagnifyingGlassIcon className="h-4 w-4 text-white" />
                </button>
              </div>
            </form>
            {loading ? null : user ? (
              <button onClick={() => { setMenuOpen(false); logout(); }} className="w-full px-4 py-2 rounded-xl outline outline-1 outline-gray-900 bg-transparent text-slate-950 text-base font-bold hover:bg-gray-100 transition">Logout</button>
            ) : (
              <>
                <Link href="/login" className="w-11/12">
                  <button className="w-full px-4 py-2 rounded-xl outline outline-1 outline-gray-900 bg-transparent text-slate-950 text-base font-bold hover:bg-gray-100 transition">Log in</button>
                </Link>
                <Link href="/signup" className="w-11/12">
                  <button className="w-full px-4 py-2 rounded-xl outline outline-1 outline-gray-900 bg-gray-900 text-white text-base font-bold hover:bg-gray-800 transition cursor-pointer">Sign up</button>
                </Link>
              </>
            )}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar2; 