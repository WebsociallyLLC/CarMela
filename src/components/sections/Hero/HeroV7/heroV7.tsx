'use client';
import React from 'react';
import { Figtree } from 'next/font/google';

import { heroSubtitle, heroTitle } from './constants';
import SearchBar from '@/components/shared/SearchBar';

const figtree = Figtree({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-figtree',
});

const Hero7: React.FC = () => {
  return (
    <section className="relative w-full md:h-[90vh] h-[70vh] bg-cover bg-[#EEF1FB] pt-32 transition-all duration-700">
      <div className="w-full max-w-[1440px] mx-auto h-full relative z-20 flex flex-col items-center justify-center text-white text-center md:pt-14 pt-16">
        <p
          className={`${figtree.className} text-[16px] text-black md:text-[18px] px-4 md:px-0 font-[400] md:mb-12 mb-4 -mt-32 lg:-mt-0`}
        >
          {heroSubtitle}
        </p>
        <h1 className="text-3xl md:text-[70px] font-bold md:mb-14 mb-12 text-black">
          {heroTitle}
        </h1>
        <SearchBar />
        <div className="flex justify-center w-[100%] md:-mt-16">
          <img
            src="/assets/hero-car.webp"
            alt="Hero Car"
            className="w-full max-w-[820px] md:ms-8 object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero7;
