import React from "react";
import { featureCards } from "../data/featureCardData";

const WhyChooseUs: React.FC = () => {
  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Text */}
        <div className="text-center mb-16">
          <h2 className=" text-2xl md:text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Why Choose Al-Noor Academy?
          </h2>
          <p className="mt-4 text-base md:text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the most comprehensive and authentic Qur'an learning
            platform with modern technology and traditional teaching methods.
          </p>
        </div>

        {/* Feature Grid (3 columns on large screens) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featureCards.map((card, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 
                         transition duration-300 hover:shadow-2xl hover:border-teal-300"
            >
              <div className="flex flex-col h-full">
                {/* Icon Container - Matching the light mint background */}
                <div
                  className="mb-4 p-3 w-fit rounded-lg bg-teal-50"
                  style={{ color: "#2DD4BF" }}
                >
                  <card.icon size={24} color="#2DD4BF" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="text-base text-gray-600">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
