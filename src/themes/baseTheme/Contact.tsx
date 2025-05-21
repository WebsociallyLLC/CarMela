import React from 'react';
import dynamic from 'next/dynamic';
import { DealerConfig } from '@/config/dealerConfig';

const ContactUs = dynamic<{ config: DealerConfig }>(
  () => import('@/pages/ContactUs/V1'),
);

export default function Home({ config }: { config: DealerConfig }) {
  return <ContactUs config={config} />;
}
