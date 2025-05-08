'use client';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Link from 'next/link';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

const products = [
  {
    image: '/assets/featured-product.svg',
    title: 'Toyota Camry New',
    subtitle: '3.5 D5 PowerPulse Momentum 5dr AW...',
    miles: '2500 Miles',
    fuel: 'Diesel',
    transmission: 'Manual',
    price: '$40,000',
    link: '#',
  },
  {
    image: '/assets/featured-product.svg',
    title: 'Toyota Camry New',
    subtitle: '3.5 D5 PowerPulse Momentum 5dr AW...',
    miles: '2500 Miles',
    fuel: 'Diesel',
    transmission: 'Manual',
    price: '$40,000',
    link: '#',
  },
  // ...add more products
];

function Arrow({
  className,
  style,
  onClick,
  icon,
}: {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  icon: React.ReactNode;
}) {
  return (
    <button
      className={
        'flex items-center justify-center bg-white rounded-full shadow-md w-10 h-10 border-none p-0 hover:bg-gray-100 mx-2'
      }
      style={{ ...style, zIndex: 2, position: 'static' }}
      onClick={onClick}
      type="button"
    >
      {icon}
    </button>
  );
}

const FeaturedProducts = () => {
  const sliderRef = React.useRef<Slider | null>(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false, // We'll use custom arrows below
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="bg-[#F4F4F4] md:py-24 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="md:text-2xl text-[18px] font-bold text-[#181C23]">
            Featured Products
          </h2>
          <Link
            href="/listings"
            className="flex items-center gap-2 text-black hover:text-blue-800"
          >
            <span>View All</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="13"
              height="13"
              viewBox="0 0 14 15"
              fill="none"
            >
              <path
                d="M13.6107 0.209961H5.05509C4.84013 0.209961 4.66619 0.383904 4.66619 0.598862C4.66619 0.81382 4.84013 0.987763 5.05509 0.987763H12.6719L0.113453 13.5462C-0.0384687 13.6981 -0.0384687 13.9442 0.113453 14.0961C0.189396 14.172 0.288927 14.21 0.388422 14.21C0.487917 14.21 0.587412 14.172 0.663391 14.0961L13.2218 1.53766V9.15443C13.2218 9.36939 13.3957 9.54333 13.6107 9.54333C13.8257 9.54333 13.9996 9.36939 13.9996 9.15443V0.598862C13.9996 0.383904 13.8256 0.209961 13.6107 0.209961Z"
                fill="#050B20"
              />
            </svg>
          </Link>
        </div>
        <Slider ref={sliderRef} {...settings} className="mb-8">
          {products.map((product, idx) => (
            <div key={idx} className="px-2">
              <div className="flex flex-col md:flex-row bg-white rounded-2xl border border-[#E6E6E6] shadow-md overflow-hidden h-auto md:h-[240px]">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-40 object-cover md:w-1/2 md:h-full"
                />
                <div className="p-4 md:p-6 flex flex-col justify-between w-full md:w-1/2">
                  <div>
                    <h3 className="text-xl font-bold text-[#181C23]">
                      {product.title}
                    </h3>
                    <p className="text-gray-500 text-sm mt-1">
                      {product.subtitle}
                    </p>
                  </div>
                  <div className="flex justify-between text-sm border-t pt-4 mt-4 text-[#181C23]">
                    <span className="flex flex-col items-center">
                      <img
                        src="/assets/miles-Icon.svg"
                        alt="Miles"
                        className="text-xl mb-1 w-6 h-6 object-contain"
                      />
                      {product.miles}
                    </span>
                    <span className="flex flex-col items-center">
                      <img
                        src="/assets/fuel-Icon.svg"
                        alt="Fuel"
                        className="text-xl mb-1 w-6 h-6 object-contain"
                      />
                      {product.fuel}
                    </span>
                    <span className="flex flex-col items-center">
                      <img
                        src="/assets/transmission-Icon.svg"
                        alt="Transmission"
                        className="text-xl mb-1 w-6 h-6 object-contain"
                      />
                      {product.transmission}
                    </span>
                  </div>

                  <div className="flex justify-between items-center mt-4">
                    <span className="text-lg font-bold text-[#181C23]">
                      {product.price}
                    </span>
                    <Link
                      href={product.link}
                      className="text-[#405FF2] font-medium flex items-center gap-1"
                    >
                      View Details <span className="text-base">&#8599;</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        {/* Custom Arrows below, left-aligned */}
        <div className="flex items-center mt-2">
          <Arrow
            onClick={() => sliderRef.current?.slickPrev()}
            icon={<MdKeyboardArrowLeft className="text-3xl" />}
          />
          <Arrow
            onClick={() => sliderRef.current?.slickNext()}
            icon={<MdKeyboardArrowRight className="text-3xl" />}
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
