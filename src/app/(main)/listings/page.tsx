import React, { Suspense } from 'react';
import VehicleListing from '@/features/VehicleListing2';

export default function ListingsPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <VehicleListing />
    </Suspense>
  );
}
