// components/Footer.jsx
import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="text-gray-600 body-font font-[Poppins]">
      <div className="container px-5 py-24 mx-auto flex md:items-start lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <Link href="/" className="flex items-center gap-3">
            <img
              alt="Company Logo"
              src="/logo/logo2.png"
              className="h-8 w-auto object-contain"
            />
            <span className=" p-2  text-red-500 mr-2">Space Consulting</span>
          </Link>
          <p className="mt-2 text-sm text-gray-500 text-justify">
            Architects & Engineers specializing in house construction across Chamarajanagar and nearby areas.
          </p>
        </div>
        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          {/* Company Section */}
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-red-500 tracking-widest text-sm mb-3">Company</h2>
            <nav className="list-none mb-10 space-y-2">
              <ul className="list-none mb-10 space-y-2">
                <li>
                  <Link href="/about" className="text-gray-600 hover:text-red-500">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/Services" className="text-gray-600 hover:text-red-500">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/CompletedProjects" className="text-gray-600 hover:text-red-500">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link href="/Contact" className="text-gray-600 hover:text-red-500">
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          {/* Services Section */}
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-red-500 tracking-widest text-sm mb-3">Legal</h2>
            <nav className="list-none mb-10 space-y-2">
              <li>
                <a
                  href="/files/terms.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-red-500 cursor-pointer"
                >
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a
                  href="/files/privacy.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-red-500 cursor-pointer"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/files/disclaimer.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-red-500 cursor-pointer"
                >
                  Disclaimer
                </a>
              </li>
              <li>
                <a
                  href="/files/certifications.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-red-500 cursor-pointer"
                >
                  Certifications
                </a>
              </li>
            </nav>
          </div>

          {/* Contact Section */}
          <div className="lg:w-1/2 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-red-500 tracking-widest text-sm mb-3">Contact</h2>
            <ul className="list-none mb-10 space-y-2 text-sm">
              <li className="flex items-start text-gray-600">
                <FaMapMarkerAlt className="mt-1 mr-2" />
                <span>Shop No. 41, Sri Rama Complex, Sampige Road, Chamarajanagar</span>
              </li>
              <li className="flex items-center text-gray-600">
                <FaPhoneAlt className="mr-2" /> 99640 07532
              </li>
              <li className="flex items-center text-gray-600">
                <FaEnvelope className="mr-2" /> madhushivaprakash@gmail.com
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Copyright and Social Media Section */}
      <div className="bg-gray-100 py-4">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <p className="text-gray-500 text-sm text-center md:text-left">
            © {new Date().getFullYear()} Space Consulting — All rights reserved.
          </p>

          <p className="text-gray-500 text-sm text-center md:text-left">
            Maintained by Swasyaha Solutions.
          </p>

          <div className="flex justify-center md:justify-end space-x-4">
            <a href="#" className="text-gray-600 hover:text-blue-600">
              <FaFacebookF />
            </a>
            <a href="#" className="text-gray-600 hover:text-pink-600">
              <FaInstagram />
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-400">
              <FaTwitter />
            </a>
            <a href="#" className="text-gray-600 hover:text-green-600">
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
