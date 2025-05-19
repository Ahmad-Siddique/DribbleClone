"use client"
import React from "react";

const BlogDescription = () => {
  return (
    <div className="w-full px-2 sm:px-4 md:px-8 py-6 flex justify-center">
      <div className="w-full max-w-[1440px] flex flex-col gap-10">
        <div className="w-full p-6 sm:p-10 bg-slate-50 rounded-[20px] flex flex-col gap-5">
          <div className="text-gray-900 text-3xl sm:text-4xl md:text-5xl font-bold font-['Inter']">
            Courtside:
            <br />
            The Dribbble Blog
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Main Content */}
          <div className="flex-1 flex flex-col gap-10 min-w-0">
            <div className="flex flex-col gap-5">
              <div className="text-zinc-400 text-xs sm:text-sm font-medium font-['Inter'] uppercase tracking-wide">
                May 1, 2025
              </div>
              <div className="text-gray-900 text-2xl sm:text-3xl md:text-4xl font-medium font-['Inter']">
                Work In Progress, Part 10
              </div>
            </div>
            <div className="p-3 sm:p-5 bg-gray-900 rounded-[40px] flex flex-col gap-2.5">
              <div className="w-full aspect-[16/7] relative rounded-[20px] overflow-hidden flex flex-col items-center justify-center">
                <img
                  className="w-full max-w-full h-auto rounded-[20px] object-cover"
                  src="https://placehold.co/1077x3936"
                  alt=""
                />
                <img
                  className="w-full max-w-full h-auto rounded-[3px] mt-4 object-cover shadow-[0px_0px_1px_0px_rgba(0,0,0,0.40)]"
                  src="https://placehold.co/1320x989"
                  alt=""
                />
              </div>
            </div>
            <div className="p-6 sm:p-10 bg-slate-50 rounded-[40px] flex flex-col gap-5">
              <div className="text-gray-900 text-2xl sm:text-3xl md:text-5xl font-bold font-['Inter']">
                About this Blog
              </div>
              <div className="text-gray-900 text-base sm:text-xl font-normal font-['Inter'] leading-8">
                Learn more about April’s product releases and the early results
                of our pivot from an advertising-supported community to a
                revenue-sharing marketplace.
              </div>
              <div className="text-gray-900 text-base sm:text-xl font-normal font-['Inter'] leading-8">
                UpOrder works with Shopify email notifications, helping
                merchants turn routine messages into a tool for increasing
                repeat purchases and reinforcing their brand identity. The
                platform allows you to create personalized product
                recommendations, custom discounts, and features a drag-and-drop
                email designer-no coding required.
              </div>
            </div>
          </div>
          {/* Sidebar */}
          <div className="w-full lg:max-w-sm flex flex-col gap-10 flex-shrink-0">
            <div className="w-full p-6 sm:p-10 bg-slate-50 rounded-[20px] flex flex-col gap-10">
              <div className="flex flex-col gap-[3px]">
                <div className="text-gray-900 text-xl sm:text-2xl font-medium font-['Inter']">
                  Overtime
                </div>
                <div className="text-zinc-400 text-lg sm:text-2xl font-normal font-['Inter']">
                  The Dribbble Podcast
                </div>
                <div className="py-0.5 flex flex-col gap-2.5">
                  <div className="text-gray-900 text-xl sm:text-2xl font-medium font-['Inter']">
                    The Power of Play
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full p-6 sm:p-10 bg-slate-50 rounded-[20px] flex flex-col gap-10">
              <div className="flex flex-col gap-5">
                <div className="text-gray-900 text-xl sm:text-2xl font-semibold font-['Inter']">
                  All Categories
                </div>
                <div className="flex flex-col gap-2.5">
                  {[
                    "Interviews",
                    "Podcast",
                    "Inspiration",
                    "Process",
                    "Meetups",
                    "Updates",
                    "Hang Time",
                    "Community",
                  ].map((cat) => (
                    <div
                      key={cat}
                      className="text-gray-900 text-base sm:text-xl font-normal font-['Inter'] cursor-pointer"
                    >
                      {cat}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDescription;
