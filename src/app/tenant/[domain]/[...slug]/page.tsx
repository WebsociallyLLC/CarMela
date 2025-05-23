import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import dynamic from 'next/dynamic';
import { getDealerConfig, DealerConfig } from '@/config/dealerConfig';
import NotFound from '@/app/not-found';

interface Props {
  params: {
    domain: string;
    slug: string[];
  };
}

// Define the component props interface
interface ThemeComponentProps {
  config: DealerConfig;
}

// export async function generateMetadata({ params }: Props): Promise<Metadata> {
//   const { domain, slug = [] } = params;
//   const page = slug[0];
//   const config = getDealerConfig(domain);

//   if (!config) {
//     return {
//       title: 'Not Found',
//       description: 'The requested dealer was not found',
//     };
//   }

//   const seoData = config.seo?.[page] || {
//     title: config.name,
//     description: `Welcome to ${config.name}`,
//   };

//   return {
//     title: seoData.title,
//     description: seoData.description,
//     openGraph: {
//       title: seoData.title,
//       description: seoData.description,
//       images: [seoData.ogImage],
//     },
//   };
// }

export default async function Page(props: any) {
  const params =
    typeof props.params.then === 'function' ? await props.params : props.params;
  const { domain, slug = [] } = params;

  console.log('inside slug page');

  // If slug is empty, this is the root path, let [domain]/page.tsx handle it
  if (!slug || slug.length === 0) {
    return null; // or notFound(), or throw an error
  }

  const page = capitalize(slug[0]);
  const config = getDealerConfig(domain);

  console.log(config?.theme, 'config?.theme');

  if (!config) {
    return notFound();
  }

  // Type the dynamic component
  const ThemeComponent = dynamic<ThemeComponentProps>(
    async () => {
      try {
        return await import(`@/themes/${config.theme}/${page}`);
      } catch (err) {
        try {
          return await import(`@/themes/${config.fallbackTheme}/${page}`);
        } catch (err2) {
          // Fallback to a NotFound component
          return NotFound;
        }
      }
    },
    { ssr: true },
  );

  return <ThemeComponent config={config} />;
}

function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
