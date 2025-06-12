'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import {
  Gauge,
  ChevronLeft,
  ChevronRight,
  ArrowUpRight,
  Fuel,
  Cog,
} from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface CarCardProps {
  images: string[];
  name: string;
  mileage: string;
  price: string;
  fuel?: string;
  transmission?: string;
  onSelect: () => void;
}

const CarCard: React.FC<CarCardProps> = ({
  images = [],
  name,
  mileage,
  price,
  fuel = 'Petrol',
  transmission = 'Automatic',
  onSelect,
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Default image to use if no images are provided
  const defaultImage = '/assets/cardPic.svg';

  // Make sure we have a valid image to display
  const hasImages = Array.isArray(images) && images.length > 0;
  const currentImage = hasImages ? images[currentImageIndex] : defaultImage;

  const nextImage = (e: React.MouseEvent) => {
    if (!hasImages) return;
    e.stopPropagation();
    e.preventDefault();
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    if (!hasImages) return;
    e.stopPropagation();
    e.preventDefault();
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <Link href={`/listings/${name.toLowerCase().replace(/ /g, '-')}`}>
      <motion.div
        className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 h-full transition-all duration-300 cursor-pointer"
        whileHover={{
          y: -5,
          boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
          borderColor: '#e5e5e5',
        }}
        initial={{ scale: 0.98, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        <div className="relative w-full h-48">
          <Image
            src={currentImage}
            alt={name}
            className="w-full h-48 object-cover transition-all duration-300"
            width={1000}
            height={1000}
          />
          {hasImages && images.length > 1 && (
            <>
              <motion.button
                onClick={prevImage}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 rounded-full p-1 text-gray-800 hover:bg-white shadow-md z-10"
                whileHover={{
                  backgroundColor: 'rgba(255, 255, 255, 0.95)',
                }}
                initial={{ opacity: isHovered ? 1 : 0 }}
                animate={{ opacity: isHovered ? 1 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronLeft size={18} />
              </motion.button>
              <motion.button
                onClick={nextImage}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 rounded-full p-1 text-gray-800 hover:bg-white shadow-md z-10"
                whileHover={{
                  backgroundColor: 'rgba(255, 255, 255, 0.95)',
                }}
                initial={{ opacity: isHovered ? 1 : 0 }}
                animate={{ opacity: isHovered ? 1 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronRight size={18} />
              </motion.button>

              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1.5">
                {(images.length > 0 ? images.slice(0, 5) : []).map((_, idx) => (
                  <motion.span
                    key={idx}
                    className={`block w-2 h-2 rounded-full ${currentImageIndex === idx ? 'bg-white' : 'bg-white/50'}`}
                    animate={{
                      scale: currentImageIndex === idx ? 1.2 : 1,
                      backgroundColor:
                        currentImageIndex === idx
                          ? 'rgba(255, 255, 255, 1)'
                          : 'rgba(255, 255, 255, 0.5)',
                    }}
                    transition={{ duration: 0.2 }}
                  />
                ))}
              </div>
            </>
          )}
          <motion.div
            className="absolute top-3 left-3"
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.3 }}
          >
            <span className="bg-red-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
              Great Price
            </span>
          </motion.div>
        </div>

        <div className="p-4">
          <motion.h3
            className="text-lg font-semibold text-gray-900"
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.3 }}
          >
            {/* {name} */}
            {name.length > 25 ? `${name.slice(0, 25)} ...` : name}
          </motion.h3>

          <motion.div
            className="flex justify-between text-sm text-gray-600 mt-3 border-t border-gray-100 pt-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.3 }}
          >
            <motion.div
              className="flex flex-col items-center"
              whileHover={{ y: -2 }}
            >
              <Gauge size={18} className="mb-1 text-gray-500" />
              <span>{mileage} mi</span>
            </motion.div>

            <motion.div
              className="flex flex-col items-center"
              whileHover={{ y: -2 }}
            >
              <Fuel size={18} className="mb-1 text-gray-500" />
              <span>{fuel}</span>
            </motion.div>

            <motion.div
              className="flex flex-col items-center"
              whileHover={{ y: -2 }}
            >
              <Cog size={18} className="mb-1 text-gray-500" />
              <span>{transmission}</span>
            </motion.div>
          </motion.div>

          <motion.div
            className="mt-4 flex justify-between items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.3 }}
          >
            <motion.span
              className="text-xl font-bold text-gray-900"
              whileHover={{ scale: 1.05 }}
            >
              {!price || price.trim() === '' || price.trim() === '$—'
                ? 'Your Call'
                : price}
            </motion.span>
            <motion.div whileHover={{ scale: 1.05, x: 2 }}>
              <span className="text-red-600 text-sm font-medium flex items-center gap-1 hover:text-red-700 transition-colors">
                View Details
                <ArrowUpRight size={14} className="text-red-600" />
              </span>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </Link>
  );
};

export default CarCard;
