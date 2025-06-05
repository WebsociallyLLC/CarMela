export const metadata = {
  title: 'Inventory | Browse New & Used Cars at TakeoffMotors',
  description:
    'Browse the latest new and used car listings at TakeoffMotors. Find your perfect vehicle from our wide selection of cars, SUVs, and trucks. Great deals and quality vehicles await!',
  keywords:
    'TakeoffMotors, car listings, new cars, used cars, cars for sale, car dealership, SUVs, trucks, best car deals, vehicle inventory',
};

import { Suspense } from 'react';
import VehicleListing from '@/commonPages/VehicleListing/vehicleListing';

export default function ListingsPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <VehicleListing />
    </Suspense>
  );
}
