'use client';
import CarCard from '@/components/shared/CarCard';
import Link from 'next/link';
import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { CARS_DATA } from '@/utils/data';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 12,
    },
  },
};

const CarListing: React.FC = () => {
  const handleSelect = () => {
    console.log('Car selected!');
  };

  const ViewAllButton = () => (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <Link
        href="/listings"
        className="flex items-center justify-center gap-2 text-white bg-[#FF0000] hover:bg-red-700 rounded-full px-5 py-2.5 font-medium transition-all duration-200 shadow-md"
      >
        <span>View All</span>
        <ChevronRight size={18} />
      </Link>
    </motion.div>
  );

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="py-16 md:py-20 bg-[#F4F4F4]"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="flex justify-between items-center mb-8">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold text-[#181C23]"
          >
            Recently Added
          </motion.h2>
          <div className="hidden md:block">
            <ViewAllButton />
          </div>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="car-listings-container"
        >
          <style jsx global>{`
            .car-listings-container {
              display: grid;
              grid-template-columns: repeat(1, 1fr);
              gap: 24px;
            }

            @media (min-width: 640px) {
              .car-listings-container {
                grid-template-columns: repeat(2, 1fr);
              }
            }

            @media (min-width: 1024px) {
              .car-listings-container {
                grid-template-columns: repeat(3, 1fr);
              }
            }

            @media (min-width: 1280px) {
              .car-listings-container {
                grid-template-columns: repeat(4, 1fr);
              }
            }
          `}</style>

          {CARS_DATA.map((car: any, index: any) => (
            <motion.div key={car.id} variants={item} custom={index}>
              <CarCard
                images={car.images}
                name={car.name}
                mileage={car.mileage}
                price={car.price}
                fuel={car.fuel}
                transmission={car.transmission}
                onSelect={handleSelect}
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="md:hidden mt-8 w-full"
        >
          <ViewAllButton />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default CarListing;
