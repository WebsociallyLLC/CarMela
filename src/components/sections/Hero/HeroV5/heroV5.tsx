'use client';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { carTypes } from './constants';

const HeroV5: React.FC = () => {
  return (
    <section className="relative w-full min-h-[80vh] bg-white overflow-hidden p-0 m-0">
      <div className="max-w-[1440px] w-full mx-auto flex flex-col md:flex-row">
        <div className="relative z-10 w-full md:w-[40%] h-auto md:h-[100vh] bg-white flex flex-col justify-center px-6 py-10 md:py-0 md:ps-20 shrink-0">
          <p className="text-gray-500 text-sm md:text-base mb-4 md:mb-8">
            Find cars for sale and for rent near you
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-black leading-tight mb-6 md:mb-10">
            4,675 Vehicles <br className="hidden md:block" /> Available
          </h1>
          <div className="flex flex-col sm:flex-row gap-4 flex-wrap mb-6 md:mb-10">
            <button className="w-full sm:w-auto px-6 py-3 border border-blue-600 hover:bg-blue-800 hover:text-white rounded-lg transition">
              View Inventory →
            </button>
            <button className="w-full sm:w-auto px-6 py-3 border border-blue-600 hover:bg-blue-800 hover:text-white rounded-lg transition">
              Contact Us →
            </button>
          </div>
          <p className="text-gray-500 text-sm mb-4 md:mb-6">
            Or Browse Featured Model
          </p>
          <div className="flex gap-3 flex-wrap">
            {carTypes.map((type, idx) => (
              <div
                key={idx}
                className="group flex items-center gap-2 px-6 py-3 bg-white border border-gray-300 rounded-full shadow-sm cursor-pointer hover:bg-blue-800 hover:text-white transition"
              >
                <FontAwesomeIcon
                  icon={type.icon}
                  className="text-blue-600 group-hover:text-white"
                />
                <span className="text-sm text-gray-800 group-hover:text-white">
                  {type.title}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full md:w-[60%] h-[250px] sm:h-[350px] md:h-[95vh] rounded-bl-[50px] md:rounded-bl-[100px] clip-right shrink-0 mt-10 md:mt-0">
          <img
            src="/assets/car.png"
            alt="Hero Car"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};
export default HeroV5;
