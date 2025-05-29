'use client';
import React, { useState } from 'react';
import { Figtree } from 'next/font/google';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { bgImages, carTypes } from './constants';
import SearchBar from '@/components/shared/SearchBar';

const figtree = Figtree({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-figtree',
});

const HeroV4: React.FC = () => {
  const [activeTab, setActiveTab] = useState('All');
  const [activeCarType, setActiveCarType] = useState<string | null>(null);
  const [currentBg, setCurrentBg] = useState(0);
  console.log('🚀 ~ setCurrentBg:', setCurrentBg);

  return (
    <section
      className="relative w-full h-[100vh] bg-cover bg-center transition-all duration-700"
      style={{ backgroundImage: `url(${bgImages[currentBg]})` }}
    >
      <div className="w-full max-w-[1440px] mx-auto h-full relative z-20 flex flex-col md:items-start items-center justify-center text-white md:text-start md:ps-20 ps-0 text-center md:pt-14 pt-16">
        <p
          className={`${figtree.className} text-[16px] md:text-[18px] px-4 md:px-0 font-[400] md:mb-10 mb-4 -mt-32 lg:-mt-0`}
        >
          Find cars for sale and for rent near you
        </p>
        <h1 className="text-3xl md:text-[70px] font-bold md:mb-10 mb-12">
          Find Your Perfect Car
        </h1>
        <div className="flex justify-center space-x-8 mb-8 ">
          {['All', 'New', 'Used'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`text-lg font-medium ${
                activeTab === tab ? 'border-b-2 border-white' : 'text-white'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        <SearchBar />
        <div className="flex justify-center gap-4 flex-wrap md:mt-[162px] mt-14">
          {carTypes.map((type, idx) => (
            <div
              key={idx}
              onClick={() => setActiveCarType(type.title)}
              className={`flex items-center gap-2 px-12 py-6 rounded-lg text-sm cursor-pointer transition-all duration-300
                ${
                  activeCarType === type.title
                    ? 'bg-white text-black'
                    : ' hover:bg-white/20 text-white cursor-pointer'
                }`}
            >
              <FontAwesomeIcon icon={type.icon} className="text-lg" />
              <span>{type.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroV4;
