import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Vehicle Listings | Takeoff Motorcars',
  description:
    'Browse the latest vehicle inventory at Takeoff Motorcars. Find quality used cars, SUVs, and luxury vehicles, all inspected and ready for you. Discover your next car today!',
  keywords: [
    'Takeoff Motorcars',
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
    canonical: 'https://takeoffmotorcars.com/listings',
  },
  openGraph: {
    title: 'Vehicle Listings | Takeoff Motorcars',
    description:
      'Explore the full inventory of quality used cars and SUVs at Takeoff Motorcars. Find your next vehicle with confidence.',
    url: 'https://takeoffmotorcars.com/listings',
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
    title: 'Vehicle Listings | Takeoff Motorcars',
    description:
      'Browse the latest inventory of used cars and SUVs at Takeoff Motorcars. Quality, reliability, and customer satisfaction guaranteed.',
    images: ['/assets/icons/logo.png'],
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
