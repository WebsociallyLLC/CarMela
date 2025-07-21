'use client';
import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Link from 'next/link';
import {
  ChevronLeft,
  ChevronRight,
  ArrowUpRight,
  Fuel,
  Gauge,
  Cog,
} from 'lucide-react';
import Image from 'next/image';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { MdKeyboardArrowLeft } from 'react-icons/md';
import { motion } from 'framer-motion';
import { CARS_DATA } from '@/utils/data';
function Arrow({
  className,
  style,
  onClick,
  icon,
}: {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  icon: React.ReactNode;
}) {
  return (
    <motion.button
      className={
        'flex items-center justify-center bg-white rounded-full shadow-md w-10 h-10 border-none p-0 hover:bg-gray-100 mx-2'
      }
      style={{ ...style, zIndex: 2, position: 'static' }}
      onClick={onClick}
      type="button"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
    >
      {icon}
    </motion.button>
  );
}

const ProductCard = ({ product, index }: { product: any; index: number }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    setCurrentImageIndex((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    setCurrentImageIndex(
      (prev) => (prev - 1 + product.images.length) % product.images.length,
    );
  };

  const formattedPrice =
    !product.price ||
    product.price.trim() === '' ||
    product.price.trim() === '$—'
      ? 'Call for price'
      : product.price;

  return (
    <Link href={`/listings/${product.slug}`} className="block h-full">
      <motion.div
        className="h-full cursor-pointer"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          delay: index * 0.1,
          type: 'spring',
          stiffness: 100,
          damping: 15,
        }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        <motion.div
          className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 h-full"
          whileHover={{
            y: -5,
            boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
            borderColor: '#e5e5e5',
          }}
        >
          <div className="relative w-full h-[280px]">
            <Image
              src={product.images[currentImageIndex]}
              alt={product.name}
              className="w-full h-full object-cover transition-all duration-300"
              width={600}
              height={400}
              quality={90}
              priority={index === 0}
            />
            {product.images.length > 1 && (
              <>
                <motion.button
                  onClick={prevImage}
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 rounded-full p-1.5 text-gray-800 hover:bg-white shadow-md z-10"
                  whileHover={{
                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                  }}
                  initial={{ opacity: isHovered ? 1 : 0 }}
                  animate={{ opacity: isHovered ? 1 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronLeft size={20} />
                </motion.button>
                <motion.button
                  onClick={nextImage}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 rounded-full p-1.5 text-gray-800 hover:bg-white shadow-md z-10"
                  whileHover={{
                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                  }}
                  initial={{ opacity: isHovered ? 1 : 0 }}
                  animate={{ opacity: isHovered ? 1 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronRight size={20} />
                </motion.button>
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1.5">
                  {(product.images.length > 0
                    ? product.images.slice(0, 5)
                    : []
                  ).map((_: string, idx: number) => (
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
          </div>

          <div className="p-5">
            {/* Title Section */}
            <motion.div
              className="text-center mb-4"
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.3 }}
            >
              <h3 className="text-xl font-bold text-gray-900 leading-tight">
                {product.name.length > 25
                  ? `${product.name.slice(0, 25)}...`
                  : product.name}
              </h3>
            </motion.div>

            {/* Price Section */}
            <motion.div
              className="text-center mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.3 }}
            >
              <span className="text-xl font-bold text-[#FF0000]">
                {formattedPrice}
              </span>
            </motion.div>

            {/* Specs Grid */}
            <motion.div
              className="grid grid-cols-3 gap-4 py-3 border-t border-b border-gray-100"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.3 }}
            >
              <motion.div
                className="flex flex-col items-center"
                whileHover={{ y: -2 }}
              >
                <Gauge size={16} className="mb-1 text-gray-600" />
                <span className="text-xs text-gray-600">{product.mileage}</span>
              </motion.div>

              <motion.div
                className="flex flex-col items-center"
                whileHover={{ y: -2 }}
              >
                <Fuel size={16} className="mb-1 text-gray-600" />
                <span className="text-xs text-gray-600">
                  {product.fuelType}
                </span>
              </motion.div>

              <motion.div
                className="flex flex-col items-center"
                whileHover={{ y: -2 }}
              >
                <Cog size={16} className="mb-1 text-gray-600" />
                <span className="text-xs text-gray-600">
                  {product.transmission}
                </span>
              </motion.div>
            </motion.div>

            {/* View Details Button */}
            <motion.div
              className="mt-3 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.3 }}
            >
              <motion.button
                className="inline-flex items-center gap-1 text-gray-600 text-sm hover:text-[#FF0000] transition-colors"
                whileHover={{ scale: 1.05, x: 2 }}
              >
                View Details
                <ArrowUpRight size={14} />
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </Link>
  );
};

const FeaturedProducts = () => {
  const sliderRef = React.useRef<Slider | null>(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
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
      className="bg-[#F4F4F4] md:py-24 py-12 md:px-20 px-6"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-[1440px] mx-auto">
        <div className="flex justify-between items-center mb-8">
          <motion.h2
            className="md:text-2xl text-[22px] font-bold text-[#181C23]"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Featured Products
          </motion.h2>
          <div className="hidden md:block">
            <ViewAllButton />
          </div>
        </div>

        <motion.div
          className="featured-products-container"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <style jsx global>{`
            .featured-products-container .slick-list {
              margin: 0 -12px;
            }

            .featured-products-container .slick-slide {
              padding: 0 12px;
              height: auto;
            }

            .featured-products-container .slick-track {
              display: flex !important;
              gap: 0;
              padding: 10px 0;
            }

            .featured-products-container .slick-slide > div {
              height: 100%;
            }

            @media (max-width: 768px) {
              .featured-products-container .slick-slide {
                padding: 0 8px;
              }

              .featured-products-container .slick-list {
                overflow: hidden;
              }
            }
          `}</style>
          <Slider ref={sliderRef} {...settings} className="mb-8">
            {CARS_DATA.map((product: any, idx: any) => (
              <ProductCard key={idx} product={product} index={idx} />
            ))}
          </Slider>
        </motion.div>
        <motion.div
          className="flex items-center mt-2 md:hidden"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.4 }}
        >
          <Arrow
            onClick={() => sliderRef.current?.slickPrev()}
            icon={<MdKeyboardArrowLeft className="text-3xl" />}
          />
          <Arrow
            onClick={() => sliderRef.current?.slickNext()}
            icon={<MdKeyboardArrowRight className="text-3xl" />}
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default FeaturedProducts;
