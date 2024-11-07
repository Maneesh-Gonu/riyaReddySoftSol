// import React from "react";
// import Slider from "react-slick";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

// const HomeServicesSlider = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 300,
//     slidesToScroll: 3,
//     slidesToShow: 3,
//     autoplay: true,
//     autoplaySpeed: 2000,
//     responsive: [
//       {
//         breakpoint: 1440,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 2,
//         },
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   };

//   const cardsData = [
//     {
//       title: "Cloud Adoption",
//       description:
//         "Our Cloud Solutions provides a highly reliable, scalable, low-cost infrastructure platform that allows you to quickly innovate, experiment and iterate.",
//       imgSrc: "/images/cloudAdoption.png",
//     },
//     {
//       title: "Digital Transformation",
//       description:
//         "Digital transformation takes a customer-driven, digital-first approach to all aspects of a business, from its business models to customer experiences to processes and operations.",
//       imgSrc: "/images/digitalTransformation.png",
//     },
//     {
//       title: "Product Engineering",
//       description:
//         "We help you with every aspect under full-cycle product engineering with ease, ensuring that your ideas are well-executed.",
//       imgSrc: "/images/productEngineering.png",
//     },
//     {
//       title: "App Modernization",
//       description:
//         "We help clients navigate the journey by understanding their current application landscape and outlining a strategy that aligns to long-term business goals.",
//       imgSrc: "/images/appModernization.png",
//     },
//     {
//       title: "User Experience",
//       description:
//         "We have a wealth of UX and UI talent, experts in usability, accessibility, information architecture, interaction design, and visual design.",
//       imgSrc: "/images/userExperience.png",
//     },
//     {
//       title: "Digital Marketing",
//       description:
//         "We offer digital marketing services to grow your business online. Our services include SEO, social media management, PPC ads, content creation, and web analytics. We use data to help you reach more people, improve visibility, and drive growth.",
//       imgSrc: "/images/serviceCardImage.jpg",
//     },
//     {
//       title: "Dedicated teams",
//       description:
//         "Significant cost savings and time-to-market reduction are the advantages of dedicated teams and offshore software development services.",
//       imgSrc: "/images/dedicatedTeams.png",
//     },
//   ];

//   return (
//     <div className="container mx-auto py-4">
//       <div className="max-w-[75vw] md:max-w-[80vw] lg:max-w-[75vw] mx-auto">
//         <Slider {...settings}>
//           {cardsData.map((card, index) => (
//             <div key={index} className="p-2 sm:p-4 h-[70vh] sm:h-[80vh] ">
//               <div className="rounded-lg shadow-lg p-3 sm:p-4 bg-gray-100 hover:scale-105 hover:cursor-pointer duration-300 h-full flex flex-col justify-between ">
//                 <img
//                   className="w-full object-cover rounded-lg mb-4 h-[40vh] sm:h-1/2"
//                   src={card.imgSrc}
//                   alt={card.title}
//                 />
//                 <h2 className="text-lg sm:text-xl font-bold mb-2 text-blue-600">
//                   {card.title}
//                 </h2>
//                 <p className="text-sm sm:text-base text-gray-700 mb-3">
//                   {card.description}
//                 </p>
//                 <button className="flex items-center hover:text-gray-700 duration-300 text-blue-600">
//                   View More
//                   <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
//                 </button>
//               </div>
//             </div>
//           ))}
//         </Slider>
//       </div>
//     </div>
//   );
// };

// export default HomeServicesSlider;












// import React from "react";
// import Slider from "react-slick";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

// const HomeServicesSlider = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 300,
//     slidesToScroll: 3,
//     slidesToShow: 3,
//     autoplay: true,
//     autoplaySpeed: 2000,
//     responsive: [
//       {
//         breakpoint: 1440,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 2,
//         },
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   };

//   const cardsData = [
//     {
//       title: "Cloud Adoption",
//       description:
//         "Our Cloud Solutions provides a highly reliable, scalable, low-cost infrastructure platform that allows you to quickly innovate, experiment and iterate.",
//       imgSrc: "/images/cloudAdoption.png",
//     },
//     {
//       title: "Digital Transformation",
//       description:
//         "Digital transformation takes a customer-driven, digital-first approach to all aspects of a business, from its business models to customer experiences to processes and operations.",
//       imgSrc: "/images/digitalTransformation.png",
//     },
//     {
//       title: "Product Engineering",
//       description:
//         "We help you with every aspect under full-cycle product engineering with ease, ensuring that your ideas are well-executed.",
//       imgSrc: "/images/productEngineering.png",
//     },
//     {
//       title: "App Modernization",
//       description:
//         "We help clients navigate the journey by understanding their current application landscape and outlining a strategy that aligns to long-term business goals.",
//       imgSrc: "/images/appModernization.png",
//     },
//     {
//       title: "User Experience",
//       description:
//         "We have a wealth of UX and UI talent, experts in usability, accessibility, information architecture, interaction design, and visual design.",
//       imgSrc: "/images/userExperience.png",
//     },
//     {
//       title: "Digital Marketing",
//       description:
//         "We offer digital marketing services to grow your business online. Our services include SEO, social media management, PPC ads, content creation, and web analytics. We use data to help you reach more people, improve visibility, and drive growth.",
//       imgSrc: "/images/serviceCardImage.jpg",
//     },
//     {
//       title: "Dedicated teams",
//       description:
//         "Significant cost savings and time-to-market reduction are the advantages of dedicated teams and offshore software development services.",
//       imgSrc: "/images/dedicatedTeams.png",
//     },
//   ];

