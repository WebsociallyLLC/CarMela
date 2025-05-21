import React from 'react';
import dynamic from 'next/dynamic';
import { DealerConfig } from '@/config/dealerConfig';

const HomePage = dynamic<{ config: DealerConfig }>(
  () => import('@/commonPages/HomePage/V2'),
);

export default function Home({ config }: { config: DealerConfig }) {
  return <HomePage config={config} />;
}
