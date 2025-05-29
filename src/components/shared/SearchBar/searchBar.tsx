'use client';
import Dropdown from '@/components/sections/Inputs/Dropdown';
import React, { useEffect, useState } from 'react';
const SearchBar: React.FC = () => {
  const [make, setMake] = useState('Makes');
  const [model, setModel] = useState('Models');
  const [prices, setPrices] = useState('Prices');
  const [makesOptions, setMakesOptions] = useState<string[]>([]);
  const [modelsOptions, setModelsOptions] = useState<string[]>([]);
  const [pricesOptions, setPricesOptions] = useState<string[]>([]);
  const updateDropdownOptions = () => {
    const isMobile = window.innerWidth < 1024;
    setMakesOptions([isMobile ? 'Makes' : 'Any Makes', 'Make 1', 'Make 2']);
    setModelsOptions([
      isMobile ? 'Models' : 'Any Models',
      'Model 1',
      'Model 2',
    ]);
    setPricesOptions([
      isMobile ? 'Prices' : 'All Prices',
      'Price 1',
      'Price 2',
    ]);
    setMake(isMobile ? 'Makes' : 'Any Makes');
    setModel(isMobile ? 'Models' : 'Any Models');
    setPrices(isMobile ? 'Prices' : 'All Prices');
  };
  useEffect(() => {
    updateDropdownOptions();
    window.addEventListener('resize', updateDropdownOptions);
    return () => window.removeEventListener('resize', updateDropdownOptions);
  }, []);
  return (
    <div className="md:h-20 md:w-[70%] w-[92%] py-2 flex md:flex-row bg-white rounded-full shadow-lg items-center p-4 space-x-2 flex-wrap md:flex-nowrap">
      <Dropdown options={makesOptions} selected={make} onChange={setMake} />
      <Dropdown options={modelsOptions} selected={model} onChange={setModel} />
      <Dropdown
        options={pricesOptions}
        selected={prices}
        onChange={setPrices}
      />
      <div>
        <button className="h-[60px] border px-4 md:px-10 bg-[#FF0000] rounded-full text-white text-sm flex items-center space-x-2 hover:bg-[#FF0000] cursor-pointer transition">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 11a4 4 0 11-8 0 4 4 0 018 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 19l-4-4"
            />
          </svg>
          <span className="hidden md:inline">Search Cars</span>
        </button>
      </div>
    </div>
  );
};
export default SearchBar;
