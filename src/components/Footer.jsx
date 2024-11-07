import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faLinkedinIn,
  faYoutube,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="mt-16 mx-auto px-8 sm:px-16 lg:px-32 pt-16 bg-blue-950 text-white relative">
      <span className="absolute  top-2 right-2  ">
        <svg
          width="93"
          height="93"
          viewBox="0 0 93 93"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="2.5" cy="2.5" r="2.5" fill="#9ca3af"></circle>
          <circle cx="2.5" cy="24.5" r="2.5" fill="#9ca3af"></circle>
          <circle cx="2.5" cy="46.5" r="2.5" fill="#9ca3af"></circle>
          <circle cx="2.5" cy="68.5" r="2.5" fill="#9ca3af"></circle>
          <circle cx="2.5" cy="90.5" r="2.5" fill="#9ca3af"></circle>
          <circle cx="24.5" cy="2.5" r="2.5" fill="#9ca3af"></circle>
          <circle cx="24.5" cy="24.5" r="2.5" fill="#9ca3af"></circle>
          <circle cx="24.5" cy="46.5" r="2.5" fill="#9ca3af"></circle>
          <circle cx="24.5" cy="68.5" r="2.5" fill="#9ca3af"></circle>
          <circle cx="24.5" cy="90.5" r="2.5" fill="#9ca3af"></circle>
          <circle cx="46.5" cy="2.5" r="2.5" fill="#9ca3af"></circle>
          <circle cx="46.5" cy="24.5" r="2.5" fill="#9ca3af"></circle>
          <circle cx="46.5" cy="46.5" r="2.5" fill="#9ca3af"></circle>
          <circle cx="46.5" cy="68.5" r="2.5" fill="#9ca3af"></circle>
          <circle cx="46.5" cy="90.5" r="2.5" fill="#9ca3af"></circle>
          <circle cx="68.5" cy="2.5" r="2.5" fill="#9ca3af"></circle>
          <circle cx="68.5" cy="24.5" r="2.5" fill="#9ca3af"></circle>
          <circle cx="68.5" cy="46.5" r="2.5" fill="#9ca3af"></circle>
          <circle cx="68.5" cy="68.5" r="2.5" fill="#9ca3af"></circle>
          <circle cx="68.5" cy="90.5" r="2.5" fill="#9ca3af"></circle>
          <circle cx="90.5" cy="2.5" r="2.5" fill="#9ca3af"></circle>
          <circle cx="90.5" cy="24.5" r="2.5" fill="#9ca3af"></circle>
          <circle cx="90.5" cy="46.5" r="2.5" fill="#9ca3af"></circle>
          <circle cx="90.5" cy="68.5" r="2.5" fill="#9ca3af"></circle>
          <circle cx="90.5" cy="90.5" r="2.5" fill="#9ca3af"></circle>
        </svg>
      </span>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 border-b-2 border-b-gray-700 py-8">
        <div>
          {/* <img src="/images/rrsLogo.png" alt="" className="w-[400px]" /> */}
          <h2 className="text-white text-2xl font-bold mb-4">RR Soft Sol</h2>
          <p className="text-gray-400 font-medium mb-4">
            Our experience brings the right insight, technology and teamwork
            together to create outstanding digital experiences, every time.
          </p>
          <div className="space-x-4  flex">
            <span className="flex justify-center items-center w-8 h-8 border-2 border-gray-400 rounded-full text-gray-400 group hover:bg-gray-400 duration-100">
              <FontAwesomeIcon
                icon={faFacebookF}
                className="group-hover:text-white "
              />
            </span>
            <span className="flex justify-center items-center w-8 h-8 border-2 border-gray-400 rounded-full text-gray-400 group hover:bg-gray-400 duration-100">
              <FontAwesomeIcon
                icon={faLinkedinIn}
                className="group-hover:text-white "
              />
            </span>
            <span className="flex justify-center items-center w-8 h-8 border-2 border-gray-400 rounded-full text-gray-400 group hover:bg-gray-400 duration-100">
              <FontAwesomeIcon
                icon={faYoutube}
                className="group-hover:text-white "
              />
            </span>
            <span className="flex justify-center items-center w-8 h-8 border-2 border-gray-400 rounded-full text-gray-400 group hover:bg-gray-400 duration-100">
              <FontAwesomeIcon
                icon={faXTwitter}
                className="group-hover:text-white "
              />
            </span>
          </div>
        </div>
        <div className="">
          <h2 className="text-white text-2xl font-bold mb-4">Our Services</h2>
          <a className="text-gray-400 font-medium mb-4 cursor-pointer hover:text-white">
            Cloud Adoption
          </a>
          <a className="text-gray-400 font-medium cursor-pointer hover:text-white block">
            Digital Transformation
          </a>
          <a className="text-gray-400 font-medium cursor-pointer hover:text-white block">
            Product Engineering
          </a>
          <a className="text-gray-400 font-medium cursor-pointer hover:text-white block">
            App Modernization
          </a>
          <a className="text-gray-400 font-medium cursor-pointer hover:text-white block">
            User Experience
          </a>
          <a className="text-gray-400 font-medium cursor-pointer hover:text-white block">
            Digital Marketing
          </a>
        </div>
        <div className="sm:mt-8 lg:mt-0">
          <h2 className="text-white text-2xl font-bold mb-4">Quick Links</h2>
          <a className="text-gray-400 font-medium cursor-pointer hover:text-white block">
            Home
          </a>

          <a className="text-gray-400 font-medium cursor-pointer hover:text-white block">
            About Us
          </a>
          <a className="text-gray-400 font-medium cursor-pointer hover:text-white block">
            Services
          </a>
        </div>
        <div className="text-gray-400  font-medium sm:mt-8 lg:mt-0">
          <h2 className="text-white text-2xl font-bold mb-4 ">Contact Us</h2>
          <p>Plot No.49B, Sairaj Towers</p>
          <p>Beside Mercedes Benz Showroom</p>
          <p>Kavuri Hills, Hyderabad-500081</p>
          <p>
            <span>Phone</span>: 18008892499
          </p>
          <p>
            <span>Phone</span>: 18008892499
          </p>
          <p>
            <span>Email </span>: info@rrsoftsol.in
          </p>
        </div>
      </div>
      <svg
        width="143"
        height="138"
        viewBox="0 0 143 138"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute bottom-0 left-0"
      >
        <circle
          cx="25"
          cy="118"
          r="101"
          stroke="url(#paint0_linear_52:83)"
          stroke-width="34"
        ></circle>
        <defs>
          <linearGradient
            id="paint0_linear_52:83"
            x1="-12.7969"
            y1="-37.3359"
            x2="99.2109"
            y2="173.773"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#4A6CF7"></stop>
            <stop offset="1" stop-color="#4A6CF7" stop-opacity="0"></stop>
          </linearGradient>
        </defs>
      </svg>
      <div className="p-4">
        <p className="text-center">© 2012 RR SoftSol. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
