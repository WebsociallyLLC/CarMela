import React from 'react';

const Input: React.FC<InputProps> = ({
  label,
  value,
  onChange,
  type,
  className,
  divClassName,
  labelClassName,
}) => {
  return (
    <div className={`w-full ${divClassName}`}>
      <label className={`block ${labelClassName}`}>{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className={`mt-2 block w-full px-4 py-2 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
      />
    </div>
  );
};

export default Input;
