'use client';
import React from 'react';

import WhyChooseUs from '@/components/sections/WhyChooseUs/WhyChooseUsV2';
import TestimonialV1 from '@/components/sections/Testimonials/TestimonialV1';
import { galleryImages } from './constant';
import PageHeader from '@/components/sections/PageHeader/PageHeaderV1/pageHeader';
import Image from 'next/image';
import { motion } from 'framer-motion';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
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

const About: React.FC = () => {
  return (
    <>
      <div className="relative">
        <PageHeader
          title="About Us"
          description="Learn more about our company and our mission."
          showBreadcrumbs={true}
          currentPage="About Us"
          backgroundImage="/assets/about-hero.svg"
        />
      </div>

      <div className="bg-[#EFEFEF]">
        <div className="max-w-[1440px] mx-auto">
          <motion.div
            className="bg-[#EFEFEF] -mt-24 mx-6 rounded-[2rem] p-6 md:p-12 lg:p-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-start relative z-10"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div variants={fadeInLeft}>
              <h2 className="text-3xl md:text-4xl font-bold text-[#050B20] leading-snug">
                We Value Our Clients And Provide Exceptional Service
              </h2>
            </motion.div>
            <motion.div
              className="space-y-6 text-gray-700 text-sm md:text-base leading-relaxed"
              variants={fadeInRight}
            >
              <p className="text-[#050B20] text-[15px]">
                At TakeOff Motors, we&apos;re dedicated to providing an
                exceptional car buying experience. For over a decade, we&apos;ve
                built our reputation on transparency, quality, and customer
                satisfaction.
              </p>
              <p className="text-[#050B20] text-[15px]">
                Our team of automotive experts is passionate about helping you
                find the perfect vehicle that meets your needs and exceeds your
                expectations. We carefully select and inspect each vehicle in
                our inventory to ensure it meets our high standards of quality
                and reliability.
              </p>
              <p className="text-[#050B20] text-[15px]">
                Whether you&apos;re looking for a family SUV, a fuel-efficient
                commuter, or a luxury vehicle, we&apos;re here to guide you
                through every step of the process, from test drives to financing
                and after-sales service.
              </p>
            </motion.div>
          </motion.div>

          <motion.section
            className="bg-[#EFEFEF] px-4 sm:px-8 lg:px-20 pb-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeIn}
          >
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-stretch">
              <motion.div
                className="flex flex-col justify-between gap-4 h-[420px]"
                variants={staggerContainer}
              >
                <motion.div
                  className="bg-[#FF0000] text-white rounded-xl text-start h-1/2 flex flex-col justify-center"
                  variants={fadeIn}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <h3 className="text-[52px] font-[900] text-start md:-mt-5 ps-6">
                    10
                  </h3>
                  <p className="text-[26px] font-medium ps-6">
                    Years in <br />
                    Business
                  </p>
                </motion.div>
                {galleryImages.firstColumn.map((img, index) => (
                  <motion.div
                    key={index}
                    className={`w-full ${img.height} relative rounded-xl overflow-hidden`}
                    variants={fadeIn}
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <Image
                      src={img.src || ''}
                      alt={img.alt || ''}
                      fill
                      style={{ objectFit: 'cover' }}
                      sizes="(max-width: 768px) 100vw, 25vw"
                      quality={90}
                    />
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                className="md:col-span-2 h-[420px] relative rounded-xl overflow-hidden"
                variants={fadeIn}
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <Image
                  src={galleryImages.secondColumn.src || ''}
                  alt={galleryImages.secondColumn.alt || ''}
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  quality={90}
                  priority
                />
              </motion.div>

              <motion.div
                className="flex flex-col gap-4 h-[420px]"
                variants={staggerContainer}
              >
                {galleryImages.thirdColumn.map((item, index) =>
                  item.group ? (
                    <motion.div
                      className="flex gap-4 h-1/2 mr-4"
                      key={index}
                      variants={fadeIn}
                    >
                      {item.images.map((img, i) => (
                        <motion.div
                          key={i}
                          className="w-1/2 h-full relative rounded-xl overflow-hidden"
                          whileHover={{ scale: 1.04 }}
                          transition={{ type: 'spring', stiffness: 300 }}
                        >
                          <Image
                            src={img.src || ''}
                            alt={img.alt || ''}
                            fill
                            style={{ objectFit: 'cover' }}
                            sizes="(max-width: 768px) 50vw, 12.5vw"
                            quality={85}
                          />
                        </motion.div>
                      ))}
                    </motion.div>
                  ) : (
                    <motion.div
                      key={index}
                      className={`w-full ${item.height} relative rounded-xl overflow-hidden`}
                      variants={fadeIn}
                      whileHover={{ scale: 1.04 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      <Image
                        src={item.src || ''}
                        alt={item.alt || ''}
                        fill
                        style={{ objectFit: 'cover' }}
                        sizes="(max-width: 768px) 100vw, 25vw"
                        quality={85}
                      />
                    </motion.div>
                  ),
                )}
              </motion.div>
            </div>
          </motion.section>
        </div>
      </div>
      <WhyChooseUs />
      <TestimonialV1 />
      <motion.div
        className="w-full h-[400px] bg-cover bg-center relative"
        style={{ backgroundImage: "url('/assets/sports-car.svg')" }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      />
    </>
  );
};

export default About;
