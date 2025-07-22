import BlogDetails from '@/commonPages/BlogDetails';
import type { Metadata } from 'next';
import { translations as blogCardTranslations } from '@/components/sections/BlogCard/constant';

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <BlogDetails slug={slug} />;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const t = blogCardTranslations['en']; 
  const post = t.blogPosts.find((b: any) => b.slug === slug);

  if (!post) {
    return {
      title: 'Blog Not Found | MTZ Auto Sales',
      description: 'Sorry, this blog post could not be found.',
      openGraph: {
        title: 'Blog Not Found | MTZ Auto Sales',
        description: 'Sorry, this blog post could not be found.',
        url: `https://mtzautosales.com/blog/${slug}`,
        siteName: 'MTZ Auto Sales',
        locale: 'en_US',
        type: 'article',
        images: [
          {
            url: '/assets/mtz_logo.png',
            width: 1200,
            height: 630,
            alt: 'MTZ Auto Sales Blog',
          },
        ],
      },
      twitter: {
        card: 'summary_large_image',
        title: 'Blog Not Found | MTZ Auto Sales',
        description: 'Sorry, this blog post could not be found.',
        images: ['/assets/mtz_logo.png'],
      },
      alternates: {
        canonical: `https://mtzautosales.com/blog/${slug}`,
      },
    };
  }

  const title = `${post.title} | MTZ Auto Sales Blog`;
  const description =
    post.details?.description || post.description || 'Learn more on our blog.';
  const image = post.image || '/assets/mtz_logo.png';

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://mtzautosales.com/blog/${slug}`,
      siteName: 'MTZ Auto Sales',
      locale: 'en_US',
      type: 'article',
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
    alternates: {
      canonical: `https://mtzautosales.com/blog/${slug}`,
    },
  };
}
