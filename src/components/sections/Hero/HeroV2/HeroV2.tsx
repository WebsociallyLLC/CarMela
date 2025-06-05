'use client';
import React, { useState, useEffect } from 'react';
import { Figtree } from 'next/font/google';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import SearchBar from '../HeroV1/searchBar2';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const figtree = Figtree({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-figtree',
});

const bgImages = [
  '/assets/heroSection.svg',
  '/assets/hero1.png',
  '/assets/hero2.png',
  '/assets/hero3.png',
];

const AUTO_SLIDE_INTERVAL = 2000;

// Hook to detect mobile devices
function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < breakpoint);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, [breakpoint]);
  return isMobile;
}

const HeroSection: React.FC = () => {
  const [currentBg, setCurrentBg] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const isMobile = useIsMobile();

  const handlePrev = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentBg((prev) => (prev - 1 + bgImages.length) % bgImages.length);
      setTimeout(() => setIsTransitioning(false), 700);
    }
  };

  const handleNext = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentBg((prev) => (prev + 1) % bgImages.length);
      setTimeout(() => setIsTransitioning(false), 700);
    }
  };

  useEffect(() => {
    const autoSlideInterval = setInterval(() => {
      if (!isTransitioning) {
        handleNext();
      }
    }, AUTO_SLIDE_INTERVAL);

    return () => clearInterval(autoSlideInterval);
  }, [isTransitioning]);

  return (
    <section className="relative w-full md:h-screen overflow-hidden h-[1100px]">
      <AnimatePresence>
        <motion.div
          key={currentBg}
          initial={isMobile ? false : { opacity: 0.4, scale: 1.1 }}
          animate={
            isMobile
              ? {}
              : {
                  opacity: 1,
                  scale: 1,
                  transition: { duration: 0.7, ease: 'easeOut' },
                }
          }
          exit={isMobile ? {} : { opacity: 0, scale: 1.05 }}
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: `url(${bgImages[currentBg]})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <Image
          src="/assets/Vector-icon.svg"
          alt="Highway"
          fill
          quality={100}
          priority
          className="absolute inset-0 w-full h-full mt-16 pr-14 object-contain z-10 pointer-events-none"
        />
      </motion.div>

      <div className="w-full max-w-[1440px] mx-auto h-full relative z-20 flex flex-col items-center justify-center text-white text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className={`${figtree.className} text-[16px] md:text-[18px] px-4 md:px-0 font-[400] md:mb-8 mb-4 -mt-32 lg:-mt-0`}
        >
          Shop Online. Pickup Today. It&apos;s Fast, Simple and Easy.
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.7, ease: 'easeOut' }}
          className="text-3xl md:text-[70px] font-bold md:mb-10 mb-12"
        >
          Find Your Perfect Car
        </motion.h1>

        <div className="relative md:mb-10 mb-12 w-full">
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: '#f8f8f8' }}
            whileTap={{ scale: 0.95 }}
            onClick={handlePrev}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white py-2 px-6 rounded-[30px] z-30 transition-colors duration-300 hidden md:flex"
          >
            <FontAwesomeIcon
              icon={faChevronLeft}
              size="lg"
              className="text-[#050B20]"
            />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: '#f8f8f8' }}
            whileTap={{ scale: 0.95 }}
            onClick={handleNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white py-2 px-6 rounded-[30px] z-30 transition-colors duration-300 hidden md:flex"
          >
            <FontAwesomeIcon
              icon={faChevronRight}
              size="lg"
              className="text-[#050B20]"
            />
          </motion.button>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.7 }}
        >
          <SearchBar />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
