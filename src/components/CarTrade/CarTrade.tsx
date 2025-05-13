'use client';
import React from 'react';
import { Figtree } from 'next/font/google';
import { FaCheck } from 'react-icons/fa';
import Link from 'next/link';

const figtree = Figtree({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-figtree',
});

const financeFeatures = [
  'Quick pre-approval with decisions in minutes',
  'Competitive interest rates tailored to your credit profile',
  'Flexible payment terms from 24 to 84 months',
];

const FinanceApplication: React.FC = () => {
  return (
    <section
      className={`${figtree.className} bg-black text-white py-12 px-8 md:px-20`}
    >
      <div className="container max-w-[1440px] mx-auto flex flex-col md:flex-row items-center md:justify-between md:gap-16">
        <div className="relative md:w-[60%] w-full md:h-auto">
          <video
            className="w-full h-[400px] object-cover rounded-md"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/assets/carTrade.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="md:w-[40%] w-full space-y-6 mt-6 md:mt-0">
          <h2 className="text-[32px] sm:text-4xl font-bold leading-tight">
            Apply For Auto Financing <br className="hidden sm:block" />
            Get Approved Today
          </h2>
          <p className="text-[#fff] font-[400] text-[15px]">
            We offer hassle-free financing options with competitive rates to
            help you <br />
            drive home in your dream car, <br /> regardless of your credit
            history.
          </p>
          <ul className="space-y-3 text-gray-300">
            {financeFeatures.map((featureText, index) => (
              <li key={index} className="flex items-center gap-2">
                <span className="text-white px-2 py-2 rounded-full bg-[#121212] text-xl hover:bg-[#FF0000] transition-colors duration-200">
                  <FaCheck size={14} />
                </span>
                <span className="font-[500] text-[15px]">{featureText}</span>
              </li>
            ))}
          </ul>
          <Link href="/credit">
            <button className="mt-4 inline-block bg-[#FF0000] hover:bg-[#cc0000] text-white font-medium px-6 py-3 rounded-[12px] transition duration-200 flex items-center gap-2">
              Apply For Credit
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
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FinanceApplication;
