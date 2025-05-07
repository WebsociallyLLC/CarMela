'use client';
import React, { useState } from 'react';
import menuData from '@/utils/menu.json';
import Link from 'next/link';
import { FiMenu, FiX } from 'react-icons/fi';
import { usePathname } from 'next/navigation';
import SearchBar from '@/features/HeroSection/searchBar';

const Navbar: React.FC = () => {
  const menuItems = menuData.menu;
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname(); // Get the current path

  return (
    <div>
      <nav
        className="w-full py-7 px-8"
        style={{
          background: 'linear-gradient(90deg, #181C23 50%, #562276 100%)',
        }}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <span className="text-white text-xl font-semibold tracking-wide">
            FASTCARDEALS
          </span>

          <ul className="hidden md:flex space-x-14 text-white items-center">
            {menuItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={`/${item.name === 'Home' ? '' : item.name.toLowerCase().replace(' ', '-')}`}
                  className="text-base font-normal hover:text-gray-300 transition-colors duration-200"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          <button
            className="block md:hidden text-white text-3xl"
            aria-label="Open menu"
            onClick={() => setMobileOpen(true)}
          >
            <FiMenu />
          </button>
        </div>
        {pathname === '/listings' && (
          <div className="w-full hidden lg:flex justify-center mt-24">
            <div className="bg-white rounded-2xl shadow-lg w-full max-w-3xl flex items-center">
              <SearchBar />
            </div>
          </div>
        )}
      </nav>

      {mobileOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex flex-col items-center justify-center md:hidden transition-all">
          <button
            className="absolute top-6 right-6 text-white text-3xl"
            aria-label="Close menu"
            onClick={() => setMobileOpen(false)}
          >
            <FiX />
          </button>
          <ul className="flex flex-col space-y-10 text-white text-2xl">
            {menuItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={`/${item.name === 'Home' ? '' : item.name.toLowerCase().replace(' ', '-')}`}
                  className="hover:text-gray-300 transition-colors duration-200"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
