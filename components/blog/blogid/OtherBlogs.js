import React from "react";

const OtherBlogs = () => {
  return (
    <div className="w-full px-6 md:px-12 lg:px-24 py-12 md:py-24 flex flex-col justify-start items-start gap-10 max-w-screen-2xl mx-auto">
      <div className="text-gray-900 text-3xl md:text-4xl lg:text-5xl font-bold font-['Inter']">
        More Blogs
      </div>
      <div className="w-full flex flex-col justify-start items-center gap-10">
        {[
          {
            date: "Apr 8, 2025",
            title:
              "Pushing the Boundaries of Logo Design Through Storytelling and Expression",
            desc: "We talked to Brazilian graphic designer Breno Bitencourt, who is known for his bold, expressive logo designs that push traditional design boundaries.".repeat(
              3
            ),
          },
          {
            date: "Apr 8, 2025",
            title:
              "Pushing the Boundaries of Logo Design Through Storytelling and Expression",
            desc: "We talked to Brazilian graphic designer Breno Bitencourt, who is known for his bold, expressive logo designs that push traditional design boundaries.".repeat(
              3
            ),
          },
          {
            date: "Apr 15, 2025",
            title: "Harnessing the Power of Minimalism in Modern Branding",
            desc: "We spoke with designer Clara Liu about how she employs minimalism to create impactful brand identities.",
          },
          {
            date: "Apr 22, 2025",
            title: "The Intersection of Art and Technology in Graphic Design",
            desc: "In our latest interview, digital artist Marco Silva discusses the fusion of artistic techniques and technological innovations.",
          },
          {
            date: "Apr 29, 2025",
            title: "Exploring Sustainable Practices in Visual Communication",
            desc: "Eco-conscious designer Lisa Tran shares her insights on integrating sustainability into graphic design workflows.",
          },
          {
            date: "May 6, 2025",
            title: "Typography Trends Transforming Brand Narratives",
            desc: "Font specialist James Reed dives into the latest typography trends that are shaping how brands tell their stories.",
          },
          {
            date: "May 13, 2025",
            title: "Cultural Influences in Contemporary Graphic Design",
            desc: "We interview Saima Khan, who explores how cultural diversity enhances creativity in her design projects.",
          },
        ].map((blog, idx) => (
          <div
            key={idx}
            className="w-full p-6 md:p-10 bg-white rounded-[20px] shadow-[0px_0px_14px_0px_rgba(13,12,34,0.13)] flex flex-col md:flex-row justify-start items-start md:items-center gap-6 md:gap-12"
          >
            <div className="w-full md:w-72 h-60 md:h-72 rounded-[10px] flex justify-center items-center overflow-hidden">
              <img
                className="w-full h-full object-cover rounded-[10px] shadow-[0px_0px_1px_0px_rgba(0,0,0,0.40)]"
                src="https://placehold.co/386x334"
                alt="Blog"
              />
            </div>
            <div className="flex-1 flex flex-col justify-start items-start gap-5">
              <div className="text-neutral-600 text-sm md:text-xl font-medium font-['Inter'] uppercase">
                {blog.date}
              </div>
              <div className="text-gray-900 text-xl md:text-2xl font-semibold font-['Inter']">
                {blog.title}
              </div>
              <div className="text-zinc-500 text-base md:text-xl font-normal font-['Inter'] leading-relaxed md:leading-9">
                {blog.desc}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OtherBlogs;
