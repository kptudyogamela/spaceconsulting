"use client";

export default function Awards() {
  return (
    <section className="text-gray-600 body-font bg-white">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        {/* Text Section */}
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-900">
            National Excellence Award 2024
            <br className="hidden lg:inline-block" />
            for Quality Construction
          </h1>
          <p className="mb-8 leading-relaxed text-justify text-gray-700">
            Our company was recognized for outstanding commitment to quality, innovation, and sustainable construction practices. This award marks a significant milestone in our journey towards building a better future across Karnataka.
          </p>
          <div className="flex justify-center">
            <button className="inline-flex text-white bg-red-600 border-0 py-2 px-6 focus:outline-none hover:bg-red-700 rounded text-lg transition">
              View Certificate
            </button>
            <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg transition">
              More Awards
            </button>
          </div>
        </div>

        {/* Image Section */}
        {/* <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded-lg shadow-md"
            alt="award"
            src="/award.jpg" // Replace with actual award image
          /> */}

        <div className="rounded-lg overflow-hidden">
          <video
            className="w-full h-84 object-cover"
            src="/video/1.mp4"
            autoPlay
            muted
            loop
            playsInline
          />

        </div>
      </div>
    </section>
  );
}
