import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import dynamic from 'next/dynamic';
import { getDealerConfig, DealerConfig } from '@/config/dealerConfig';
import { CARS_DATA } from '@/utils/data';

// Define the component props interface
interface ThemeComponentProps {
  config: DealerConfig;
  car?: any;
}

export async function generateMetadata(props: any): Promise<Metadata> {
  const params =
    typeof props.params?.then === 'function'
      ? await props.params
      : props.params;
  const { domain } = params;
  console.log('generateMetadata - domain:', domain);

  const config = getDealerConfig(domain);
  console.log('generateMetadata - config:', config);

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

export default async function VehicleDetailPage(props: any) {
  const params =
    typeof props.params?.then === 'function'
      ? await props.params
      : props.params;
  const { domain, slug } = params;

  const formattedSlug = slug?.toLowerCase().replace(/-/g, ' ').trim();

  const car = CARS_DATA.find(
    (item) => item.name.toLowerCase() === formattedSlug,
  );

  const config = getDealerConfig(domain);

  if (!config) return notFound();

  // // Fetch vehicle data from your API
  // const res = await fetch(
  //   `${config.apiBaseUrl}/vehicle/${slug}?dealerId=${config.dealerId}`,
  // );

  // if (!res.ok) return notFound();
  // const vehicle = await res.json();

  // Dynamically load the theme's VehicleDetail component
  const VehicleDetail = dynamic<ThemeComponentProps>(
    () =>
      import(`@/themes/${config.theme}/ListingDetail`).catch(
        () => import(`@/themes/${config.fallbackTheme}/ListingDetail`),
      ),
    { ssr: true },
  );

  // Pass config and vehicle as props
  return <VehicleDetail config={config} car={car} />;
}
