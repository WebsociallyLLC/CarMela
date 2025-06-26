import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Credit Application | Takeoff Motorcars',
  description:
    'Apply for financing at Takeoff Motorcars. Our team is here to help you secure the best rates and make your car buying experience smooth and hassle-free. Start your credit application today!',
  keywords: [
    'Takeoff Motorcars',
    'credit application',
    'car financing',
    'auto loan',
    'finance application',
    'car dealership',
    'apply for credit',
    'car loan',
    'Minnesota car dealer',
    'auto sales',
    'quality vehicles',
    'trusted dealership',
    'car experts',
    'customer service',
    'finance center',
  ],
  alternates: {
    canonical: 'https://takeoffmotorcars.com/credit',
  },
  openGraph: {
    title: 'Credit Application | Takeoff Motorcars',
    description:
      'Apply for car financing with Takeoff Motorcars. Get pre-approved and enjoy a seamless car buying experience with our expert team.',
    url: 'https://takeoffmotorcars.com/credit',
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
    title: 'Credit Application | Takeoff Motorcars',
    description:
      'Start your credit application with Takeoff Motorcars and let our finance experts help you get the best rates.',
    images: ['/assets/icons/logo.png'],
  },
};

import React from 'react';

import Credit from '@/commonPages/FinanceApplication';

const CreditPage = () => {
  return (
    <>
      <Credit />
    </>
  );
};

export default CreditPage;
