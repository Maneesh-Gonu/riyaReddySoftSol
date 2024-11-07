import React, { useEffect } from "react";
import { useState } from "react";

const tabsList = [
  { tabId: "CLOUD_SERVICES", displayText: "Cloud Services" },
  { tabId: "FRAMWEWORKS", displayText: "Frameworks" },
  { tabId: "DISTRIBUTED_SYSTEM", displayText: "Distributed System" },
  { tabId: "ERP_SOFTWARES", displayText: "ERP Software" },
];

const projectsList = [
  {
    projectId: 0,
    category: "CLOUD_SERVICES",
    imageURL: "https://assets.ccbp.in/frontend/react-js/projects-s3-img.png",
    title: "Music Page",
    description:
      "The music page enables the users to browse through the images of all-time favorite music albums.",
  },
  {
    projectId: 1,
    category: "CLOUD_SERVICES",
    imageURL: "https://assets.ccbp.in/frontend/react-js/projects-s4-img.png",
    title: "Tourism Website",
    description:
      "A tourism website enables the user to browse through the images of popular destinations.",
  },
  {
    projectId: 2,
    category: "CLOUD_SERVICES",
    imageURL: "https://assets.ccbp.in/frontend/react-js/projects-s1-img.png",
    title: "Advanced Technologies",
    description:
      "A website that gives you a basic understanding of Advanced Technologies.",
  },
  {
    projectId: 3,
    category: "FRAMWEWORKS",
    imageURL: "https://assets.ccbp.in/frontend/react-js/projects-s2-img.png",
    title: "Happy Meals",
    description: "Discover the best foods in over 1,000 restaurants.",
  },
  {
    projectId: 4,
    category: "FRAMWEWORKS",
    imageURL: "https://assets.ccbp.in/frontend/react-js/projects-r4-img.png",
    title: "VR Website",
    description:
      "VR Website enables users to explore AR and VR Products and Industry happenings.",
  },
  {
    projectId: 5,
    category: "FRAMWEWORKS",
    imageURL: "https://assets.ccbp.in/frontend/react-js/projects-r2-img.png",
    title: "Food Munch",
    description: "Food Much Website is a user-centric food tech website.",
  },
  {
    projectId: 6,
    category: "DISTRIBUTED_SYSTEM",
    imageURL: "https://assets.ccbp.in/frontend/react-js/projects-r3-img.png",
    title: "Portfolio",
    description:
      "A portfolio is the best alternative for a resume to showcase your skills to the digital world.",
  },
  {
    projectId: 7,
    category: "DISTRIBUTED_SYSTEM",
    imageURL: "https://assets.ccbp.in/frontend/react-js/projects-r1-img.png",
    title: "Design",
    description:
      "A website to showcase the best features and give more information about the Design tool.",
  },
  {
    projectId: 8,
    category: "DISTRIBUTED_SYSTEM",
    imageURL: "https://assets.ccbp.in/frontend/react-js/projects-d3-img.png",
    title: "Speed Typing Test",
    description:
      "Speed Typing Test Application is capable of calculating the time to type the randomly generated quote.",
  },
  {
    projectId: 9,
    category: "ERP_SOFTWARES",
    imageURL: "https://assets.ccbp.in/frontend/react-js/projects-d1-img.png",
    title: "Random Joke Page",
    description:
      "Random Joke Page is an API-based dynamic Web Application that generates a new joke.",
  },
  {
    projectId: 10,
    category: "ERP_SOFTWARES",
    imageURL: "https://assets.ccbp.in/frontend/react-js/projects-d2-img.png",
    title: "Sizing An Image",
    description:
      "This is a dynamic web application capable of adjusting the size of an element using DOM manipulations.",
  },
];

const HomeTechnologies = () => {
  const [activeTabId, setActiveTabId] = useState(tabsList[0].tabId);
  const [filteredProjects, setFilteredProjects] = useState([]);

  useEffect(() => {
    const filtered = projectsList.filter(
      (eachProjectDetails) => eachProjectDetails.category === activeTabId
    );
    setFilteredProjects(filtered);
  }, [activeTabId]);

  const onSetActiveTabId = (tabValue) => {
    setActiveTabId(tabValue);
  };

  return (
    <div className="my-16 mx-auto px-8 sm:px-16 lg:px-32 py-16 ">
      <div className="text-center mb-8">
        <h4 className="text-blue-600 text-lg sm:text-2xl font-semibold mb-2">
          Creative portfolio
        </h4>
        <h2 className="text-2xl sm:text-4xl font-bold mb-6">
          Our technologies
        </h2>
        <h3 className="">
          There are many variations of passages of Lorem Ipsum available but the
          majority have suffered alteration in some form.
        </h3>
      </div>
      <ul className="flex justify-center gap-2 flex-wrap">
        {tabsList.map((tabDetails) => {
          const selected = activeTabId === tabDetails.tabId;
          const selectedColor = selected ? "bg-blue-600 text-white" : "";
          return (
            <li key={tabDetails.tabId} className="">
              <button
                className={`${selectedColor} duration-300 text-gray-400 text-sm lg:text-lg  border-gray-4 px-4 py-2 rounded-full `}
                onClick={() => onSetActiveTabId(tabDetails.tabId)}
              >
                {tabDetails.displayText}
              </button>
            </li>
          );
        })}
      </ul>

        <ul className="flex gap-6 mt-8 duration-500 flex-wrap ">
          {filteredProjects.map((projectDetails) => (
            <li key={projectDetails.projectId} className=" lg:w-[45%] duration-300">
              <div className="flex flex-col md:flex-row rounded-md shadow-md shadow-gray-300 h-full">
                <img src={projectDetails.imageURL} alt="" className="md:w-2/5 rounded-l-md "/>
                <div className="p-4 ">
                  <h2 className="text-black text-sm">{projectDetails.title}</h2>
                  <h4>{projectDetails.description}</h4>
                </div>
              </div>
            </li>
          ))}
        </ul>
    </div>
  );
};

export default HomeTechnologies;
