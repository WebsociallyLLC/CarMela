import React from 'react';
const Dropdown: React.FC<DropdownProps> = ({
  label,
  options,
  selected,
  onChange,
}) => {
  return (
    <div className="relative flex-1 my-2">
      {label && <label className="text-sm text-black">{label}</label>}
      <select
        className="h-12 w-full md:px-4 text-sm rounded-lg border-gray-300 appearance-none md:pr-12 text-black"
        value={selected}
        onChange={(e) => onChange(e.target.value)}
      >
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
      <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-gray-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </div>
  );
};
export default Dropdown;
