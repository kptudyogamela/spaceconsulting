'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ContactInfoStrip from '../ContactInfoStrip/page';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/Services', label: 'Services' },
  { href: '/CompletedProjects', label: 'Projects' },
  { href: '/Contact', label: 'Contact' },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <>
      <ContactInfoStrip />
      <header className="bg-white shadow sticky top-0 z-50 font-[Poppins]">
        <div className="container mx-auto flex flex-wrap items-center justify-between px-5 py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <img
              alt="Company Logo"
              src="/logo/logo2.png"
              className="h-8 w-auto object-contain"
            />
            <span className="text-xl font-semibold font-[Montserrat] text-gray-800">
              Space Consulting
            </span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-6 text-base items-center">
            {navItems.map(({ href, label }) => {
              const isActive = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  className={`transition duration-200 ease-in-out px-2 py-1 border-b-2 ${isActive
                    ? 'border-red-600 text-red-600 font-semibold'
                    : 'border-transparent hover:text-gray-900 hover:border-gray-300'
                    }`}
                >
                  {label}
                </Link>
              );
            })}
          </nav>

          {/* Call to Action */}
          <a
            href="tel:9964007532"
            className="inline-flex items-center bg-red-600 text-white px-4 py-2 rounded-full shadow hover:bg-red-700 transition-all duration-200 text-sm md:text-base"
            aria-label="Call Space Consulting"
          >
            Get a Quote
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </header>
    </>
  );
}
