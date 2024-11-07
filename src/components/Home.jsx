import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faLinkedinIn,
  faYoutube,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

import { faDownload } from "@fortawesome/free-solid-svg-icons";

import HomeServicesSlider from "./HomeServicesSlider";
import HomeTechnologies from "./HomeTechnologies";

const Home = () => {
  return (
    <div className="bg-white">
      {/* Banner */}
      <div className="min-h-screen flex flex-col lg:flex-row justify-between items-start mx-auto px-8 sm:px-16 lg:px-32 py-16">
        <div className="w-full lg:w-[45%]">
          <h2 className="text-4xl sm:text-5xl font-bold leading-snug mb-4 ">
            Your Digital Transformation Partner.
          </h2>
          <p className="text-gray-400 mb-8">
            Our experience brings the right insight, technology and teamwork
            together to create outstanding digital experiences, every time.
          </p>

          <button className="bg-blue-600 text-white font-medium text-md px-6 py-3 rounded-lg mb-4 sm:mb-16 sm:mr-2">
            Explore Portfolio
          </button>
          <button className="text-gray-400 hover:text-blue-600 font-medium text-md px-6 py-3 rounded-lg mb-16 border-2 border-gray-400 hover:border-blue-400">
            <FontAwesomeIcon icon={faDownload} className="mr-2" />
            Download Brochure
          </button>
          <p className="sm:mb-2 text-gray-600 text-sm mb-4">
            Trusted by the best ---
          </p>
          <div className="flex space-x-4 mb-8">
            <img
              src="https://agency.demo.nextjstemplates.com/_next/static/media/formbold.69a2ffb6.svg"
              alt=""
              className="w-20 sm:w-40"
            />
            <img
              src="https://agency.demo.nextjstemplates.com/_next/static/media/uideck.7c3bffe9.svg"
              alt=""
              className="w-20 sm:w-40"
            />
            <img
              src="https://agency.demo.nextjstemplates.com/_next/static/media/lineicons.5463f950.svg"
              alt=""
              className="w-20 sm:w-40"
            />
          </div>
        </div>
        <div className="lg:w-[40%] relative z-[10]">
          <img
            src="/images/homePageImage.png"
            alt=""
            className="w-full h-full rounded-tl-[30%] rounded-xl"
          />
          <span className="absolute  -bottom-3 -left-3 sm:-bottom-8 sm:-left-8 z-[-1]">
            <svg
              width="93"
              height="93"
              viewBox="0 0 93 93"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="2.5" cy="2.5" r="2.5" fill="#3056D3"></circle>
              <circle cx="2.5" cy="24.5" r="2.5" fill="#3056D3"></circle>
              <circle cx="2.5" cy="46.5" r="2.5" fill="#3056D3"></circle>
              <circle cx="2.5" cy="68.5" r="2.5" fill="#3056D3"></circle>
              <circle cx="2.5" cy="90.5" r="2.5" fill="#3056D3"></circle>
              <circle cx="24.5" cy="2.5" r="2.5" fill="#3056D3"></circle>
              <circle cx="24.5" cy="24.5" r="2.5" fill="#3056D3"></circle>
              <circle cx="24.5" cy="46.5" r="2.5" fill="#3056D3"></circle>
              <circle cx="24.5" cy="68.5" r="2.5" fill="#3056D3"></circle>
              <circle cx="24.5" cy="90.5" r="2.5" fill="#3056D3"></circle>
              <circle cx="46.5" cy="2.5" r="2.5" fill="#3056D3"></circle>
              <circle cx="46.5" cy="24.5" r="2.5" fill="#3056D3"></circle>
              <circle cx="46.5" cy="46.5" r="2.5" fill="#3056D3"></circle>
              <circle cx="46.5" cy="68.5" r="2.5" fill="#3056D3"></circle>
              <circle cx="46.5" cy="90.5" r="2.5" fill="#3056D3"></circle>
              <circle cx="68.5" cy="2.5" r="2.5" fill="#3056D3"></circle>
              <circle cx="68.5" cy="24.5" r="2.5" fill="#3056D3"></circle>
              <circle cx="68.5" cy="46.5" r="2.5" fill="#3056D3"></circle>
              <circle cx="68.5" cy="68.5" r="2.5" fill="#3056D3"></circle>
              <circle cx="68.5" cy="90.5" r="2.5" fill="#3056D3"></circle>
              <circle cx="90.5" cy="2.5" r="2.5" fill="#3056D3"></circle>
              <circle cx="90.5" cy="24.5" r="2.5" fill="#3056D3"></circle>
              <circle cx="90.5" cy="46.5" r="2.5" fill="#3056D3"></circle>
              <circle cx="90.5" cy="68.5" r="2.5" fill="#3056D3"></circle>
              <circle cx="90.5" cy="90.5" r="2.5" fill="#3056D3"></circle>
            </svg>
          </span>
        </div>
      </div>
      {/* About US */}
      <div className="flex flex-col lg:flex-row justify-between mx-auto px-8 sm:px-16 lg:px-32 py-16">
        <div className="lg:w-[40%]">
          <h4 className="text-blue-600 font-bold text-xl ">ABOUT US</h4>
          <h2 className="text-gray-700 text-3xl font-bold mb-4">
            Better design, better experience
          </h2>
          <p className="text-gray-400 font-medium mb-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
            accusamus nostrum sint totam quasi at perferendis labore ad ea
            nesciunt?
          </p>
        </div>
        <div className="lg:w-[40%]">
          <h3 className="text-3xl font-semibold mb-4">Connect With Us</h3>
          <p className="text-gray-400 font-medium mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            iusto fugiat accusantium! Eum alias eos excepturi magni, saepe ipsam
            quibusdam eligendi? Officiis voluptatem eos veritatis expedita
            eligendi itaque delectus, accusantium labore, pariatur molestiae
            deleniti est debitis animi veniam dolores quibusdam!
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
      </div>
      {/* services */}

      <div className="my-16 bg-blue-950 mx-auto px-8 sm:px-16 lg:px-32 py-16">
        <h4 className="text-blue-600 font-semibold text-xl">WHAT WE DO</h4>
        <div className="flex justify-between">
          <div className="flex flex-col lg:flex-row md:justify-between lg:items-end">
            <h2 className="lg:w-1/2  text-white font-bold text-4xl sm:text-5xl mb-8">
              We help to build clients their dream projects
            </h2>
            <p className="underline underline-offset-2 text-white">
              EXPLORE SERVICES
            </p>
          </div>
        </div>
        <HomeServicesSlider />
      </div>
      {/* our technologies */}
      <HomeTechnologies />
      {/* Our team */}
      <div className="my-16 mx-auto px-8 sm:px-16 lg:px-32 py-16">
        <div className="text-center mb-8">
          <h4 className="text-blue-600 text-lg sm:text-2xl font-semibold mb-2">
            TEAM
          </h4>
          <h2 className="text-2xl sm:text-4xl font-bold mb-6">
            Our Awesome Team
          </h2>
          <h3 className="">
            There are many variations of passages of Lorem Ipsum available but
            the majority have suffered alteration in some form.
          </h3>
        </div>
        <div className="flex flex-col sm:flex-row justify-center gap-8 flex-wrap">
          <div className="sm:w-1/5 md:w-1/3 xl:w-1/5 relative">
            <img
              src="https://agency.demo.nextjstemplates.com/_next/image?url=%2Fimages%2Fteam%2Fimage-02.jpg&w=1920&q=75"
              alt=""
              className="w-full h-full rounded-lg "
            />
            <div className="absolute bottom-4 right-4 left-4 bg-white rounded-lg p-2 text-center">
              <p className="text-lg font-medium">Corris Ambady</p>
              <p className="text-gray-400 font-medium text-md ">
                Web developer
              </p>
            </div>
          </div>
          <div className="sm:w-1/5 md:w-1/3 xl:w-1/5 relative">
            <img
              src="https://agency.demo.nextjstemplates.com/_next/image?url=%2Fimages%2Fteam%2Fimage-02.jpg&w=1920&q=75"
              alt=""
              className="w-full h-full rounded-lg"
            />
            <div className="absolute bottom-4 right-4 left-4 bg-white rounded-lg p-2 text-center">
              <p className="text-lg font-medium">Corris Ambady</p>
              <p className="text-gray-400 font-medium text-md ">
                Web developer
              </p>
            </div>
          </div>

          <div className="sm:w-1/5 md:w-1/3 xl:w-1/5 relative">
            <img
              src="https://agency.demo.nextjstemplates.com/_next/image?url=%2Fimages%2Fteam%2Fimage-03.jpg&w=1920&q=75"
              alt=""
              className="w-full h-full rounded-lg "
            />
            <div className="absolute bottom-4 right-4 left-4 bg-white rounded-lg p-2 text-center">
              <p className="text-lg font-medium">Corris Ambady</p>
              <p className="text-gray-400 font-medium text-md ">
                Web developer
              </p>
            </div>
          </div>
          <div className="sm:w-1/5 md:w-1/3 xl:w-1/5 relative">
            <img
              src="https://agency.demo.nextjstemplates.com/_next/image?url=%2Fimages%2Fteam%2Fimage-04.jpg&w=1920&q=75"
              alt=""
              className="w-full h-full rounded-lg "
            />
            <div className="absolute bottom-4 right-4 left-4 bg-white rounded-lg p-2 text-center">
              <p className="text-lg font-medium">Corris Ambady</p>
              <p className="text-gray-400 font-medium text-md ">
                Web developer
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Blogs */}
      <div className="my-16 mx-auto px-8 sm:px-16 lg:px-32 py-16">
        <div className="text-center mb-8">
          <h4 className="text-blue-600 text-lg sm:text-2xl font-semibold mb-2">
            BlOGS
          </h4>
          <h2 className="text-2xl sm:text-4xl font-bold mb-6">Latest Blogs </h2>
          <h3 className="">
            There are many variations of passages of Lorem Ipsum available but
            the majority have suffered alteration in some form.
          </h3>
        </div>
        <div className="flex flex-col md:flex-row justify-between gap-8 lg:gap-0 flex-wrap ">
          <div className="shadow-md border-lg rounded-lg sm:w-[45%] lg:w-[30%] ">
            <img
              src="https://agency.demo.nextjstemplates.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fnq6dnm34%2Fproduction%2F9e6b67ab379a182243ac521db056e96918ff1b5d-1000x667.png&w=1920&q=75"
              alt=""
              className="rounded-t-lg"
            />
            <div className="p-8">
              <h2 className="text-xl font-semibold">
                Exploring MERN Stack: Powering Modern Web Development
              </h2>
              <p className="text-md font-semibold text-gray-500 mb-4">
                In the world of web development, staying ahead of the curve is
                crucial. One technology stack that ha
              </p>
              <a href="#" className="text-blue-600">
                View more
              </a>
            </div>
          </div>
          <div className="shadow-md border-lg rounded-lg sm:w-[45%]  lg:w-[30%]">
            <img
              src="https://agency.demo.nextjstemplates.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fnq6dnm34%2Fproduction%2F9e6b67ab379a182243ac521db056e96918ff1b5d-1000x667.png&w=1920&q=75"
              alt=""
              className="rounded-t-lg"
            />
            <div className="p-8">
              <h2 className="text-xl font-semibold">
                Exploring MERN Stack: Powering Modern Web Development
              </h2>
              <p
                className="text-md font-semibold text-gray-500 mb-4
              "
              >
                In the world of web development, staying ahead of the curve is
                crucial. One technology stack that ha
              </p>
              <a href="#" className="text-blue-600">
                View more
              </a>
            </div>
          </div>
          <div className="shadow-md border-lg rounded-lg sm:w-[45%] lg:w-[30%]">
            <img
              src="https://agency.demo.nextjstemplates.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fnq6dnm34%2Fproduction%2F9e6b67ab379a182243ac521db056e96918ff1b5d-1000x667.png&w=1920&q=75"
              alt=""
              className="rounded-t-lg"
            />
            <div className="p-8">
              <h2 className="text-xl font-semibold">
                Exploring MERN Stack: Powering Modern Web Development
              </h2>
              <p className="text-md font-semibold text-gray-500 mb-4">
                In the world of web development, staying ahead of the curve is
                crucial. One technology stack that ha
              </p>
              <a href="#" className="text-blue-600">
                View more
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Contact Us */}
      <div className="my-16 mx-auto px-8 sm:px-16 lg:px-32 py-16 bg-image">
        <div className="text-center mb-8">
          <h4 className="text-blue-600 text-lg sm:text-2xl font-semibold mb-2">
            CONTACT
          </h4>
          <h2 className="text-2xl sm:text-4xl font-bold mb-6">
            Have an Project in Mind?
          </h2>
          <h3 className="">
            There are many variations of passages of Lorem Ipsum available but
            the majority have suffered alteration in some form.
          </h3>
        </div>
        <form className="grid grid-cols-1 grid-rows-6 md:grid-cols-2 sm:grid-rows-4 gap-4 ">
          <input
            type="text"
            className="bg-gray-100 p-3 rounded-sm outline-none"
            placeholder="Name"
          />
          <input
            type="text"
            className="bg-gray-100 p-2 sm:p-3 rounded-sm outline-none"
            placeholder="Company"
          />
          <input
            type="email"
            className="bg-gray-100 p-2 sm:p-3 rounded-sm outline-none"
            placeholder="Email"
          />
          <input
            type="text"
            className="bg-gray-100 p-2 sm:p-3 rounded-sm outline-none"
            placeholder="Phone Number"
          />
          <textarea
            className="bg-gray-100 sm:col-span-2 p-2 sm:p-3 rounded-sm outline-none row-span-2"
            placeholder="Write Here"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white rounded-sm px-4 py-2 font-semibold sm:col-span-2"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Home;
