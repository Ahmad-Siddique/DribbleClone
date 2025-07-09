"use client"
import ShotCard from "../useable/ShotCard";
import { useState } from "react";
export default function ShotsDesign({ shots }) {
  return (
    <section className="max-w-[1800px] w-full mx-auto px-2 md:px-8 py-12 font-sans">
      <div className="flex items-baseline justify-between mb-8">
        {/* <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 tracking-tight">
          Trending Designs
        </h2> */}
        {/* <a
          href="#"
          className="text-[#DCEFF6]-600 font-semibold hover:underline text-base"
        >
          View all
        </a> */}
      </div>

      <ol className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {(shots?.data || []).map((shot) => (
          <FigmaShotCard
            type="shots"
            key={shot._id}
            shot={{
              id: shot._id,
              image: shot.mainImage,
              title: shot.title,
              user: {
                name: "Team Agency", // Or any other logic
                avatar:
                  "https://cdn.dribbble.com/users/6567474/avatars/small/b849c692c6c9fc9cfdca178b90e354d2.png?1607746416", // If you have a service owner image, put it here
                badge: "", // Or any badge logic
              },
              likes: shot.likes,
              views: shot.views,
              pro: false,
              team: false,
              href: `/shots/view/${shot.slug}`,
            }}
          />
        ))}
      </ol>

      {shots?.hasMore && (
        <div className="flex justify-center mt-12">
          <button className="px-8 py-3 bg-white border border-gray-200 text-gray-900 rounded-full font-semibold hover:bg-gray-50 transition-colors shadow">
            Load more
          </button>
        </div>
      )}
    </section>
  );
}

// New Figma-styled ShotCard component
const FigmaShotCard = ({ shot, type }) => {
  const [likes, setLikes] = useState(shot.likes);

  const handleLike = async () => {
    let endpoint;
    switch (type) {
      case "services":
        endpoint = `${process.env.NEXT_PUBLIC_API_BASE_URL}/services/${shot.id}/like`;
        break;
      case "shots":
        endpoint = `${process.env.NEXT_PUBLIC_API_BASE_URL}/shots/${shot.id}/like`;
        break;
      case "blog":
        endpoint = `${process.env.NEXT_PUBLIC_API_BASE_URL}/blogs/${shot.id}/like`;
        break;
      default:
        console.error("Invalid shot type:", type);
        alert("Error: Invalid shot type");
        return;
    }

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      if (!response.ok) {
        throw new Error("Failed to like the shot");
      }

      const data = await response.json();
      setLikes(data.likes);
    } catch (error) {
      console.error("Error liking shot:", error);
      alert("Error liking the shot");
    }
  };

  return (
    <div className="w-full inline-flex flex-col justify-start items-start gap-2">
      {/* Image Container */}
      <div className="self-stretch h-80 relative rounded-[20px] overflow-hidden group cursor-pointer">
        <a href={shot.href} className="absolute inset-0 z-10">
          <img 
            className="w-full h-80 left-0 top-0 absolute object-cover transition-transform duration-300 group-hover:scale-105" 
            src={shot.image} 
            alt={shot.title}
          />
          <div className="w-full h-80 left-0 top-0 absolute bg-gradient-to-b from-black/0 via-black/0 to-black/5" />
        </a>
        
        {/* Hover overlay with like button */}
        <div className="absolute inset-0 flex items-end opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black/70 to-transparent z-20 pointer-events-none">
          <div className="w-full flex items-center justify-between px-5 pb-4">
            <span className="text-white text-base md:text-lg font-semibold drop-shadow">
              {shot.title}
            </span>
            <button
              type="button"
              className="bg-white/90 hover:bg-white text-pink-600 rounded-full p-2 shadow transition flex items-center justify-center pointer-events-auto"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                handleLike();
              }}
            >
              <svg
                viewBox="0 0 16 16"
                width="20"
                height="20"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path d="M8 14s-5.5-3.3-5.5-7.2C2.5 4.3 4.2 2.5 6.2 2.5c1.1 0 2.1.6 2.8 1.6C9.7 3.1 10.7 2.5 11.8 2.5c2 0 3.7 1.8 3.7 4.3C13.5 10.7 8 14 8 14z" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Info Section */}
      <div className="self-stretch inline-flex justify-between items-center">
        {/* User Info */}
        <div className="w-36 flex justify-start items-center gap-2">
          <img 
            className="w-6 h-6 relative rounded-xl object-cover" 
            src={shot.user.avatar} 
            alt={shot.user.name}
          />
          <div className="justify-start text-gray-900 text-sm font-normal font-['Inter'] truncate">
            {shot.user.name}
          </div>
        </div>

        {/* Badge */}
        {shot.user.badge && (
          <div className="h-4 p-[3px] bg-stone-300 rounded-[3px] inline-flex flex-col justify-start items-start">
            <div className="justify-start text-white text-[10px] font-bold font-['Arial'] uppercase leading-[10px]">
              {shot.user.badge}
            </div>
          </div>
        )}

        {/* Stats */}
        <div className="flex justify-end items-start gap-5">
          {/* Likes */}
          <div className="flex justify-start items-center gap-1">
            <div className="w-4 h-4 relative">
              <svg
                viewBox="0 0 16 16"
                width="16"
                height="16"
                fill="currentColor"
                className="w-4 h-4 text-pink-600"
              >
                <path d="M8 14s-5.5-3.3-5.5-7.2C2.5 4.3 4.2 2.5 6.2 2.5c1.1 0 2.1.6 2.8 1.6C9.7 3.1 10.7 2.5 11.8 2.5c2 0 3.7 1.8 3.7 4.3C13.5 10.7 8 14 8 14z" />
              </svg>
            </div>
            <div className="justify-start text-gray-700 text-xs font-normal font-['Inter']">
              {likes}
            </div>
          </div>

          {/* Views */}
          <div className="flex justify-start items-center gap-1">
            <div className="w-4 h-4 relative">
              <svg
                width={16}
                height={16}
                viewBox="0 0 16 16"
                fill="none"
                className="w-4 h-4"
              >
                <path
                  d="M8 3C4.37 3 1.99 6.22 1.19 7.49c-.1.15-.15.23-.18.35-.02.09-.02.23 0 .32.03.12.08.2.18.35C1.99 9.78 4.37 13 8 13s6.01-3.22 6.81-4.49c.1-.15.15-.23.18-.35.02-.09.02-.23 0-.32-.03-.12-.08-.2-.18-.35C14.01 6.22 11.63 3 8 3Z"
                  fill="currentColor"
                  className="text-zinc-400"
                />
                <path d="M8 10a2 2 0 100-4 2 2 0 000 4Z" fill="white" />
              </svg>
            </div>
            <div className="justify-start text-gray-700 text-xs font-normal font-['Inter']">
              {shot.views}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
