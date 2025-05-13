import React, { useEffect, useState } from 'react';
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from '@/components/UI/select';
import { Search as SearchIcon } from 'lucide-react';
import Link from 'next/link';
import { CARS_DATA } from '@/utils/data';

// Get unique makes from CARS_DATA
const makes = Array.from(new Set(CARS_DATA.map((car) => car.make)));
const prices = ['10000', '20000', '30000', '40000', '50000'];

const SearchBar: React.FC = () => {
  const [make, setMake] = useState('');
  const [model, setModel] = useState('');
  const [price, setPrice] = useState('');
  const [isMobile, setIsMobile] = useState(false);
  const [availableModels, setAvailableModels] = useState<string[]>([]);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Update available models when make changes
  useEffect(() => {
    if (make) {
      const models = Array.from(
        new Set(
          CARS_DATA.filter((car) => car.make === make).map((car) => car.model),
        ),
      );
      setAvailableModels(models);
      // Reset model if it's not available for the new make
      if (!models.includes(model)) {
        setModel('');
      }
    } else {
      setAvailableModels([]);
      setModel('');
    }
  }, [make]);

  const handleSearch = () => {
    const queryParams = new URLSearchParams();
    if (make) queryParams.append('make', make);
    if (model) queryParams.append('model', model);
    if (price) queryParams.append('price', price);

    window.location.href = `/listings?${queryParams.toString()}`;
  };

  return (
    <>
      <form
        className={`backdrop-blur-xl bg-white/70 border border-white/40 shadow-2xl flex gap-8 md:flex-row flex-col p-4 md:p-6 ${isMobile ? 'w-[300px] max-w-md' : 'md:max-w-4xl'} mx-auto rounded-[2.5rem]`}
        style={{ minHeight: isMobile ? 0 : 90 }}
        onSubmit={(e) => {
          e.preventDefault();
          handleSearch();
        }}
      >
        <div
          className={`${isMobile ? 'flex flex-col space-y-8 w-full' : 'flex flex-row items-center justify-between space-x-6 w-full'}`}
        >
          <div className={`${isMobile ? 'w-full' : 'flex-1 min-w-[160px]'}`}>
            <Select value={make} onValueChange={setMake}>
              <SelectTrigger className="w-full bg-white/80 border border-gray-200 focus:ring-2 focus:ring-blue-200 rounded-xl h-12 text-gray-900 truncate">
                <SelectValue
                  placeholder={isMobile ? 'Select Make' : 'Any Make'}
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
          </div>

          {!isMobile && (
            <div className="h-12 w-px bg-gray-200 mx-1 rounded-full" />
          )}

          <div className={`${isMobile ? 'w-full' : 'flex-1 min-w-[160px]'}`}>
            <Select value={model} onValueChange={setModel} disabled={!make}>
              <SelectTrigger className="w-full bg-white/80 border border-gray-200 focus:ring-2 focus:ring-blue-200 rounded-xl h-12 text-gray-900 truncate">
                <SelectValue
                  placeholder={make ? 'Select Model' : 'Select Make First'}
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
          </div>

          {!isMobile && (
            <div className="h-12 w-px bg-gray-200 mx-1 rounded-full" />
          )}

          <div className={`${isMobile ? 'w-full' : 'flex-1 min-w-[160px]'}`}>
            <Select value={price} onValueChange={setPrice}>
              <SelectTrigger className="w-full bg-white/80 border border-gray-200 focus:ring-2 focus:ring-blue-200 rounded-xl h-12 text-gray-900 truncate">
                <SelectValue
                  placeholder={isMobile ? 'Select Price' : 'All Prices'}
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
        </div>

        <div
          className={`${isMobile ? 'w-full' : 'min-w-[150px]'} flex justify-center`}
        >
          <button
            type="submit"
            className={`bg-[#FF0000] hover:bg-red-600 transition shadow-lg flex items-center justify-center font-semibold text-white
              rounded-full h-14 ${isMobile ? 'w-full' : 'w-full'} text-md
            `}
            aria-label="Search Cars"
          >
            <SearchIcon className="w-6 h-6" />
            <span className="ml-2">Search</span>
          </button>
        </div>
      </form>

      <div className="w-full flex justify-center mt-6">
        <Link
          href="/listings"
          className={`${isMobile ? 'w-[90%] max-w-md' : 'w-[70%] max-w-3xl'} mx-auto`}
        >
          <button
            type="button"
            className="w-full bg-[#FF0000] hover:bg-red-600 text-white font-semibold py-4 rounded-full shadow-lg text-lg transition"
          >
            View All Collection
          </button>
        </Link>
      </div>
    </>
  );
};

export default SearchBar;
