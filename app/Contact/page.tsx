export default function Contact() {
  return (
    <section className="text-gray-600 body-font relative">
      <div className="text-center m-20">
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
          Get in Touch
        </h1>
        <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500">
          Reach out for project consultations, inquiries, or partnerships. Let us build something great together.
        </p>
        <div className="flex mt-6 justify-center">
          <div className="w-16 h-1 rounded-full bg-red-500 inline-flex"></div>
        </div>
      </div>

      <div className="container px-5 py-2 mx-auto flex sm:flex-nowrap flex-wrap">

        <div className="lg:w-2/3 md:w-1/2 relative sm:mr-10 rounded-lg overflow-hidden">
          {/* Map background */}
          <div className="w-full h-96">
            <iframe
              width="100%"
              height="100%"
              className="absolute inset-0"
              title="map"
              scrolling="no"
              src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=Space%20Consulting,%20Chamarajanagar,%20Karnataka&ie=UTF8&t=&z=14&iwloc=B&output=embed"
              style={{
                filter: 'grayscale(1) contrast(1.2) opacity(0.4)',
                zIndex: 0,
              }}
            ></iframe>
          </div>

          {/* Info box over map */}
          <div className="relative z-10 bg-white p-6 m-6 rounded shadow-md">
            <div className="flex flex-col sm:flex-row">
              <div className="sm:w-1/2 mb-4 sm:mb-0 sm:pr-4">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
                <p className="mt-1">Space Consulting, Shop No. 41, Sri Rama Complex, Sampige Road, Chamarajanagar, Karnataka, India</p>
              </div>
              <div className="sm:w-1/2">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
                <a className="text-red-500 leading-relaxed">madhushivaprakash@gmail.com</a>
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
                <p className="leading-relaxed">+91-99640-07532</p>
              </div>
            </div>
          </div>
        </div>


        {/* Contact Form */}
        <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Get in Touch</h2>
          <p className="leading-relaxed mb-5 text-gray-600">
            We’re here to answer any questions about your construction needs.
          </p>

          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>

          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>

          <div className="relative mb-4">
            <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            ></textarea>
          </div>

          <button className="text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg">
            Send
          </button>
          <p className="text-xs text-gray-500 mt-3">
            We usually respond within 24–48 hours. Thank you for reaching out.
          </p>
        </div>
      </div>
    </section>
  );
}
