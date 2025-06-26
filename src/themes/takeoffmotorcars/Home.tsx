import React from 'react';

import TestimonialV1 from '@/components/sections/Testimonials/TestimonialV1';
import WhyChooseUs from '@/components/sections/WhyChooseUs/WhyChooseUsV2';
import CarTrade from '@/components/sections/FinanceApplicationSection/FinanceApplicationSection1';
import FeaturedProducts from '@/components/sections/FeaturedProducts/V1';
import ContactUs from '@/components/sections/ContactUs/ContactUsV1';
import CarFind from '@/components/shared/CarFindSection';
import HeroSection from '@/components/sections/Hero/HeroV2';
import { DealerConfig } from '@/config/dealerConfig';
import CarListing from '@/components/shared/CarListing';
import { Metadata } from 'next';

interface HomePageProps {
  config: DealerConfig;
}

export const metadata: Metadata = {
  title: 'Takeoff Motorcars | Quality Used Cars & Exceptional Service',
  description:
    "At Takeoff Motorcars, we're dedicated to providing an exceptional car buying experience. For over a decade, we've built our reputation on transparency, quality, and customer satisfaction. Our team of automotive experts is passionate about helping you find the perfect vehicle that meets your needs and exceeds your expectations. We carefully select and inspect each vehicle in our inventory to ensure it meets our high standards of quality and reliability. Whether you're looking for a family SUV, a fuel-efficient commuter, or a luxury vehicle, we're here to guide you through every step of the process, from test drives to financing and after-sales service.",
  keywords: [
    'Takeoff Motorcars',
    'used cars',
    'car dealership',
    'quality vehicles',
    'car buying',
    'customer satisfaction',
    'car experts',
    'SUVs',
    'luxury vehicles',
    'family cars',
    'car financing',
    'vehicle inspection',
    'reliable cars',
    'pre-owned vehicles',
    'auto sales',
    'Minnesota car dealer',
    'trusted dealership',
    'after-sales service',
  ],
  alternates: {
    canonical: 'https://takeoffmotorcars.com/',
  },
  openGraph: {
    title: 'Takeoff Motorcars | Quality Used Cars & Exceptional Service',
    description:
      'At Takeoff Motorcars, we offer a transparent, customer-focused car buying experience. Browse our high-quality inventory and let our team guide you to your next vehicle.',
    url: 'https://takeoffmotorcars.com/',
    siteName: 'Takeoff Motorcars',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/assets/icons/logo.png',
        width: 512,
        height: 512,
        alt: 'Takeoff Motorcars Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Takeoff Motorcars | Quality Used Cars & Exceptional Service',
    description:
      'Takeoff Motorcars delivers a transparent, high-quality car buying experience. Find your next vehicle with our expert team.',
    images: ['/assets/icons/logo.png'],
  },
};

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
