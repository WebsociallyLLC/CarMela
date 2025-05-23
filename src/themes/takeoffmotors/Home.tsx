import React from 'react';
import dynamic from 'next/dynamic';
import { DealerConfig } from '@/config/dealerConfig';

interface HomeProps {
  config: DealerConfig;
  data?: any;
}

const Home: React.FC<HomeProps> = ({ config, data }) => {
  // Use Hadi Motors specific Hero variant
  const Hero = dynamic(() => import('@/components/sections/Hero/HeroV1'));
  return (
    <div
      className="min-h-screen"
      style={{ fontFamily: config.branding.fontFamily }}
    >
      {/* Custom Hero Section */}
      <section className="relative">
        <Hero />
      </section>

      {/* Special Offer Banner */}
      <section
        className="py-4 text-center"
        style={{ backgroundColor: config.branding.accentColor }}
      >
        <p className="text-white font-semibold">
          🎉 Special Offer: Free First Service with Any Car Purchase!
        </p>
      </section>

      {/* Custom CTA Section */}
      <section
        className="py-16"
        style={{ backgroundColor: config.branding.primaryColor }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Experience the Hadi Motors Difference
          </h2>
          <p className="text-white mb-8">
            Visit our state-of-the-art showroom in Dublin
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/inventory"
              className="inline-block bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
              style={{ color: config.branding.primaryColor }}
            >
              View Inventory
            </a>
            <a
              href="/contact"
              className="inline-block border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition"
              style={
                {
                  '--hover-color': config.branding.primaryColor,
                } as React.CSSProperties
              }
            >
              Book Appointment
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
