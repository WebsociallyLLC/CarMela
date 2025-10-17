import React from 'react';
import { Metadata } from 'next';
import { CARS_DATA } from '@/utils/data';
import ListingDetailPageV2 from '@/commonPages/ListingDetailPage/listingDetailPageV2';

// Correctly typed generateMetadata
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const car = CARS_DATA.find((c) => c.slug === slug);
  if (!car) {
    return {
      title: 'Car Not Found | Carmela',
      description:
        'Sorry, this car listing could not be found at Carmela.',
      keywords: ['Carmela', 'car not found', 'car dealer'],
    };
  }

  return {
    title: `${car.name} for Sale | Carmela`,
    description: `${car.year} ${car.make} ${car.model} - ${car.description} Available now at Carmela. Contact us for pricing, details, and a test drive!`,
    keywords: [
      'Carmela',
      car.make,
      car.model,
      car.year.toString(),
      car.name,
      'used cars',
      'car dealership',
      car.body,
      car.fuelType,
      car.color,
      car.transmission || '',
      car.driveType,
    ],
  };
}

// Correctly typed Page Component
const ListingsDetailPage = () => {
  return <ListingDetailPageV2 />;
};

export default ListingsDetailPage;
