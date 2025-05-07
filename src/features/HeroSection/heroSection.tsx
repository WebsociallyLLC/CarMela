'use client';
import React from 'react';
import SearchBar from './searchBar';

const HeroSection: React.FC = () => {
  return (
    <section
      className="py-20 px-6 h-[100vh] flex align-middle -mt-[84px]"
      style={{
        backgroundImage: 'url("/assets/heroSectionBg.svg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-center md:justify-between">
        <div className="text-white w-full md:w-1/2 space-y-0 pt-24">
          <p className="text-lg">
            Shop Online. Pickup Today. Its Fast, Simple and Easy.
          </p>
          <h1 className="text-7xl font-bold leading-tight ">
            Fast, Simple and Easy
          </h1>

          <div className="md:block hidden">
            <SearchBar />
          </div>
        </div>

        <div className="w-full md:w-1/2  mt-12 md:mt-0 md:flex justify-center ">
          <img
            src="assets/heroSection.png"
            alt="Car"
            className="w-full md:w-[730px] object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
