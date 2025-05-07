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
    <>
      <div className="py-14 px-6 max-w-screen-xl mx-auto">
        <div>
          <p>
            <span className="text-blue-500">Home</span> / Listing v1
          </p>
          <p className="text-2xl font-bold mt-2">Listing v1</p>
        </div>
        <div className="flex justify-between items-center mt-4">
          <span className="flex items-center">
            Showing 1 – 12 of 15 results
          </span>
          <span className="flex items-center space-x-4">
            <span className="text-sm text-gray-500">Sort by</span>
            <div className="relative inline-block text-gray-700">
              <Dropdown
                options={SortByOptions}
                selected={sortBy}
                onChange={SetSortBy}
                className="md:w-44 w-20 py-2 px-5 bg-white border border-[#E9E9E9] rounded-lg text-sm font-medium text-gray-900 focus:outline-none"
              />
            </div>
          </span>
        </div>
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
    </>
  );
};

export default VehicleListing;
