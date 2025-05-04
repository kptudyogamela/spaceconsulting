'use client';

import { useState } from 'react';
import Image from 'next/image';
import logo from '@/public/logo/logo2.png'; // Update the path to match your logo image

const AboutUs = () => {
  const [tab, setTab] = useState('story');

  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-10 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">

          {/* Left Text Section */}
          <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest uppercase">About Us</h2>
            <h1 className="text-gray-900 text-3xl title-font font-bold mb-4">Space Consulting</h1>

            {/* Tabs */}
            <div className="flex mb-4 border-b-2 border-gray-200">
              <button
                onClick={() => setTab('story')}
                className={`flex-grow py-2 text-lg px-1 focus:outline-none ${tab === 'story' ? 'text-red-500 border-b-2 border-red-500' : 'text-gray-500'
                  }`}
              >
                Our Story
              </button>
              <button
                onClick={() => setTab('mission')}
                className={`flex-grow py-2 text-lg px-1 focus:outline-none ${tab === 'mission' ? 'text-red-500 border-b-2 border-red-500' : 'text-gray-500'
                  }`}
              >
                Mission
              </button>
              <button
                onClick={() => setTab('vision')}
                className={`flex-grow py-2 text-lg px-1 focus:outline-none ${tab === 'vision' ? 'text-red-500 border-b-2 border-red-500' : 'text-gray-500'
                  }`}
              >
                Vision
              </button>
            </div>

            {/* Tab Content */}
            <div className="mt-4">
              {tab === 'story' && (
                <p className="leading-relaxed mb-4 text-justify">
                  Space Consulting is a team of passionate architects and engineers dedicated to delivering innovative design and engineering solutions. Based in Chamarajanagar, Karnataka, we specialize in building planning, construction management, and structural engineering. From residential to commercial projects, we transform ideas into efficient, functional, and beautiful structures.
                </p>
              )}
              {tab === 'mission' && (
                <p className="leading-relaxed mb-4 text-justify">
                  Our mission is to provide sustainable and efficient architectural and engineering solutions that enhance the quality of life. We aim to blend creativity with functionality to construct lasting, energy-efficient, and eco-conscious structures tailored to our clients visions.
                </p>
              )}
              {tab === 'vision' && (
                <p className="leading-relaxed mb-4 text-justify">
                  We envision becoming a trusted leader in the construction and design industry, known for innovation, reliability, and excellence. Our goal is to expand our impact across Karnataka and beyond, delivering spaces that inspire and endure.
                </p>
              )}
            </div>

            {/* Contact Details */}
            <div className="flex border-t border-gray-200 py-2 mt-4">
              <span className="text-gray-500">Location</span>
              <span className="ml-auto text-gray-900"> Sampige Road, Chamarajanagar</span>
            </div>
            <div className="flex border-t border-gray-200 py-2">
              <span className="text-gray-500">Email</span>
              <span className="ml-auto text-gray-900">madhushivaprakash@gmail.com</span>
            </div>
            <div className="flex border-t border-b mb-6 border-gray-200 py-2">
              <span className="text-gray-500">Phone</span>
              <span className="ml-auto text-gray-900">+91-99640 07532</span>
            </div>


          </div>

          {/* Logo or Image */}
          <div className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded relative">
            <Image
              src={logo}
              alt="Space Consulting Logo"
              layout="fill"
              objectFit="contain"
              className="rounded"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
