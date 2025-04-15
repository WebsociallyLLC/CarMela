'use client';
import React, { useEffect, useState } from 'react';
import menuData from '@/utils/menu.json';
import Link from 'next/link';

const Navbar: React.FC = () => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>(menuData.menu);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

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

  return (
    <nav
      className={`md:fixed z-50 w-full p-5 flex justify-start md:justify-center transition-all duration-300 ${
        isScrolled ? 'bg-[#050B20]' : ' bg-black'
      }`}
    >
      <span className="text-white text-xl font-bold ">FASTCARDEALS</span>
      <ul className="hidden md:flex space-x-6 text-white w-[90%] justify-end ">
        {menuItems.map((item) => (
          <li key={item.name} className="relative">
            <div className="flex items-center">
              <Link
                href={`/${item.name == 'Home' ? ' ' : item.name.toLowerCase().replace(' ', '-')}`}
                className="text-xs font-bold hover:text-gray-400 sm:text-base"
              >
                {item.name}
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
