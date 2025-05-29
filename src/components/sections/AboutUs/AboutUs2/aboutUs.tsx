'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ABOUT_CONTENT } from './constant';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.7,
      ease: 'easeOut',
    },
  }),
};

const AboutUs = () => {
  const { heading, description, stats, images } = ABOUT_CONTENT;

  return (
    <section className="w-full bg-white py-12 md:py-20">
      <div className="max-w-[1340px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-12 mb-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
            custom={0}
          >
            <h1 className="text-3xl md:text-5xl font-bold text-black leading-tight mb-4">
              {heading.title} <br />
              <span className="text-[#5CF27A]">{heading.highlight}</span>
              <span className="text-black">{heading.subtitle}</span>
            </h1>
          </motion.div>
          <motion.div
            className="flex items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
            custom={1}
          >
            <p className="text-gray-600 text-base md:text-lg">{description}</p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            className="relative rounded-2xl overflow-hidden bg-gray-100 flex items-end min-h-[320px] md:min-h-[340px]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
            custom={2}
          >
            <Image
              src={images.expert}
              alt="Industry Expert"
              fill
              className="object-cover w-full h-full"
            />
            <div className="absolute bottom-6 md:left-44 left-20 bg-white rounded-xl px-8 py-6 flex items-center gap-3 shadow">
              <span className="text-4xl font-bold text-black">
                {stats.industryExperts.number}
              </span>
              <div className="flex flex-col">
                <span className="text-lg font-semibold text-black leading-none">
                  {stats.industryExperts.label1}
                </span>
                <span className="text-lg font-semibold text-black leading-none">
                  {stats.industryExperts.label2}
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="relative rounded-2xl overflow-hidden bg-gray-100 min-h-[320px] md:min-h-[340px] flex items-end"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
            custom={3}
          >
            <Image
              src={images.businessman}
              alt="Business Man"
              fill
              className="object-cover w-full h-full"
            />
          </motion.div>

          <div className="flex flex-col gap-6 min-h-[320px] md:min-h-[340px] h-full">
            <motion.div
              className="rounded-2xl bg-[#5CF27A] flex flex-row items-center justify-start flex-1 min-h-[100px] p-8 text-left"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeInUp}
              custom={4}
            >
              <span className="text-7xl md:text-8xl font-bold text-black mr-6">
                {stats.yearsInBusiness.number}
              </span>
              <span className="text-3xl md:text-4xl font-bold text-black leading-tight">
                {stats.yearsInBusiness.label.split(' ')[0]}
                <br />
                {stats.yearsInBusiness.label.split(' ').slice(1).join(' ')}
              </span>
            </motion.div>

            <motion.div
              className="relative rounded-2xl overflow-hidden bg-gray-100 flex-1 min-h-[250px]"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeInUp}
              custom={5}
            >
              <Image
                src={images.car}
                alt="Car on road"
                fill
                className="object-cover w-full h-full"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
