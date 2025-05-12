'use client';
import React from 'react';
import ListHeroSection from '../ListHeroSection/listHeroSection';
import Link from 'next/link';
import WhyChooseUs from '../WhyChooseUs2';
import TestimonialSlider from '../TestimonialSlider';
import { galleryImages } from './constant';

const About: React.FC = () => {
  return (
    <>
      <div className="relative">
        <ListHeroSection
          backgroundImage="/assets/about-hero.svg"
          image="/assets/icons.svg"
          className="bg-cover bg-center"
          opacity="opacity-0"
        />
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center z-10 px-4">
          <div className="w-full flex justify-center">
            <div className="max-w-[1440px] w-full px-4 sm:px-8 md:px-12 lg:px-20 xl:px-24">
              <div className="text-sm text-gray-200 mb-2">
                <Link href="/" className="text-[#fff] hover:underline">
                  Home
                </Link>{' '}
                <span className="text-[#fff]"> / About Us</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold text-[#fff]">
                About Us
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#EFEFEF]">
        <div className="max-w-[1410px] mx-auto">
          <div className="bg-[#EFEFEF] -mt-24 md:mx-20 mx-6 rounded-[2rem] p-6 md:p-12 lg:p-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-start relative z-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#050B20] leading-snug">
                We Value Our Clients And Want Them To Have A Nice Experience
              </h2>
            </div>
            <div className="space-y-6 text-gray-700 text-sm md:text-base leading-relaxed">
              <p className="text-[#050B20] text-[15px]">
                Lorem ipsum dolor sit amet consectetur. Convallis integer enim
                eget sit urna. Eu duis lectus ametvestibulum varius. Nibh tellus
                sit sit at lorem facilisis. Nunc vulputate ac interdum aliquet
                vestibulum in tellus.
              </p>
              <p className="text-[#050B20] text-[15px]">
                Lorem ipsum dolor sit amet consectetur. Convallis integer enim
                eget sit urna. Eu duis lectus ametvestibulum varius. Nibh tellus
                sit sit at lorem facilisis. Nunc vulputate ac interdum aliquet
                vestibulum in tellus. Lorem ipsum dolor sit amet consectetur.
                Convallis integer enim eget sit urna. Eu
              </p>
              <p className="text-[#050B20] text-[15px]">
                duis lectus ametvestibulum varius. Nibh tellus sit sit at lorem
                facilisis. Nunc vulputate ac interdum aliquet vestibulum in
                tellus.
              </p>
            </div>
          </div>
          <section className="bg-[#EFEFEF] px-4 sm:px-8 lg:px-20 pb-20">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-stretch">
              <div className="flex flex-col justify-between gap-4 h-[420px]">
                <div className="bg-[#FF0000] text-white rounded-xl text-start h-1/2 flex flex-col justify-center">
                  <h3 className="text-[52px] font-[900] text-start md:-mt-5 ps-6">
                    10
                  </h3>
                  <p className="text-[26px] font-medium ps-6">
                    Years in <br />
                    Business
                  </p>
                </div>
                {galleryImages.firstColumn.map((img, index) => (
                  <img
                    key={index}
                    src={img.src}
                    alt={img.alt}
                    className={`w-full ${img.height} object-cover rounded-xl`}
                  />
                ))}
              </div>

              <div className="md:col-span-2 h-[420px]">
                <img
                  src={galleryImages.secondColumn.src}
                  alt={galleryImages.secondColumn.alt}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>

              <div className="flex flex-col gap-4 h-[420px]">
                {galleryImages.thirdColumn.map((item, index) =>
                  item.group ? (
                    <div className="flex gap-4 h-1/2 mr-4" key={index}>
                      {item.images.map((img, i) => (
                        <img
                          key={i}
                          src={img.src}
                          alt={img.alt}
                          className="w-1/2 h-full object-cover rounded-xl"
                        />
                      ))}
                    </div>
                  ) : (
                    <img
                      key={index}
                      src={item.src}
                      alt={item.alt}
                      className={`w-full ${item.height} object-cover rounded-xl`}
                    />
                  ),
                )}
              </div>
            </div>
          </section>
        </div>
      </div>
      <WhyChooseUs />
      <TestimonialSlider />
      <div
        className="w-full h-[400px] bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/sports-car.svg')" }}
      />
    </>
  );
};
export default About;
