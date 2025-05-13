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
      open ? "rotate-45 text-blue-600" : "text-gray-900"
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
    <div className="w-full max-w-[90rem] mx-auto px-6 sm:px-12 lg:px-16 py-12 bg-white">
      <h2 className="text-gray-900 text-4xl md:text-6xl font-semibold font-['Source_Serif_4'] mb-8 text-center">
        Frequently Asked Questions
      </h2>
      <div className="w-full bg-[#E4F0F0] rounded-[20px] p-6 sm:p-12 md:p-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {faqs.map((faq, idx) => (
            <div key={idx} className="flex flex-col gap-3">
              <button
                className="w-full flex justify-between items-center px-6 py-5 bg-white rounded-[10px] text-left focus:outline-none transition"
                onClick={() => handleToggle(idx)}
                aria-expanded={openIdx === idx}
                aria-controls={`faq-answer-${idx}`}
              >
                <span className="text-stone-950 text-lg md:text-xl font-light font-['Space_Grotesk'] leading-loose flex-1">
                  {faq.question}
                </span>
                <span className="ml-6 flex-shrink-0">
                  <PlusIcon open={openIdx === idx} />
                </span>
              </button>
              <div
                id={`faq-answer-${idx}`}
                className={`px-6 pb-4 text-stone-700 text-lg font-light font-['Space_Grotesk'] transition-all duration-300 ease-in-out overflow-hidden ${
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
  );
};

export default FAQ;
