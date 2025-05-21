'use client';
import React, { useState, useEffect } from 'react';
import CarCard from '@/components/shared/CarCard';
import PageHeader from '@/components/sections/PageHeader/PageHeaderV1/pageHeader';
import { CARS_DATA } from '@/utils/data';
import { useSearchParams } from 'next/navigation';
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from '@/components/UI/select';
import { X } from 'lucide-react';
import CustomDropdown from '@/components/sections/Inputs/CustomDropdown';

const makes = Array.from(new Set(CARS_DATA.map((car) => car.make)));
const prices = ['10000', '20000', '30000', '40000', '50000'];

const VehicleListing = () => {
  const searchParams = useSearchParams();
  const [sortBy, setSortBy] = useState('All');
  const [filteredCars, setFilteredCars] = useState(CARS_DATA);
  const [make, setMake] = useState(searchParams?.get('make') || '');
  const [model, setModel] = useState(searchParams?.get('model') || '');
  const [price, setPrice] = useState(searchParams?.get('price') || '');
  const [availableModels, setAvailableModels] = useState<string[]>([]);
  const SortByOptions = ['All', 'Price', 'Mileage'];

  // Update available models when make changes
  useEffect(() => {
    if (make) {
      const models = Array.from(
        new Set(
          CARS_DATA.filter((car) => car.make === make).map((car) => car.model),
        ),
      );
      setAvailableModels(models);
      if (!models.includes(model)) {
        setModel('');
      }
    } else {
      setAvailableModels([]);
      setModel('');
    }
  }, [make]);

  // Update query params when filters change
  useEffect(() => {
    const queryParams = new URLSearchParams();
    if (make) queryParams.append('make', make);
    if (model) queryParams.append('model', model);
    if (price) queryParams.append('price', price);
    window.history.replaceState(
      null,
      '',
      `/listings?${queryParams.toString()}`,
    );
  }, [make, model, price]);

  useEffect(() => {
    let filtered = [...CARS_DATA];
    if (make) filtered = filtered.filter((car) => car.make === make);
    if (model) filtered = filtered.filter((car) => car.model === model);
    if (price) {
      const maxPrice = parseInt(price);
      filtered = filtered.filter((car) => {
        const carPrice = parseInt(car.price.replace(/[^0-9]/g, ''));
        return carPrice <= maxPrice;
      });
    }
    if (sortBy === 'Price') {
      filtered.sort((a, b) => {
        const priceA = parseInt(a.price.replace(/[^0-9]/g, ''));
        const priceB = parseInt(b.price.replace(/[^0-9]/g, ''));
        return priceA - priceB;
      });
    } else if (sortBy === 'Mileage') {
      filtered.sort((a, b) => {
        const mileageA = parseInt(a.mileage.replace(/[^0-9]/g, ''));
        const mileageB = parseInt(b.mileage.replace(/[^0-9]/g, ''));
        return mileageA - mileageB;
      });
    }
    setFilteredCars(filtered);
  }, [make, model, price, sortBy]);

  const handleSelect = () => {
    console.log('Car selected!');
  };

  // Remove a filter
  const removeFilter = (type: 'make' | 'model' | 'price') => {
    if (type === 'make') setMake('');
    if (type === 'model') setModel('');
    if (type === 'price') setPrice('');
  };

  return (
    <>
      <PageHeader
        title="Our Collection"
        description="Find your dream car with our wide selection of vehicles."
        showBreadcrumbs={true}
        currentPage="Our Collection"
        backgroundImage="/assets/list-hero.svg"
      />
      <div className="py-14 px-6 max-w-[1440px] mx-auto">
        {/* FILTER CONTROLS */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
            <Select value={make} onValueChange={setMake}>
              <SelectTrigger className="w-full md:w-44 bg-white/80 border border-gray-200 focus:ring-2 focus:ring-blue-200 rounded-xl h-12 text-gray-900 truncate">
                <SelectValue
                  placeholder="Any Make"
                  className="truncate text-gray-900"
                />
              </SelectTrigger>
              <SelectContent>
                {makes.map((opt) => (
                  <SelectItem key={opt} value={opt}>
                    {opt}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={model} onValueChange={setModel} disabled={!make}>
              <SelectTrigger className="w-full md:w-44 bg-white/80 border border-gray-200 focus:ring-2 focus:ring-blue-200 rounded-xl h-12 text-gray-900 truncate">
                <SelectValue
                  placeholder={make ? 'Any Model' : 'Select Make First'}
                  className="truncate text-gray-900"
                />
              </SelectTrigger>
              <SelectContent>
                {availableModels.map((opt) => (
                  <SelectItem key={opt} value={opt}>
                    {opt}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={price} onValueChange={setPrice}>
              <SelectTrigger className="w-full md:w-44 bg-white/80 border border-gray-200 focus:ring-2 focus:ring-blue-200 rounded-xl h-12 text-gray-900 truncate">
                <SelectValue
                  placeholder="All Prices"
                  className="truncate text-gray-900"
                />
              </SelectTrigger>
              <SelectContent>
                {prices.map((opt) => (
                  <SelectItem key={opt} value={opt}>
                    ${opt}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <span className="flex items-center space-x-4">
            <span className="text-sm text-gray-500">Sort by</span>
            <div className="relative inline-block text-gray-700 min-w-[130px]">
              <CustomDropdown
                options={SortByOptions}
                value={sortBy}
                onChange={setSortBy}
                label={undefined}
                placeholder="All"
              />
            </div>
          </span>
        </div>
        {/* FILTER TAGS */}
        {(make || model || price) && (
          <div className="flex flex-wrap gap-2 mb-6">
            {make && (
              <span className="flex items-center bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                {make}
                <button className="ml-2" onClick={() => removeFilter('make')}>
                  <X size={16} />
                </button>
              </span>
            )}
            {model && (
              <span className="flex items-center bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                {model}
                <button className="ml-2" onClick={() => removeFilter('model')}>
                  <X size={16} />
                </button>
              </span>
            )}
            {price && (
              <span className="flex items-center bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                Up to ${price}
                <button className="ml-2" onClick={() => removeFilter('price')}>
                  <X size={16} />
                </button>
              </span>
            )}
          </div>
        )}
        <div className="flex justify-between items-center mt-4">
          <span className="flex items-center">
            Showing {filteredCars.length} of {CARS_DATA.length} results
          </span>
        </div>
        {filteredCars.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20">
            <svg
              width="64"
              height="64"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="text-gray-300 mb-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 17v-2a4 4 0 018 0v2m-6 4h6a2 2 0 002-2v-5a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-2.414-2.414A2 2 0 0012.586 7H7a2 2 0 00-2 2v7a2 2 0 002 2h2"
              />
            </svg>
            <p className="text-lg text-gray-500 mb-4">
              No cars found matching your filters.
            </p>
            <button
              className="px-6 py-2 bg-[#FF0000] text-white rounded-full font-semibold shadow hover:bg-red-600 transition"
              onClick={() => {
                setMake('');
                setModel('');
                setPrice('');
              }}
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
            {filteredCars.map((car) => (
              <CarCard
                key={car.id}
                images={car.images}
                name={car.name}
                mileage={car.mileage}
                price={car.price}
                fuel={car.fuelType}
                transmission={car.transmission}
                onSelect={handleSelect}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default VehicleListing;
