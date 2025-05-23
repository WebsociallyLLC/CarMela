import React from 'react';

import TestimonialV1 from '@/components/sections/Testimonials/TestimonialV1';
import WhyChooseUs from '@/components/sections/WhyChooseUs/WhyChooseUsV2';
import CarTrade from '@/components/sections/FinanceApplicationSection/FinanceApplicationSection1';
import FeaturedProducts from '@/components/shared/FeaturedProducts';
import ContactUs from '@/components/sections/ContactUs/ContactUsV1';
import CarFind from '@/components/shared/CarFindSection';
import HeroSection from '@/components/sections/Hero/HeroV2';
import TestimonialV3 from '@/components/sections/Testimonials/TestimonialV3';
import { DealerConfig } from '@/config/dealerConfig';
import CarListing from '@/components/shared/CarListing';

interface HomePageProps {
  config: DealerConfig;
}

const homePage: React.FC<HomePageProps> = ({ config }) => {
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
      <TestimonialV3 />
      <CarFind />
    </>
  );
};

export default homePage;
