'use client';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';

export default function ContactInfoStrip() {
  return (
    <div className="w-full bg-gray-100 text-sm font-medium py-2 px-4 overflow-x-hidden">
      <div className="max-w-7xl mx-auto flex justify-between items-center flex-wrap gap-2">

        {/* Left: Phone and Email */}
        <div className="text-gray-800 flex items-center flex-wrap gap-2">
          <span>📞 9964007532</span>
          <span className="hidden sm:inline"> | ✉️ madhusudhanms@gmail.com</span>
        </div>

        {/* Right: Social Icons */}
        <div className="flex items-center gap-3">
          <a href="#" className="text-gray-600 hover:text-blue-600"><FaFacebookF /></a>
          <a href="#" className="text-gray-600 hover:text-pink-600"><FaInstagram /></a>
          <a href="#" className="text-gray-600 hover:text-yellow-400"><FaTwitter /></a>
          <a href="#" className="text-gray-600 hover:text-green-600"><FaWhatsapp /></a>

        </div>

      </div>
    </div>
  );
}
