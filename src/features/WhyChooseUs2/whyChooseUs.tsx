import React from 'react';
import { DM_Sans } from 'next/font/google';
const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});
const features = [
  {
    id: 1,
    icon: '/assets/financing-offers.svg',
    title: 'Special Financing Offers',
    description:
      'Our stress-free finance department that can find financial solutions to save you money.',
  },
  {
    id: 2,
    icon: '/assets/special-offers.svg',
    title: 'Expert Car Service',
    description:
      'Our stress-free finance department that can find financial solutions to save you money.',
  },
  {
    id: 3,
    icon: '/assets/transparent-pricing.svg',
    title: 'Transparent Pricing',
    description:
      'Our stress-free finance department that can find financial solutions to save you money.',
  },
  {
    id: 4,
    icon: '/assets/trusted-dealership.svg',
    title: 'Trusted Car Dealership',
    description:
      'Our stress-free finance department that can find financial solutions to save you money.',
  },
];
const WhyChooseUs: React.FC = () => {
  return (
    <div className={`${dmSans.className} relative overflow-hidden`}>
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/assets/whychoosus.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="relative z-10 bg-black/70 py-20">
        <div className="text-center text-white px-6 max-w-screen-xl mx-auto">
          <h2 className="text-[40px] font-bold mb-6">Why Choose Us?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {features.map((feature) => (
              <div
                key={feature.id}
                className="text-start py-3 px-2 border border-black bg-black/70"
              >
                <img src={feature.icon} alt={feature.icon} />
                <h3 className="text-xl font-[500] mb-2">{feature.title}</h3>
                <p className="text-[15px] font-[400]">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default WhyChooseUs;
