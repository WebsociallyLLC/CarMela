import React from 'react';
import BodyStyleSelector from '../BodyStyleSelector/bodyStyleSelector';

import TestimonialSlider from '../TestimonialSlider';
import WhyChooseUs from '../WhyChooseUs2';
import CarTrade from '@/components/CarTrade';
import CarListing from '../CarListing2';
import FeaturedProducts from '@/components/FeaturedProducts';
import ContactUs from '../ContactUs2';
import CarFind from '@/components/CarFind';
import HeroSection from '../HeroSection2';

const homePage = () => {
  return (
    <>
      <HeroSection />
      {/* <BodyStyleSelector /> */}

      <CarListing />
      <WhyChooseUs />
      <FeaturedProducts />

      <ContactUs />
      <TestimonialSlider />
      <CarTrade />
      <CarFind />
    </>
  );
};

export default homePage;
