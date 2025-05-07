import React, { useState } from 'react';
import Dropdown from '@/components/Inputs/Dropdown';

const SearchBar: React.FC = () => {
  const [make, setMake] = useState('Makes');
  const [model, setModel] = useState('Models');
  const [price, setPrice] = useState('price');

  const makesOptions = ['Makes', 'Make 1', 'Make 2'];
  const modelsOptions = ['Models', 'Model 1', 'Model 2'];
  const priceOptions = [
    'price',
    'Under $100',
    'Under $200',
    'Under $300',
    'Under $400',
    'Under $500',
    'Under $600',
    '$600 Above',
  ];

  return (
    <div className="md:h-20 w-full py-2 flex flex-wrap bg-white rounded-2xl shadow-lg items-center justify-between p-4 md:space-x-4 mx-auto">
      <Dropdown options={makesOptions} selected={make} onChange={setMake} />
      <Dropdown options={modelsOptions} selected={model} onChange={setModel} />

      <Dropdown options={priceOptions} selected={price} onChange={setPrice} />

      <div className="flex-1"></div>

      <div>
        <button className="h-12 px-6 bg-blue-500 rounded-full md:rounded-2xl text-white text-sm flex items-center space-x-2 hover:bg-blue-700 cursor-pointer transition">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
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
          <span className="hidden md:block">Search</span>
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
