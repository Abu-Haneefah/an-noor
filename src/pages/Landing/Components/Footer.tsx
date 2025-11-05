import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";
import { MdAccessTime } from "react-icons/md";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0A192F] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 lg:gap-16">
          <div className="col-span-2 md:col-span-1">
            <h3
              className="text-2xl font-serif font-bold mb-4"
              style={{ color: "#F8B600" }}
            >
              Al-Noor Academy
            </h3>
            <p className="text-sm text-gray-400 mb-6 max-w-xs">
              Dedicated to providing authentic and comprehensive Qur'an
              education to students worldwide through qualified teachers and
              modern technology.
            </p>

            {/* Social Icons */}
            <div className="flex space-x-3">
              <a
                href="#"
                aria-label="Facebook"
                className="p-2 rounded-full bg-gray-700 hover:bg-teal-600 transition duration-300"
              >
                <FaFacebookF className="w-4 h-4" />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="p-2 rounded-full bg-gray-700 hover:bg-teal-600 transition duration-300"
              >
                <FaTwitter className="w-4 h-4" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="p-2 rounded-full bg-gray-700 hover:bg-teal-600 transition duration-300"
              >
                <FaInstagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="p-2 rounded-full bg-gray-700 hover:bg-teal-600 transition duration-300"
              >
                <FaYoutube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a
                  href="#"
                  className="hover:text-teal-400 transition duration-200"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-teal-400 transition duration-200"
                >
                  Our Courses
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-teal-400 transition duration-200"
                >
                  Teachers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-teal-400 transition duration-200"
                >
                  Testimonials
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-teal-400 transition duration-200"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-teal-400 transition duration-200"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Our Courses */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-white">Our Courses</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a
                  href="#"
                  className="hover:text-teal-400 transition duration-200"
                >
                  Beginner Reading
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-teal-400 transition duration-200"
                >
                  Tajweed Mastery
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-teal-400 transition duration-200"
                >
                  Hifz Program
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-teal-400 transition duration-200"
                >
                  Arabic Language
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-teal-400 transition duration-200"
                >
                  Islamic Studies
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Support & Contact */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-white">Support</h4>
            <ul className="space-y-2 text-sm text-gray-400 mb-6">
              <li>
                <a
                  href="#"
                  className="hover:text-teal-400 transition duration-200"
                >
                  Help Center
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-teal-400 transition duration-200"
                >
                  Student Portal
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-teal-400 transition duration-200"
                >
                  Technical Support
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-teal-400 transition duration-200"
                >
                  Payment Options
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-teal-400 transition duration-200"
                >
                  Refund Policy
                </a>
              </li>
            </ul>

            <div className="space-y-2 text-sm">
              <p className="flex items-center text-gray-400">
                <FaEnvelope className="mr-3 w-4 h-4 text-teal-400 shrink-0" />
                info@alnooracademy.com
              </p>
              <p className="flex items-center text-gray-400">
                <FaPhoneAlt className="mr-3 w-4 h-4 text-teal-400 shrink-0" />
                +234 906 911 5484
              </p>
              <p className="flex items-center text-gray-400">
                <MdAccessTime className="mr-3 w-4 h-4 text-teal-400 shrink-0" />
                24/7 Support Available
              </p>
            </div>
          </div>
        </div>

        {/* Copyright and Legal Links */}
        <div className="mt-12 pt-8 border-t border-gray-700 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500">
          <p className="mb-2 sm:mb-0">
            © {new Date().getFullYear()} Al-Noor Qur'an Academy. All rights
            reserved.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-teal-400 transition duration-200">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-teal-400 transition duration-200">
              Terms of Service
            </a>
            {/* Keeping "Made with Readdy" as per design, styled as a link */}
            <a href="#" className="hover:text-teal-400 transition duration-200">
              Made with ❤️
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
