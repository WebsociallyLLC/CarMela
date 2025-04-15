import React from 'react';

const TestimonialCard: React.FC<TestimonialProps> = ({
  quote,
  name,
  company,
  imageUrl,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm mx-auto h-60 flex flex-col">
      <div className="flex justify-between mb-4">
        <p className="text-lg font-bold">Great Work</p>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="29"
            height="18"
            viewBox="0 0 37 26"
            fill="none"
          >
            <path
              d="M9.1 25.79C6.76667 25.79 4.66667 24.8567 2.8 22.99C0.933334 21.0567 0 18.2233 0 14.49C0 10.2233 1.13333 6.75665 3.4 4.08999C5.73333 1.35666 9.03333 -0.0100098 13.3 -0.0100098C14.8333 -0.0100098 16.0333 0.0899882 16.9 0.289985V4.88999C15.9667 4.75665 14.7667 4.68999 13.3 4.68999C11.0333 4.68999 9.2 5.45665 7.8 6.98999C6.46667 8.32332 5.7 10.09 5.5 12.29C6.36667 11.2233 7.76667 10.69 9.7 10.69C11.7 10.69 13.4 11.39 14.8 12.79C16.2 14.1233 16.9 15.89 16.9 18.09C16.9 20.3567 16.1667 22.2233 14.7 23.69C13.2333 25.09 11.3667 25.79 9.1 25.79ZM29 25.79C26.6667 25.79 24.5667 24.8567 22.7 22.99C20.8333 21.0567 19.9 18.2233 19.9 14.49C19.9 10.2233 21.0333 6.75665 23.3 4.08999C25.6333 1.35666 28.9333 -0.0100098 33.2 -0.0100098C34.7333 -0.0100098 35.9333 0.0899882 36.8 0.289985V4.88999C35.8667 4.75665 34.6667 4.68999 33.2 4.68999C30.9333 4.68999 29.1 5.45665 27.7 6.98999C26.3667 8.32332 25.6 10.09 25.4 12.29C26.2667 11.2233 27.6667 10.69 29.6 10.69C31.6 10.69 33.3 11.39 34.7 12.79C36.1 14.1233 36.8 15.89 36.8 18.09C36.8 20.3567 36.0667 22.2233 34.6 23.69C33.1333 25.09 31.2667 25.79 29 25.79Z"
              fill="#050B20"
            />
          </svg>
        </div>
      </div>
      <div className="relative flex-grow">
        <blockquote className="text-sm italic text-gray-700 line-clamp-3">
          {quote}
        </blockquote>
      </div>

      <div className="mt-6 flex items-center ">
        <div className="w-12 h-12 rounded-full overflow-hidden">
          <img
            src={imageUrl}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col items-center">
          <p className="text-md font-semibold text-gray-800">{name}</p>
          <p className="text-sm text-gray-500">{company}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
