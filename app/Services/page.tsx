import React from 'react';

const projects = [
  {
    month: 'Jan',
    date: '12',
    category: 'HOUSE',
    title: 'Modern Duplex House',
    description: 'Contemporary duplex with spacious interiors and sustainable features, built in Mysore.',
    image: '/logo/logo1.png',
  },
  {
    month: 'Mar',
    date: '22',
    category: 'VILLA',
    title: 'Luxury Villa',
    description: 'A scenic hillside villa with modern amenities, large windows, and landscaped gardens.',
    image: '/logo/logo1.png',
  },
  {
    month: 'May',
    date: '08',
    category: 'HOSPITAL',
    title: 'City Medical Center',
    description: 'Design and construction of a 50-bed hospital with modular operation theaters and ICU.',
    image: '/logo/logo1.png',
  },
  {
    month: 'Jun',
    date: '15',
    category: 'FARM HOUSE',
    title: 'Green Retreat',
    description: 'Rustic style farmhouse nestled amidst greenery with open verandas and natural materials.',
    image: '/logo/logo1.png',
  },
  {
    month: 'Aug',
    date: '30',
    category: 'HOTEL',
    title: 'Grand Blue Resort',
    description: 'Seaside hotel project featuring 40 luxury rooms, pool deck, spa, and a rooftop restaurant.',
    image: '/logo/logo1.png',
  },
  {
    month: 'Sep',
    date: '12',
    category: 'RENOVATION',
    title: 'Heritage Building Restoration',
    description: 'Restoration of a colonial-era building maintaining original aesthetics with modern safety standards.',
    image: '/logo/logo1.png',
  },
];

function Services() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="text-center mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
            Our Work Speaks for Itself
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500">
            A showcase of completed homes, villas, hospitals, and commercial spaces across Karnataka — each crafted with care, quality, and precision.
          </p>
          <div className="flex mt-6 justify-center">
            <div className="w-16 h-1 rounded-full bg-red-500 inline-flex"></div>
          </div>
        </div>

        <div className="flex flex-wrap -mx-4 -my-8">
          {projects.map((project, index) => (
            <div className="py-8 px-4 lg:w-1/3" key={index}>
              <div className="h-full flex items-start">
                <div className="w-12 flex-shrink-0 flex flex-col text-center leading-none">
                  <span className="text-gray-500 pb-2 mb-2 border-b-2 border-gray-200">{project.month}</span>
                  <span className="font-medium text-lg text-gray-800 title-font leading-none">{project.date}</span>
                </div>
                <div className="flex-grow pl-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-red-500 mb-1">{project.category}</h2>
                  <h1 className="title-font text-xl font-medium text-gray-900 mb-3">{project.title}</h1>
                  <p className="leading-relaxed mb-5">{project.description}</p>
                  <a className="inline-flex items-center">
                    <img alt="project" src={project.image} className="w-8 h-8 rounded-full object-cover" />
                    <span className="flex-grow flex flex-col pl-3">
                      <span className="title-font font-medium text-gray-900">Space Consulting</span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
