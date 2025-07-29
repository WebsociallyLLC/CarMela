import React from 'react';
import { InputProps } from './type';

const Input: React.FC<InputProps> = ({
  label,
  value,
  onChange,
  type,
  className,
  divClassName,
  labelClassName,
  error,
  placeholder,
}) => {
  return (
    <div className={`w-full ${divClassName}`}>
      <label className={`block ${labelClassName}`}>{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={`mt-2 block w-full px-4 py-2 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
      />
      {error && (
        <p className="mt-1 text-sm text-red-600">{error}</p>
      )}
    </div>
  );
};

export default Input;
