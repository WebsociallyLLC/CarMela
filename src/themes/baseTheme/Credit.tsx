import React from 'react';
import dynamic from 'next/dynamic';
import { DealerConfig } from '@/config/dealerConfig';

const Credit = dynamic<{ config: DealerConfig }>(
  () => import('@/commonPages/FinanceApplication'),
);

export default function Home({ config }: { config: DealerConfig }) {
  return <Credit config={config} />;
}
