import { FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

export default function TopInfoHeader() {
  return (
    <div className="bg-[#f43737] text-white text-sm hidden lg:block fixed top-0 left-0 w-full z-[60]">
      <div className="max-w-[1440px] mx-auto flex justify-end items-center py-2 px-4  sm:px-6 lg:px-8">
        <div className="flex items-center gap-8">
          <span className="flex items-center gap-2">
            <FaPhoneAlt className="text-base" />
            (763) 742-6050
          </span>
          <span className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-base" />
            3950 227th Ave NW STE 14, Saint Francis, MN 55070
          </span>
        </div>
      </div>
    </div>
  );
}
