import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Credit Application | Carmela',
  description:
    'Apply for financing at Carmela. Our team is here to help you secure the best rates and make your car buying experience smooth and hassle-free. Start your credit application today!',
  keywords: [
    'Carmela',
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
    canonical: 'https://carmela.com/credit',
  },
  openGraph: {
    title: 'Credit Application | Carmela',
    description:
      'Apply for car financing with Carmela. Get pre-approved and enjoy a seamless car buying experience with our expert team.',
    url: 'https://carmela.com/credit',
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
    title: 'Credit Application | Carmela',
    description:
      'Start your credit application with Carmela and let our finance experts help you get the best rates.',
    images: ['/assets/carmela-logo.png'],
  },
};

import React from 'react';
import dynamic from 'next/dynamic';
import { DealerConfig } from '@/config/dealerConfig';

const Credit = dynamic<{ config: DealerConfig }>(
  () => import('@/commonPages/FinanceApplication'),
);

export default function Home({ config }: { config: DealerConfig }) {
  return <Credit config={config} />;
}
