import React from "react";
import { achievementsData } from "../data/ourAcheivement";
import acheivemantImage from "../../../assets/mosque-background.png";

const OurAchievements: React.FC = () => {
  return (
    <div
      className="py-20 text-white relative overflow-hidden"
      style={{
        backgroundColor: "teal-500",
        backgroundImage: `url(${acheivemantImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundBlendMode: "multiply",
      }}
    >
      {/* Content Overlay (ensures text is readable) */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Header Text */}
        <h2
          className=" text-2xl md:text-4xl font-extrabold mb-4"
          style={{ color: "white" }}
        >
          Our Achievements
        </h2>
        <p className="md:text-xl mb-16 text-white/90 max-w-2xl mx-auto">
          Over the years, we have helped thousands of students connect with the
          Holy Qur'an
        </p>

        {/* Statistics Grid */}
        <div className="grid grid-cols-2 md:flex md:justify-center md:items-center md:gap-25 gap-10">
          {achievementsData.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              {/* Icon */}
              <div className="mb-4 p-4 rounded-full border-2 border-white">
                <item.icon className="h-8 w-8 text-white" />
              </div>

              {/* Figure */}
              <h3 className="text-4xl font-extrabold mb-1">{item.figure}</h3>

              {/* Label */}
              <p className="text-lg text-white/80">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurAchievements;
