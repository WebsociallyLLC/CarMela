'use client';
import React, { useState } from 'react';
import { Figtree } from 'next/font/google';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPlus, faXmark } from '@fortawesome/free-solid-svg-icons';
import { heroSection7Content } from './contents';

const figtree = Figtree({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-figtree',
});

const Hero6: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {
    subtitle,
    title,
    description,
    primaryButton,
    promo: { discount, label, listing },
  } = heroSection7Content;

  return (
    <section
      className="relative w-full md:h-[80vh] h-[100vh] bg-cover bg-center overflow-hidden flex items-center justify-center px-4 md:px-20"
      style={{ backgroundImage: "url('/assets/herobg.jpg')" }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/20 z-0"></div>
      <div className="absolute inset-0 bg-blue-300/20 z-0"></div>
      <div className="md:relative z-20 w-full md:max-w-[1440px] mx-auto flex md:flex-row flex-col">
        <div className="text-white md:[50%] w-[60%]">
          <p className="text-sm md:text-base tracking-widest text-white uppercase underline mb-2">
            {subtitle}
          </p>
          <h1 className="text-4xl md:text-7xl font-bold leading-tight text-white">
            {title}
          </h1>
          <p className="text-base md:text-lg mt-6 text-white max-w-lg">
            {description}
          </p>
          <div className="flex flex-row items-center justify-start">
            <button className="mt-8 bg-[#D01818] hover:bg-red-800 text-white text-lg px-6 py-3 rounded-lg">
              {primaryButton}
            </button>
            <div className="bg-[#fff] mt-7 ms-4 h-12 px-5 py-3 rounded-[100%] cursor-pointer">
              <FontAwesomeIcon icon={faPlay} className="text-[#D01818]" />
            </div>
          </div>
        </div>
        <div className="md:absolute md:right-0 md:[50%] w-[100%] left-[660px] md:bottom-6 md:w-1/2 z-10 flex md:flex-row flex-col md:justify-end md:items-end">
          <div className="flex md:flex-row flex-col w-[30%] mt-16">
            <div>
              <img
                src="/assets/arrow.png"
                alt="Arrow"
                className="w-[20%] ms-16 md:ms-0 md:w-auto md:max-w-[200px] absolute md:top-32 md:right-[700px] drop-shadow-xl"
              />
            </div>
            <div className="md:absolute md:top-1 md:right-[480px] md:w-[320px] md:h-[320px] z-20">
              <svg
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full absolute inset-0"
              >
                <path
                  fill="white"
                  fillOpacity="0.2"
                  d="M30.8,19.4C22.5,32.1,-13.6,30.4,-23.4,16.9C-33.2,3.3,-16.6,-22,1.5,-21.2C19.5,-20.3,39,6.7,30.8,19.4Z"
                  transform="translate(100 100)"
                />
              </svg>
              <div className="md:absolute md:top-1/2 top-1/4 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 text-white text-center ms-40 md:-mt-0 -mt-8 md:ms-0">
                <div className="font-bold text-xl pt-3">{discount}</div>
                <div className="text-sm font-bold">{label}</div>
              </div>
            </div>
            <div className="md:absolute md:top-44 md:left-[870px] md:h-[320px] z-20">
              <div
                onClick={() => setIsOpen(!isOpen)}
                className="absolute md:top-40 md:right-[700px] bg-white text-[#D01818] w-10 h-10 flex items-center justify-center rounded-full shadow-md cursor-pointer z-30 transition-all duration-300 ease-in-out transform hover:scale-110"
              >
                <FontAwesomeIcon
                  icon={isOpen ? faXmark : faPlus}
                  className="transition-all duration-300 ease-in-out"
                />
              </div>
              {isOpen && (
                <div className="absolute md:top-32 md:right-[380px] md:ms-0 ms-12 p-4 md:w-[300px] h-[100px] bg-black text-white px-6 py-4 rounded-lg shadow-lg z-20 transition-all duration-500 ease-in-out transform scale-100 opacity-100">
                  <p className="text-lg font-bold">
                    {listing.title}{' '}
                    <strong className="text-[#D01818] ps-2">
                      {listing.price}
                    </strong>
                  </p>
                  <p className="text-md text-gray-500 font-medium">
                    {listing.location}
                  </p>
                </div>
              )}
            </div>
          </div>
          <img
            src="/assets/red-car.png"
            alt="Red Premium Car"
            className="w-[100%] md:w-auto max-w-[700px] drop-shadow-xl md:mt-0 mt-20"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero6;
