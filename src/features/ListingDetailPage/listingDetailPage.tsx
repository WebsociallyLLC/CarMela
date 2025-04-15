'use client';
import { useParams } from 'next/navigation';
import React, { useState } from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  carAttributes,
  carData,
  dealer,
  dimensionsAndEngine,
  features,
} from './constant';
import { faCircleCheck as faCircleCheckRegular } from '@fortawesome/free-regular-svg-icons';
import Input from '@/components/Inputs/Input';
import CarCard from '@/components/CarCard';

const ListingDetailPage = () => {
  const { slug } = useParams();

  const [price, setPrice] = useState(10000);
  const [interestRate, setInterestRate] = useState(10);
  const [loanTerm, setLoanTerm] = useState(3);
  const [downPayment, setDownPayment] = useState(5000);

  const handleSelect = () => {
    console.log('Car selected!');
  };
  const sanitizedSlug = Array.isArray(slug) ? slug[0] : slug;

  const formattedSlug = sanitizedSlug?.toLowerCase().replace(/-/g, ' ').trim();

  const car = carData.find((item) => item.name.toLowerCase() === formattedSlug);

  if (!car) {
    return <p>Car not found.</p>;
  }

  return (
    <>
      <div className="listing-detail-page px-4 py-6 md:py-32 max-w-screen-xl mx-auto">
        <div className="md:flex justify-between">
          <div>
            <div className="breadcrumb text-sm text-gray-600 mb-4">
              <span>Home / </span>
              <span>Listings / </span>
              <span className="font-semibold">{car.name}</span>
            </div>

            <div className="car-info mb-6">
              <h1 className="text-4xl font-bold">{car.name}</h1>
              <p className="text-lg text-gray-600">{car.description}</p>
            </div>
          </div>

          <div className="">
            <div className="action-buttons flex items-center gap-2 mb-4">
              {/* Share */}
              <button className="flex items-center text-gray-800 hover:text-blue-600 gap-2">
                Share
                <span className="w-9 h-9 border border-[#E9E9E9] rounded-full flex justify-center items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_96_2089)">
                      <path
                        d="M11.9588 4.66H9.66216C9.51772 4.66 9.40216 4.71056 9.31549 4.81167C9.22883 4.91278 9.18549 5.02833 9.18549 5.15833C9.18549 5.28833 9.22883 5.39667 9.31549 5.48333C9.40216 5.57 9.51772 5.61333 9.66216 5.61333H11.9588C12.1033 5.61333 12.2188 5.65667 12.3055 5.74333C12.3922 5.83 12.4355 5.94556 12.4355 6.09V12.1133C12.4355 12.2289 12.3922 12.3372 12.3055 12.4383C12.2188 12.5394 12.1033 12.59 11.9588 12.59H2.68549C2.54105 12.59 2.42549 12.5394 2.33883 12.4383C2.25216 12.3372 2.20883 12.2289 2.20883 12.1133V6.09C2.20883 5.94556 2.25216 5.83 2.33883 5.74333C2.42549 5.65667 2.54105 5.61333 2.68549 5.61333H4.98216C5.12661 5.61333 5.24216 5.57 5.32883 5.48333C5.41549 5.39667 5.45883 5.28833 5.45883 5.15833C5.45883 5.02833 5.41549 4.91278 5.32883 4.81167C5.24216 4.71056 5.12661 4.66 4.98216 4.66H2.68549C2.30994 4.66 1.98494 4.79722 1.71049 5.07167C1.43605 5.34611 1.29883 5.68556 1.29883 6.09V12.1133C1.29883 12.4889 1.43605 12.8139 1.71049 13.0883C1.98494 13.3628 2.30994 13.5 2.68549 13.5H11.9588C12.3344 13.5 12.6594 13.3628 12.9338 13.0883C13.2083 12.8139 13.3455 12.4889 13.3455 12.1133V6.09C13.3455 5.68556 13.2083 5.34611 12.9338 5.07167C12.6594 4.79722 12.3344 4.66 11.9588 4.66ZM9.9655 2.97L7.66883 0.63C7.55327 0.543333 7.43772 0.5 7.32216 0.5C7.20661 0.5 7.09105 0.543333 6.97549 0.63L4.67883 2.97C4.59216 3.05667 4.54883 3.165 4.54883 3.295C4.54883 3.425 4.59216 3.53333 4.67883 3.62C4.76549 3.70667 4.87383 3.75 5.00383 3.75C5.13383 3.75 5.24216 3.70667 5.32883 3.62L6.84549 2.10333V9.77333C6.84549 9.91778 6.89605 10.0333 6.99716 10.12C7.09827 10.2067 7.20661 10.25 7.32216 10.25C7.43772 10.25 7.54605 10.2067 7.64716 10.12C7.74827 10.0333 7.79883 9.91778 7.79883 9.77333V2.10333L9.31549 3.62C9.40216 3.70667 9.5105 3.75 9.64049 3.75C9.77049 3.75 9.87883 3.69944 9.9655 3.59833C10.0522 3.49722 10.0955 3.38889 10.0955 3.27333C10.0955 3.15778 10.0522 3.05667 9.9655 2.97Z"
                        fill="#080B20"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_96_2089">
                        <rect
                          width="13"
                          height="13"
                          fill="white"
                          transform="matrix(1 0 0 -1 0.822266 13.5)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
              </button>

              <button className="flex items-center text-gray-800 hover:text-blue-600 gap-2">
                Save
                <span className="w-9 h-9 border border-[#E9E9E9] rounded-full flex justify-center items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="13"
                    height="12"
                    viewBox="0 0 13 12"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_96_2095)">
                      <path
                        d="M9.42863 12C9.18863 12 8.96197 11.9333 8.74863 11.8L6.14863 10.16C6.06863 10.1067 5.98863 10.1067 5.90863 10.16L3.30863 11.8C3.06863 11.96 2.80197 12.02 2.80863 11.98C2.2153 11.94 1.96197 11.8267 1.74863 11.64C1.48197 11.4 1.34863 11.0933 1.34863 10.72V1.28C1.34863 0.933333 1.4753 0.633333 1.72863 0.38C1.98197 0.126667 2.28197 0 2.62863 0H9.42863C9.7753 0 10.0753 0.126667 10.3286 0.38C10.582 0.633333 10.7086 0.933333 10.7086 1.28V10.72C10.7086 11.0667 10.582 11.3667 10.3286 11.62C10.0753 11.8733 9.7753 12 9.42863 12ZM6.02863 9.08C6.26863 9.08 6.4953 9.14667 6.70863 9.28L9.30863 10.92C9.3353 10.9467 9.3753 10.96 9.42863 10.96C9.48197 10.96 9.52863 10.94 9.56863 10.9C9.60863 10.86 9.62863 10.8 9.62863 10.72V1.28C9.62863 1.2 9.60863 1.14 9.56863 1.1C9.52863 1.06 9.48197 1.04 9.42863 1.04H2.62863C2.5753 1.04 2.52863 1.06 2.48863 1.1C2.44863 1.14 2.42863 1.2 2.42863 1.28V10.72C2.42863 10.8 2.46197 10.8667 2.52863 10.92C2.5953 10.9733 2.66863 10.9733 2.74863 10.92L5.34863 9.28C5.56197 9.14667 5.78863 9.08 6.02863 9.08Z"
                        fill="#080B20"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_96_2095">
                        <rect
                          width="12"
                          height="12"
                          fill="white"
                          transform="matrix(1 0 0 -1 0.0283203 12)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
              </button>

              <button className="flex items-center text-gray-800 hover:text-blue-600 gap-2">
                Compare
                <span className="w-9 h-9 border border-[#E9E9E9] rounded-full flex justify-center items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_96_2100)">
                      <path
                        d="M4.4002 5.6C4.29353 5.6 4.2002 5.56 4.1202 5.48C4.0402 5.4 4.0002 5.30667 4.0002 5.2V4C3.97353 3.84 4.03353 3.71333 4.1802 3.62C4.32686 3.52667 4.47353 3.52667 4.6202 3.62C4.76686 3.71333 4.82686 3.84 4.8002 4V5.2C4.8002 5.30667 4.7602 5.4 4.6802 5.48C4.6002 5.56 4.80686 5.6 4.4002 5.6ZM6.0002 5.6C5.89353 5.6 5.8002 5.56 5.7202 5.48C5.6402 5.4 5.6002 5.30667 5.6002 5.2V3.6C5.6002 3.49333 5.6402 3.40667 5.7202 3.34C5.8002 3.27333 5.89353 3.24 6.0002 3.24C6.10686 3.24 6.2002 3.27333 6.2802 3.34C6.3602 3.40667 6.4002 3.49333 6.4002 3.6V5.2C6.4002 5.30667 6.3602 5.4 6.2802 5.48C6.2002 5.56 6.10686 5.6 6.0002 5.6ZM7.60019 5.6C7.49353 5.6 7.4002 5.56 7.3202 5.48C7.2402 5.4 7.2002 5.30667 7.2002 5.2V2.8C7.17353 2.64 7.23353 2.51333 7.3802 2.42C7.52686 2.32667 7.67353 2.32667 7.8202 2.42C7.96686 2.51333 8.02686 2.64 8.0002 2.8V5.2C8.0002 5.30667 7.9602 5.4 7.8802 5.48C7.8002 5.56 7.70686 5.6 7.60019 5.6ZM9.2002 12H2.8002C2.34686 12 1.96686 11.8467 1.6602 11.54C1.35353 11.2333 1.2002 10.8533 1.2002 10.4V3.16C1.2002 2.86667 1.2602 2.58 1.3802 2.3C1.8002 2.02 1.6802 1.78667 1.9202 1.6L3.3202 0.48C3.66686 0.16 4.0802 0 4.5602 0H9.2002C9.65353 0 10.0335 0.153334 10.3402 0.46C10.6469 0.766667 10.8002 1.14667 10.8002 1.6V10.4C10.8002 10.8533 10.6469 11.2333 10.3402 11.54C10.0335 11.8467 9.65353 12 9.2002 12ZM4.5602 0.8C4.29353 0.8 4.05353 0.893333 3.8402 1.08L2.4402 2.24C2.14686 2.48 2.0002 2.78667 2.0002 3.16V10.4C2.0002 10.6133 2.0802 10.8 2.2402 10.96C2.4002 11.12 2.58686 11.2 2.8002 11.2H9.2002C9.41353 11.2 9.60019 11.12 9.76019 10.96C9.9202 10.8 10.0002 10.6133 10.0002 10.4V1.6C10.0002 1.38667 9.9202 1.2 9.76019 1.04C9.60019 0.88 9.41353 0.8 9.2002 0.8H4.5602ZM8.4002 9.6H3.6002C3.4402 9.62667 3.31353 9.56667 3.2202 9.42C3.12686 9.27333 3.12686 9.12667 3.2202 8.98C3.31353 8.83333 3.4402 8.77333 3.6002 8.8H8.4002C8.56019 8.77333 8.68686 8.83333 8.7802 8.98C8.87353 9.12667 8.87353 9.27333 8.7802 9.42C8.68686 9.56667 8.56019 9.62667 8.4002 9.6ZM8.4002 7.6H3.6002C3.49353 7.6 3.40686 7.56 3.3402 7.48C3.27353 7.4 3.2402 7.30667 3.2402 7.2C3.2402 7.09333 3.27353 7 3.3402 6.92C3.40686 6.84 3.49353 6.8 3.6002 6.8H8.4002C8.56019 6.77333 8.68686 6.83333 8.7802 6.98C8.87353 7.12667 8.87353 7.27333 8.7802 7.42C8.68686 7.56667 8.56019 7.62667 8.4002 7.6Z"
                        fill="#080B20"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_96_2100">
                        <rect
                          width="12"
                          height="12"
                          fill="white"
                          transform="matrix(1 0 0 -1 0 12)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
              </button>
            </div>
            <div className=" flex flex-col md:items-end">
              <span className="text-3xl font-semibold">{car.price}</span>
              <button className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="19"
                  height="19"
                  viewBox="0 0 19 19"
                  fill="none"
                >
                  <g clip-path="url(#clip0_96_2113)">
                    <path
                      d="M8.71703 18.275C8.15703 18.275 7.69703 18.095 7.33703 17.735L2.05703 12.455C1.65703 12.055 1.45703 11.585 1.45703 11.045C1.45703 10.805 1.65703 10.035 2.05703 9.63803L9.13703 2.55803C9.89703 1.79802 10.817 1.41803 11.897 1.41803H16.397C16.957 1.41803 17.427 1.61803 17.807 2.01803C18.187 2.41803 18.377 2.87803 18.377 3.39803V7.89803C18.377 8.97803 17.997 9.87802 17.237 10.595L10.097 17.735C9.73703 18.095 9.27703 18.275 8.71703 18.275ZM11.897 2.73803C11.177 2.73803 10.577 2.99803 10.097 3.51803L3.01703 10.595C2.85703 10.715 2.77703 10.865 2.77703 11.045C2.77703 11.225 2.85703 11.395 3.01703 11.555L8.23703 16.775C8.35703 16.935 8.51703 17.015 8.71703 17.015C8.91703 17.015 9.07703 16.935 9.19703 16.775L16.277 9.69803C16.797 9.21802 17.057 8.61803 17.057 7.89803V3.39803C17.057 3.23803 16.987 3.08803 16.847 2.94803C16.707 2.80803 16.557 2.73803 16.397 2.73803H11.897ZM13.577 8.13803C13.057 8.13803 12.597 7.93803 12.197 7.53803C11.797 7.13803 11.597 6.66803 11.597 6.12803C11.597 5.58803 11.797 5.12803 12.197 4.74803C12.597 4.36803 13.067 4.17803 13.607 4.17803C14.147 4.17803 14.607 4.36803 14.987 4.74803C15.367 5.12803 15.557 5.58803 15.557 6.12803C15.557 6.66803 15.367 7.13803 14.987 7.53803C14.607 7.93803 14.137 8.13803 13.577 8.13803ZM13.577 5.49803C13.417 5.49803 13.267 5.55803 13.127 5.67803C12.987 5.79803 12.917 5.94803 12.917 6.12803C12.917 6.30803 12.987 6.46802 13.127 6.60803C13.267 6.74803 13.427 6.81803 13.607 6.81803C13.787 6.81803 13.937 6.74803 14.057 6.60803C14.177 6.46802 14.237 6.30803 14.237 6.12803C14.237 5.94803 14.177 5.79803 14.057 5.67803C13.937 5.55803 13.777 5.49803 13.577 5.49803Z"
                      fill="#080B20"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_96_2113">
                      <rect
                        width="18"
                        height="18"
                        fill="white"
                        transform="matrix(1 0 0 -1 0.916992 18.875)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                Make An Offer Price
              </button>
            </div>
          </div>
        </div>

        {/* Car Image */}
        <div className="flex flex-col md:flex-row gap-2 my-5">
          <div className="w-full md:w-[57%] rounded-[8px]">
            <div className="overflow-hidden rounded-[8px]">
              <Image
                src={car.imageUrl}
                className="object-cover w-full h-[534.375px] transition-transform duration-300 ease-in-out hover:scale-110"
                alt={'Car Image'}
                width={300}
                height={200}
              />
            </div>
          </div>

          <div className="w-full md:w-[45%] grid grid-cols-2 gap-2">
            {[1, 2, 3, 4].map((imageUrl, index) => (
              <div
                key={`thumbnail-${index}`}
                className="w-full h-[263.188px] overflow-hidden rounded-[8px]"
              >
                <Image
                  src={car.imageUrl}
                  alt={`Thumbnail ${index + 1}`}
                  width={300}
                  height={200}
                  className="rounded-[8px] object-cover w-full h-[263.188px] transition-transform duration-300 ease-in-out hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="flex">
          <div className="md:w-[70%]">
            {/* Car overview section  */}
            <div className="car-overview mb-8">
              <h2 className="text-2xl font-bold mb-4">Car Overview</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {carAttributes.map((attribute, index) => (
                  <div
                    key={index}
                    className="flex items-center w-[80%] justify-between"
                  >
                    <span>
                      <FontAwesomeIcon
                        icon={attribute.icon}
                        className="h-5 w-5 mr-2"
                      />
                      <strong>{attribute.label}:</strong>
                    </span>
                    <span className="text-blue-800">{attribute.value}</span>
                  </div>
                ))}
              </div>

              <h2 className="text-2xl font-bold my-4">Description</h2>
              <p>
                Quisque imperdiet dignissim enim dictum finibus. Sed
                consectetutr convallis enim eget laoreet. Aenean vitae nisl
                mollis, porta risus vel, dapibus lectus. Etiam ac suscipit eros,
                eget maximus Quisque imperdiet dignissim enim dictum finibus.
                Sed consectetutr convallis enim eget laoreet. Aenean vitae nisl
                mollis, porta risus vel, dapibus lectus. Etiam ac suscipit eros,
                eget maximus Quisque imperdiet dignissim enim dictum finibus.
                Sed consectetutr convallis enim eget laoreet. Aenean vitae nisl
                mollis, porta risus vel, dapibus lectus. Etiam ac suscipit eros,
                eget maximus
              </p>
            </div>

            {/* Feature section  */}

            <div className="features bg-white rounded-lg my-5">
              <h2 className="text-2xl font-bold mb-6">Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Interior */}
                <div>
                  <h3 className="text-xl font-semibold mb-4">Interior</h3>
                  <ul className="list-none space-y-2">
                    {features.interior.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <FontAwesomeIcon
                          icon={faCircleCheckRegular}
                          className="h-4 w-4 text-blue-800 mr-2"
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Safety */}
                <div>
                  <h3 className="text-xl font-semibold mb-4">Safety</h3>
                  <ul className="list-none space-y-2">
                    {features.safety.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <FontAwesomeIcon
                          icon={faCircleCheckRegular}
                          className="h-4 w-4 text-blue-800 mr-2"
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Exterior */}
                <div>
                  <h3 className="text-xl font-semibold mb-4">Exterior</h3>
                  <ul className="list-none space-y-2">
                    {features.exterior.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <FontAwesomeIcon
                          icon={faCircleCheckRegular}
                          className="h-4 w-4 text-blue-800 mr-2"
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Comfort & Convenience */}
                <div>
                  <h3 className="text-xl font-semibold mb-4">
                    Comfort & Convenience
                  </h3>
                  <ul className="list-none space-y-2">
                    {features.comfortAndConvenience.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <FontAwesomeIcon
                          icon={faCircleCheckRegular}
                          className="h-4 w-4 text-blue-800 mr-2"
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            {/* Diamention Capicity  */}

            <div className="bg-white rounded-lg my-5">
              <h2 className="text-2xl font-bold mb-4">Dimensions & Capacity</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-b border-gray-300 pb-4">
                {/* Left Column */}
                <div className="space-y-2">
                  <span className="flex justify-between w-full md:w-[80%]">
                    <strong>Length:</strong>
                    <p>{dimensionsAndEngine.dimensions.length}</p>
                  </span>
                  <span className="flex justify-between w-full md:w-[80%]">
                    <strong>Height:</strong>
                    <p>{dimensionsAndEngine.dimensions.height}</p>
                  </span>
                  <span className="flex justify-between w-full md:w-[80%]">
                    <strong>Wheelbase:</strong>
                    <p>{dimensionsAndEngine.dimensions.wheelbase}</p>
                  </span>
                  <span className="flex justify-between w-full md:w-[80%]">
                    <strong>Height (including roof rails):</strong>
                    <p>{dimensionsAndEngine.dimensions.heightWithRoofRails}</p>
                  </span>
                </div>
                {/* Right Column */}
                <div className="space-y-2">
                  <span className="flex justify-between w-full md:w-[80%]">
                    <strong>Width:</strong>
                    <p>{dimensionsAndEngine.dimensions.width}</p>
                  </span>
                  <span className="flex justify-between w-full md:w-[80%]">
                    <strong>Gross Vehicle Weight:</strong>
                    <p>1580kg</p>
                  </span>
                  <span className="flex justify-between w-full md:w-[80%]">
                    <strong>Max Loading Weight:</strong>
                    <p>1200kg</p>
                  </span>
                  <span className="flex justify-between w-full md:w-[80%]">
                    <strong>Luggage Capacity (Seats Up - Litres):</strong>
                    <p>{dimensionsAndEngine.dimensions.luggageCapacityUp}</p>
                  </span>
                  <span className="flex justify-between w-full md:w-[80%]">
                    <strong>Luggage Capacity (Seats Down - Litres):</strong>
                    <p>{dimensionsAndEngine.dimensions.luggageCapacityDown}</p>
                  </span>
                </div>
              </div>
            </div>

            {/* Engine and Transmission  */}

            <div className="bg-white rounded-lg my-5">
              <h2 className="text-2xl font-bold mb-4">
                Engine and Transmission
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-b border-gray-300 pb-4">
                {/* Left Column */}
                <div className="space-y-2">
                  <span className="flex justify-between w-full md:w-[80%]">
                    <strong>Fuel Tank Capacity (Litres):</strong>
                    <p>
                      {
                        dimensionsAndEngine.engineAndTransmission
                          .fuelTankCapacity
                      }
                    </p>
                  </span>
                  <span className="flex justify-between w-full md:w-[80%]">
                    <strong>Max. Towing Weight - Braked (kg):</strong>
                    <p>
                      {
                        dimensionsAndEngine.engineAndTransmission
                          .maxTowingWeightBraked
                      }
                    </p>
                  </span>
                  <span className="flex justify-between w-full md:w-[80%]">
                    <strong>Max. Towing Weight - Unbraked (kg):</strong>
                    <p>
                      {
                        dimensionsAndEngine.engineAndTransmission
                          .maxTowingWeightUnbraked
                      }
                    </p>
                  </span>
                </div>
                {/* Right Column */}
                <div className="space-y-2">
                  <span className="flex justify-between w-full md:w-[80%]">
                    <strong>Minimum Kerbweight (kg):</strong>
                    <p>
                      {
                        dimensionsAndEngine.engineAndTransmission
                          .minimumKerbweight
                      }
                    </p>
                  </span>
                  <span className="flex justify-between w-full md:w-[80%]">
                    <strong>Turning Circle - Kerb to Kerb(m):</strong>
                    <p>
                      {dimensionsAndEngine.engineAndTransmission.turningCircle}
                    </p>
                  </span>
                </div>
              </div>
            </div>

            {/* Location  */}

            <div className="bg-white rounded-lg w-full my-5">
              <h2 className="text-2xl font-bold mb-4">Location</h2>
              <p className="text-gray-600 mb-4">
                990 Metropolitan Ave, Brooklyn
              </p>

              <a
                href="https://www.google.com/maps?q=990+Metropolitan+Ave,+Brooklyn"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 gap-2 mb-4 flex items-center hover:text-blue-800"
              >
                <span className="">Get Direction</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 14 15"
                  fill="none"
                >
                  <path
                    d="M13.6107 0.61499H5.05509C4.84013 0.61499 4.66619 0.788933 4.66619 1.00389C4.66619 1.21885 4.84013 1.39279 5.05509 1.39279H12.6719L0.113453 13.9512C-0.0384687 14.1031 -0.0384687 14.3492 0.113453 14.5011C0.189396 14.577 0.288927 14.615 0.388422 14.615C0.487917 14.615 0.587412 14.577 0.663391 14.5011L13.2218 1.94269V9.55946C13.2218 9.77442 13.3957 9.94836 13.6107 9.94836C13.8257 9.94836 13.9996 9.77442 13.9996 9.55946V1.00389C13.9996 0.788933 13.8256 0.61499 13.6107 0.61499Z"
                    fill="#405FF2"
                  />
                </svg>
              </a>
              <div className="mb-4 w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d99370.29950629387!2d-77.01457599999999!3d38.8937545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7c6de5af6e45b%3A0xc2524522d4885d2a!2sWashington%2C%20DC%2C%20USA!5e0!3m2!1sen!2s!4v1744717225875!5m2!1sen!2s"
                  width="100%"
                  height="500"
                  loading="lazy"
                ></iframe>
              </div>
            </div>

            {/* Financing Calculator  */}

            <div className=" bg-white rounded-xl">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-start">
                Financing Calculator
              </h2>

              <div className="space-y-6">
                <div className="flex space-x-6 flex-row">
                  <Input
                    label="Price ($)"
                    value={price}
                    onChange={setPrice}
                    type="number"
                    className="border-none focus:ring-0"
                    divClassName="border border-[#D8D8D8] rounded-xl p-2"
                    labelClassName="text-xs md:text-sm text-gray-500 mb-2 ml-3"
                  />
                  <Input
                    label="Interest Rate (%)"
                    value={interestRate}
                    onChange={setInterestRate}
                    type="number"
                    className="border-none focus:ring-0"
                    divClassName="border border-[#D8D8D8] rounded-xl p-2"
                    labelClassName="text-xs md:text-sm text-gray-500 mb-2 ml-3"
                  />
                </div>

                <div className="flex space-x-6 flex-row">
                  <Input
                    label="Loan Term (years)"
                    value={loanTerm}
                    onChange={setLoanTerm}
                    type="number"
                    className="border-none focus:ring-0"
                    divClassName="border border-[#D8D8D8] rounded-xl p-2"
                    labelClassName="text-xs md:text-sm text-gray-500 mb-2 ml-3"
                  />

                  <Input
                    label="Down Payment ($)"
                    value={downPayment}
                    onChange={setDownPayment}
                    type="number"
                    className="border-none focus:ring-0"
                    divClassName="border border-[#D8D8D8] rounded-xl p-2"
                    labelClassName="text-xs md:text-sm text-gray-500 mb-2 ml-3"
                  />
                </div>

                <div className="mt-6">
                  <button className="w-full flex justify-center items-center py-3 text-white bg-blue-600 rounded-xl text-lg font-semibold hover:bg-blue-500 transition duration-300">
                    Calculate{' '}
                    <span className="ml-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                      >
                        <path
                          d="M14.5506 0.913086H5.99503C5.78007 0.913086 5.60613 1.08703 5.60613 1.30199C5.60613 1.51694 5.78007 1.69089 5.99503 1.69089H13.6118L1.05339 14.2493C0.901473 14.4012 0.901473 14.6473 1.05339 14.7992C1.12934 14.8751 1.22887 14.9131 1.32836 14.9131C1.42786 14.9131 1.52735 14.8751 1.60333 14.7992L14.1617 2.24079V9.85756C14.1617 10.0725 14.3356 10.2465 14.5506 10.2465C14.7656 10.2465 14.9395 10.0725 14.9395 9.85756V1.30199C14.9395 1.08703 14.7655 0.913086 14.5506 0.913086Z"
                          fill="white"
                        />
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="rounded-2xl border md:w-[412px] py-4 px-6 my-5">
              <img
                src={dealer.profileImageUrl}
                alt="Dealer profile"
                className="h-16 w-16 rounded-full border-2 border-blue-800 mr-4 my-3"
              />
              <div>
                <h3 className="text-xl font-semibold">{dealer.name}</h3>
                <p className="text-sm text-gray-800">{dealer.address}</p>
              </div>
              <div className="flex gap-3 items-center py-3">
                <div className=" flex items-center justify-center w-[40px] h-[40px] rounded-full bg-[#405ff21a]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="19"
                    viewBox="0 0 18 19"
                    fill="none"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M9 3.3125C6.00839 3.3125 3.5625 5.79431 3.5625 8.88163C3.5625 10.4384 4.18517 12.1625 5.20406 13.4938C6.22558 14.8287 7.57762 15.6875 9 15.6875C10.4224 15.6875 11.7744 14.8287 12.796 13.4938C13.8148 12.1625 14.4375 10.4384 14.4375 8.88163C14.4375 5.79431 11.9916 3.3125 9 3.3125ZM2.4375 8.88163C2.4375 5.19613 5.36419 2.1875 9 2.1875C12.6358 2.1875 15.5625 5.19613 15.5625 8.88163C15.5625 10.7113 14.8421 12.6714 13.6894 14.1775C12.5393 15.6803 10.8913 16.8125 9 16.8125C7.10866 16.8125 5.46071 15.6803 4.31065 14.1775C3.15797 12.6714 2.4375 10.7113 2.4375 8.88163Z"
                      fill="#405FF2"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M6.5625 8.375C6.5625 7.0288 7.65383 5.9375 9 5.9375C10.3462 5.9375 11.4375 7.0288 11.4375 8.375C11.4375 9.72117 10.3462 10.8125 9 10.8125C7.65383 10.8125 6.5625 9.72117 6.5625 8.375ZM9 7.0625C8.27513 7.0625 7.6875 7.68013 7.6875 8.375C7.6875 9.09987 8.27513 9.6875 9 9.6875C9.72487 9.6875 10.3125 9.09987 10.3125 8.375C10.3125 7.68013 9.72487 7.0625 9 7.0625Z"
                      fill="#405FF2"
                    />
                  </svg>
                </div>
                <p>Get Direction</p>
                <div className=" flex items-center justify-center w-[40px] h-[40px] rounded-full bg-[#405ff21a]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="19"
                    height="19"
                    viewBox="0 0 19 19"
                    fill="none"
                  >
                    <path
                      d="M16.6977 8.10745C16.415 8.10745 16.172 7.89523 16.1397 7.60798C15.8547 5.07598 13.8875 3.11098 11.3555 2.82973C11.0472 2.79523 10.8245 2.51773 10.859 2.20873C10.8927 1.90048 11.1695 1.67023 11.48 1.71223C14.5377 2.05123 16.9137 4.42423 17.2572 7.48198C17.2925 7.79098 17.0697 8.0692 16.7615 8.1037C16.7405 8.10595 16.7187 8.10745 16.6977 8.10745Z"
                      fill="#405FF2"
                    />
                    <path
                      d="M14.0421 8.11567C13.7781 8.11567 13.5434 7.92967 13.4909 7.66117C13.2749 6.55117 12.4191 5.69542 11.3106 5.48017C11.0054 5.42092 10.8066 5.12617 10.8659 4.82092C10.9251 4.51567 11.2274 4.31692 11.5251 4.37617C13.0859 4.67917 14.2911 5.88367 14.5949 7.44517C14.6541 7.75117 14.4554 8.04592 14.1809 8.10517C14.1141 8.11192 14.0781 8.11567 14.0421 8.11567Z"
                      fill="#405FF2"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M6.03166 12.8302C9.56644 16.3657 11.9199 17.2927 13.4064 17.2927C14.1399 17.2927 14.6634 17.067 15.0122 16.8165C15.0279 16.8075 16.6419 15.8205 16.9247 14.3265C17.0582 13.6252 16.8632 12.9315 16.3622 12.3195C14.2982 9.81374 13.2467 10.0477 12.0857 10.6125C11.3724 10.962 10.8092 11.2335 9.21844 9.64425C7.62859 8.05373 7.90285 7.4904 8.28004 6.77727C8.81554 5.61627 9.04819 4.56451 6.54166 2.49901C5.93116 2.00026 5.24191 1.80526 4.54141 1.93651C3.06916 2.21176 2.07766 3.79951 2.07766 3.79951C1.28866 4.90726 0.75316 7.55253 6.03166 12.8302ZM4.77091 3.03751C4.83691 3.02701 4.90216 3.02101 4.96666 3.02101C5.26066 3.02101 5.54416 3.13576 5.82691 3.36826C7.84814 5.03325 7.59241 5.55826 7.23841 6.285C6.70666 7.37775 6.42841 8.44424 8.42269 10.44C10.4192 12.4357 11.4864 12.1575 12.5777 11.6242L12.5795 11.6233C13.3053 11.2705 13.8301 11.0155 15.4929 13.0342C15.7772 13.3807 15.8859 13.7272 15.8244 14.0925C15.6827 14.9325 14.7062 15.6847 14.4107 15.8677C13.3524 16.6222 10.8047 16.0125 6.82666 12.0352C2.88016 8.05799 2.23966 5.51026 3.02116 4.41151C3.17716 4.15726 3.93241 3.17926 4.77091 3.03751Z"
                      fill="#405FF2"
                    />
                  </svg>
                </div>
                <p>Get Direction</p>
              </div>

              <div className="">
                <button className="w-full text-white bg-[#405FF2] h-14 rounded-xl flex justify-center my-4 items-center">
                  Message Dealer
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                  >
                    <path
                      d="M14.5887 0.5H6.03311C5.81815 0.5 5.64421 0.673943 5.64421 0.888901C5.64421 1.10386 5.81815 1.2778 6.03311 1.2778H13.6499L1.09148 13.8362C0.939559 13.9881 0.939559 14.2342 1.09148 14.3861C1.16742 14.462 1.26695 14.5 1.36645 14.5C1.46594 14.5 1.56544 14.462 1.64142 14.3861L14.1998 1.8277V9.44447C14.1998 9.65943 14.3737 9.83337 14.5887 9.83337C14.8037 9.83337 14.9776 9.65943 14.9776 9.44447V0.888901C14.9776 0.673943 14.8036 0.5 14.5887 0.5Z"
                      fill="white"
                    />
                  </svg>
                </button>
                <button className="w-full text-green-800 h-14 border border-green-800 rounded-xl flex justify-center my-4 items-center">
                  Chat Via Whatsapp
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                  >
                    <path
                      d="M13.6414 0.25H5.08585C4.87089 0.25 4.69695 0.423943 4.69695 0.638901C4.69695 0.853859 4.87089 1.0278 5.08585 1.0278H12.7026L0.144215 13.5862C-0.00770696 13.7381 -0.00770696 13.9842 0.144215 14.1361C0.220158 14.212 0.319689 14.25 0.419184 14.25C0.518679 14.25 0.618174 14.212 0.694153 14.1361L13.2525 1.5777V9.19447C13.2525 9.40943 13.4264 9.58337 13.6414 9.58337C13.8564 9.58337 14.0303 9.40943 14.0303 9.19447V0.638901C14.0303 0.423943 13.8563 0.25 13.6414 0.25Z"
                      fill="#60C961"
                    />
                  </svg>
                </button>
                <button className="w-full h-14  flex justify-center my-4 items-center">
                  View All stock at this dealer
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                  >
                    <path
                      d="M14.0018 0.219971H5.4462C5.23124 0.219971 5.0573 0.393914 5.0573 0.608872C5.0573 0.82383 5.23124 0.997773 5.4462 0.997773H13.063L0.804566 13.5562C0.352645 13.7081 0.352645 13.9542 0.804566 14.1061C0.580809 14.182 0.68004 14.22 0.779535 14.22C0.87903 14.22 0.978525 14.182 1.0545 14.1061L13.6129 1.54767V9.16444C13.6129 9.3794 13.7868 9.55334 14.0018 9.55334C14.2168 9.55334 14.3907 9.3794 14.3907 9.16444V0.608872C14.3907 0.393914 14.2167 0.219971 14.0018 0.219971Z"
                      fill="#080B20"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Related List  */}
      </div>

      <div className="bg-[#EFEFEF] pb-4 px-6 py-5 ">
        <div className="  max-w-screen-xl mx-auto">
          <h2 className="text-2xl mb-3">Related Listing</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {carData.slice(0, 4).map((car) => (
              <CarCard
                key={car.id}
                imageUrl={car.imageUrl}
                name={car.name}
                description={car.description}
                price={car.price}
                onSelect={handleSelect}
              />
            ))}
          </div>
          <div className="flex  items-center mt-4 space-x-3">
            <button className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-400 text-gray-500 bg-white hover:bg-gray-200 focus:outline-none">
              <span className="text-lg">&lt;</span>
            </button>

            <button className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-400 text-gray-500 bg-white hover:bg-gray-200 focus:outline-none">
              <span className="text-lg">&gt;</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListingDetailPage;
