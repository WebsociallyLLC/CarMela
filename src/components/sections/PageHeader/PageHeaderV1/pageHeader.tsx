'use client';
import React from 'react';

interface PageHeaderProps {
  title: string;
  description?: string;
  showBreadcrumbs?: boolean;
  currentPage?: string;
  backgroundImage?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  description,
  showBreadcrumbs = false,
  currentPage,
  backgroundImage = '/assets/header-bg.jpg',
}) => {
  return (
    <section
      className="relative py-40 md:py-52  text-white bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url('${backgroundImage}')` }}
    >
      {/* Dark overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      <div className="max-w-[1440px] mx-auto px-6 relative z-10">
        {/* {showBreadcrumbs && (
          <div className="mb-4 flex items-center text-sm text-gray-300">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-white">{currentPage || title}</span>
          </div>
        )} */}

        <h1 className="text-3xl md:text-5xl font-bold mb-6">{title}</h1>

        {description && (
          <p className="text-gray-200 max-w-3xl text-base md:text-xl">
            {description}
          </p>
        )}
      </div>
    </section>
  );
};

export default PageHeader;
