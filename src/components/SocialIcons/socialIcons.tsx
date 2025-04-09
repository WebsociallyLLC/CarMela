import Link from 'next/link';
import React from 'react';

export const SocialIcons: React.FC = () => {
  return (
    <div className="flex justify-start space-x-6 text-xl">
      <Link href="#" className="hover:text-gray-400">
        <i className="fab fa-facebook"></i>
      </Link>
      <Link href="#" className="hover:text-gray-400">
        <i className="fab fa-twitter"></i>
      </Link>
      <Link href="#" className="hover:text-gray-400">
        <i className="fab fa-instagram"></i>
      </Link>
      <Link href="#" className="hover:text-gray-400">
        <i className="fab fa-linkedin"></i>
      </Link>
    </div>
  );
};
