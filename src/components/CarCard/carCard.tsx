import React from 'react';

const CarCard: React.FC<CarCardProps> = ({
  imageUrl,
  name,
  description,
  price,
  onSelect,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden relative">
      <img src={imageUrl} alt={name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <div className="flex justify-between items-center absolute top-3 left-0 px-4 w-full">
          <span className="bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-full h-9 flex items-center">
            Great Price
          </span>
          <button
            onClick={onSelect}
            className="bg-white rounded-full w-9 h-9 flex justify-center items-center cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="13"
              viewBox="0 0 12 13"
              fill="none"
            >
              <g clipPath="url(#clip0_4_214)">
                <path
                  d="M9.40007 12.49C9.16007 12.49 8.9334 12.4233 8.72007 12.29L6.12007 10.65C6.04007 10.5967 5.96007 10.5967 5.88007 10.65L3.28007 12.29C3.04007 12.45 2.7734 12.51 2.48007 12.47C2.18673 12.43 1.9334 12.3167 1.72007 12.13C1.4534 11.89 1.32007 11.5833 1.32007 11.21V1.76999C1.32007 1.42332 1.44674 1.12332 1.70007 0.86999C1.9534 0.616657 2.2534 0.48999 2.60007 0.48999H9.40007C9.74673 0.48999 10.0467 0.616657 10.3001 0.86999C10.5534 1.12332 10.6801 1.42332 10.6801 1.76999V11.21C10.6801 11.5567 10.5534 11.8567 10.3001 12.11C10.0467 12.3633 9.74673 12.49 9.40007 12.49ZM6.00007 9.56999C6.24007 9.56999 6.46673 9.63666 6.68007 9.76999L9.28007 11.41C9.30674 11.4367 9.34674 11.45 9.40007 11.45C9.4534 11.45 9.50007 11.43 9.54007 11.39C9.58007 11.35 9.60007 11.29 9.60007 11.21V1.76999C9.60007 1.68999 9.58007 1.62999 9.54007 1.58999C9.50007 1.54999 9.4534 1.52999 9.40007 1.52999H2.60007C2.54674 1.52999 2.50007 1.54999 2.46007 1.58999C2.42007 1.62999 2.40007 1.68999 2.40007 1.76999V11.21C2.40007 11.29 2.4334 11.3567 2.50007 11.41C2.56674 11.4633 2.64007 11.4633 2.72007 11.41L5.32007 9.76999C5.5334 9.63666 5.76007 9.56999 6.00007 9.56999Z"
                  fill="#050B20"
                />
              </g>
              <defs>
                <clipPath id="clip0_4_214">
                  <rect
                    width="12"
                    height="12"
                    fill="white"
                    transform="matrix(1 0 0 -1 0 12.49)"
                  />
                </clipPath>
              </defs>
            </svg>
          </button>
        </div>

        <h3 className="text-lg font-semibold mt-2">{name}</h3>
        <p className="text-sm text-gray-600">{description}</p>

        <div className="mt-4 flex justify-between items-center">
          <span className="text-xl font-bold">{price}</span>
          <button className="text-blue-500 text-sm font-medium flex items-center gap-2 cursor-pointer">
            View Details
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
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
