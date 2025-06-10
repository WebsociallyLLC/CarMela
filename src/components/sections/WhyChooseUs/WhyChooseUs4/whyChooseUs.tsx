import React from 'react';
import { DM_Sans } from 'next/font/google';
import { features } from './constant';
const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

const WhyChooseUs: React.FC = () => {
  return (
    <div className={`${dmSans.className} py-20 px-4 md:px-[76px] bg-[#fff]`}>
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-10 relative">
        <div className="z-10 rounded-3xl">
          <div>
            <h2 className="text-[28px] md:text-[40px] font-bold text-black leading-tight max-w-md">
              We’re BIG on what
              <br className="hidden md:block" />
              matters to you
            </h2>
          </div>
          <div className="mt-6 rounded-3xl overflow-hidden">
            <img
              src="/assets/carListImage.svg"
              alt="Car"
              className="w-full h-[70vh] object-cover"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-white rounded-2xl p-8 text-start hover:shadow-lg transition-shadow duration-300"
            >
              <div className="icon mb-6 p-2 rounded-md">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-black mb-3">
                {feature.title}
              </h3>
              <p className="text-[15px] text-gray-700">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default WhyChooseUs;
