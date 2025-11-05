import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { teachersData } from "../data/teachersData";

const MeetOurTeachers: React.FC = () => {
  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Text */}
        <div className="text-center mb-16">
          <h2 className=" text-2xl md:text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Meet Our Teachers
          </h2>
          <p className="mt-4 md:text-xl text-gray-600 max-w-3xl mx-auto">
            Learn from qualified and experienced instructors who are passionate
            about teaching the Holy Qur'an
          </p>
        </div>

        {/* Teachers Grid  */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {teachersData.map((teacher, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 
                         flex flex-col items-center text-center transition duration-300 hover:shadow-2xl"
            >
              {/* Teacher Image Placeholder */}
              <div
                className="w-32 h-32 mb-4 rounded-full flex items-center justify-center 
                           bg-teal-500 text-white text-5xl font-bold border-4 border-gray-200"
              >
                {/* Display the first letter of the name */}
                {teacher.initial}
              </div>

              {/* Name and Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-1">
                {teacher.name}
              </h3>
              <p className="text-lg font-semibold mb-2 text-teal-600">
                {teacher.title}
              </p>
              <p className="text-sm text-gray-500 mb-4 border-b pb-4 w-full">
                {teacher.experience}
              </p>

              {/* Focus Area */}
              <p className="text-base font-medium text-gray-700 mb-2 italic">
                {teacher.focus}
              </p>

              {/* Credentials */}
              <h4 className="text-lg font-bold text-gray-800 mt-4 mb-3">
                Credentials:
              </h4>
              <ul className="space-y-2 text-left w-full max-w-xs mb-8">
                {teacher.credentials.map((cred, i) => (
                  <li
                    key={i}
                    className="flex items-start text-base text-gray-600"
                  >
                    <FaCheckCircle
                      className="text-teal-600 mr-2 mt-1 shrink-0"
                      size={14}
                    />
                    <span>{cred}</span>
                  </li>
                ))}
              </ul>

              {/* Book a Trial Button */}
              <button
                className="mt-auto w-full py-3 bg-teal-500 text-white font-bold rounded-full 
                           transition duration-300 cursor-pointer hover:bg-teal-700 shadow-md hover:shadow-lg"
              >
                Book a Trial
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MeetOurTeachers;
