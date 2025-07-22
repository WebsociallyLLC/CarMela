'use client';
import React from 'react';
import PageHeader from '@/components/sections/PageHeader/PageHeaderV1/pageHeader';
import PreQualifiedForm from '@/components/sections/PreQualifiedForm/qualifiedForm';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from './constant';
import BlogSection from '@/components/sections/BlogSections/';
import Link from 'next/link';

const Blog = () => {
  const { language } = useLanguage();
  const t = translations[language];
  return (
    <>
      <PageHeader
        backgroundImage="/assets/list-hero.svg"
        title={t.pageHeader.title}
        description={t.pageHeader.description}
        showBreadcrumbs={true}
        currentPage="Credit"
         paddingTop="md:pt-36 md:pb-20 pb-10 pt-32"
      />
      <main className="flex-1 bg-gray-50">
        <div className="max-w-[1440px] mx-auto md:px-0 py-8">
          <div className="bg-gray-50">
            <div className="px-0 py-5 sm:p-4">
              <BlogSection />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Blog;
