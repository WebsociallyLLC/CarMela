export const metadata = {
  title: 'TakeoffMotors Car Dealer | Best Deals on New & Used Cars',
  description:
    'TakeoffMotors - Your trusted dealer for new and used cars. Explore our wide selection, unbeatable prices, and exceptional service. Find your next car with us today!',
  keywords:
    'TakeoffMotors, car dealer, new cars, used cars, car dealership, best car deals, certified pre-owned, auto sales, finance, car trade-in',
};

import React from 'react';
import TestimonialV1 from '@/components/sections/Testimonials/TestimonialV1';
import WhyChooseUs from '@/components/sections/WhyChooseUs/WhyChooseUsV2';
import CarTrade from '@/components/sections/FinanceApplicationSection/FinanceApplicationSection1';
import FeaturedProducts from '@/components/shared/FeaturedProducts';
import ContactUs from '@/components/sections/ContactUs/ContactUsV1';
import CarFind from '@/components/shared/CarFindSection';
import HeroSection from '@/components/sections/Hero/HeroV2';
import CarListing from '@/components/shared/CarListing';

const HomePage = () => {
  return (
    <>
      <HeroSection />
      {/* <BodyStyleSelector /> */}
      <CarListing />
      <WhyChooseUs />
      <FeaturedProducts />
      <ContactUs />
      <TestimonialV1 />
      <CarTrade />
      <CarFind />
    </>
  );
};

export default HomePage;
