import React from 'react';
import { DealerConfig } from '@/config/dealerConfig';
import { loadSection, loadShared } from '@/utils/sectionLoader';

export default function Home({ config }: { config: DealerConfig }) {
  // Dynamically load the right section versions
  const Hero = loadSection('Hero', 'HeroV2');
  const WhyChooseUs = loadSection('WhyChooseUs', 'WhyChooseUsV1');
  const Testimonials = loadSection('Testimonials', 'TestimonialV1');
  const FeaturedProducts = loadShared('FeaturedProducts');
  const CarListing = loadShared('CarListing');
  const ContactUs = loadSection('ContactUs', 'ContactUsV1');
  const CarTrade = loadSection(
    'FinanceApplicationSection',
    'FinanceApplicationSection1',
  );
  const CarFind = loadShared('CarFindSection');

  return (
    <>
      <Hero />
      {/* <BodyStyleSelector /> */}

      <CarListing />
      <WhyChooseUs />
      <FeaturedProducts />

      <ContactUs />
      <Testimonials />
      <CarTrade />
      <CarFind />
      {/* Add more sections as needed */}
    </>
  );
}
