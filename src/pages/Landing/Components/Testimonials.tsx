import React from "react";
import { testimonialsData } from "../data/testimonials";
import { StarRating } from "../../../helpers/starRating";

const StudentTestimonials: React.FC = () => {
  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Text */}
        <div className="text-center mb-16">
          <h2 className=" text-2xl md:text-4xl font-extrabold text-gray-900 sm:text-5xl">
            What Our Students Say
          </h2>
          <p className="mt-4 md:text-xl text-gray-600 max-w-3xl mx-auto">
            Read testimonials from our satisfied students who have transformed
            their Qur'an learning journey with us
          </p>
        </div>

        {/* Testimonials Grid (3 columns on large screens) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 
                         flex flex-col transition duration-300 hover:shadow-2xl hover:border-teal-300"
            >
              <StarRating count={testimonial.rating} />

              {/* Quote */}
              <p className="text-gray-700 italic mb-6 grow">
                "{testimonial.quote}"
              </p>

              {/* Footer (Name, Location, Program) */}
              <div className="border-t pt-4">
                <p className="text-lg font-bold text-gray-900">
                  {testimonial.name}
                </p>
                <p className="text-sm text-gray-500 mb-2">
                  {testimonial.location}
                </p>

                {/* Program Tag */}
                <span
                  className="inline-block px-3 py-1 text-xs font-semibold rounded-full mt-2"
                  style={{ backgroundColor: "#E0F2F1", color: "#0F766E" }} // Light mint background, dark teal text
                >
                  {testimonial.program}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudentTestimonials;
