'use client';
import React, { useEffect, useState } from 'react';
import menuData from '@/utils/menu.json';
import Link from 'next/link';

const Navbar: React.FC = () => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>(menuData.menu);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  const handleMenuClick = (menuName: string) => {
    setActiveMenu(activeMenu === menuName ? null : menuName);
  };

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
      className={`md:fixed  z-50 w-full p-4 flex justify-start md:justify-center transition-all duration-300 ${
        isScrolled ? 'bg-[#050B20]' : 'md:bg-transparent bg-black'
      }`}
    >
      <span className="text-white text-xl font-bold">FASTCARDEALS</span>
      <ul className="hidden md:flex space-x-6 text-white w-[90%] justify-end">
        {menuItems.map((item) => (
          <li key={item.name} className="relative">
            <div className="flex items-center">
              <Link
                href="#"
                onClick={() => handleMenuClick(item.name)}
                className="text-xs font-bold hover:text-gray-400 sm:text-base"
              >
                {item.name}
              </Link>
              {item.subMenu.length > 0 && (
                <span
                  className={`ml-2 transform transition-all text-[10px] pt-1 ${
                    activeMenu === item.name ? 'rotate-180' : 'rotate-0'
                  }`}
                >
                  ▼
                </span>
              )}
            </div>

            {item.subMenu.length > 0 && activeMenu === item.name && (
              <ul className="absolute left-0 top-full mt-2 bg-gray-800 p-2 space-y-2 rounded-md z-50 w-max">
                {item.subMenu.map((subItem) => (
                  <li key={subItem.name}>
                    <Link
                      href="#"
                      className="block text-sm text-white hover:text-gray-400"
                    >
                      {subItem.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
