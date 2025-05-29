import { Car, Handshake, BadgeCheck, DollarSign } from 'lucide-react';
import React from 'react';

export const aboutHighlights = [
  'Proven Expertise',
  '1 Million Visits Per Day',
  '7,800 Car Sellers',
];

export const featureCards = [
  {
    icon: <Car className="text-[#FF7A00] w-8 h-8 min-w-[2rem]" />,
    title: 'New range rover, defender, discovery',
    desc: 'Experience the joy of owning a brand new Range Rover, Defender or Discovery today!',
  },
  {
    icon: <Handshake className="text-[#FF7A00] w-8 h-8 min-w-[2rem]" />,
    title: 'Pre-Owned vehicles',
    desc: 'AutoDecar has a great selection of pre-owned vehicles.',
  },
  {
    icon: <BadgeCheck className="text-[#FF7A00] w-8 h-8 min-w-[2rem]" />,
    title: 'Certified pre-owned vehicles',
    desc: 'AutoDecar Demo has a great selection of certified pre-owned vehicles.',
  },
  {
    icon: <DollarSign className="text-[#FF7A00] w-8 h-8 min-w-[2rem]" />,
    title: 'Financing',
    desc: 'Get approved today and drive off in a new or used vehicle.',
  },
];
