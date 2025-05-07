'use client';
import CarCard from '@/components/CarCard';
import Link from 'next/link';
import React, { useState } from 'react';

const carData = [
  {
    id: 1,
    name: 'Toyota Camry New',
    description: '3.5 D5 PowerPulse Momentum 5dr AWD',
    price: '$40,000',
    imageUrl: '/assets/cardPic.svg',
  },
  {
    id: 2,
    name: 'Honda Accord',
    description: '2.0 Turbocharged Sedan',
    price: '$30,000',
    imageUrl: '/assets/cardPic.svg',
  },
  {
    id: 3,
    name: 'BMW M4',
    description: 'Sports Coupe with Luxury',
    price: '$80,000',
    imageUrl: '/assets/cardPic.svg',
  },
  {
    id: 4,
    name: 'Audi A6',
    description: 'Luxury Sedan with advanced features',
    price: '$50,000',
    imageUrl: '/assets/cardPic.svg',
  },
];

const CarListing: React.FC = () => {
  const handleSelect = () => {
    console.log('Car selected!');
  };
  return (
    <div className="py-12 px-6 bg-[#EFEFEF]">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex justify-between pb-3">
          <span className="text-2xl">Recently Added</span>
          <Link
            href="/listings"
            className="flex items-center gap-2 text-black hover:text-blue-800"
          >
            <span>View All</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="13"
              height="13"
              viewBox="0 0 14 15"
              fill="none"
            >
              <path
                d="M13.6107 0.209961H5.05509C4.84013 0.209961 4.66619 0.383904 4.66619 0.598862C4.66619 0.81382 4.84013 0.987763 5.05509 0.987763H12.6719L0.113453 13.5462C-0.0384687 13.6981 -0.0384687 13.9442 0.113453 14.0961C0.189396 14.172 0.288927 14.21 0.388422 14.21C0.487917 14.21 0.587412 14.172 0.663391 14.0961L13.2218 1.53766V9.15443C13.2218 9.36939 13.3957 9.54333 13.6107 9.54333C13.8257 9.54333 13.9996 9.36939 13.9996 9.15443V0.598862C13.9996 0.383904 13.8256 0.209961 13.6107 0.209961Z"
                fill="#050B20"
              />
            </svg>
          </Link>
        </div>

        {/* Car Listings Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
          {carData.map((car) => (
            <CarCard
              key={car.id}
              imageUrl={car.imageUrl}
              name={car.name}
              description={car.description}
              price={car.price}
              onSelect={handleSelect}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarListing;
