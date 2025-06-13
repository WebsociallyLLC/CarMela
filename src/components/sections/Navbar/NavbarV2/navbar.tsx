'use client';
import React, { useEffect, useState } from 'react';
import menuData from '@/utils/menu.json';
import Link from 'next/link';
import { Inter } from 'next/font/google';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Phone, X } from 'lucide-react';
import TopInfoHeader from '@/components/shared/TopInfoHeader';

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
          href="tel:+17633738434"
          className="flex items-center justify-center gap-2 text-white text-sm font-medium"
        >
          <Phone size={14} /> Call Now: (763) 373-8434
        </Link>
      </div>

      {/* Desktop Top Banner */}
      <TopInfoHeader />

      <nav
        className={`fixed z-50 w-full py-4 md:py-6 px-4 sm:px-6 lg:px-16 transition-all duration-300 ${
          isScrolled || isCarDetailPage ? 'bg-[#050B20]' : 'bg-transparent'
        } ${!isScrolled && !isCarDetailPage ? 'md:top-6 top-[32px] ' : 'md:top-6 top-[32px]'}`}
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
              href="tel:+17633738434"
              className="flex items-center gap-2 bg-[#FF0000] hover:bg-red-700 text-white px-4 py-2 rounded-full transition-colors duration-200 font-medium ml-4"
            >
              <Phone size={16} />
              <span>Call Now</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 md:hidden ${
          isMobileMenuOpen
            ? 'opacity-100'
            : 'opacity-0 pointer-events-none mt-40'
        }`}
        onClick={toggleMobileMenu}
      />

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-[280px] bg-[#050B20] z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex justify-between items-center pt-12 border-b border-gray-700">
            <Image
              src="/assets/motors-logo.svg"
              alt="FastCarDeals Logo"
              width={140}
              height={40}
              quality={100}
            />
            <button
              onClick={toggleMobileMenu}
              className="text-white p-2 hover:bg-gray-800 rounded-full"
            >
              <X size={24} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto py-6">
            <ul className="space-y-2 px-4">
              {menuItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={`/${item.name === 'Home' ? '' : item.name.toLowerCase().replace(' ', '-')}`}
                    className={`${inter.className} block text-white px-4 py-3 text-base font-[300] rounded-lg hover:bg-gray-800 transition-colors ${
                      isActive(item.link)
                        ? 'text-[#FF0000] font-semibold bg-gray-800'
                        : ''
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-4 border-t border-gray-700">
            <Link
              href="tel:+17633738434"
              className="flex items-center justify-center gap-2 bg-[#FF0000] hover:bg-red-700 text-white px-4 py-3 rounded-lg transition-colors duration-200 font-medium w-full"
            >
              <Phone size={16} />
              <span>Call Now</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
