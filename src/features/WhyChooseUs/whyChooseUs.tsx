import React from 'react';

const features = [
  {
    id: 1,
    icon: '/assets/f1-white.svg',
    title: 'Special Financing Offers',
    description:
      'Our stress-free finance department that can find financial solutions to save you money.',
  },
  {
    id: 2,
    icon: '/assets/f4-white.svg',
    title: 'Expert Car Service',
    description:
      'Our stress-free finance department that can find financial solutions to save you money.',
  },
  {
    id: 3,
    icon: '/assets/f3-white.svg',
    title: 'Transparent Pricing',
    description:
      'Our stress-free finance department that can find financial solutions to save you money.',
  },
  {
    id: 4,
    icon: '/assets/f2-white.svg',
    title: 'Trusted Car Dealership',
    description:
      'Our stress-free finance department that can find financial solutions to save you money.',
  },
];

const WhyChooseUs: React.FC = () => {
  return (
    <div className="bg-[#405FF2] py-20">
      <div className="text-center text-white px-6 max-w-screen-xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Why Choose Us?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div key={feature.id} className="bg-transparent text-start">
              <img src={feature.icon} alt={feature.icon} />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
