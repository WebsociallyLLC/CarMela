'use client';
import React from 'react';
import PageHeader from '@/components/sections/PageHeader/PageHeaderV1/pageHeader';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from './constant';
import BlogDetailsSection from '@/components/sections/BlogDetailsSection/blogDetailsSection';

interface BlogDetailsProps {
  slug: string;
}

const BlogDetails: React.FC<BlogDetailsProps> = ({ slug }) => {
  const { language } = useLanguage();
  const t = translations[language];
  return (
    <>
     
      <main className="flex-1 bg-gray-50 md:mt-16 mt-12">
        <div className="max-w-[1440px] mx-auto px-2 md:px-0 py-8">
          <div className="bg-gray-50">
            <div className="px-0 py-5 sm:p-6">
              <BlogDetailsSection slug={slug} />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default BlogDetails;
