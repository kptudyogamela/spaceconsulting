"use client";

import Image from "next/image";
import React from "react";

const teamMembers = [
  {
    name: "John Doe",
    title: "Principal Architect",
    description:
      "Expert in modern architecture and sustainable design, leading innovative residential projects.",
    image: "/testimonial/1.png",
  },
  {
    name: "Jane Smith",
    title: "Civil Engineer",
    description:
      "Specializes in structural design and construction supervision with over 10 years of experience.",
    image: "/testimonial/1.png",
  },
  {
    name: "John Doe",
    title: "Principal Architect",
    description:
      "Expert in modern architecture and sustainable design, leading innovative residential projects.",
    image: "/testimonial/1.png",
  },
  {
    name: "Jane Smith",
    title: "Civil Engineer",
    description:
      "Specializes in structural design and construction supervision with over 10 years of experience.",
    image: "/testimonial/1.png",
  },
  {
    name: "John Doe",
    title: "Principal Architect",
    description:
      "Expert in modern architecture and sustainable design, leading innovative residential projects.",
    image: "/testimonial/1.png",
  },
  {
    name: "Jane Smith",
    title: "Civil Engineer",
    description:
      "Specializes in structural design and construction supervision with over 10 years of experience.",
    image: "/testimonial/1.png",
  },
];

const Team = () => {
  return (
    <section className="text-gray-700 body-font bg-white">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Team</h1>
          <p className="text-lg leading-relaxed text-gray-600 max-w-2xl mx-auto">
            Meet the professionals behind Space Consulting – Architects & Engineers, committed to turning construction dreams into reality.
          </p>
          <div className="w-24 h-1 bg-red-500 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="flex flex-wrap -m-4">
          {teamMembers.map((member, index) => (
            <div key={index} className="p-4 w-full md:w-1/2">
              <div className="h-full flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <Image
                  width={192}
                  height={192}
                  src={member.image}
                  alt={member.name}
                  className="rounded-lg object-cover mb-4 sm:mb-0"
                />
                <div className="sm:ml-6">
                  <h2 className="text-xl font-semibold text-gray-900">{member.name}</h2>
                  <h3 className="text-sm text-red-500 font-medium mb-2">{member.title}</h3>
                  <p className="text-gray-600 mb-3">{member.description}</p>
                  <div className="flex space-x-3">
                    <a href="#" className="text-gray-500 hover:text-blue-600">
                      <svg fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                      </svg>
                    </a>
                    <a href="#" className="text-gray-500 hover:text-sky-400">
                      <svg fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0016 3a4.48 4.48 0 00-4.48 4.48v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                      </svg>
                    </a>
                    <a href="#" className="text-gray-500 hover:text-green-600">
                      <svg fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7A8.38 8.38 0 014.1 11.5a8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
