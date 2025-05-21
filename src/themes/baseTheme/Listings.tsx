import React from 'react';
import dynamic from 'next/dynamic';
import { DealerConfig } from '@/config/dealerConfig';

const Listing = dynamic<{ config: DealerConfig }>(
  () => import('@/pages/VehicleListing'),
);

export default function Home({ config }: { config: DealerConfig }) {
  return <Listing config={config} />;
}
