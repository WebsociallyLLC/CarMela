'use client';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import TestimonialCard from '@/components/TestimonialCard';
const testimonials = [
  {
    id: 1,
    quote:
      '"Amazing design, easy to customize and a design quality superlative account on its cloud platform for the optimized performance. And we didn’t on our original designs."',
    name: 'Leslie Alexander',
    company: 'Facebook',
    imageUrl: '/assets/team.svg',
  },
  {
    id: 2,
    quote:
      '"Amazing design, easy to customize and a design quality superlative account on its cloud platform for the optimized performance. And we didn’t on our original designs."',
    name: 'John Doe',
    company: 'Google',
    imageUrl: '/assets/team.svg',
  },
  {
    id: 3,
    quote:
      '"Amazing design, easy to customize and a design quality superlative account on its cloud platform for the optimized performance. And we did not on our original designs."',
    name: 'Jane Smith',
    company: 'Amazon',
    imageUrl: '/assets/team.svg',
  },
];
const TestimonialSlider: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
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
    prevArrow: (
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 text-gray-800 bg-white rounded-full w-10 h-10 flex justify-center items-center shadow-md cursor-pointer hover:bg-gray-100">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </div>
    ),
    nextArrow: (
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 text-gray-800 bg-white rounded-full w-10 h-10 flex justify-center items-center shadow-md cursor-pointer hover:bg-gray-100">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </div>
    ),
  };
  return (
    <div className="bg-gray-100 md:px-16 px-6 md:py-20 py-6">
      <div className="max-w-screen-xl mx-auto py-12">
        <div className="text-center mb-6 md:flex justify-between px-6">
          <h2 className="text-3xl font-bold text-gray-800">
            What Our Customers Say
          </h2>
          <p className="text-gray-600 mt-2">
            Rated 4.7 / 5 based on 28,370 reviews. Showing our 4 & 5-star
            reviews
          </p>
        </div>
        <Slider {...settings}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id}>
              <TestimonialCard
                quote={testimonial.quote}
                name={testimonial.name}
                company={testimonial.company}
                imageUrl={testimonial.imageUrl}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};
export default TestimonialSlider;
