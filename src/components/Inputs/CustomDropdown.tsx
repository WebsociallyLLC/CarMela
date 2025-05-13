import React, { useState, useRef, useEffect } from 'react';

interface CustomDropdownProps {
  options: string[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  label?: string;
}

const CustomDropdown: React.FC<CustomDropdownProps> = ({
  options,
  value,
  onChange,
  placeholder = 'Select',
  label,
}) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative w-full" ref={ref}>
      {label && (
        <label className="block text-xs font-semibold text-gray-700 mb-1 pl-2">
          {label}
        </label>
      )}
      <button
        type="button"
        className={`w-full h-12 px-4 rounded-full border border-gray-300 bg-white text-gray-900 text-base flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-blue-200 transition shadow-sm ${open ? 'ring-2 ring-blue-300' : ''}`}
        onClick={() => setOpen((prev) => !prev)}
        tabIndex={0}
      >
        <span className={value ? '' : 'text-gray-400'}>
          {value || placeholder}
        </span>
        <svg
          className={`w-5 h-5 ml-2 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      <div
        className={`absolute left-0 right-0 mt-2 bg-white rounded-xl shadow-lg border border-gray-200 z-50 overflow-hidden transition-all duration-200 ${open ? 'max-h-60 opacity-100 visible' : 'max-h-0 opacity-0 invisible'}`}
        style={{
          boxShadow: open ? '0 8px 24px rgba(0,0,0,0.12)' : undefined,
        }}
      >
        <ul className="py-1">
          {options.map((opt) => (
            <li
              key={opt}
              className={`px-5 py-3 cursor-pointer text-base transition bg-white hover:bg-blue-50 ${value === opt ? 'bg-blue-100 font-semibold text-blue-700' : ''}`}
              onClick={() => {
                onChange(opt);
                setOpen(false);
              }}
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  onChange(opt);
                  setOpen(false);
                }
              }}
            >
              {opt}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CustomDropdown;
