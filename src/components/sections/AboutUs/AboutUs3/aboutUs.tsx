'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { aboutHighlights, featureCards } from './constant';

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const AboutUs = () => {
  return (
    <section className="w-full bg-white py-12 md:py-32">
      <motion.div
        className="max-w-[1340px] mx-auto px-4 md:px-0 flex flex-col lg:flex-row md:gap-48 gap-20 items-center"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div
          className="w-full lg:w-1/2 flex flex-col items-center relative mb-12 lg:mb-0"
          variants={fadeUp}
        >
          <motion.div
            className="w-full rounded-3xl overflow-hidden min-h-[320px] max-w-[420px] mx-auto"
            variants={fadeUp}
          >
            <Image
              src="/assets/about_image3.jpg"
              alt="Mountain"
              width={600}
              height={400}
              className="object-cover w-full h-full"
            />
          </motion.div>

          <motion.div
            className="absolute top-32 md:left-[80%] left-[50%] -translate-x-1/2 flex flex-col gap-6 w-full max-w-[280px]"
            variants={staggerContainer}
          >
            {aboutHighlights.map((text, i) => (
              <motion.div
                key={i}
                className="flex items-center bg-white rounded-full shadow px-6 py-4 gap-3"
                variants={fadeUp}
              >
                <div className="bg-[#FF7A00] rounded-full w-8 h-8 flex items-center justify-center">
                  <Check className="text-white w-5 h-5" />
                </div>
                <span className="font-semibold text-gray-800">{text}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="absolute md:-bottom-20 -bottom-24 md:left-[35%] left-5 -translate-x-1/2 w-[600px] max-w-[90vw]"
            variants={fadeUp}
          >
            <Image
              src="/assets/about3_image2.png"
              alt="Car"
              width={500}
              height={200}
              className="object-contain w-full h-auto"
            />
          </motion.div>
        </motion.div>

        <motion.div
          className="w-full lg:w-1/2 flex flex-col gap-8"
          variants={fadeUp}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#18181B] mb-2">
            Why Choose Auto Decar
          </h2>
          <p className="text-gray-500 mb-4 max-w-xl">
            Our experienced team excels in car sales with many years of
            successfully navigating the market, delivering informed decisions
            and optimal results.
          </p>

          <motion.div
            className="flex flex-col gap-4"
            variants={staggerContainer}
          >
            {featureCards.map((item, i) => (
              <motion.div
                key={i}
                className="flex items-start gap-4 bg-white rounded-2xl border border-gray-200 p-5 shadow-sm w-full"
                variants={fadeUp}
              >
                {item.icon}
                <div>
                  <h4 className="font-semibold text-lg text-[#18181B] mb-1">
                    {item.title}
                  </h4>
                  <p className="text-gray-500 text-base">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutUs;
