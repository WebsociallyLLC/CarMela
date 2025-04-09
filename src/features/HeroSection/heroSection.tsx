'use client';
import React, { useState } from 'react';
import SearchBar from './searchBar';

const HeroSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('All');
  const tabs = ['All', 'New', 'Used'];
  return (
    <section
      className="py-20 px-6 h-[90vh] flex align-middle"
      style={{
        backgroundImage: 'url("/assets/heroSectionBg.svg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-center md:justify-between">
        <div className="text-white w-full md:w-1/2 space-y-6">
          <p className="text-lg">
            Shop Online. Pickup Today. Its Fast, Simple and Easy.
          </p>
          <h1 className="text-7xl font-bold leading-tight">
            Fast, Simple and Easy
          </h1>

          <div className="flex space-x-6 text-white">
            {tabs.map((tab) => (
              <div
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`cursor-pointer pb-2 ${
                  activeTab === tab ? 'border-b-4 border-white' : ''
                }`}
              >
                {tab}
              </div>
            ))}
          </div>
          <SearchBar />
        </div>

        <div className="w-full md:w-1/2  mt-12 md:mt-0 md:flex justify-center ">
          <img
            src="assets/heroSection.png"
            alt="Car"
            className="w-full md:w-[700px] object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
