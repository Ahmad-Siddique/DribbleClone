import React, { useEffect } from "react";

const ServiceModal = ({ onClose }) => {
  useEffect(() => {
    document.body.classList.add("overflow-hidden");
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 p-4">
      <div className="relative w-full max-w-3xl bg-white rounded-2xl p-6 md:p-10 overflow-y-auto max-h-[90vh]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-black text-2xl cursor-pointer"
        >
          ×
        </button>

        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          Modernizing the Website of a Shopify Email Customizer
        </h2>

        {/* Image */}
        <img
          src="https://placehold.co/800x400"
          alt="Project Preview"
          className="w-full rounded-xl mb-6"
        />

        {/* Section Heading */}
        <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
          Landing Page Design
        </h3>

        {/* Subheading */}
        <h4 className="text-lg font-semibold text-gray-800 mb-2">
          Project Details
        </h4>

        {/* Description */}
        <p className="text-base text-gray-700 leading-relaxed mb-6">
          Please describe your project, including your preferred start date and
          any specific requirements.
        </p>

        {/* Textarea Field */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            What are you looking for?
          </label>
          <textarea
            rows={5}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
            placeholder="Describe your project..."
          />
          <p className="text-sm text-red-600 mt-1">Minimum 50 characters</p>
        </div>

        {/* Submit Button */}
        <button
          type="button"
          className="bg-gray-900 text-white px-6 py-3 rounded-xl font-bold hover:bg-gray-800 transition"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default ServiceModal;
