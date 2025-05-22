import Link from 'next/link';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaClock,
} from 'react-icons/fa';

export default function Navbar() {
  return (
    <div className="bg-[#0a2a66] text-white text-sm">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center py-2 px-4">
        {/* Left Side */}
        <div className="flex flex-col md:flex-row gap-2 md:gap-8 items-center">
          <span className="flex items-center gap-2">
            <FaPhoneAlt className="text-base" />
            1-800-458-56987
          </span>
          <span className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-base" />
            47 Bakery Street, London, UK
          </span>
          <span className="flex items-center gap-2">
            <FaClock className="text-base" />
            Mon - Fri 8:00 - 18:00
          </span>
        </div>
        {/* Right Side */}
        <div className="flex items-center gap-6 mt-2 md:mt-0">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
          >
            <FaTwitter />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
          >
            <FaInstagram />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
          >
            <FaLinkedinIn />
          </a>
          <span className="ml-2">
            <Link href="/login" className="hover:underline">
              Login
            </Link>
            <span className="mx-2">|</span>
            <Link href="/register" className="hover:underline">
              Register
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}
