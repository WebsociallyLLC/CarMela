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
      className={`${dmSans.className} relative w-full h-[80vh] md:h-[70vh] flex items-center justify-center min-w-full max-w-screen-xl mx-auto bg-black`}
    >
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/carFind.svg"
          alt="Luxury Car"
          fill
          quality={100}
          priority
          className="w-full h-full object-contain"
        />
      </div>
      <div className="absolute inset-0 bg-black/20 z-10" />
      <div className="relative z-20 px-4 text-white w-full text-start max-w-2xl md:-ms-[470px]">
        <h1 className="md:text-[60px] text-[50px] sm:text-4xl md:text-5xl font-[500] leading-tight">
          We Make Finding The <br /> Right Car Simple
        </h1>
        <button className="mt-6 px-8 py-4 bg-black/70 border border-white text-white font-medium rounded-[12px] transition">
          Find Out More &rarr;
        </button>
      </div>
    </section>
  );
};

export default CarFind;
