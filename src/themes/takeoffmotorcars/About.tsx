import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | Takeoff Motorcars',
  description:
    'Learn more about Takeoff Motorcars, our mission, values, and the team dedicated to providing an exceptional car buying experience. Discover why customers trust us for quality vehicles, transparency, and outstanding service.',
  keywords: [
    'Takeoff Motorcars',
    'about us',
    'car dealership',
    'our team',
    'company values',
    'customer satisfaction',
    'trusted dealership',
    'quality vehicles',
    'car experts',
    'Minnesota car dealer',
    'auto sales',
    'pre-owned vehicles',
    'car buying experience',
    'transparency',
    'reliable cars',
  ],
  alternates: {
    canonical: 'https://takeoffmotorcars.com/about',
  },
  openGraph: {
    title: 'About Us | Takeoff Motorcars',
    description:
      'Meet the team and discover the values that drive Takeoff Motorcars. We are committed to transparency, quality, and customer satisfaction in every car buying experience.',
    url: 'https://takeoffmotorcars.com/about',
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
    title: 'About Us | Takeoff Motorcars',
    description:
      'Learn about Takeoff Motorcars, our mission, and our commitment to quality and customer satisfaction.',
    images: ['/assets/icons/logo.png'],
  },
};

import React from 'react';
import dynamic from 'next/dynamic';
import { DealerConfig } from '@/config/dealerConfig';

const AboutUs = dynamic<{ config: DealerConfig }>(
  () => import('@/commonPages/AboutUs'),
);

export default function Home({ config }: { config: DealerConfig }) {
  return <AboutUs config={config} />;
}
