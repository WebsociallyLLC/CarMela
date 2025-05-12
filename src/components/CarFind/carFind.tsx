import React from 'react';
import Image from 'next/image';
import { DM_Sans } from 'next/font/google';

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

const CarFind: React.FC = () => {
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

      <div className="relative z-20 w-full max-w-screen-xl mx-auto px-6 sm:px-10 flex justify-start">
        <div className="text-white min-w-[880px] max-w-[420px]">
          <h1 className="md:text-3xl text-[20px] sm:text-4xl font-bold leading-snug mb-6">
            We Make Finding <br />
            The Right Car Simple
          </h1>
          <button className="inline-flex items-center gap-2 px-6 py-3 border border-white text-white rounded-lg hover:bg-white hover:text-black transition-all duration-300">
            Find Out More
            <span className="text-xl">↗</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CarFind;
