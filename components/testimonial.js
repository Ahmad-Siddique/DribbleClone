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
    <section className="w-full px-4 py-16 bg-[#E4F0F0] relative flex flex-col items-center overflow-hidden">
      {/* Decorative blurred teal shapes */}
      <div className="absolute left-[-60px] top-[-60px] w-[180px] h-[180px] bg-teal-200 rounded-full blur-3xl opacity-20 z-0" />
      <div className="absolute right-[-80px] bottom-[-80px] w-[220px] h-[220px] bg-teal-100 rounded-full blur-3xl opacity-10 z-0" />
      <div className="max-w-7xl w-full relative z-10">
        {/* Center-aligned heading with teal accent */}
        <div className="mb-14 text-center">
          <h2 className="text-slate-950 text-4xl md:text-5xl font-extrabold font-['Inter',_sans-serif] inline-block relative">
            Testimonials
            <span className="block h-1 w-16 bg-teal-500 rounded-full mx-auto mt-3" />
          </h2>
        </div>

        <div className="flex flex-col items-center gap-10 lg:flex-row lg:justify-center lg:gap-10">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between bg-white rounded-2xl border border-teal-100 p-7 md:p-9 gap-6 shadow-md w-full max-w-[95vw] sm:max-w-[420px] md:min-w-[340px] md:max-w-[420px] lg:min-w-[360px] lg:max-w-[420px] flex-1 transition-shadow hover:shadow-lg"
              style={{ minHeight: "320px" }}
            >
              <div className="text-left">
                <h3 className="text-slate-950 text-2xl md:text-2.5xl font-bold font-['Inter'] leading-9 mb-4">
                  {t.title}
                </h3>
                <p className="text-gray-600 text-base font-normal font-['Inter'] leading-normal mb-6">
                  {t.text}
                </p>
                <div className="flex items-center gap-1 mb-6">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <Star key={i} />
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-3 mt-auto">
                <div className="w-11 h-11 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-teal-400">
                  <img
                    src={t.avatar}
                    alt={t.author}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="text-slate-950 text-sm font-semibold font-['Inter']">
                    {t.author}
                  </div>
                  <div className="text-gray-500 text-xs font-normal font-['Inter']">
                    {t.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
