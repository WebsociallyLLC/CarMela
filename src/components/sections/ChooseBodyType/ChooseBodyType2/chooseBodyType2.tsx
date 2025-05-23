'use client';
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface Brand {
  name: string;
  logo: any;
}

const brands: Brand[] = [
  { name: 'Audi', logo: '/assets/Audi.svg' },
  { name: 'BMW', logo: '/assets/bmw.svg' },
  { name: 'Ford', logo: '/assets/ford.svg' },
  { name: 'Mercedes-Benz', logo: '/assets/mercedes.svg' },
  { name: 'Volkswagen', logo: '/assets/volkswagen.svg' },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, type: 'spring' },
  }),
  hover: { scale: 1.05, boxShadow: '0 8px 32px rgba(0,0,0,0.12)' },
};

const ChooseBodyType2: React.FC = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-[1440px] mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">
            Explore Our Premium Brands
          </h2>

          <Link
            href="#"
            className="text-blue-600 hover:underline flex items-center"
          >
            Show All Brands
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="ml-1 h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0l-6 6"
              />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-5 gap-6">
          {brands.map((brand, i) => (
            <motion.div
              key={brand.name}
              className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center justify-between min-h-[220px] h-full"
              custom={i}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              variants={cardVariants}
            >
              <div className="w-full flex-1 flex items-center justify-center aspect-[3/2] p-4">
                <img
                  src={brand.logo}
                  alt={`${brand.name} logo`}
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="text-gray-700 text-lg font-semibold text-center mt-4 w-full">
                {brand.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChooseBodyType2;
