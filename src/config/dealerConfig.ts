export interface DealerConfig {
  name: string;
  theme: string;
  fallbackTheme: string;
  dealerId: string;
  apiBaseUrl: string;
  branding: {
    primaryColor: string;
    secondaryColor: string;
    accentColor: string;
    logo: string;
    fontFamily: string;
  };
  seo: {
    [key: string]: {
      title: string;
      description: string;
      ogImage: string;
      noIndex?: boolean;
    };
  };
}

export const dealerConfigs: { [key: string]: DealerConfig } = {
  // Production domains
  'hadimotors.com': {
    name: 'Hadi Motors',
    theme: 'hadiMotors',
    fallbackTheme: 'baseTheme',
    dealerId: 'dealer_hadi123',
    apiBaseUrl: 'https://api.mycars.com',
    branding: {
      primaryColor: '#e60000',
      secondaryColor: '#ffffff',
      accentColor: '#111111',
      logo: '/logos/hadi.png',
      fontFamily: '"Poppins", sans-serif',
    },
    seo: {
      home: {
        title: 'Buy Cars in Dublin | Hadi Motors',
        description: 'Find the best used cars in Dublin. Financing available!',
        ogImage: '/logos/hadi-og.jpg',
      },
      about: {
        title: "About Hadi Motors | Dublin's Trusted Car Dealer",
        description: 'Learn more about Hadi Motors and our journey in Dublin.',
        ogImage: '/logos/hadi-og.jpg',
      },
      inventory: {
        title: 'Used Cars for Sale | Hadi Motors Dublin',
        description: 'Browse our selection of quality used cars in Dublin.',
        ogImage: '/logos/hadi-og.jpg',
      },
    },
  },
  // Local development domains
  'hadimotors.local': {
    name: 'Hadi Motors',
    theme: 'hadiMotors',
    fallbackTheme: 'baseTheme',
    dealerId: 'dealer_hadi123',
    apiBaseUrl: 'https://api.mycars.com',
    branding: {
      primaryColor: '#e60000',
      secondaryColor: '#ffffff',
      accentColor: '#111111',
      logo: '/logos/hadi.png',
      fontFamily: '"Poppins", sans-serif',
    },
    seo: {
      home: {
        title: 'Buy Cars in Dublin | Hadi Motors',
        description: 'Find the best used cars in Dublin. Financing available!',
        ogImage: '/logos/hadi-og.jpg',
      },
      about: {
        title: "About Hadi Motors | Dublin's Trusted Car Dealer",
        description: 'Learn more about Hadi Motors and our journey in Dublin.',
        ogImage: '/logos/hadi-og.jpg',
      },
      inventory: {
        title: 'Used Cars for Sale | Hadi Motors Dublin',
        description: 'Browse our selection of quality used cars in Dublin.',
        ogImage: '/logos/hadi-og.jpg',
      },
    },
  },
  'www.takeoffmotorcars.com': {
    name: 'Takeoff Motors',
    theme: 'takeoffmotorcars',
    fallbackTheme: 'baseTheme',
    dealerId: 'dealer_mtz456',
    apiBaseUrl: 'https://api.mycars.com',
    branding: {
      primaryColor: '#0c4a6e',
      secondaryColor: '#f0f0f0',
      accentColor: '#ff9900',
      logo: '/logos/mtz.png',
      fontFamily: '"Roboto", sans-serif',
    },
    seo: {
      home: {
        title: 'Takeoff Motors | Quality Used Cars in Dublin',
        description: 'Your trusted source for quality used cars in Dublin.',
        ogImage: '/logos/mtz-og.jpg',
      },
      about: {
        title: 'About Takeoff Motors | Your Trusted Car Dealer',
        description:
          "Discover why Takeoff Motors is Dublin's preferred car dealer.",
        ogImage: '/logos/mtz-og.jpg',
      },
      inventory: {
        title: 'Used Cars Inventory | Takeoff Motors Dublin',
        description: 'Explore our extensive inventory of quality used cars.',
        ogImage: '/logos/mtz-og.jpg',
      },
    },
  },
  'takeoffmotorcars.local': {
    name: 'Takeoff Motors',
    theme: 'takeoffmotorcars',
    fallbackTheme: 'baseTheme',
    dealerId: 'dealer_mtz456',
    apiBaseUrl: 'https://api.mycars.com',
    branding: {
      primaryColor: '#0c4a6e',
      secondaryColor: '#f0f0f0',
      accentColor: '#ff9900',
      logo: '/logos/mtz.png',
      fontFamily: '"Roboto", sans-serif',
    },
    seo: {
      home: {
        title: 'Takeoff Motors | Quality Used Cars in Dublin',
        description: 'Your trusted source for quality used cars in Dublin.',
        ogImage: '/logos/mtz-og.jpg',
      },
      about: {
        title: 'About Takeoff Motors | Your Trusted Car Dealer',
        description:
          "Discover why Takeoff Motors is Dublin's preferred car dealer.",
        ogImage: '/logos/mtz-og.jpg',
      },
      inventory: {
        title: 'Used Cars Inventory | Takeoff Motors Dublin',
        description: 'Explore our extensive inventory of quality used cars.',
        ogImage: '/logos/mtz-og.jpg',
      },
    },
  },
  'mtzautosales.local': {
    name: 'MTZ Auto Sales',
    theme: 'mtzAutoSales',
    fallbackTheme: 'baseTheme',
    dealerId: 'dealer_mtz456',
    apiBaseUrl: 'https://api.mycars.com',
    branding: {
      primaryColor: '#0c4a6e',
      secondaryColor: '#f0f0f0',
      accentColor: '#ff9900',
      logo: '/logos/mtz.png',
      fontFamily: '"Roboto", sans-serif',
    },
    seo: {
      home: {
        title: 'MTZ Auto Sales | Quality Used Cars in Dublin',
        description: 'Your trusted source for quality used cars in Dublin.',
        ogImage: '/logos/mtz-og.jpg',
      },
      about: {
        title: 'About MTZ Auto Sales | Your Trusted Car Dealer',
        description:
          "Discover why MTZ Auto Sales is Dublin's preferred car dealer.",
        ogImage: '/logos/mtz-og.jpg',
      },
    },
  },
};

export function getDealerConfig(domain: string): DealerConfig | undefined {
  return dealerConfigs[domain];
}
