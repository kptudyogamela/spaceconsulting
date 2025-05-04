"use client";

import React, { useState } from "react";
import { FaHardHat, FaTools, FaHandshake, FaClock } from "react-icons/fa";

export default function WhyChooseUs() {
  const [showMessage, setShowMessage] = useState(false);

  const handleContactClick = () => {
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 5000); // hide message after 5 seconds
  };

  const reasons = [
    {
      title: "Decades of Experience",
      icon: <FaHardHat className="w-10 h-10" />,
      description:
        "With over 25 years in the construction industry, we’ve successfully delivered hundreds of residential and commercial projects across Karnataka.",
    },
    {
      title: "Quality Workmanship",
      icon: <FaTools className="w-10 h-10" />,
      description:
        "Our skilled team uses high-grade materials and adheres to global standards to ensure durable and aesthetically pleasing structures.",
    },
    {
      title: "Transparent Communication",
      icon: <FaHandshake className="w-10 h-10" />,
      description:
        "We prioritize honest project timelines, clear estimates, and regular updates, keeping clients informed at every step.",
    },
    {
      title: "On-Time Delivery",
      icon: <FaClock className="w-10 h-10" />,
      description:
        "We have a strong reputation for completing projects on or before deadlines through efficient planning and dedicated teams.",
    },
  ];

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
            Why Choose Space Consulting
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500">
            Trusted construction company in Karnataka with a proven track record
            of excellence in residential and commercial projects.
          </p>
          <div className="flex mt-6 justify-center">
            <div className="w-16 h-1 rounded-full bg-red-500 inline-flex"></div>
          </div>
        </div>

        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
          {reasons.map((item, index) => (
            <div
              key={index}
              className="p-4 md:w-1/2 lg:w-1/3 flex flex-col text-center items-center mx-auto"
            >
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-red-100 text-red-500 mb-5 flex-shrink-0">
                {item.icon}
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                  {item.title}
                </h2>
                <p className="leading-relaxed text-base">{item.description}</p>
                <a className="mt-3 text-red-500 inline-flex items-center cursor-pointer">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={handleContactClick}
          className="flex mx-auto mt-16 text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg"
        >
          Contact Us
        </button>

        {showMessage && (
          <div className="mt-6 text-center text-green-600 font-semibold text-lg">
            📞 Please call us at <span className="underline">+91-9876543210</span>
          </div>
        )}
      </div>
    </section>
  );
}
