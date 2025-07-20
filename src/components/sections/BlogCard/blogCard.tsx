import React from 'react';
import Link from 'next/link';
import { translations } from './constant';
import { useLanguage } from '@/contexts/LanguageContext';

export interface BlogPost {
  slug: string;
  image: string;
  category?: string;
  categoryColor?: string;
  title: string;
  description?: string;
  author: string;
  authorAvatar: string;
  date: string;
}

export interface BlogCardProps {
  slug: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ slug }) => {
  const { language } = useLanguage();
  const t = translations[language];
  const post = t.blogPosts.find((p: BlogPost) => p.slug === slug);

  if (!post) return null;

  const {
    image,
    category,
    categoryColor = 'text-[#F15A29]',
    title,
    description,
    author,
    authorAvatar,
    date,
  } = post;

  return (
    <Link href={`/blog/${slug}`} className="block group">
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 flex flex-col gap-4 transition hover:shadow-lg hover:-translate-y-1 cursor-pointer">
        <div className="rounded-lg overflow-hidden h-48 w-full flex items-center justify-center bg-gray-50">
          <img src={image} alt={title} className="object-cover w-full h-full" />
        </div>
        <h3 className="font-semibold text-lg leading-snug mb-1 line-clamp-2">
          {title}
        </h3>
        {description && (
          <p className="text-gray-500 text-sm line-clamp-2 mb-2">
            {description}
          </p>
        )}
      </div>
    </Link>
  );
};

export default BlogCard;