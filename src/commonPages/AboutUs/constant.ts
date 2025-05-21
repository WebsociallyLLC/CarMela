export const galleryImages = {
  firstColumn: [
    {
      src: '/assets/gallery-image5.svg',
      alt: 'Hands',
      height: 'h-1/2',
    },
  ],
  secondColumn: {
    src: '/assets/gallery-image.svg',
    alt: 'Main Car',
  },
  thirdColumn: [
    {
      src: '/assets/gallery-image2.svg',
      alt: 'Showroom',
      height: 'h-1/2',
    },
    {
      group: true,
      images: [
        {
          src: '/assets/gallery-image3.svg',
          alt: 'Workshop',
        },
        {
          src: '/assets/gallery-image4.svg',
          alt: 'Deal',
        },
      ],
    },
  ],
};
