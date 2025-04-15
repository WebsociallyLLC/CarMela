import FooterSection from '@/components/FooterSection';
import SocialIcons from '@/components/SocialIcons';
import Link from 'next/link';
import React from 'react';

const Footer: React.FC = () => {
  return (
    <div className="bg-[#050B20] text-white py-16 px-6">
      <div className="max-w-screen-xl mx-auto space-y-10">
        <div className="flex flex-col items-center justify-between sm:flex-row sm:space-x-8">
          <div className="text-center sm:text-left">
            <h2 className="text-3xl font-bold">FASTCARDEALS</h2>
            <p className="text-lg mt-2">
              Receive pricing updates, shopping tips & more!
            </p>
          </div>

          <div className="mt-6 sm:mt-0 sm:flex items-center relative  rounded-full w-[300px] md:w-[400px]">
            <input
              type="email"
              placeholder="Your email address"
              className="py-2 text-white bg-[#252B3D] w-full md:h-14 focus:outline-none rounded-full pl-4"
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 py-2 px-6 bg-blue-600 rounded-full hover:bg-blue-500 transition duration-300">
              Sign Up
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-12">
          <FooterSection
            title="Company"
            links={[
              'About Us',
              'Blog',
              'Services',
              'FAQs',
              'Terms',
              'Contact Us',
            ]}
          />
          <FooterSection
            title="Quick Links"
            links={['Get in Touch', 'Help center', 'Live chat', 'How it works']}
          />
          <FooterSection
            title="Our Brands"
            links={[
              'Toyota',
              'Porsche',
              'Audi',
              'BMW',
              'Ford',
              'Nissan',
              'Peugeot',
              'Volkswagen',
            ]}
          />
          <FooterSection
            title="Vehicles Type"
            links={[
              'Sedan',
              'Hatchback',
              'SUV',
              'Hybrid',
              'Electric',
              'Coupe',
              'Truck',
              'Convertible',
            ]}
          />
          <div>
            <h3 className="font-bold text-lg mb-4">Connect With Us</h3>
            <SocialIcons />
          </div>
        </div>

        <div className="md:flex justify-between mt-10 text-sm">
          <p>© 2025 template.com. All rights reserved.</p>
          <div className="space-x-4">
            <Link href="#" className="text-blue-400 hover:underline">
              Terms & Conditions
            </Link>
            <Link href="#" className="text-blue-400 hover:underline">
              Privacy Notice
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
