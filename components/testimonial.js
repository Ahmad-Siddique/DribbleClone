import React from "react";

const Star = () => (
  <svg
    viewBox="0 0 20 20"
    fill="#FFD700"
    className="w-4 h-4"
    aria-hidden="true"
  >
    <path d="M10 15.27L16.18 19l-1.64-7.03L20 7.24l-7.19-.61L10 0 7.19 6.63 0 7.24l5.46 4.73L3.82 19z" />
  </svg>
);

const testimonials = [
  {
    title: "This template saved me so much time and headache",
    text: `This template saved me so much time and headache when revamping my business's website. I absolutely love the design, and it was set up nicely in Framer. I have many templates from Gola, and their designs are my favorite for sure! I would definitely recommend them.`,
    author: "Daniel O., Co-founder,",
    company: "Hanssen",
    avatar: "https://placehold.co/42x63",
    stars: 5,
  },
  {
    title: "This template saved me so much time and headache",
    text: `This template saved me so much time and headache when revamping my business's website. I absolutely love the design, and it was set up nicely in Framer. I have many templates from Gola, and their designs are my favorite for sure! I would definitely recommend them.`,
    author: "Daniel O., Co-founder,",
    company: "Hanssen",
    avatar: "https://placehold.co/42x63",
    stars: 5,
  },
  {
    title: "This template saved me so much time and headache",
    text: `This template saved me so much time and headache when revamping my business's website. I absolutely love the design, and it was set up nicely in Framer. I have many templates from Gola, and their designs are my favorite for sure! I would definitely recommend them.`,
    author: "Daniel O., Co-founder,",
    company: "Hanssen",
    avatar: "https://placehold.co/42x63",
    stars: 5,
  },
];

const Testimonial = () => {
  return (
    <div className="w-full px-4 py-12 bg-[#E4F0F0] flex flex-col items-center ">
      <div className="max-w-7xl w-full">
        {/* Center-aligned heading */}
        <div className="mb-12 text-center">
          <h2 className="text-gray-900 text-4xl md:text-6xl font-semibold font-['Source_Serif_4'] text-center">
            Testimonials
          </h2>
        </div>

        <div className="flex flex-col items-center gap-8 lg:flex-row lg:justify-center lg:gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="
                flex flex-col justify-between
                bg-white rounded-[10px] backdrop-blur-[10px]
                p-6 md:p-8
                gap-6 shadow-sm
                w-full
                max-w-[95vw]
                sm:max-w-[500px]
                md:min-w-[400px] md:max-w-[600px]
                lg:min-w-[500px] lg:max-w-[600px]
                flex-1
              "
              style={{ minHeight: "320px" }}
            >
              <div className="text-left">
                <h3 className="text-neutral-950 text-2xl md:text-3xl font-semibold font-['Inter'] leading-10 mb-4">
                  {t.title}
                </h3>
                <p className="text-neutral-950 text-base font-normal font-['Inter'] leading-normal mb-6">
                  {t.text}
                </p>
                <div className="flex items-center gap-1 mb-6">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <Star key={i} />
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-3 mt-auto">
                <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                  <img
                    src={t.avatar}
                    alt={t.author}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="text-neutral-950 text-sm font-normal font-['Inter']">
                    {t.author}
                  </div>
                  <div className="text-neutral-950/60 text-[10px] font-normal font-['Inter']">
                    {t.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
