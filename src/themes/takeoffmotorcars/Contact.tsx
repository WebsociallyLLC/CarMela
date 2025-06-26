import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | Takeoff Motorcars',
  description:
    'Contact Takeoff Motorcars for questions, test drives, or more information about our vehicles and services. Our team is here to help you with all your automotive needs.',
  keywords: [
    'Takeoff Motorcars',
    'contact',
    'car dealership',
    'customer service',
    'test drive',
    'vehicle inquiry',
    'car sales',
    'Minnesota car dealer',
    'auto sales',
    'quality vehicles',
    'trusted dealership',
    'car experts',
    'support',
    'get in touch',
  ],
  alternates: {
    canonical: 'https://takeoffmotorcars.com/contact',
  },
  openGraph: {
    title: 'Contact Us | Takeoff Motorcars',
    description:
      'Reach out to Takeoff Motorcars for any questions or to schedule a visit. Our team is ready to assist you with your car buying journey.',
    url: 'https://takeoffmotorcars.com/contact',
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
    title: 'Contact Us | Takeoff Motorcars',
    description:
      'Contact Takeoff Motorcars for expert assistance and information about our vehicles and services.',
    images: ['/assets/icons/logo.png'],
  },
};

import React from 'react';
import dynamic from 'next/dynamic';
import { DealerConfig } from '@/config/dealerConfig';

const ContactUs = dynamic<{ config: DealerConfig }>(
  () => import('@/commonPages/ContactUs/V1'),
);

export default function Home({ config }: { config: DealerConfig }) {
  return <ContactUs config={config} />;
}
