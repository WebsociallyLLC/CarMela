'use client';
import React, { useEffect, useState } from 'react';
import menuData from '@/utils/menu.json';
import Link from 'next/link';
import { Inter } from 'next/font/google';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Phone } from 'lucide-react';

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
  const pathname = usePathname();

  // Determine if on a car detail page (e.g., /listings/[slug])
  const isCarDetailPage =
    pathname &&
    pathname.startsWith('/listings/') &&
    pathname.split('/').length === 3 &&
    pathname !== '/listings';

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

  const isActive = (link: string) => {
    if (link === '/' && pathname === '/') return true;
    if (link !== '/' && pathname?.includes(link)) return true;
    return false;
  };

  return (
    <>
      {/* Mobile Top Banner */}
      <div className="md:hidden fixed top-0 left-0 w-full bg-[#FF0000] py-1.5 px-4 z-[60] flex justify-center items-center">
        <Link
          href="tel:+1234567890"
          className="flex items-center justify-center gap-2 text-white text-sm font-medium"
        >
          <Phone size={14} /> Call Now: (123) 456-7890
        </Link>
      </div>

      <nav
        className={`fixed z-50 w-full py-4 md:py-6 px-4 sm:px-6 lg:px-16 transition-all duration-300 ${
          isScrolled || isCarDetailPage ? 'bg-[#050B20]' : 'bg-transparent'
        } ${!isScrolled && !isCarDetailPage ? 'md:top-0 top-[32px]' : 'md:top-0 top-[32px]'}`}
      >
        <div className="max-w-[1440px] mx-auto flex justify-between items-center">
          <Link href="/">
            <Image
              src="/assets/motors-logo.svg"
              alt="FastCarDeals Logo"
              width={180}
              height={48}
              quality={100}
              priority
            />
          </Link>
          <div className="md:hidden flex items-center">
            <button onClick={toggleMobileMenu}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-8 h-8 text-white"
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
          <div className="hidden md:flex space-x-6 text-white w-[90%] justify-end items-center">
            <ul className="flex space-x-6">
              {menuItems.map((item) => (
                <li key={item.name} className="relative">
                  <div className="flex items-center">
                    <Link
                      href={`/${item.name === 'Home' ? '' : item.name.toLowerCase().replace(' ', '-')}`}
                      className={`${inter.className} hover:text-gray-400 md:mt-2 mt-0 px-3 text-white sm:text-base font-[300] text-[14px] transition-colors duration-200 ${
                        isActive(item.link)
                          ? 'text-[#FF0000] font-semibold'
                          : ''
                      }`}
                    >
                      {item.name}
                    </Link>
                  </div>
                </li>
              ))}
            </ul>

            <Link
              href="tel:+1234567890"
              className="flex items-center gap-2 bg-[#FF0000] hover:bg-red-700 text-white px-4 py-2 rounded-full transition-colors duration-200 font-medium ml-4"
            >
              <Phone size={16} />
              <span>Call Now</span>
            </Link>
          </div>
        </div>
        <ul
          className={`${
            isMobileMenuOpen ? 'block' : 'hidden'
          } md:hidden fixed top-[calc(72px+32px)] left-0 w-full bg-[#050B20] py-10 z-30 text-center space-y-4`}
        >
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link
                href={`/${item.name === 'Home' ? '' : item.name.toLowerCase().replace(' ', '-')}`}
                className={`${inter.className} block text-white px-4 py-2 text-base font-[300] ${
                  isActive(item.link) ? 'text-[#FF0000] font-semibold' : ''
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            </li>
          ))}
          <li className="mt-6 px-8">
            <Link
              href="tel:+1234567890"
              className="flex items-center justify-center gap-2 bg-[#FF0000] hover:bg-red-700 text-white px-4 py-2 rounded-full transition-colors duration-200 font-medium"
            >
              <Phone size={16} />
              <span>Call Now</span>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
