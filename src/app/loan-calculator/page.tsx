import React from 'react';
import LoanCalculator from '@/components/sections/LoanCalculator/LoanCalculatorV1';
import PageHeader from '@/components/sections/PageHeader/PageHeaderV1';

const LoanCalculatorPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <PageHeader 
        title="Auto Loan Calculator"
        description="Use this car payment calculator to estimate monthly payments on your next new or used auto loan."
        backgroundImage="/assets/about-hero.svg"
      />
      <div className="bg-gray-50 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <LoanCalculator />
        </div>
      </div>
    </div>
  );
};

export default LoanCalculatorPage; 