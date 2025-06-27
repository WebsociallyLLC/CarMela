import React from 'react';
import FinanceForm from '@/commonPages/FinanceApplication/Finance';
import PageHeader from '@/components/sections/PageHeader/PageHeaderV1/pageHeader';
import PreQualifiedForm from '@/components/sections/PreQualifiedForm/qualifiedForm';

const QualifiedForm = () => {
  return (
    <>
      <PageHeader
        backgroundImage="/assets/about-hero.svg"
        title="QualifiedForm"
        description="Start Your Journey Toward Approved Financing"
        showBreadcrumbs={true}
        currentPage="Credit"
      />
      <main className="flex-1 bg-gray-50 mt-10">
        <div className="max-w-[1440px] mx-auto px-2 md:px-0 py-8">
          <div className="bg-gray-50">
            <div className="px-4 py-5 sm:p-6">
              <PreQualifiedForm />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default QualifiedForm;
