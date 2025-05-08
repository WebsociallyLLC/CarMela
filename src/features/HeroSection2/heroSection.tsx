'use client';
import React, { useState } from 'react';
import { Figtree } from 'next/font/google';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import SearchBar from '../HeroSection/searchBar2';
const figtree = Figtree({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-figtree',
});
const bgImages = [
  '/assets/heroSection.svg',
  '/assets/slider-image.png',
  '/assets/slider-image2.png',
  '/assets/slider-image3.png',
];
const HeroSection: React.FC = () => {
  const [currentBg, setCurrentBg] = useState(0);
  const handlePrev = () => {
    setCurrentBg((prev) => (prev - 1 + bgImages.length) % bgImages.length);
  };
  const handleNext = () => {
    setCurrentBg((prev) => (prev + 1) % bgImages.length);
  };
  return (
    <section
      className="relative w-full h-screen bg-cover bg-center transition-all duration-700"
      style={{ backgroundImage: `url(${bgImages[currentBg]})` }}
    >
      <img
        src="/assets/Vector-icon.svg"
        alt="Highway"
        className="absolute inset-0 w-full h-full mt-16 pr-14 object-contain opacity-80 z-10 pointer-events-none"
      />
      <div className="w-full max-w-[1200px] mx-auto h-full relative z-20 flex flex-col items-center justify-center px-4 text-white text-center">
        <p
          className={`${figtree.className} text-[16px] md:text-[18px] px-4 md:px-0 font-[400] md:mb-8 mb-4 -mt-32 lg:-mt-0`}
        >
          Shop Online. Pickup Today. It&apos;s Fast, Simple and Easy.
        </p>
        <h1 className="text-3xl md:text-[70px] font-bold md:mb-10 mb-12">
          Find Your Perfect Car
        </h1>
        <div className="relative md:mb-10 mb-12 w-full">
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white py-2 px-6 rounded-[30px] z-30"
          >
            <FontAwesomeIcon
              icon={faChevronLeft}
              size="lg"
              className="text-[#050B20]"
            />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white py-2 px-6 rounded-[30px] z-30"
          >
            <FontAwesomeIcon
              icon={faChevronRight}
              size="lg"
              className="text-[#050B20]"
            />
          </button>
        </div>
        <SearchBar />
      </div>
    </section>
  );
};
export default HeroSection;