//   return (
//     <div className="container mx-auto py-4">
//       <div className="max-w-[75vw] md:max-w-[80vw] lg:max-w-[75vw] mx-auto">
//         <Slider {...settings}>
//           {cardsData.map((card, index) => (
//             <div key={index} className="p-2 sm:p-4">
//               <div className="rounded-lg shadow-lg p-3 sm:p-4 bg-gray-100 hover:scale-105 hover:cursor-pointer duration-300 h-full flex flex-col justify-between">
//                 <img
//                   className="w-full object-cover rounded-lg mb-4 h-[40vh] sm:h-[30vh]"
//                   src={card.imgSrc}
//                   alt={card.title}
//                 />
//                 <h2 className="text-lg sm:text-xl font-bold mb-2 text-blue-600">
//                   {card.title}
//                 </h2>
//                 <p className="text-sm sm:text-base text-gray-700 mb-3 overflow-hidden">
//                   {card.description}
//                 </p>
//                 <button className="flex items-center hover:text-gray-700 duration-300 text-blue-600">
//                   View More
//                   <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
//                 </button>
//               </div>
//             </div>
//           ))}
//         </Slider>
//       </div>
//     </div>
//   );
// };

// export default HomeServicesSlider;



import React from "react";
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const HomeServicesSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToScroll: 3,
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const cardsData = [
    {
      title: "Cloud Adoption",
      description:
        "Our Cloud Solutions provides a highly reliable, scalable, low-cost infrastructure platform that allows you to quickly innovate, experiment and iterate.",
      imgSrc: "/images/cloudAdoption.png",
    },
    {
      title: "Digital Transformation",
      description:
        "Digital transformation takes a customer-driven, digital-first approach to all aspects of a business, from its business models to customer experiences to processes and operations.",
      imgSrc: "/images/digitalTransformation.png",
    },
    {
      title: "Product Engineering",
      description:
        "We help you with every aspect under full-cycle product engineering with ease, ensuring that your ideas are well-executed.",
      imgSrc: "/images/productEngineering.png",
    },
    {
      title: "App Modernization",
      description:
        "We help clients navigate the journey by understanding their current application landscape and outlining a strategy that aligns to long-term business goals.",
      imgSrc: "/images/appModernization.png",
    },
    {
      title: "User Experience",
      description:
        "We have a wealth of UX and UI talent, experts in usability, accessibility, information architecture, interaction design, and visual design.",
      imgSrc: "/images/userExperience.png",
    },
    {
      title: "Digital Marketing",
      description:
        "We offer digital marketing services to grow your business online. Our services include SEO, social media management, PPC ads, content creation, and web analytics. We use data to help you reach more people, improve visibility, and drive growth.",
      imgSrc: "/images/serviceCardImage.jpg",
    },
    {
      title: "Dedicated teams",
      description:
        "Significant cost savings and time-to-market reduction are the advantages of dedicated teams and offshore software development services.",
      imgSrc: "/images/dedicatedTeams.png",
    },
  ];

  return (
    <div className="container mx-auto py-4">
      <div className="max-w-[75vw] md:max-w-[80vw] lg:max-w-[75vw] mx-auto">
        <Slider {...settings}>
          {cardsData.map((card, index) => (
            <div key={index} className="p-2 sm:p-4">
              <div className="rounded-lg shadow-lg p-3 sm:p-4 bg-gray-100 hover:scale-105 hover:cursor-pointer duration-300 h-full flex flex-col justify-between min-h-[400px]">
                <img
                  className="w-full object-cover rounded-lg mb-4 h-[200px] sm:h-[250px] flex-shrink-0"
                  src={card.imgSrc}
                  alt={card.title}
                />
                <h2 className="text-lg sm:text-xl font-bold mb-2 text-blue-600">
                  {card.title}
                </h2>
                <p className="text-sm sm:text-base text-gray-700 mb-3 flex-grow">
                  {card.description}
                </p>
                <button className="flex items-center hover:text-gray-700 duration-300 text-blue-600">
                  View More
                  <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
                </button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default HomeServicesSlider;
