import React from 'react';
import { DM_Sans } from 'next/font/google';
import { features } from './constant';
const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

const WhyChooseUs3: React.FC = () => {
  return (
    <div className={`${dmSans.className}`}>
      <div className="relative z-10 py-20 md:px-[94px] px-6 bg-[#F9FBFC] md:mx-28 mx-4 rounded-3xl mb-10 mt-10 overflow-visible">
        <div className="text-center text-white max-w-[1440px] mx-auto w-full">
          <h2 className="md:text-[40px] text-[30px] text-black font-bold mb-10 mt-10">
            Why Choose Us?
          </h2>
          <div className=" md:-mx-32">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 w-full">
              {features.map((feature) => (
                <div
                  key={feature.id}
                  className="text-start py-12 px-10 bg-white rounded-2xl shadow-md"
                >
                  <div className="icon mb-6 rounded-md">{feature.icon}</div>
                  <h3 className="text-xl font-[500] mb-5 text-black">
                    {feature.title}
                  </h3>
                  <p className="text-[15px] font-[400] text-black">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default WhyChooseUs3;
