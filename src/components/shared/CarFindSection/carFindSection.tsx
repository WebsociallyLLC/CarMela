import React from 'react';
import Image from 'next/image';
import { DM_Sans } from 'next/font/google';
import Link from 'next/link';

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

const CarFindSection: React.FC = () => {
  return (
    <section
      className={`${dmSans.className} relative w-full h-[80vh] flex items-center bg-black`}
    >
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/carFind.svg"
          alt="Luxury Car"
          fill
          quality={100}
          priority
          className="object-cover w-full h-full"
        />
      </div>

      <div className="absolute inset-0 bg-black/50 z-10" />

      <div className="relative z-20 max-w-[1440px] w-full px-6 sm:px-10 mx-auto">
        <div className="text-white max-w-xl">
          <h1 className="md:text-5xl text-[28px] sm:text-4xl font-bold leading-tight mb-6 text-left">
            We Make Finding
            <br />
            The Right Car very Simple
          </h1>
          <div className="text-left">
            <Link href="/listings">
              <button className="inline-flex items-center gap-2 px-6 py-3 border border-white text-white rounded-lg hover:bg-white hover:text-black transition-all duration-300">
                See Our Inventory
                <span className="text-xl">↗</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarFindSection;
