import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import dynamic from 'next/dynamic';
import { getDealerConfig, DealerConfig } from '@/config/dealerConfig';
import NotFound from '@/app/not-found';

// Define the component props interface
interface ThemeComponentProps {
  config: DealerConfig;
  data?: any;
}

export async function generateMetadata(props: any): Promise<Metadata> {
  const params =
    typeof props.params?.then === 'function'
      ? await props.params
      : props.params;
  const { domain } = params;
  const config = getDealerConfig(domain);

  if (!config) {
    return {
      title: 'Not Found',
      description: 'The requested dealer was not found',
    };
  }

  const seoData = config.seo?.home || {
    title: config.name,
    description: `Welcome to ${config.name}`,
  };

  return {
    title: seoData.title,
    description: seoData.description,
    openGraph: {
      title: seoData.title,
      description: seoData.description,
      images: [seoData.ogImage],
    },
  };
}

export default async function Page(props: any) {
  const params =
    typeof props.params?.then === 'function'
      ? await props.params
      : props.params;
  const { domain } = params;

  const config = getDealerConfig(domain);

  if (!config) {
    return notFound();
  }

  const page = 'Home'; // Always Home for the root

  // Type the dynamic component
  const ThemeComponent = dynamic<ThemeComponentProps>(
    async () => {
      try {
        return await import(`@/themes/${config.theme}/${page}`);
      } catch (err) {
        try {
          return await import(`@/themes/${config.fallbackTheme}/${page}`);
        } catch (err2) {
          return NotFound;
        }
      }
    },
    { ssr: true },
  );

  return <ThemeComponent config={config} />;
}
