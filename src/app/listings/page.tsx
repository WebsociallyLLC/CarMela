export const metadata = {
  title: 'Inventory | Browse New & Used Cars at TakeoffMotors',
  description:
    'Browse the latest new and used car listings at TakeoffMotors. Find your perfect vehicle from our wide selection of cars, SUVs, and trucks. Great deals and quality vehicles await!',
  keywords:
    'TakeoffMotors, car listings, new cars, used cars, cars for sale, car dealership, SUVs, trucks, best car deals, vehicle inventory',
};

import VehicleListing from '@/commonPages/VehicleListing';
import React from 'react';

const ListingsPage = () => {
  return (
    <>
      <VehicleListing />
    </>
  );
};

export default ListingsPage;
