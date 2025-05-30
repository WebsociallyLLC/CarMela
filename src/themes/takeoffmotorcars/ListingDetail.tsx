import React from 'react';
import dynamic from 'next/dynamic';
import { DealerConfig } from '@/config/dealerConfig';
import { notFound } from 'next/navigation';
const ListingDetail = dynamic<{ config: DealerConfig; car: any }>(
  () => import('@/commonPages/ListingDetailPage/listingDetailPage'),
);

export default function ListingDetailPage({
  config,
  car,
}: {
  config: DealerConfig;
  car: any;
}) {
  if (!car) {
    return notFound();
  }

  return <ListingDetail config={config} car={car} />;
}
