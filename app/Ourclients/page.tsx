"use client";

import Image from "next/image";

const clients = [
  "/projects/1.jpg",
  "/projects/2.jpg",
  "/projects/3.jpg",
  "/projects/4.jpg",
  "/projects/5.jpg",
  "/projects/6.jpg",
  "/projects/7.jpg",
  "/projects/8.jpg",
  "/projects/9.jpg",
  "/projects/10.jpg",
  "/projects/11.jpg",
  "/projects/12.jpg",
  "/projects/13.jpg",
  "/projects/14.jpg",
  "/projects/15.jpg",
  "/projects/16.jpg",
  "/projects/17.jpg",
  "/projects/18.jpg",
  "/projects/19.jpg",
  "/projects/20.jpg",
  "/projects/21.jpg",
  "/projects/22.jpg",
  "/projects/23.jpg",
  "/projects/24.jpg",
  "/projects/25.jpg",
  "/projects/26.jpg"
];

function Ourclients() {
  return (
    <section className="w-full py-10 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 text-center">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">Our Work</h2>
          <p className="text-gray-500 mt-2 text-sm sm:text-base">
            Structures that speak for themselves — built with care and precision.
          </p>
        </div>
        <div className="relative w-full overflow-hidden">
          <div className="flex w-max animate-scroll-x whitespace-nowrap">
            {[...clients, ...clients].map((src, index) => (
              <div key={index} className="relative w-40 h-24 mx-4 flex-shrink-0">
                <Image
                  src={src}
                  alt={`Client Logo ${index + 1}`}
                  fill
                  className="object-cover rounded shadow-md"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes scroll-x {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll-x {
          animation: scroll-x 25s linear infinite;
        }
      `}</style>
    </section>
  );
}

export default Ourclients;
