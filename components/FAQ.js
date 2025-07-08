"use client";
import React, { useState } from "react";

const faqs = [
  {
    question: "What makes your service different from others?",
    answer:
      "We offer personalized support, innovative features, and a customer-first approach that sets us apart from the competition.",
  },
  {
    question: "How does billing work?",
    answer:
      "Billing is monthly or yearly, with flexible plans. You can upgrade, downgrade, or cancel anytime from your dashboard.",
  },
  {
    question: "Can I try your service for free?",
    answer:
      "Yes! We offer a 14-day free trial so you can experience all premium features before committing.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Absolutely. We use industry-standard encryption and regular security audits to keep your data safe.",
  },
  {
    question: "Can I change my plan later?",
    answer:
      "Yes, you can upgrade or downgrade your plan at any time from your account settings.",
  },
  {
    question: "Do you offer customer support?",
    answer:
      "Yes, our support team is available 24/7 to assist you with any questions or issues.",
  },
];

const PlusIcon = ({ open }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 20 20"
    fill="none"
    className={`transition-transform duration-300 w-6 h-6 ${
      open ? "rotate-45 text-teal-600" : "text-slate-950"
    }`}
    aria-hidden="true"
  >
    <rect x="9" y="4" width="2" height="12" rx="1" fill="currentColor" />
    <rect x="4" y="9" width="12" height="2" rx="1" fill="currentColor" />
  </svg>
);

const FAQ = () => {
  const [openIdx, setOpenIdx] = useState(null);

  const handleToggle = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="w-full max-w-[90rem] mx-auto px-6 sm:px-12 lg:px-16 py-16 bg-white relative overflow-hidden">
      {/* Decorative blurred teal shapes */}
      <div className="absolute left-[-60px] top-[-60px] w-[180px] h-[180px] bg-teal-200 rounded-full blur-3xl opacity-20 z-0" />
      <div className="absolute right-[-80px] bottom-[-80px] w-[220px] h-[220px] bg-teal-100 rounded-full blur-3xl opacity-10 z-0" />
      <div className="relative z-10">
        <h2 className="text-slate-950 text-4xl md:text-5xl font-extrabold font-['Inter',_sans-serif] mb-10 text-center inline-block w-full">
          Frequently Asked Questions
          <span className="block h-1 w-16 bg-teal-500 rounded-full mx-auto mt-3" />
        </h2>
        <div className="w-full bg-[#E4F0F0] rounded-2xl p-6 sm:p-12 md:p-16 shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {faqs.map((faq, idx) => (
              <div key={idx} className="flex flex-col gap-3">
                <button
                  className="w-full flex justify-between items-center px-6 py-5 bg-white rounded-xl border border-teal-100 text-left focus:outline-none transition hover:shadow-md"
                  onClick={() => handleToggle(idx)}
                  aria-expanded={openIdx === idx}
                  aria-controls={`faq-answer-${idx}`}
                >
                  <span className="text-slate-950 text-base font-normal font-['Inter'] leading-normal flex-1">
                    {faq.question}
                  </span>
                  <span className="ml-6 flex-shrink-0">
                    <PlusIcon open={openIdx === idx} />
                  </span>
                </button>
                <div
                  id={`faq-answer-${idx}`}
                  className={`px-6 pb-4 text-gray-600 text-base font-normal font-['Inter'] transition-all duration-300 ease-in-out overflow-hidden ${
                    openIdx === idx ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
                  }`}
                  style={{ transitionProperty: "max-height, opacity" }}
                >
                  {openIdx === idx && <div className="pt-2">{faq.answer}</div>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
