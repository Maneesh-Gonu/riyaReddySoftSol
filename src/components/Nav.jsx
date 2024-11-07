import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"; // Using heroicons for menu icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="bg-white bg-opacity-90 w-full border-b border-gray-300 shadow-sm h-18 sticky top-0 z-20">
      <div className=" mx-auto  px-8 sm:px-16 lg:px-32 z-10">
        <div className="flex items-center justify-between h-16 relative">
          <img
            src="/images/rrsLogo.png"
            alt="RiyaReddy Soft sol"
            className="w-[80%] sm:max-w-[38%] md:max-w-[35%] lg:max-w-[30%] -ml-8"
          />

          <div className="flex md:hidden">
            {/* Mobile menu button */}
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              {isOpen ? (
                <XMarkIcon className="h-9 w-11 text-orange-600 border rounded focus:border-gray-600" />
              ) : (
                <Bars3Icon className="h-9 w-11 text-orange-600  border rounded hover:border-gray-600" />
              )}
            </button>
          </div>
          <div className="hidden md:flex space-x-4 h-full items-center  ">
            <a
              href="#"
              className="text-orange-600 hover:text-gray-600 h-full flex items-center duration-300"
            >
              Home
            </a>
            <a
              href="#"
              className="text-orange-600 hover:text-gray-600  h-full flex items-center duration-300"
            >
              About
            </a>
            {/* Dropdown for Services */}
            <div className=" group h-full flex items-center ">
              <button
                onClick={toggleDropdown}
                className="text-md font-medium text-orange-600 group-hover:text-gray-600  h-full items-center duration-300 "
              >
                Services
                <FontAwesomeIcon icon={faAngleDown} className="ml-1" />
              </button>
              <div
                className={`transition duration-300 absolute top-[85%] hidden group-hover:block border border-gray-400 bg-slate-100 bg-opacity-50 text-black  rounded-md shadow-lg   ${
                  isDropdownOpen ? "block" : "hidden"
                } md:group-hover:block`}
              >
                <a
                  href="#"
                  className="block px-4 py-2  text-orange-600 hover:text-gray-600  border-b border-b-gray-500 "
                >
                  Service 1
                </a>
                <a
                  href="#"
                  className="block px-4 py-2  text-orange-600 hover:text-gray-600 border-b border-b-gray-500"
                >
                  Service 2
                </a>
                <a
                  href="#"
                  className="block px-4 py-2  text-orange-600 hover:text-gray-600 "
                >
                  Service 3
                </a>
              </div>
            </div>
            <a
              href="#"
              className="text-orange-600 hover:text-gray-600 h-full flex items-center duration-300"
            >
              Contact Us
            </a>
          </div>
          <button className="hidden md:block bg-orange-600 rounded-md text-white px-4 py-2  hover:bg-gray-400   ">
            Contact Us
          </button>
        </div>
      </div>

      {/* Dropdown menu for mobile */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#"
              className="block text-orange-600 hover:text-gray-600  px-3 py-2 rounded-md text-base font-medium"
            >
              Home
            </a>
            <a
              href="#"
              className="block text-orange-600 hover:text-gray-600  px-3 py-2 rounded-md text-base font-medium"
            >
              About
            </a>
            {/* Services dropdown in mobile */}
            <div className="group">
              <button
                onClick={toggleDropdown}
                className="block text-orange-600 group-hover:text-gray-600  px-3 py-2 rounded-md text-base font-medium"
              >
                Services
                <FontAwesomeIcon icon={faAngleDown} className="ml-1" />
              </button>
              {isDropdownOpen && (
                <div className="bg-white bg-opacity-75 mt-2 rounded-md shadow-lg w-1/2  ml-4">
                  <a
                    href="#"
                    className="block px-4  py-2 text-orange-600 hover:text-gray-600 border-b  border-gray-600"
                  >
                    Service 1
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2  text-orange-600 hover:text-gray-600 border-b  border-gray-600"
                  >
                    Service 2
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2  text-orange-600 hover:text-gray-600 "
                  >
                    Service 3
                  </a>
                </div>
              )}
            </div>
            <a
              href="#"
              className="block text-orange-600 hover:text-gray-600  px-3 py-2 rounded-md text-base font-medium"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
