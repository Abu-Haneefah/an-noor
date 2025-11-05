import React from "react";
import backgroundImage from "../../../assets/mosque-background.png";

const AlNoorHero: React.FC = () => {
  return (
    <div className="relative h-screen bg-[#0A2519] text-white overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-black/30"></div>
      </div>

      <div
        className="absolute w-full z-10 text-center max-w-5xl px-4 
                   top-1/6 sm:top-[25%]"
        style={{
          left: "50%",
          transform: "translate(-50%, 0)",
        }}
      >
        <h1
          className="text-5xl sm:text-7xl md:text-8xl font-serif mb-4 leading-tight tracking-wider italic"
          style={{
            color: "#F8B600",
            textShadow: "0 4px 6px rgba(0, 0, 0, 0.7)",
          }}
        >
          Al-Noor
        </h1>
        <h2
          className="text-3xl sm:text-5xl md:text-6xl font-extrabold mb-6"
          style={{ textShadow: "0 4px 6px rgba(0, 0, 0, 0.7)" }}
        >
          Qur'an Academy
        </h2>

        <p className="text-sm sm:text-xl mb-10 leading-relaxed max-w-3xl mx-auto">
          Learn the Holy Qur'an with authentic Tajweed, memorization, and
          understanding from certified teachers worldwide
        </p>

        {/* Buttons are now always visible */}
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6 ">
          <button
            className="px-6 py-2 sm:px-8 sm:py-3 rounded-full font-bold text-base sm:text-lg transition-all duration-300 transform shadow-2xl hover:scale-105 cursor-pointer"
            style={{ backgroundColor: "#F8B600", color: "#0A2519" }}
          >
            Start Free Trial
          </button>
          <button className="px-6 py-2 sm:px-8 sm:py-3 cursor-pointer rounded-full border-2 border-white font-bold text-base sm:text-lg transition-all duration-300 transform shadow-2xl hover:scale-105 hover:bg-white hover:text-gray-900">
            Watch Demo
          </button>
        </div>
      </div>

      <div className=" hidden md:block absolute -bottom-8 left-0 w-full z-2 py-4 sm:py-8 ">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
          {/* Statistic 1 */}
          <div className="p-3 sm:p-4 sm:border-r border-white/20">
            <h3
              className="text-3xl sm:text-4xl font-bold"
              style={{ color: "#F8B600" }}
            >
              50+
            </h3>
            <p className="text-sm sm:text-lg mt-1 text-gray-200">
              Active Students
            </p>
          </div>

          {/* Statistic 2 */}
          <div className="p-3 sm:p-4 border-t border-white/20 sm:border-t-0 sm:border-r">
            <h3
              className="text-3xl sm:text-4xl font-bold"
              style={{ color: "#F8B600" }}
            >
              2+
            </h3>
            <p className="text-sm sm:text-lg mt-1 text-gray-200">
              Certified Teachers
            </p>
          </div>

          {/* Statistic 3 */}
          <div className="p-3 sm:p-4 border-t border-white/20 sm:border-t-0">
            <h3
              className="text-3xl sm:text-4xl font-bold"
              style={{ color: "#F8B600" }}
            >
              10+
            </h3>
            <p className="text-sm sm:text-lg mt-1 text-gray-200">
              Years Experience
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlNoorHero;
