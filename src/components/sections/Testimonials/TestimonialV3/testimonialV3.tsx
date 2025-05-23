'use client';
import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    quote:
      "If you're not using testimonials, you're missing out on a golden opportunity to turn visitors and potential buyers into actual customers.",
    name: 'Bác. Lỡ Lĩnh',
    username: 'puckish_cookies_38',
    avatarSrc: 'https://randomuser.me/api/portraits/men/32.jpg', // Placeholder avatar
  },
  {
    id: 2,
    quote:
      "If you're not using testimonials, you're missing out on a golden opportunity to turn visitors and potential buyers into actual customers.",
    name: 'Ibrahim Mahmud',
    username: 'limpid_cupcake_68',
    avatarSrc: 'https://randomuser.me/api/portraits/men/47.jpg', // Placeholder avatar
  },
  {
    id: 3,
    quote:
      "If you're not using testimonials, you're missing out on a golden opportunity to turn visitors and potential buyers into actual customers.",
    name: 'Margaret Taylor',
    username: 'amatory_clerk_73',
    avatarSrc: 'https://randomuser.me/api/portraits/women/81.jpg', // Placeholder avatar
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
  username,
  avatarSrc,
  index,
}: {
  quote: string;
  name: string;
  username: string;
  avatarSrc: string;
  index: number;
}) => {
  return (
    <motion.div
      className="bg-white p-8 rounded-xl shadow-md mx-3 h-full flex flex-col justify-between"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: 'easeOut',
      }}
      whileHover={{
        y: -5,
        boxShadow: '0 15px 30px rgba(0,0,0,0.05)',
      }}
    >
      <motion.div className="flex items-center mb-6">
        <motion.img
          src={avatarSrc}
          alt={`${name}'s avatar`}
          className="w-12 h-12 rounded-full mr-4 object-cover"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 + index * 0.05, duration: 0.3 }}
        />
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 + index * 0.05, duration: 0.3 }}
        >
          <p className="font-semibold text-gray-800">{name}</p>
          <p className="text-sm text-gray-500">{username}</p>
        </motion.div>
      </motion.div>
      <motion.p
        className="text-gray-700 italic mb-8 flex-grow"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 + index * 0.05, duration: 0.5 }}
      >
        {`"${quote}"`}
      </motion.p>
      <motion.div
        className="flex justify-end"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 + index * 0.05, duration: 0.5 }}
      >
        <svg
          className="w-10 h-10 text-gray-200"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M2.75 7.25a.75.75 0 000 1.5h1.5a.75.75 0 000-1.5h-1.5zM2.75 15.75a.75.75 0 000 1.5h1.5a.75.75 0 000-1.5h-1.5zM10.75 7.25a.75.75 0 000 1.5h1.5a.75.75 0 000-1.5h-1.5zM10.75 15.75a.75.75 0 000 1.5h1.5a.75.75 0 000-1.5h-1.5zM18.25 7.25a.75.75 0 000 1.5h1.5a.75.75 0 000-1.5h-1.5zM18.25 15.75a.75.75 0 000 1.5h1.5a.75.75 0 000-1.5h-1.5zM6.75 11.25a.75.75 0 000 1.5h1.5a.75.75 0 000-1.5h-1.5zM14.75 11.25a.75.75 0 000 1.5h1.5a.75.75 0 000-1.5h-1.5zM22.25 11.25a.75.75 0 000 1.5h1.5a.75.75 0 000-1.5h-1.5z" />
        </svg>
      </motion.div>
    </motion.div>
  );
};

const TestimonialV3: React.FC = () => {
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
            className="hidden md:flex justify-end items-center gap-6"
            variants={fadeInUp}
          >
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
        </div>

        <motion.div className="relative" variants={fadeInUp}>
          <Slider ref={sliderRef} {...settings} className="testimonial-slider">
            {testimonials.map((testimonial, index) => (
              <div key={testimonial.id} className="h-full md:h-[300px] pb-10">
                <TestimonialCard
                  quote={testimonial.quote}
                  name={testimonial.name}
                  username={testimonial.username}
                  avatarSrc={testimonial.avatarSrc}
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

export default TestimonialV3;
