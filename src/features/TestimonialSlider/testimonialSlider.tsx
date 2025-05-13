'use client';
import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    quote:
      'I was impressed with how smooth the car buying process was. The sales team was knowledgeable and helped me find the perfect SUV for my family.',
    name: 'Michael Johnson',
    rating: 5,
  },
  {
    id: 2,
    quote:
      'The financing options were excellent, and they took the time to explain everything clearly. I got a great rate, and the paperwork was handled efficiently.',
    name: 'Sarah Martinez',
    rating: 5,
  },
  {
    id: 3,
    quote:
      'After visiting several dealerships, I found the selection here to be the best. The condition of their vehicles is exceptional, and the warranty gave me peace.',
    name: 'David Thompson',
    rating: 5,
  },
  {
    id: 4,
    quote:
      "The service department is outstanding. They've been maintaining my car for years, and I wouldn't trust anyone else. Always fair pricing and quality work.",
    name: 'Jennifer Wilson',
    rating: 4,
  },
  {
    id: 5,
    quote:
      'Trading in my old car was a breeze. They offered me a fair market value and made the transition to my new vehicle seamless. Highly recommend!',
    name: 'Robert Garcia',
    rating: 5,
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const TestimonialCard = ({
  quote,
  name,
  rating,
  index,
}: {
  quote: string;
  name: string;
  rating: number;
  index: number;
}) => {
  return (
    <motion.div
      className="bg-white p-6 rounded-xl shadow-md mx-3 h-full flex flex-col"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: 'easeOut',
      }}
      whileHover={{
        y: -5,
        boxShadow: '0 15px 30px rgba(0,0,0,0.1)',
      }}
    >
      <motion.div
        className="flex mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 + index * 0.05, duration: 0.3 }}
      >
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{
              opacity: 1,
              scale: 1,
              transition: { delay: 0.3 + i * 0.05, duration: 0.3 },
            }}
          >
            <Star
              size={18}
              className={
                i < rating ? 'text-[#FF0000] fill-[#FF0000]' : 'text-gray-300'
              }
            />
          </motion.div>
        ))}
      </motion.div>
      <motion.p
        className="text-gray-700 italic mb-6 flex-grow"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 + index * 0.05, duration: 0.5 }}
      >
        {quote}
      </motion.p>
      <motion.div
        className="mt-auto"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 + index * 0.05, duration: 0.5 }}
      >
        <motion.div
          className="w-12 h-1 bg-[#FF0000] mb-3"
          initial={{ width: 0 }}
          animate={{ width: '3rem' }}
          transition={{ delay: 0.5 + index * 0.05, duration: 0.3 }}
        ></motion.div>
        <motion.p
          className="font-semibold text-gray-800"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 + index * 0.05, duration: 0.3 }}
        >
          {name}
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

const TestimonialSlider: React.FC = () => {
  const sliderRef = useRef<Slider | null>(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    dotsClass: 'slick-dots custom-dots',
    customPaging: function (i: number) {
      return (
        <div className="dot-wrapper">
          <div className="custom-dot"></div>
        </div>
      );
    },
  };

  const goToPrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const goToNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  return (
    <motion.div
      className="bg-gray-100 md:px-16 px-6 md:py-20 py-10 testimonial-section"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={staggerContainer}
    >
      <style jsx global>{`
        .testimonial-section .slick-dots {
          bottom: -10px;
          display: flex !important;
          justify-content: center;
          margin-top: 20px;
        }

        .testimonial-section .slick-dots li {
          width: auto;
          height: auto;
          margin: 0 5px;
        }

        .testimonial-section .custom-dot {
          width: 10px;
          height: 10px;
          background-color: #d1d5db;
          border-radius: 50%;
          transition: all 0.3s ease;
        }

        .testimonial-section .slick-active .custom-dot {
          background-color: #ff0000;
          transform: scale(1.2);
        }

        .testimonial-section .dot-wrapper {
          padding: 5px;
          cursor: pointer;
        }

        @media (max-width: 768px) {
          .testimonial-section .slick-dots {
            bottom: -25px;
          }
        }
      `}</style>

      <div className="max-w-[1440px] mx-auto">
        <div className="text-center md:text-left mb-10 md:flex justify-between items-center">
          <motion.h2
            className="text-2xl md:text-3xl font-bold text-gray-800 mb-3 md:mb-0"
            variants={fadeInUp}
          >
            What Our Customers Say
          </motion.h2>
          <motion.div
            className="flex justify-center md:justify-end items-center gap-6"
            variants={fadeInUp}
          >
            <motion.p className="text-gray-600 font-medium" variants={fadeInUp}>
              <motion.span
                className="text-[#FF0000] font-bold text-xl"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5, type: 'spring' }}
              >
                4.8
              </motion.span>{' '}
              / 5 based on 120+ reviews
            </motion.p>
            <motion.div className="hidden md:flex gap-2" variants={fadeInUp}>
              <motion.button
                onClick={goToPrev}
                className="bg-white rounded-full w-10 h-10 flex justify-center items-center shadow-md hover:bg-gray-100 transition-colors"
                whileHover={{ scale: 1.1, backgroundColor: '#f8f8f8' }}
                whileTap={{ scale: 0.95 }}
              >
                <ChevronLeft size={20} className="text-gray-700" />
              </motion.button>
              <motion.button
                onClick={goToNext}
                className="bg-[#FF0000] rounded-full w-10 h-10 flex justify-center items-center shadow-md hover:bg-red-700 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <ChevronRight size={20} className="text-white" />
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        <motion.div className="relative" variants={fadeInUp}>
          <Slider ref={sliderRef} {...settings} className="testimonial-slider">
            {testimonials.map((testimonial, index) => (
              <div key={testimonial.id} className="h-full md:h-[250px] pb-10">
                <TestimonialCard
                  quote={testimonial.quote}
                  name={testimonial.name}
                  rating={testimonial.rating}
                  index={index}
                />
              </div>
            ))}
          </Slider>

          {/* Mobile Navigation Controls */}
          <motion.div
            className="md:hidden flex justify-center items-center gap-3 mt-12"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.3 }}
          >
            <motion.button
              onClick={goToPrev}
              className="bg-white rounded-full w-10 h-10 flex justify-center items-center shadow-md hover:bg-gray-100 transition-colors"
              whileTap={{ scale: 0.95 }}
            >
              <ChevronLeft size={20} className="text-gray-700" />
            </motion.button>
            <motion.button
              onClick={goToNext}
              className="bg-[#FF0000] rounded-full w-10 h-10 flex justify-center items-center shadow-md hover:bg-red-700 transition-colors"
              whileTap={{ scale: 0.95 }}
            >
              <ChevronRight size={20} className="text-white" />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default TestimonialSlider;
