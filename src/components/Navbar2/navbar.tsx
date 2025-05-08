'use client';
import React, { useEffect, useState } from 'react';
import menuData from '@/utils/menu.json';
import Link from 'next/link';
import { Inter } from 'next/font/google';
import Image from 'next/image';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
});

const Navbar: React.FC = () => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>(menuData.menu);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav
      className={`md:fixed z-50 w-full py-4 md:py-6 px-4 sm:px-6 lg:px-16 transition-all duration-300 ${
        isScrolled ? 'bg-[#050B20]' : 'bg-transparent'
      }`}
    >
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        <div className="-mt-3">
          <Image
            src="/assets/motors-logo.svg"
            alt="FastCarDeals Logo"
            width={180}
            height={48}
            quality={100}
            priority
          />
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={toggleMobileMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-8 h-8 text-black"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
        <ul className="hidden md:flex space-x-6 text-white w-[90%] justify-end">
          {menuItems.map((item) => (
            <li key={item.name} className="relative">
              <div className="flex items-center">
                <Link
                  href={`/${item.name == 'Home' ? ' ' : item.name.toLowerCase().replace(' ', '-')}`}
                  className={`${inter.className} hover:text-gray-400 md:mt-2 mt-0 px-3 text-white sm:text-base font-[300] text-[14px]`}
                >
                  {item.name}
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <ul
        className={`${
          isMobileMenuOpen ? 'block' : 'hidden'
        } md:hidden absolute top-16 left-0 w-full bg-[#050B20] py-10 z-30 text-center space-y-4`}
      >
        {menuItems.map((item) => (
          <li key={item.name}>
            <Link
              href={`/${item.name == 'Home' ? ' ' : item.name.toLowerCase().replace(' ', '-')}`}
              className={`${inter.className} block text-white px-4 py-2 text-base font-[300]`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
