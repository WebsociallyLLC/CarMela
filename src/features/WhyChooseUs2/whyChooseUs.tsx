'use client';
import React from 'react';
import { DM_Sans } from 'next/font/google';
import { motion } from 'framer-motion';

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

const features = [
  {
    id: 1,
    icon: '/assets/financing-offers.svg',
    title: 'Special Financing Offers',
    description:
      'Our stress-free finance department that can find financial solutions to save you money.',
  },
  {
    id: 2,
    icon: '/assets/special-offers.svg',
    title: 'Expert Car Service',
    description:
      'Our stress-free finance department that can find financial solutions to save you money.',
  },
  {
    id: 3,
    icon: '/assets/transparent-pricing.svg',
    title: 'Transparent Pricing',
    description:
      'Our stress-free finance department that can find financial solutions to save you money.',
  },
  {
    id: 4,
    icon: '/assets/trusted-dealership.svg',
    title: 'Trusted Car Dealership',
    description:
      'Our stress-free finance department that can find financial solutions to save you money.',
  },
];

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } },
};

const titleAnimation = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

const cardContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const cardItem = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 12,
    },
  },
};

const WhyChooseUs: React.FC = () => {
  return (
    <motion.div
      className={`${dmSans.className} relative overflow-hidden`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeIn}
    >
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/assets/whychoosus.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <motion.div
        className="relative z-10 bg-black/70 py-20 md:px-20 px-6"
        initial={{ opacity: 0, backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
        whileInView={{ opacity: 1, backgroundColor: 'rgba(0, 0, 0, 0.7)' }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="text-center text-white max-w-[1440px] mx-auto">
          <motion.h2
            className="text-[40px] font-bold mb-6"
            variants={titleAnimation}
          >
            Why Choose Us?
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3"
            variants={cardContainer}
          >
            {features.map((feature) => (
              <motion.div
                key={feature.id}
                className="text-start py-3 px-2 border border-black bg-black/70 rounded-lg"
                variants={cardItem}
                whileHover={{
                  y: -5,
                  boxShadow: '0 10px 25px rgba(0, 0, 0, 0.3)',
                  backgroundColor: 'rgba(0, 0, 0, 0.85)',
                  borderColor: 'rgba(255, 255, 255, 0.1)',
                }}
              >
                <motion.img
                  src={feature.icon}
                  alt={feature.title}
                  initial={{ scale: 0.8, opacity: 0.8 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                />
                <motion.h3
                  className="text-xl font-[500] mb-2"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  {feature.title}
                </motion.h3>
                <motion.p
                  className="text-[15px] font-[400]"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  {feature.description}
                </motion.p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default WhyChooseUs;
