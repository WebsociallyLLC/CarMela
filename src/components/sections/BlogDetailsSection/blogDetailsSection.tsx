import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations as blogCardTranslations } from '@/components/sections/BlogCard/constant';
import Link from 'next/link';
interface BlogDetailsSectionProps {
  slug: string;
}

const BlogDetailsSection: React.FC<BlogDetailsSectionProps> = ({ slug }) => {
  const { language } = useLanguage();
  const t = blogCardTranslations[language] || blogCardTranslations['en'];
  const recentPosts = t.blogPosts.slice(-3).reverse();

  const post = t.blogPosts.find((b: any) => b.slug === slug);
  if (!post) {
    return <div className="p-10 text-center text-xl">Blog post not found.</div>;
  }

  const details = post.details;
  const description = details?.description || post.description;
  const features = details?.features || [];
  const quote = details?.quote || { text: '', author: '' };

  return (
    <div className="max-w-[1440px] mx-auto py-10 md:px-0 px-4 flex flex-col md:flex-row gap-8">
      <div className="w-full md:w-[70%] flex flex-col gap-6">
        <div className="breadcrumb text-sm text-gray-600 mb-2">
          <span>
            <Link href="/blog">Blogs</Link> /{' '}
          </span>
          <span className="font-semibold">{post.title}</span>
        </div>

        <h1 className="text-2xl font-bold">{post.title}</h1>

        <div className="bg-white rounded-xl overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-[400px] object-cover rounded-xl"
          />
        </div>

        <div className="bg-white rounded-xl p-4 flex flex-col gap-6">
          {details.sections &&
            details.sections.map((section, idx) => (
              <div key={idx} className="mb-6">
                <h2 className="text-xl font-bold mb-2">{section.title}</h2>
                <div
                  className="text-gray-700"
                  style={{ whiteSpace: 'pre-line' }}
                >
                  {section.content}
                </div>
              </div>
            ))}
        </div>
      </div>

      <aside className="w-full md:w-[30%] flex flex-col gap-6 mt-0 md:mt-[100px]">
        <div className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm">
          <h4 className="font-semibold text-base mb-3">
            {t.sidebar.recentPostsTitle}
          </h4>
          <ul className="flex flex-col gap-4">
            {recentPosts.map((recent) => (
              <li key={recent.title} className="flex items-center gap-3">
                <Link
                  href={`/blog/${recent.slug}`}
                  className="flex items-center gap-3 w-full"
                >
                  <img
                    src={recent.image}
                    alt={recent.title}
                    className="w-20 h-20 rounded-lg object-cover"
                  />
                  <div className="font-medium text-sm line-clamp-2 flex items-center h-20">
                    {recent.title}
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

export default BlogDetailsSection;
