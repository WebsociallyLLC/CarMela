import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Get Pre-Approved | Carmela',
  description:
    'Get pre-approved for car financing at Carmela. Start your application online and enjoy a seamless car buying experience with our expert team.',
  keywords: [
    'Carmela',
    'get pre-approved',
    'car financing',
    'auto loan',
    'finance application',
    'car dealership',
    'pre-approval',
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
    canonical: 'https://carmela.com/get-pre-approved',
  },
  openGraph: {
    title: 'Get Pre-Approved | Carmela',
    description:
      'Get pre-approved for car financing at Carmela. Start your application online and enjoy a seamless car buying experience with our expert team.',
    url: 'https://carmela.com/get-pre-approved',
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
    title: 'Get Pre-Approved | Carmela',
    description:
      'Get pre-approved for car financing at Carmela. Start your application online and enjoy a seamless car buying experience with our expert team.',
    images: ['/assets/carmela-logo.png'],
  },
};

import QualifiedForm from '@/commonPages/qualified-form';

export default QualifiedForm;
