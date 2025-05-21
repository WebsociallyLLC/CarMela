import React from 'react';

import TestimonialV1 from '@/components/sections/Testimonials/TestimonialV1';
import WhyChooseUs from '@/components/sections/WhyChooseUs/WhyChooseUsV2';
import CarTrade from '@/components/sections/FinanceApplicationSection/FinanceApplicationSection1';
import CarListing from '@/pages/VehicleListing/vehicleListing';
import FeaturedProducts from '@/components/shared/FeaturedProducts';
import ContactUs from '@/components/sections/ContactUs/ContactUsV1';
import CarFind from '@/components/shared/CarFindSection';
import HeroSection from '@/components/sections/Hero/HeroV2';
import { DealerConfig } from '@/config/dealerConfig';

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
      <CarFind />
    </>
  );
};

export default homePage;
