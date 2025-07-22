import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import Link from 'next/link';
import BlogCard from '../BlogCard';
import { translations } from '@/components/sections/BlogCard/constant';

const BlogSection = () => {
  const { language } = useLanguage();
  const blogT = translations[language] || translations['en'];
  const blogPosts = blogT.blogPosts || [];

  return (
    <div className="max-w-[1440px] mx-auto py-10 px-4 md:px-0 flex flex-col md:flex-row gap-8">
      <div className="w-full md:w-[70%] grid grid-cols-1 sm:grid-cols-2 gap-6">
        {blogPosts.map((post: { slug: string }) => (
          <BlogCard key={post.slug} slug={post.slug} />
        ))}
      </div>

      <aside className="w-full md:w-[30%] flex flex-col gap-6">
        <div className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm">
          <h4 className="font-semibold text-base mb-3">Recent Post</h4>
          <ul className="flex flex-col gap-4">
            {blogPosts
              .slice(-3)
              .reverse()
              .map((post: { title: string; image: string; slug: string }) => (
                <li key={post.title} className="flex items-center gap-3">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="flex items-center gap-3 w-full"
                  >
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-20 h-20 rounded-lg object-cover"
                    />
                    <div className="font-medium text-sm line-clamp-2 flex items-center h-14">
                      {post.title}
                    </div>
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default BlogSection;
