import React from "react";
import ctaBackgroundImage from "../assets/centralMosque.jpeg";

const FinalCTABanner: React.FC = () => {
  return (
    <div
      className="relative py-24 sm:py-32 text-white overflow-hidden bg-gray-900"
      style={{
        // Use the imported image path with correct style syntax
        backgroundImage: `url(${ctaBackgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark Overlay to increase contrast for text */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Heading */}
        <h2 className="text-2xl font-extrabold sm:text-5xl md:text-6xl mb-4">
          Begin Your Sacred Journey Today
        </h2>

        {/* Subtitle */}
        <p className="md:text-lg sm:text-xl text-white/90 max-w-3xl mx-auto mb-10">
          Join thousands of students worldwide who have transformed their lives
          through the beautiful recitation and understanding of the Holy Qur'an
        </p>

        {/* Buttons (CTA) */}
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16">
          {/* Primary Button: Start Free Trial (Gold/Yellow) */}
          <button
            className="px-8 py-3 rounded-full font-bold text-lg cursor-pointer transition duration-300 transform 
                       bg-yellow-400 text-gray-900 shadow-xl hover:bg-yellow-500 hover:scale-[1.02]"
          >
            Start Your Free Trial
          </button>

          {/* Secondary Button: Schedule Consultation (White Border) */}
          <button
            className="px-8 py-3 rounded-full border-2 border-white font-bold cursor-pointer text-lg transition duration-300 transform 
                       text-white hover:bg-white/10 hover:shadow-lg"
          >
            Schedule Consultation
          </button>
        </div>

        {/* --- Newsletter Signup Form --- */}
        <div className="mt-12 bg-black/30 p-8 rounded-xl max-w-md mx-auto shadow-2xl backdrop-blur-sm">
          <h4 className="text-lg font-semibold mb-4 text-white">
            Get Updates & Tips
          </h4>

          {/* Input Field */}
          <input
            type="email"
            placeholder="Enter your email address"
            aria-label="Enter your email address"
            className="w-full px-5 py-3 mb-4 rounded-lg text-gray-900 placeholder-gray-500 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />

          {/* Subscribe Button (Teal/Green) */}
          <button
            className="w-full py-3 rounded-lg font-bold text-lg transition duration-300 
                           bg-teal-600 text-white hover:bg-teal-700 shadow-md hover:shadow-lg"
          >
            Subscribe to Newsletter
          </button>
        </div>
      </div>
    </div>
  );
};

export default FinalCTABanner;
