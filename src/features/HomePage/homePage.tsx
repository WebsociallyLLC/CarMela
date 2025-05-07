import React from 'react';
import HeroSection from '../HeroSection';
import BodyStyleSelector from '../BodyStyleSelector/bodyStyleSelector';
import CarListing from '../CarListing';
import WhyChooseUs from '../WhyChooseUs';
import TestimonialSlider from '../TestimonialSlider';
import VideoSection from '../VideoSection';
import AutoLoanCalculator from '../AutoLoanCalculator';
import Navbar from '@/components/Navbar';

const homePage = () => {
  return (
    <>
      <HeroSection />
      {/* <BodyStyleSelector /> */}
      <CarListing />
      <WhyChooseUs />
      <TestimonialSlider />
      <VideoSection />
      <AutoLoanCalculator />
    </>
  );
};

export default homePage;
