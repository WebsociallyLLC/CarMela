'use client';
import Input from '@/components/Inputs/Input';
import React, { useState } from 'react';

const AutoLoanCalculator: React.FC = () => {
  const [price, setPrice] = useState(10000);
  const [interestRate, setInterestRate] = useState(10);
  const [loanTerm, setLoanTerm] = useState(3);
  const [downPayment, setDownPayment] = useState(5000);

  const calculateMonthlyPayment = () => {
    const principal = price - downPayment;
    const monthlyInterestRate = interestRate / 100 / 12;
    const numberOfPayments = loanTerm * 12;
    const monthlyPayment =
      (principal * monthlyInterestRate) /
      (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));
    return monthlyPayment.toFixed(2);
  };

  return (
    <div
      className="relative bg-cover bg-center py-12 px-6 shadow-xl"
      style={{
        backgroundImage: `url('/assets/backgroundCalculator.svg')`,
      }}
    >
      <div className="max-w-screen-xl mx-auto z-10 ">
        <div className="lg:max-w-xl lg:ml-0 bg-white p-8 rounded-xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Auto Loan Calculator
          </h2>
          <p className="text-lg text-gray-700 mb-6 text-center">
            Use this car payment calculator to estimate monthly payments on your
            next new or used auto loan.
          </p>

          <div className="space-y-6">
            <div className="flex space-x-6 flex-row">
              <Input
                label="Price ($)"
                value={price}
                onChange={setPrice}
                type="number"
                className="border-none focus:ring-0"
                divClassName="border border-[#D8D8D8] rounded-xl p-2"
                labelClassName="text-xs md:text-sm text-gray-500 mb-2 ml-3"
              />
              <Input
                label="Interest Rate (%)"
                value={interestRate}
                onChange={setInterestRate}
                type="number"
                className="border-none focus:ring-0"
                divClassName="border border-[#D8D8D8] rounded-xl p-2"
                labelClassName="text-xs md:text-sm text-gray-500 mb-2 ml-3"
              />
            </div>

            <div className="flex space-x-6 flex-row">
              <Input
                label="Loan Term (years)"
                value={loanTerm}
                onChange={setLoanTerm}
                type="number"
                className="border-none focus:ring-0"
                divClassName="border border-[#D8D8D8] rounded-xl p-2"
                labelClassName="text-xs md:text-sm text-gray-500 mb-2 ml-3"
              />

              <Input
                label="Down Payment ($)"
                value={downPayment}
                onChange={setDownPayment}
                type="number"
                className="border-none focus:ring-0"
                divClassName="border border-[#D8D8D8] rounded-xl p-2"
                labelClassName="text-xs md:text-sm text-gray-500 mb-2 ml-3"
              />
            </div>

            <div className="mt-6">
              <button
                onClick={() =>
                  alert(
                    `Your estimated monthly payment is $${calculateMonthlyPayment()}`,
                  )
                }
                className="w-full flex justify-center items-center py-3 text-white bg-blue-600 rounded-lg text-lg font-semibold hover:bg-blue-500 transition duration-300"
              >
                Calculate{' '}
                <span className="ml-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                  >
                    <path
                      d="M14.5506 0.913086H5.99503C5.78007 0.913086 5.60613 1.08703 5.60613 1.30199C5.60613 1.51694 5.78007 1.69089 5.99503 1.69089H13.6118L1.05339 14.2493C0.901473 14.4012 0.901473 14.6473 1.05339 14.7992C1.12934 14.8751 1.22887 14.9131 1.32836 14.9131C1.42786 14.9131 1.52735 14.8751 1.60333 14.7992L14.1617 2.24079V9.85756C14.1617 10.0725 14.3356 10.2465 14.5506 10.2465C14.7656 10.2465 14.9395 10.0725 14.9395 9.85756V1.30199C14.9395 1.08703 14.7655 0.913086 14.5506 0.913086Z"
                      fill="white"
                    />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AutoLoanCalculator;
