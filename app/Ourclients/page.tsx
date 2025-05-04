"use client";

import Image from "next/image";

const clients = [
  "/clients/1.jpg",
  "/clients/2.jpeg",
  "/clients/3.jpeg",
  "/clients/4.jpeg",
  "/clients/5.jpeg",
  "/clients/6.jpeg",
  "/clients/7.jpeg",
  "/clients/4.jpeg",
];

function Ourclients() {
  return (
    <section className="w-full py-10 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 text-center">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">Our Work</h2>
          <p className="text-gray-500 mt-2 text-sm sm:text-base">
            Structures that speak for themselves — built with care and precision.         </p>
        </div>
        <div className="relative w-full overflow-hidden">
          <div className="flex w-max animate-scroll-x whitespace-nowrap">
            {[...clients, ...clients].map((src, index) => (
              <div key={index} className="flex-shrink-0 mx-6">
                <Image
                  src={src}
                  alt={`Client Logo ${index + 1}`}
                  width={120}
                  height={60}
                  className="object-contain"
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


export default Ourclients
