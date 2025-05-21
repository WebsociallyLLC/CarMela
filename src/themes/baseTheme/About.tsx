import React from 'react';
import dynamic from 'next/dynamic';
import { DealerConfig } from '@/config/dealerConfig';

const AboutUs = dynamic<{ config: DealerConfig }>(
  () => import('@/pages/AboutUs'),
);

export default function Home({ config }: { config: DealerConfig }) {
  return <AboutUs config={config} />;
}
