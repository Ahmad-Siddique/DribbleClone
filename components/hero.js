"use client";
import { useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/navigation";

export default function HeroSection() {
  const [searchType, setSearchType] = useState("shots");
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      performSearch(searchQuery);
    } else {
      switch (searchType) {
        case "shots":
          router.push(`/shots`);
          break;
        case "service":
          router.push(`/services`);
          break;
        case "blog":
          router.push(`/blogs`);
          break;
        default:
          router.push(`/shots`);
      }
    }
  };

  const handleTrendingClick = (term) => {
    setSearchQuery(term);
    performSearch(term);
  };

  const performSearch = (query) => {
    const encodedQuery = encodeURIComponent(query.trim());
    switch (searchType) {
      case "shots":
        router.push(`/shots?title=${encodedQuery}`);
        break;
      case "service":
        router.push(`/services?title=${encodedQuery}`);
        break;
      case "blog":
        router.push(`/blog?search=${encodedQuery}`);
        break;
      default:
        router.push(`/shots?title=${encodedQuery}`);
    }
  };

  // Dots background style (adjust opacity for each side)
  const topBottomDotsStyle = {
    backgroundImage:
      "radial-gradient(rgba(20,83,45,0.34) 7px, transparent 7px)",
    backgroundSize: "50px 50px", // increased spacing
    opacity: 0.35,
    pointerEvents: "none",
  };
  // Left and right (80% fainter)
  const leftRightDotsStyle = {
    backgroundImage:
      "radial-gradient(rgba(20,83,45,0.18) 7px, transparent 7px)",
    backgroundSize: "50px 50px", // increased spacing
    opacity: 0.85,
    pointerEvents: "none",
  };

  return (
    <section className="relative bg-white pt-20 pb-24 px-4 md:px-0 overflow-hidden min-h-[600px] flex items-center justify-center">
      {/* Decorative blurred teal shapes, softer and more modern */}
      <div className="absolute left-[-100px] top-[-100px] w-[340px] h-[340px] bg-teal-100 rounded-full blur-3xl opacity-20 z-0" />
      <div className="absolute right-[-120px] bottom-[-120px] w-[400px] h-[400px] bg-teal-200 rounded-full blur-3xl opacity-10 z-0" />
      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[80vw] h-24 bg-gradient-to-r from-teal-50 via-white to-teal-50 blur-2xl opacity-40 z-0" />
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center relative z-10 px-2">
        <h1
          className="max-w-[900px] text-[2.9rem] sm:text-[3.5rem] md:text-[4.3rem] lg:text-[4.5rem] font-extrabold leading-tight text-center mx-auto mb-8 break-words font-['Inter',_sans-serif] text-slate-950 drop-shadow-sm"
        >
          Discover the world's top
          <span
            className="text-teal-600 font-extrabold ml-3"
          >
            designers
          </span>
        </h1>
        <p className="font-sans text-xl sm:text-2xl md:text-2xl font-normal max-w-[650px] text-center text-gray-600 mb-10">
          Explore work from the most talented and accomplished designers ready to take on your next project.
        </p>

        {/* Search box with dotted frame */}
        <div className="relative w-full max-w-2xl mb-10 mt-2 flex justify-center items-center">
          {/* Top Dots */}
          <div
            aria-hidden="true"
            className="absolute left-0 top-[-24px] w-full h-8 z-0"
            style={topBottomDotsStyle}
          />
          {/* Bottom Dots */}
          <div
            aria-hidden="true"
            className="absolute left-0 bottom-[-24px] w-full h-8 z-0"
            style={topBottomDotsStyle}
          />
          {/* Left Dots */}
          <div
            aria-hidden="true"
            className="absolute left-[-24px] top-0 h-full w-8 z-0"
            style={leftRightDotsStyle}
          />
          {/* Right Dots */}
          <div
            aria-hidden="true"
            className="absolute right-[-24px] top-0 h-full w-8 z-0"
            style={leftRightDotsStyle}
          />

          {/* Search Form */}
          {/* (Unchanged) */}
          <form className="w-full relative z-10" onSubmit={handleSubmit}>
            <div className="flex items-center border border-black rounded-xl bg-[#DCEFF6] shadow-lg px-2 py-2 h-[56px] sm:h-[64px] overflow-hidden">
              {/* Search Input */}
              <input
                type="text"
                placeholder="Search designers, jobs, inspiration…"
                className="flex-1 bg-transparent px-3 sm:px-5 py-2 sm:py-3 text-gray-900 text-base focus:outline-none focus:ring-2 focus:ring-teal-400 placeholder-black rounded-l-xl"
                style={{ height: "38px" }}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                aria-label="Search designers, jobs, inspiration"
              />
              {/* Dropdown */}
              <select
                value={searchType}
                onChange={(e) => setSearchType(e.target.value)}
                className="bg-transparent text-gray-900 text-base font-medium px-3 py-2 focus:outline-none transition h-10 sm:h-12 border-0 shadow-none rounded-none"
                style={{ minWidth: 110 }}
                aria-label="Search category"
              >
                <option value="shots">Shots</option>
                <option value="service">Services</option>
                <option value="blog">Blogs</option>
              </select>
              {/* Search Button */}
              <button
                type="submit"
                className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-black hover:bg-gray-800 transition-all duration-150 ml-2 cursor-pointer shadow-lg focus:outline-none focus:ring-2 focus:ring-teal-400 transform hover:scale-105"
                aria-label="Search"
              >
                <MagnifyingGlassIcon className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
              </button>
            </div>
          </form>
        </div>

        <div
          className="flex flex-wrap sm:flex-nowrap items-center justify-center gap-3 sm:gap-4 text-base text-gray-500 py-2 w-full overflow-x-auto sm:overflow-x-visible whitespace-nowrap sm:whitespace-nowrap md:whitespace-normal"
        >
          <span className="shrink-0 py-1">Trending Searches:</span>
          {[
            { tag: "UI Design", color: "bg-teal-100 text-teal-700" },
            { tag: "Illustration", color: "bg-gray-100 text-gray-700" },
            { tag: "Branding", color: "bg-teal-50 text-teal-800" },
            { tag: "Web Design", color: "bg-white text-slate-950 border border-gray-200" },
            { tag: "App Design", color: "bg-gray-50 text-gray-800" },
          ].map(({ tag, color }) => (
            <button
              key={tag}
              onClick={() => handleTrendingClick(tag)}
              className={`rounded-full px-5 py-2 font-semibold shadow-sm hover:bg-teal-200 hover:text-teal-900 transition-colors duration-150 shrink-0 border-0 ${color}`}
              style={{ letterSpacing: "0.01em" }}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
