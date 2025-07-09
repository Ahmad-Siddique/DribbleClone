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
        router.push(`/blogs?search=${encodedQuery}`);
        break;
      default:
        router.push(`/shots?title=${encodedQuery}`);
    }
  };

  // Single dotted background style for the whole section
  const sectionDotsBg = {
    backgroundImage:
      "radial-gradient(rgba(20,83,45,0.13) 7px, transparent 8px)",
    backgroundSize: "48px 48px",
    opacity: 0.35,
    pointerEvents: "none",
    zIndex: 1,
  };

  return (
    <section className="relative bg-white pt-20 pb-24 px-4 md:px-0 overflow-hidden min-h-[600px] flex items-center justify-center">
      {/* Full-section dotted background */}
      <div
        aria-hidden="true"
        className="absolute inset-0 w-full h-full"
        style={sectionDotsBg}
      />

      {/* Decorative blurred teal shapes */}
      <div className="absolute left-[-100px] top-[-100px] w-[340px] h-[340px] bg-teal-100 rounded-full blur-3xl opacity-20 z-10" />
      <div className="absolute right-[-120px] bottom-[-120px] w-[400px] h-[400px] bg-teal-200 rounded-full blur-3xl opacity-10 z-10" />
      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[80vw] h-24 bg-gradient-to-r from-teal-50 via-white to-teal-50 blur-2xl opacity-40 z-10" />

      <div className="max-w-4xl mx-auto flex flex-col items-center text-center relative z-20 px-2">
        <h1
          className="max-w-[900px] font-source-serif-semi text-[2rem] xs:text-[2.4rem] sm:text-[3.5rem] md:text-[4.3rem] lg:text-[4.375rem] leading-tight text-center mx-auto mb-8 break-words text-slate-950 drop-shadow-sm"
          style={{ fontSize: 'clamp(2rem, 7vw, 70px)' }}
        >
          Discover the world's top
          <span
            className="text-teal-600 font-source-serif-semi ml-3"
            style={{ fontSize: 'inherit' }}
          >
            designers
          </span>
        </h1>
        <p className="font-inter-regular text-[18px] font-normal max-w-[650px] text-center text-gray-600 mb-10">
          Explore work from the most talented and accomplished designers ready to take on your next project.
        </p>

        {/* Responsive Search box - Original horizontal design */}
        {/* Responsive Search box - Original horizontal design */}
<div className="relative w-full max-w-full sm:max-w-2xl mb-10 mt-2 flex justify-center items-center z-30 mx-0">
  <form className="w-full max-w-full relative z-10" onSubmit={handleSubmit}>
    <div
      className="flex items-center border border-gray-400 rounded-2xl bg-white shadow-[0_2px_16px_0_rgba(20,83,45,0.06)] px-1 sm:px-2 py-1 sm:py-2 h-[52px] sm:h-[60px] overflow-hidden ring-1 ring-inset ring-gray-200 transition-all duration-200"
      style={{ backgroundColor: '#E8F3F3' }}
    >
      <input
        type="text"
        placeholder="What are you looking for?"
        className="
          flex-1 min-w-0
          px-2 sm:px-4
          py-2 sm:py-3
          text-[#3A3546]
          text-sm sm:text-base
          placeholder-[#3A3546]
          rounded-l-2xl
          font-inter-regular
          focus:outline-none
          bg-[#E8F3F3]
        "
        style={{
          fontSize: '15px',
          boxShadow: 'inset 0 1.5px 6px 0 rgba(20,83,45,0.04)',
        }}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        aria-label="Search designers, jobs, inspiration"
      />
      <select
        value={searchType}
        onChange={(e) => setSearchType(e.target.value)}
        className="
          bg-transparent
          text-gray-900
          text-sm sm:text-base
          font-medium
          px-2 sm:px-3
          py-2 sm:py-3
          focus:outline-none
          transition
          h-[44px] sm:h-[50px]
          border-0
          shadow-none
          rounded-none
          font-inter-regular
        "
        style={{ fontSize: '15px', minWidth: 70 }}
        aria-label="Search category"
      >
        <option value="shots">Shots</option>
        <option value="service">Services</option>
        <option value="blog">Blogs</option>
      </select>
      <button
        type="submit"
        className="
          flex items-center justify-center
          w-10 sm:w-11
          h-10 sm:h-11
          rounded-full
          bg-black hover:bg-gray-800
          transition-all duration-150
          ml-2
          cursor-pointer shadow-lg
          focus:outline-none focus:ring-2 focus:ring-teal-400
          transform hover:scale-105
        "
        aria-label="Search"
      >
        <MagnifyingGlassIcon className="h-5 w-5 text-white" />
      </button>
    </div>
  </form>
</div>


        <div
          className="flex flex-wrap sm:flex-nowrap items-center justify-center gap-3 sm:gap-4 text-base text-gray-500 py-2 w-full overflow-x-auto sm:overflow-x-visible whitespace-nowrap sm:whitespace-nowrap md:whitespace-normal font-inter-regular"
          style={{ fontSize: '16px' }}
        >
          <span className="shrink-0 py-1">Trending Searches:</span>
          {[
            "UI Design",
            "Illustration",
            "Branding",
            "Web Design",
            "App Design",
          ].map((tag) => (
            <button
              key={tag}
              onClick={() => handleTrendingClick(tag)}
              className="rounded-full px-5 py-2 font-semibold shadow-sm hover:bg-teal-200 hover:text-teal-900 transition-colors duration-150 shrink-0 border-0 bg-gray-100 text-gray-700 font-inter-regular"
              style={{ letterSpacing: '0.01em', fontSize: '16px' }}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
