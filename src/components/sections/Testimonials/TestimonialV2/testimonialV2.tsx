'use client';
import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    quote:
      'Great experience working with this team. Everything was delivered on time and exceeded expectations.',
    name: 'John Doe',
    rating: 5,
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    id: 2,
    quote:
      'Absolutely loved the professionalism and attention to detail throughout the entire project.',
    name: 'Michael Smith',
    rating: 5,
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    id: 3,
    quote:
      'The communication was smooth and clear. I felt informed every step of the way.',
    name: 'Emily Johnson',
    rating: 5,
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    id: 4,
    quote:
      'Highly recommended! They turned our vision into reality better than we imagined.',
    name: 'Sophia Brown',
    rating: 5,
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    id: 5,
    quote:
      'Reliable, talented, and efficient. Will definitely work with them again in the future.',
    name: 'James Anderson',
    rating: 5,
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    id: 6,
    quote:
      'Every detail was taken care of with professionalism. Truly impressed by the results.',
    name: 'Olivia Martinez',
    rating: 5,
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
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
  avatar,
  index,
}: {
  quote: string;
  name: string;
  rating: number;
  avatar: string;
  index: number;
}) => {
  return (
    <motion.div
      className="relative bg-[#353c47] p-8 rounded-xl shadow-lg mx-3 h-full flex flex-col text-left text-white mt-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeInUp}
      whileHover={{
        y: -5,
        boxShadow: '0 15px 30px rgba(0,0,0,0.1)',
      }}
    >
      <div className="mb-4 flex items-center justify-between">
        <span className="font-bold text-xl text-white">{name}</span>
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={18}
              className={
                i < rating ? 'text-[#2ee59d] fill-[#2ee59d]' : 'text-gray-600'
              }
            />
          ))}
        </div>
      </div>
      <p className="text-gray-300 text-base mb-8">{quote}</p>
      {/* Speech bubble tail */}
      <div className="absolute left-10 -bottom-6 w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-t-[20px] border-t-[#353c47]"></div>
      {/* Avatar below card */}
      <div className="absolute left-1/2 -bottom-16 transform -translate-x-1/2">
        <img
          src={avatar}
          alt={name}
          className="w-16 h-16 rounded-full border-4 border-[#353c47] object-cover shadow-lg"
        />
      </div>
    </motion.div>
  );
};

const TestimonialV2: React.FC = () => {
  const sliderRef = useRef<Slider | null>(null);
  const [showPreview, setShowPreview] = useState(false);

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
      className="bg-[#3a404c] px-4 md:px-0 py-20 min-h-[500px]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={staggerContainer}
    >
      <div className="max-w-6xl mx-auto relative">
        {/* Navigation Arrow Top Right */}
        <motion.button
          onClick={goToNext}
          className="absolute right-0 top-0 bg-[#414857] hover:bg-[#2ee59d] transition-colors w-14 h-14 rounded-full flex items-center justify-center shadow-lg z-10"
          variants={fadeInUp}
        >
          <ChevronRight size={28} className="text-white" />
        </motion.button>
        {/* Navigation Arrow Top Left */}
        <motion.button
          onClick={goToPrev}
          className="absolute left-0 top-0 bg-[#414857] hover:bg-[#2ee59d] transition-colors w-14 h-14 rounded-full flex items-center justify-center shadow-lg z-10"
          variants={fadeInUp}
        >
          <ChevronLeft size={28} className="text-white" />
        </motion.button>
        {/* Heading and Subtitle */}
        <motion.div className="text-center mb-16" variants={fadeInUp}>
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-white mb-4"
            variants={fadeInUp}
          >
            What Our Client Says
          </motion.h2>
          <motion.p
            className="text-gray-300 text-lg max-w-2xl mx-auto"
            variants={fadeInUp}
          >
            Cras tincidunt, sapien eget scelerisque tincidunt, est urna aliquet,
            a pretium elit a lacus.
          </motion.p>
        </motion.div>
        {/* Slider */}
        <div className="relative pb-24">
          <Slider ref={sliderRef} {...settings} className="testimonial-slider">
            {testimonials.map((testimonial, index) => (
              <div key={testimonial.id} className="h-full pb-20">
                <TestimonialCard
                  quote={testimonial.quote}
                  name={testimonial.name}
                  rating={testimonial.rating}
                  avatar={testimonial.avatar}
                  index={index}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <style jsx global>{`
        .testimonial-slider .slick-slide > div {
          display: flex;
          justify-content: center;
        }
        .testimonial-slider .slick-list {
          padding-bottom: 40px !important;
        }
        .testimonial-slider .slick-dots {
          bottom: -10px;
          display: flex !important;
          justify-content: center;
          margin-top: 20px;
        }
        .testimonial-slider .slick-dots li {
          width: auto;
          height: auto;
          margin: 0 5px;
        }
        .testimonial-slider .custom-dot {
          width: 10px;
          height: 10px;
          background-color: #d1d5db;
          border-radius: 50%;
          transition: all 0.3s ease;
        }
        .testimonial-slider .slick-active .custom-dot {
          background-color: #2ee59d;
          transform: scale(1.2);
        }
        .testimonial-slider .dot-wrapper {
          padding: 5px;
          cursor: pointer;
        }
        @media (max-width: 768px) {
          .testimonial-slider .slick-dots {
            bottom: -25px;
          }
        }
      `}</style>
    </motion.div>
  );
};

export default TestimonialV2;
