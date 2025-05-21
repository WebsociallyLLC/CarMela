import React from 'react';

const VideoSection: React.FC = () => {
  return (
    <div className="bg-white py-24 px-6">
      <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row items-center">
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
          <div className="relative pt-[56.25%]">
            <iframe
              className="absolute rounded-2xl top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/ouNRCGZMtUc?si=pLYNjbzQOAZCEmlf"
              title="YouTube video"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <div className="w-full lg:w-1/2 lg:pl-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Get A Fair Price For Your Car Sell To Us Today
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            We are committed to providing our customers with exceptional
            service, competitive pricing, and a wide range of options.
          </p>

          <ul className="space-y-4 text-gray-700 mb-6">
            <li className="flex items-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-black mr-3 p-1 bg-[#F2F4FE] rounded-full"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 12l5 5L20 7"
                />
              </svg>
              <span className="text-lg">
                We are the US largest provider, with more patrols in more places
              </span>
            </li>
            <li className="flex items-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-black mr-3 p-1 bg-[#F2F4FE] rounded-full"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 12l5 5L20 7"
                />
              </svg>
              <span className="text-lg">You get 24/7 roadside assistance</span>
            </li>
            <li className="flex items-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-black mr-3 p-1 bg-[#F2F4FE] rounded-full"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 12l5 5L20 7"
                />
              </svg>
              <span className="text-lg">
                We fix 4 out of 5 cars at the roadside
              </span>
            </li>
          </ul>

          <button className="flex items-center px-6 py-4 bg-[#405FF2] text-white font-medium text-[15px] rounded-lg shadow-md hover:bg-blue-500 transition duration-300">
            Get Started{' '}
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
  );
};

export default VideoSection;
