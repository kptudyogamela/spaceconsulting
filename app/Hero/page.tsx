'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    '/Hero/1.png',
    '/Hero/3.png',
    '/Hero/4.png',
    '/Hero/5.png',
    '/Hero/6.png',
    '/Hero/7.png',
    '/Hero/8.png',
    '/Hero/9.png',
    '/Hero/10.png',
  ];

  // Change image every 3 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(intervalId); // Clean up on unmount
  }, [images.length]);

  return (
    <section className="relative h-[500px] sm:h-[600px]">
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={images[currentImageIndex]}
          alt="Construction Site"
          className="w-full h-full object-cover transition-all duration-500"
        />
      </div>
      <div className="absolute inset-0 flex items-center justify-center text-yellow-100 text-center px-4">
        <div className="space-y-4">
          <h1 className="text-4xl sm:text-6xl font-bold">
            Transforming Spaces, Building Futures.
          </h1>
          <p className="text-lg sm:text-2xl text-green-300">
            Your trusted partner in quality construction solutions.
          </p>
          <div className="flex justify-center gap-4 mt-6">
            <Link
              href="/Services"
              className="px-6 py-3 bg-red-500 hover:bg-red-700 text-white font-semibold rounded-lg transition duration-300"
            >
              Our Services
            </Link>
            <Link
              href="/Contact"
              className="px-6 py-3 bg-transparent border-2 border-white hover:bg-white hover:text-red-500 text-white font-semibold rounded-lg transition duration-300"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
