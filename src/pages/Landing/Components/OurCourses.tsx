import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { coursesData } from "../data/coursesData";

const TAILWIND_TEAL = "text-teal-600";

const OurCourses: React.FC = () => {
  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Text */}
        <div className="text-center mb-16">
          <h2 className=" text-2xl md:text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Our Courses
          </h2>
          <p className="mt-4 text-base md:text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our carefully designed courses that cater to students of
            all ages and skill levels.
          </p>
        </div>

        {/* Courses Grid (3 columns on large screens) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coursesData.map((course, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden 
                         flex flex-col transition duration-300 hover:shadow-2xl hover:border-teal-300"
            >
              {/* Course Image  */}
              <div className="relative w-full h-48 bg-gray-200">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover rounded-t-xl"
                />
                {/* Tag for course level */}
                <span
                  className={`absolute top-4 right-4 text-white text-xs font-semibold px-3 py-1 rounded-full 
                                  ${
                                    course.tag === "Beginner"
                                      ? "bg-green-500"
                                      : course.tag === "Intermediate"
                                      ? "bg-blue-500"
                                      : "bg-gray-500"
                                  }`}
                >
                  {course.tag}
                </span>
              </div>

              {/* Course Content */}
              <div className="p-6 flex flex-col grow">
                <h3 className=" text-xl md:text-2xl font-bold mb-2 text-gray-900">
                  {course.title}
                </h3>
                <p className="md:text-lg text-gray-600 mb-4 grow tracking-wide">
                  {course.description}
                </p>

                {/* Duration and Price */}
                <div className="flex justify-between items-center mb-4 text-gray-700 font-semibold">
                  <span>Duration: {course.duration}</span>
                  <span className="text-base font-bold text-teal-500 italic">
                    {course.price}
                  </span>
                </div>

                <hr className="my-4 border-gray-200" />

                {/* What You'll Learn */}
                <h4 className="text-lg font-semibold mb-3 text-gray-800">
                  What You'll Learn
                </h4>
                <ul className="space-y-2 text-gray-600 mb-6">
                  {course.learnPoints.map((point, i) => (
                    <li key={i} className="flex items-center text-base">
                      <FaCheckCircle
                        className={`mr-2 shrink-0 ${TAILWIND_TEAL}`}
                      />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Enroll Now Button */}
                <button
                  className="mt-auto w-full py-3 bg-teal-600 text-white font-bold rounded-full 
                             transition duration-300 cursor-pointer hover:bg-teal-500 shadow-md hover:shadow-lg"
                >
                  Enroll Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurCourses;
