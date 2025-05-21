import React from 'react';
import FinanceForm from '@/pages/FinanceApplication/Finance';
import PageHeader from '@/components/sections/PageHeader/PageHeaderV1/pageHeader';

const Credit = () => {
  return (
    <>
      <PageHeader
        backgroundImage="/assets/about-hero.svg"
        title="Credit Application"
        description="Start Your Journey Toward Approved Financing"
        showBreadcrumbs={true}
        currentPage="Credit"
      />
      <main className="flex-1 bg-white mt-10">
        <div className="max-w-[1440px] mx-auto px-2 md:px-0 py-8">
          <div className="bg-white">
            <div className="px-4 py-5 sm:p-6">
              <FinanceForm />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Credit;
