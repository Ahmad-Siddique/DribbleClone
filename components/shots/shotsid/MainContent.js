"use client";
import React from "react";

// SVG Icons
const LikeIcon = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <path
      d="M16.5 3.5c-1.74 0-3.41 1.01-4.5 2.09C10.91 4.51 9.24 3.5 7.5 3.5A5.505 5.505 0 0 0 2 9c0 7.08 10 11.5 10 11.5s10-4.42 10-11.5a5.505 5.505 0 0 0-5.5-5.5z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
);

const SaveIcon = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <path
      d="M5 5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16l-7-5-7 5V5z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
);

const MainContent = () => {
  return (
    <div className="w-full pt-0 pb-8 md:pb-16 px-4 sm:px-6 lg:px-16 flex flex-col gap-12 max-w-[1440px] mx-auto">
      {/* Header Section */}
      <div className="w-full px-4 sm:px-8 py-6 md:py-10 bg-slate-50 rounded-2xl flex flex-col gap-5">
        <h1 className="text-gray-900 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-['Inter'] leading-tight">
          Modernizing the Website of a Shopify Email Customizer
        </h1>
        <div className="h-px w-full bg-neutral-200" />
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6">
          {/* Profile and actions */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 flex-1">
            {/* Avatar and Name */}
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-zinc-100 rounded-full flex justify-center items-center overflow-hidden">
                <img
                  className="w-12 h-12 object-cover rounded-full"
                  src="https://placehold.co/70x91"
                  alt="Profile"
                />
              </div>
              <div className="flex flex-col">
                <div className="text-gray-900 text-lg sm:text-xl md:text-2xl font-bold font-['Inter']">
                  Zajno
                </div>
                <div className="text-gray-900/50 text-base sm:text-lg font-medium font-['Inter']">
                  Zajno
                </div>
              </div>
            </div>
          </div>
          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3">
            <button
              className="p-3 bg-white rounded-xl border border-gray-200 flex items-center justify-center hover:bg-gray-100 transition"
              aria-label="Share"
            >
              <LikeIcon />
            </button>
            <button
              className="p-3 bg-white rounded-xl border border-gray-200 flex items-center justify-center hover:bg-gray-100 transition"
              aria-label="External Link"
            >
              <SaveIcon />
            </button>
            <button className="p-3 bg-gray-900 rounded-xl border border-gray-900 flex items-center justify-center text-white font-bold text-base sm:text-lg font-['Arial'] hover:bg-gray-800 transition">
              Get in touch
            </button>
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="w-full flex flex-col gap-12">
        {/* Image Section */}
        <div className="w-full bg-gray-900 rounded-3xl p-2 sm:p-5 flex flex-col items-center">
          <img
            className="w-full max-w-full rounded-2xl object-cover"
            src="https://placehold.co/1680x1046"
            alt="Project visual"
          />
        </div>

        {/* Text Section */}
        <div className="w-full bg-slate-50 rounded-3xl p-6 sm:p-10 flex flex-col gap-8">
          <p className="text-gray-900 text-base sm:text-lg md:text-2xl font-normal font-['Inter'] leading-relaxed">
            A service that helps customize emails, making them unique and
            memorable, should itself look vibrant and stylish-yet clean, clear,
            and easy to navigate. That’s exactly what UpOrder had in mind when
            they came to us with a request to refresh
            <br />
            their website and refine some visuals to make them more intuitive.
          </p>
          <p className="text-gray-900 text-base sm:text-lg md:text-2xl font-normal font-['Inter'] leading-relaxed">
            UpOrder works with Shopify email notifications, helping merchants
            turn routine messages into a tool for increasing repeat purchases
            and reinforcing their brand identity. The platform allows you to
            create personalized product recommendations, custom discounts, and
            features a drag-and-drop email designer-no coding required.
          </p>
        </div>

        {/* More Images/Sections */}
        <div className="w-full bg-gray-900 rounded-3xl p-2 sm:p-5 flex flex-col items-center">
          <img
            className="w-full max-w-full rounded-2xl object-cover"
            src="https://placehold.co/1680x1040"
            alt="Project visual"
          />
        </div>

        <div className="w-full bg-slate-50 rounded-3xl p-6 sm:p-10">
          <p className="text-gray-900 text-base sm:text-lg md:text-2xl font-normal font-['Inter'] leading-relaxed">
            UpOrder works with Shopify email notifications, helping merchants
            turn routine messages into a tool for increasing repeat purchases
            and reinforcing their brand identity. The platform allows you to
            create personalized product recommendations, custom discounts, and
            features a drag-and-drop email designer-no coding required.
          </p>
        </div>

        <div className="w-full bg-gray-900 rounded-3xl p-2 sm:p-5 flex flex-col items-center">
          <img
            className="w-full max-w-full rounded-2xl object-cover"
            src="https://placehold.co/1680x1040"
            alt="Project visual"
          />
        </div>
        <div className="w-full bg-gray-900 rounded-3xl p-2 sm:p-5 flex flex-col items-center">
          <img
            className="w-full max-w-full rounded-2xl object-cover"
            src="https://placehold.co/1680x1040"
            alt="Project visual"
          />
        </div>

        <div className="w-full bg-slate-50 rounded-3xl p-6 sm:p-10">
          <p className="text-gray-900 text-base sm:text-lg md:text-2xl font-normal font-['Inter'] leading-relaxed">
            The hero section features an illustration that captures a “before
            and after” concept.
            <br />
            It was a fun challenge: the idea had to be instantly recognizable.
            So we depicted the
            <br />
            old email in a simple, sketchy style, and the new one in vivid,
            content-rich blocks.
            <br />
            And, of course, we added a pinch of microanimation to bring it all
            to life.
          </p>
        </div>

        <div className="w-full bg-gray-900 rounded-3xl p-2 sm:p-5 flex flex-col items-center">
          <img
            className="w-full max-w-full rounded-2xl object-cover"
            src="https://placehold.co/1680x1040"
            alt="Project visual"
          />
        </div>
      </div>
    </div>
  );
};

export default MainContent;
