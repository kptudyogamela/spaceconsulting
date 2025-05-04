'use client'
import { useState } from 'react';

const projects = [
  {
    id: 1,
    title: "Luxury Villa in Mysuru",
    description:
      "This villa features modern architecture with premium finishes, solar panels, and a landscaped garden. Completed in 2024, it spans 4,000 sq ft and reflects the client’s taste for minimalism and luxury.",
    image: "/projects/3.jpeg",
    architect: "Rahul Sharma",
    bio: "Lead architect for Space Consulting. Expert in sustainable residential design.",
    link: "/projects/villa-luxury",
    category: "Residential",
  },
  {
    id: 2,
    title: "Hospital Renovation – Chamarajanagar",
    description:
      "Complete structural and aesthetic renovation of an old hospital. Upgraded with modern facilities, optimized patient flow, and energy-efficient lighting systems.",
    image: "/projects/5.jpeg",
    architect: "Dr. Anitha Rao",
    bio: "Healthcare space consultant with over 15 years of experience.",
    link: "/projects/hospital-renovation",
    category: "Commercial",
  },
  {
    id: 3,
    title: "Farmhouse near Gundlupet",
    description:
      "Designed for weekend retreats with traditional South Indian aesthetics blended with modern comfort. Includes eco-friendly materials and rainwater harvesting.",

    image: "/projects/4.jpeg",
    architect: "Suresh Kulkarni",
    bio: "Known for blending heritage with functionality in rural architecture.",
    link: "/projects/farmhouse-gundlupet",
    category: "Residential",
  },
];

export default function CompletedProjects() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Filter projects based on selected category
  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <div className="text-gray-600 body-font">
      <div className="container px-5 py-10 mx-auto flex flex-col">
        <div className="text-center mb-10">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
            Completed Projects
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500">
            A curated collection of residential, commercial, and institutional projects delivered with excellence and attention to detail.
          </p>
          <div className="flex mt-6 justify-center">
            <div className="w-16 h-1 rounded-full bg-red-500 inline-flex"></div>
          </div>
        </div>

        <div className="flex mx-auto flex-wrap mb-20">
          {/* Tabbed Navigation */}
          <a
            onClick={() => setSelectedCategory('All')}
            className={`sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none ${selectedCategory === 'All' ? 'border-red-500 text-red-500' : 'border-gray-200 hover:text-gray-900'}`}
          >
            All Projects
          </a>
          <a
            onClick={() => setSelectedCategory('Residential')}
            className={`sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none ${selectedCategory === 'Residential' ? 'border-red-500 text-red-500' : 'border-gray-200 hover:text-gray-900'}`}
          >
            Residential
          </a>
          <a
            onClick={() => setSelectedCategory('Commercial')}
            className={`sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none ${selectedCategory === 'Commercial' ? 'border-red-500 text-red-500' : 'border-gray-200 hover:text-gray-900'}`}
          >
            Commercial
          </a>
        </div>

        {filteredProjects.map((project) => (
          <div key={project.id} className="lg:w-4/6 mx-auto mb-20">
            <div className="rounded-lg h-64 overflow-hidden">
              <img
                alt={project.title}
                className="object-cover object-center h-full w-full"
                src={project.image}
              />
            </div>
            <div className="flex flex-col sm:flex-row mt-10">
              <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-10 h-10"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <div className="flex flex-col items-center text-center justify-center">
                  <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">
                    {project.architect}
                  </h2>
                  <div className="w-12 h-1 bg-red-500 rounded mt-2 mb-4"></div>
                  <p className="text-base">{project.bio}</p>
                </div>
              </div>
              <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                <h2 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h2>
                <p className="leading-relaxed text-lg mb-4">{project.description}</p>
                <a className="text-red-500 inline-flex items-center" href={project.link}>
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
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
