import { Metadata } from 'next';
import Blog from '@/commonPages/Blog';

export const metadata: Metadata = {
  title: 'MTZ Auto Sales Blog | Car Buying Tips & Auto News in Minnesota',
  description:
    'Explore expert car buying tips, dealership news, and auto industry updates on the MTZ Auto Sales blog. Stay informed and make smart vehicle decisions in Minnesota.',
  keywords: [
    'MTZ Auto Sales Blog',
    'Minnesota car dealership blog',
    'auto news',
    'car tips',
    'vehicle advice',
    'MTZ Auto Sales',
    'South Saint Paul',
    'used cars blog',
    'dealership updates',
    'car buying tips',
    'Minnesota auto trends',
    'MTZ Autos blog',
  ],
  alternates: {
    canonical: 'https://mtzautosales.com/blog',
  },
  openGraph: {
    title: 'MTZ Auto Sales Blog | Car Buying Tips & Auto News in Minnesota',
    description:
      'Read the latest articles from MTZ Auto Sales. Find expert insights, auto trends, and dealership updates to help you with your next vehicle purchase.',
    url: 'https://mtzautosales.com//blog',
    siteName: 'MTZ Auto Sales',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/assets/mtz_logo.png', 
        width: 512,
        height: 512,
        alt: 'MTZ Auto Sales Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MTZ Auto Sales Blog | Car Buying Tips & Auto News in Minnesota',
    description:
      'Stay updated with car buying tips and dealership news from MTZ Auto Sales in South Saint Paul, MN.',
    images: ['/assets/mtz_logo.png'],
  },
};

export default Blog;
