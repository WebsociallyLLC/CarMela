'use client';
import React from 'react';
import { Figtree } from 'next/font/google';
import SearchBar from '../HeroV1/searchBar2';
import Image from 'next/image';
import { motion } from 'framer-motion';

const figtree = Figtree({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-figtree',
});

const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full md:h-screen overflow-hidden h-[1000px]">
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: 'url(/assets/heroSection.svg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

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

        <div className="relative md:mb-10 mb-12 w-full h-[70px]" />

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
