'use client';
import { FaWhatsapp } from 'react-icons/fa';

export default function WhatsAppButton() {
  const phoneNumber = '919876543210'; // Use international format without "+" (e.g., 91 for India)

  return (
    <a
      href={`https://wa.me/${phoneNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-all duration-300"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp className="text-2xl md:text-3xl" />
    </a>
  );
}
