'use client';
import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const bodyStyles = [
  { name: 'Sedan', imageUrl: '/assets/sedan.svg' },
  { name: 'Coupe', imageUrl: '/assets/coupe.svg' },
  { name: 'Truck', imageUrl: '/assets/truck.svg' },
  { name: 'Hatchback', imageUrl: '/assets/hat.svg' },
  //   { name: "Suv", imageUrl: "/assets/suv.svg" },
];

const BodyStyleSelector: React.FC = () => {
  const [selected, setSelected] = useState<string>('');

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerMode: true,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="text-center py-12 max-w-screen-xl px-6 mx-auto">
      <h2 className="text-2xl font-bold mb-6">Select a Body Style</h2>

      <Slider {...settings}>
        {bodyStyles.map((style) => (
          <div
            key={style.name}
            className={`body-style cursor-pointer flex justify-end flex-col items-center p-4 transition duration-300 ease-in-out ${
              selected === style.name
                ? 'border-4 border-blue-500'
                : 'border-2 border-transparent'
            } rounded-lg`}
            onClick={() => setSelected(style.name)}
          >
            <img
              src={style.imageUrl}
              alt={style.name}
              className=" h-32 object-cover rounded-lg"
            />
            <span className="mt-2 text-sm font-medium">{style.name}</span>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BodyStyleSelector;
