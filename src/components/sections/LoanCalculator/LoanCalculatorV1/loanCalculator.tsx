'use client';
import Input from '@/components/sections/Inputs/Input';
import React, { useState } from 'react';

const LoanCalculator: React.FC = () => {
  const [price, setPrice] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [loanTerm, setLoanTerm] = useState('');
  const [downPayment, setDownPayment] = useState('');
  const [monthlyPayment, setMonthlyPayment] = useState<string | null>(null);
  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});

  const calculateMonthlyPayment = () => {
    const principal = Number(price) - Number(downPayment);
    const monthlyInterestRate = Number(interestRate) / 100 / 12;
    const numberOfPayments = Number(loanTerm) * 12;
    const monthlyPayment =
      (principal * monthlyInterestRate) /
      (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));
    return monthlyPayment.toFixed(2);
  };

  const validateForm = () => {
    const errors: { [key: string]: string } = {};
    if (!price) errors.price = 'Price is required';
    else if (isNaN(Number(price)) || Number(price) <= 0) errors.price = 'Please enter a valid price';
    if (!interestRate) errors.interestRate = 'Interest rate is required';
    else if (isNaN(Number(interestRate)) || Number(interestRate) < 0) errors.interestRate = 'Please enter a valid interest rate';
    if (!loanTerm) errors.loanTerm = 'Loan term is required';
    else if (isNaN(Number(loanTerm)) || Number(loanTerm) <= 0) errors.loanTerm = 'Please enter a valid loan term';
    if (!downPayment && downPayment !== '0') errors.downPayment = 'Down payment is required';
    else if (isNaN(Number(downPayment)) || Number(downPayment) < 0) errors.downPayment = 'Please enter a valid down payment';
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  return (
    <div className="w-full max-w-2xl min-h-[520px] mx-auto bg-white p-4 md:p-12 rounded-2xl shadow-2xl flex flex-col justify-center">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center whitespace-nowrap">
        Auto Loan Calculator
      </h2>
      <p className="text-lg text-gray-700 mb-8 text-center">
        Use this car payment calculator to estimate monthly payments on your
        next new or used auto loan.
      </p>
      
      {/* Responsive grid layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <div className="w-full">
          <Input
            label="Price ($)"
            value={price}
            onChange={(val) => setPrice(String(val))}
            type="text"
            className="w-full border-none focus:ring-0"
            divClassName="w-full border border-[#D8D8D8] rounded-xl p-1 md:p-2"
            labelClassName="text-xs md:text-sm text-gray-500 mb-2 ml-3"
            error={formErrors.price}
            placeholder="Enter car price"
          />
        </div>
        <div className="w-full">
          <Input
            label="Interest Rate (%)"
            value={interestRate}
            onChange={(val) => setInterestRate(String(val))}
            type="text"
            className="w-full border-none focus:ring-0"
            divClassName="w-full border border-[#D8D8D8] rounded-xl p-1 md:p-2"
            labelClassName="text-xs md:text-sm text-gray-500 mb-2 ml-3"
            error={formErrors.interestRate}
            placeholder="e.g. 7.5"
          />
        </div>
        <div className="w-full">
          <Input
            label="Loan Term (years)"
            value={loanTerm}
            onChange={(val) => setLoanTerm(String(val))}
            type="text"
            className="w-full border-none focus:ring-0"
            divClassName="w-full border border-[#D8D8D8] rounded-xl p-1 md:p-2"
            labelClassName="text-xs md:text-sm text-gray-500 mb-2 ml-3"
            error={formErrors.loanTerm}
            placeholder="e.g. 5"
          />
        </div>
        <div className="w-full">
          <Input
            label="Down Payment ($)"
            value={downPayment}
            onChange={(val) => setDownPayment(String(val))}
            type="text"
            className="w-full border-none focus:ring-0"
            divClassName="w-full border border-[#D8D8D8] rounded-xl p-1 md:p-2"
            labelClassName="text-xs md:text-sm text-gray-500 mb-2 ml-3"
            error={formErrors.downPayment}
            placeholder="e.g. 2000"
          />
        </div>
      </div>

      <div className="mt-8">
        <button
          onClick={() => {
            if (validateForm()) {
              setMonthlyPayment(calculateMonthlyPayment());
            } else {
              setMonthlyPayment(null);
            }
          }}
          className="w-full flex justify-center items-center py-3 text-white bg-[#EC0100] rounded-lg text-lg font-semibold hover:bg-red-600 transition duration-300 shadow-md"
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
      
      {monthlyPayment && (
        <div className="mt-8 text-center">
          <div className="text-lg font-semibold text-gray-700 mb-2">
            Monthly Payment:
          </div>
          <div className="text-3xl font-bold text-[#EC0100]">
            ${monthlyPayment}
          </div>
        </div>
      )}
    </div>
  );
};

export default LoanCalculator;
