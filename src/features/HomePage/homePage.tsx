import React from 'react';
import HeroSection from '../HeroSection';
import BodyStyleSelector from '../BodyStyleSelector/bodyStyleSelector';
import CarListing from '../CarListing';
import WhyChooseUs from '../WhyChooseUs';
import TestimonialSlider from '../TestimonialSlider';
import VideoSection from '../VideoSection';
import AutoLoanCalculator from '../AutoLoanCalculator';
import Navbar from '@/components/Navbar';
// import Navbar from '@/components/Navbar3/navbar';

const homePage = () => {
  return (
    <>
      <Navbar />
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
