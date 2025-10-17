import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | Carmela',
  description:
    'Learn more about Carmela, our mission, values, and the team dedicated to providing an exceptional car buying experience. Discover why customers trust us for quality vehicles, transparency, and outstanding service.',
  keywords: [
    'Carmela',
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
    canonical: 'https://carmela.com/about',
  },
  openGraph: {
    title: 'About Us | Carmela',
    description:
      'Meet the team and discover the values that drive Carmela. We are committed to transparency, quality, and customer satisfaction in every car buying experience.',
    url: 'https://carmela.com/about',
    siteName: 'Carmela',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/assets/carmela-logo.png',
        width: 512,
        height: 512,
        alt: 'Carmela Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us | Carmela',
    description:
      'Learn about Carmela, our mission, and our commitment to quality and customer satisfaction.',
    images: ['/assets/carmela-logo.png'],
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
