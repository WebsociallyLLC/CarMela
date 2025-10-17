import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Vehicle Listings | Carmela',
  description:
    'Browse the latest vehicle inventory at Carmela. Find quality used cars, SUVs, and luxury vehicles, all inspected and ready for you. Discover your next car today!',
  keywords: [
    'Carmela',
    'vehicle listings',
    'used cars',
    'car inventory',
    'SUVs',
    'luxury vehicles',
    'pre-owned vehicles',
    'car dealership',
    'Minnesota car dealer',
    'auto sales',
    'quality vehicles',
    'trusted dealership',
    'car experts',
    'car buying',
    'customer satisfaction',
  ],
  alternates: {
    canonical: 'https://carmela.com/listings',
  },
  openGraph: {
    title: 'Vehicle Listings | Carmela',
    description:
      'Explore the full inventory of quality used cars and SUVs at Carmela. Find your next vehicle with confidence.',
    url: 'https://carmela.com/listings',
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
    title: 'Vehicle Listings | Carmela',
    description:
      'Browse the latest inventory of used cars and SUVs at Carmela. Quality, reliability, and customer satisfaction guaranteed.',
    images: ['/assets/carmela-logo.png'],
  },
};

import { Suspense } from 'react';
import VehicleListing from '@/commonPages/VehicleListing/vehicleListing';

export default function ListingsPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <VehicleListing />
    </Suspense>
  );
}
