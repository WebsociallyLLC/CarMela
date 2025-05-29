'use client';
import React from 'react';
import Image from 'next/image';
import { Phone } from 'lucide-react';
import { motion } from 'framer-motion';

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
console.log('motion:', motion);
const AboutUs = () => {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-[1340px] mx-auto flex flex-col lg:flex-row items-center gap-12 px-4 md:px-8">
        <motion.div
          className="w-full lg:w-1/2 flex flex-col lg:flex-row gap-6 mb-10 lg:mb-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div
            className="w-full lg:flex-1 rounded-2xl overflow-hidden min-h-[240px] lg:min-h-[340px] lg:h-[450px]"
            variants={fadeInUp}
            custom={0}
          >
            <Image
              src="/assets/12.webp"
              alt="Showroom"
              width={600}
              height={600}
              className="object-cover w-full h-full"
            />
          </motion.div>
          <div className="w-full lg:flex-1 flex flex-col gap-6">
            <motion.div
              className="w-full rounded-2xl overflow-hidden flex-1 min-h-[180px] lg:min-h-[240px] lg:h-[240px]"
              variants={fadeInUp}
              custom={1}
            >
              <Image
                src="/assets/13.webp"
                alt="Car"
                width={600}
                height={300}
                className="object-cover w-full h-full"
              />
            </motion.div>
            <motion.div
              className="w-full rounded-2xl bg-[#FF3600] text-white flex flex-col items-center justify-center flex-1 min-h-[150px] lg:min-h-[100px] lg:h-[100px]"
              variants={fadeInUp}
              custom={2}
            >
              <span className="text-4xl md:text-5xl font-bold">1000+</span>
              <span className="text-lg mt-2">Car Sold Already</span>
            </motion.div>
          </div>
        </motion.div>
        <motion.div
          className="w-full lg:w-1/2 flex flex-col gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.span
            className="text-[#FF3600] font-semibold text-lg"
            variants={fadeInUp}
            custom={3}
          >
            About Us
          </motion.span>
          <motion.h1
            className="text-3xl md:text-5xl font-bold text-[#050B20] leading-tight"
            variants={fadeInUp}
            custom={4}
          >
            Driven by Excellence: <br />
            Your Trusted Partner for Premium{' '}
            <span className="text-[#FF3600] underline decoration-4">
              Vehicles
            </span>
          </motion.h1>
          <motion.p
            className="text-gray-600 text-base md:text-lg"
            variants={fadeInUp}
            custom={5}
          >
            Welcome to Autovault where innovation drives every journey. Discover
            a range of designed to elevate your driving experience.
          </motion.p>
          <motion.a
            href="tel:+12505550199"
            className="flex items-center gap-4  text-black px-6 py-4 rounded-xl w-fit  transition-colors"
            variants={fadeInUp}
            custom={6}
          >
            <span className="bg-[#FF3600] text-white p-3 rounded-lg">
              <Phone size={24} />
            </span>
            <div className="flex flex-col items-start">
              <span className="font-semibold text-lg">Call Us Now</span>
              <span className="text-base text-[#050B20]">+12505550199</span>
            </div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
