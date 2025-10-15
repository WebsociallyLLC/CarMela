import React from 'react';
import dynamic from 'next/dynamic';
import { DealerConfig } from '@/config/dealerConfig';
import { notFound } from 'next/navigation';
import { CARS_DATA } from '@/utils/data';

const ListingDetail = dynamic<{ config: DealerConfig; car: any }>(
  () => import('@/commonPages/ListingDetailPage/listingDetailPage'),
);

export async function generateMetadata({ params }: any) {
  const { slug } = params;
  const car = CARS_DATA.find((c) => c.slug === slug);

  if (!car) {
    return {
      title: 'Vehicle Not Found | Carmela',
      description:
        'Sorry, this vehicle could not be found at Carmela.',
    };
  }

  const title = `${car.year ? car.year + ' ' : ''}${car.make} ${car.model} | Carmela`;
  const description = `Discover details, features, and pricing for this ${car.year ? car.year + ' ' : ''}${car.make} ${car.model} at Carmela. ${car.description || 'Contact us for more information or to schedule a test drive.'}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images:
        car.images && car.images.length > 0
          ? [
              {
                url: car.images[0],
                width: 1200,
                height: 630,
                alt: `${car.make} ${car.model} - Carmela`,
              },
            ]
          : [],
      type: 'article',
      locale: 'en_US',
      siteName: 'Carmela',
    },
    alternates: {
      canonical: `https://carmela.com/listings/${slug}`,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: car.images && car.images.length > 0 ? [car.images[0]] : [],
    },
  };
}

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
