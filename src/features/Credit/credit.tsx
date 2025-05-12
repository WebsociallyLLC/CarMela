import React from 'react';
import FinanceForm from '@/features/Finance/';
import ListHeroSection from '@/features/ListHeroSection';

const Credit = () => {
  return (
    <>
      <ListHeroSection
        backgroundImage="/assets/about-hero.svg"
        image="/assets/icons.svg"
        className="bg-cover bg-center"
        opacity="opacity-0"
      />
      <main className="flex-1 bg-white mt-10">
        <div className="max-w-7xl mx-auto px-2 md:px-0 py-8">
          <div className="text-center mb-12">
            <h1 className="md:text-4xl text-[20px] font-bold text-gray-900 mb-4">
              Start Your Journey Toward Approved Financing
            </h1>
            <p className="md:text-xl text-[20px] text-gray-600">
              Begin your path to getting approved for financing
            </p>
          </div>

          <div className="bg-white">
            <div className="px-4 py-5 sm:p-6">
              <FinanceForm />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Credit;
