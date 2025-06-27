import {
  HiOutlineThumbUp,
  HiOutlineDocumentText,
  HiOutlineShieldCheck,
} from 'react-icons/hi';
import React from 'react';

const ContactHighlights: React.FC = () => (
  <div className="flex flex-col md:flex-row justify-center gap-4 mb-10 w-full max-w-5xl">
    <div className="flex flex-col items-center border-2 border-[#F20000] p-4 w-full md:w-1/3 text-center rounded">
      <HiOutlineShieldCheck size={32} className="text-[#F20000] mb-2" />
      <p className="text-sm font-medium text-gray-700">
        DOESN'T AFFECT YOUR CREDIT SCORE
      </p>
    </div>
    <div className="flex flex-col items-center border-2 border-[#F20000] p-4 w-full md:w-1/3 text-center rounded">
      <HiOutlineDocumentText size={32} className="text-[#F20000] mb-2" />
      <p className="text-sm font-medium text-gray-700">
        SEE WHAT YOU QUALIFY FOR
      </p>
    </div>
    <div className="flex flex-col items-center border-2 border-[#F20000] p-4 w-full md:w-1/3 text-center rounded">
      <HiOutlineThumbUp size={32} className="text-[#F20000] mb-2" />
      <p className="text-sm font-medium text-gray-700">
        NO SSN OR DOB REQUIRED
      </p>
    </div>
  </div>
);

export default ContactHighlights;
