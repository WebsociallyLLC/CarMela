'use client';
import CarCard from '@/components/CarCard';
import Dropdown from '@/components/Inputs/Dropdown';
import React, { useState } from 'react';
import { carData } from './constant';

const VehicleListing = () => {
  const [sortBy, SetSortBy] = useState('All');
  const SortByOptions = ['All', 'Price', 'Mileage'];

  const handleSelect = () => {
    console.log('Car selected!');
  };

  return (
    <div className="py-32 px-6 max-w-screen-xl mx-auto">
      <div className="">
        <p className="">
          <span className="text-blue-500">Home</span> / listing
        </p>
        <p className="text-2xl">Listing</p>
      </div>
      <div className="flex justify-between">
        <span className="flex items-center">Showing 1 – 12 of 15 results</span>
        <span className="flex items-center">
          Sort by{' '}
          <Dropdown
            options={SortByOptions}
            selected={sortBy}
            onChange={SetSortBy}
          />
        </span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
  );
};

export default VehicleListing;
