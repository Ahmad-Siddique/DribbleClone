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
      // Redirect to base page without query params
      switch (searchType) {
        case "shots":
          router.push(`/shots`);
          break;
        case "service":
          router.push(`/services`);
          break;
        case "blog":
          router.push(`/blog`);
          break;
        default:
          router.push(`/shots`);
      }
    }
  };

  // Handle trending search click
  const handleTrendingClick = (term) => {
    setSearchQuery(term);
    performSearch(term);
  };

  // Common search function
  const performSearch = (query) => {
    const encodedQuery = encodeURIComponent(query.trim());

    // Redirect based on search type
    switch (searchType) {
      case "shots":
        router.push(`/shots?tags=${encodedQuery}`);
        break;
      case "service":
        router.push(`/services?tags=${encodedQuery}`);
        break;
      case "blog":
        router.push(`/blog?search=${encodedQuery}`);
        break;
      default:
        router.push(`/shots?tags=${encodedQuery}`);
    }
  };

  return (
    <section className="bg-white pt-0 pb-12 px-4 md:px-0">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        <h1
          className="
            max-w-[690px]
            text-[2.2rem] sm:text-[2.8rem] md:text-[3.5rem] lg:text-[62px]
            font-normal
            leading-[1.15] sm:leading-[1.15] md:leading-[1.2]
            text-center
            mx-auto
            text-gray-900
            mb-6
            break-words
          "
        >
          Discover the world's top <span className="text-600">designers</span>
        </h1>

        <p
          className="
            font-sans
            text-base sm:text-lg md:text-[18px]
            font-normal
            max-w-[560px]
            text-center
            text-[#6e6d7a]
            mb-2
          "
        >
          Explore work from the most talented and accomplished designers ready
          to take on your next project
        </p>
        <form className="w-full max-w-2xl mb-6 mt-5" onSubmit={handleSubmit}>
          <div className="flex items-center border border-black rounded-xl bg-[#DCEFF6] shadow-none px-2 py-2 h-[56px] sm:h-[64px]">
            {/* Search Input */}
            <input
              type="text"
              placeholder="Search designers, jobs, inspiration…"
              className="flex-1 bg-transparent px-3 sm:px-5 py-2 sm:py-3 text-gray-900 text-base focus:outline-none placeholder-black"
              style={{ height: "38px" }}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {/* Dropdown */}
            <select
              value={searchType}
              onChange={(e) => setSearchType(e.target.value)}
              className="bg-transparent rounded-lg text-gray-900 text-base font-medium px-3 py-2 mr-2 focus:outline-none focus:ring-2 focus:ring-[#DCEFF6] transition h-10 sm:h-12"
              style={{ minWidth: 110 }}
            >
              <option value="shots">Shots</option>
              <option value="service">Services</option>
              <option value="blog">Blogs</option>
            </select>
            {/* Search Button */}
            <button
              type="submit"
              className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black hover:bg-gray-800 transition-colors ml-2 cursor-pointer"
              aria-label="Search"
            >
              <MagnifyingGlassIcon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
            </button>
          </div>
        </form>

        <div
          className="
            flex flex-wrap sm:flex-nowrap items-center justify-center
            gap-2 sm:gap-4
            text-sm sm:text-base md:text-lg text-gray-500
            py-2 w-full
            overflow-x-auto sm:overflow-x-visible
            whitespace-nowrap sm:whitespace-nowrap md:whitespace-normal
          "
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
              className="bg-white rounded-lg px-2 sm:px-3 py-1 text-black hover:text-[#1BB0CE] transition-colors shadow-sm border border-gray-200 shrink-0"
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
