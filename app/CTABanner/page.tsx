'use client';
import Link from 'next/link';
import { FaPhoneAlt } from 'react-icons/fa';

export default function CTABanner() {
  return (
    <section className="w-full bg-gradient-to-r from-pink-400 to-red-600 py-12 px-6 md:px-20">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 leading-tight">
          Ready to Start Your Project?
        </h2>
        <p className="text-white text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          Get in touch with our expert team to book a consultation or request a personalized quote today.
        </p>
        <Link
          href="/Contact"
          className="inline-flex items-center bg-white text-pink-700 hover:bg-purple-100 transition-all font-semibold py-3 px-6 rounded-full shadow-lg"
        >
          <FaPhoneAlt className="mr-2" />
          Contact Us Now
        </Link>
      </div>
    </section>
  );
}
