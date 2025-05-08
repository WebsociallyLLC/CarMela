import React, { useState } from 'react';
import Dropdown from '@/components/Inputs/Dropdown';
const SearchBar: React.FC = () => {
  const [make, setMake] = useState('Makes');
  const [model, setModel] = useState('Models');
  const [prices, setPrices] = useState('Prices');
  const makesOptions = ['Any Makes', 'Make 1', 'Make 2'];
  const modelsOptions = ['Any Models', 'Model 1', 'Model 2'];
  const pricesOptions = ['All Prices', 'Price 1', 'Price 2'];
  return (
    <div className="md:h-20 md:w-[70%] w-full py-2 flex flex-col md:flex-row bg-white md:rounded-full shadow-lg items-center justify-between p-4 md:space-x-4 px-4">
      <Dropdown options={makesOptions} selected={make} onChange={setMake} />
      <Dropdown options={modelsOptions} selected={model} onChange={setModel} />
      <div className="flex flex-row justify-between items-center">
        <span className="text-sm text-[#050B20]"> Prices:</span>
        <Dropdown
          options={pricesOptions}
          selected={prices}
          onChange={setPrices}
        />
      </div>
      <div>
        <button className="h-[60px] border px-10 bg-[#FF0000] rounded-full text-white text-sm flex items-center space-x-2 hover:bg-[#FF0000] cursor-pointer transition">
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
          <span>Search Cars</span>
        </button>
      </div>
    </div>
  );
};
export default SearchBar;
