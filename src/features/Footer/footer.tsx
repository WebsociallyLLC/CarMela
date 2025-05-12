import FooterSection from '@/components/FooterSection';
import SocialIcons from '@/components/SocialIcons';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
const Footer: React.FC = () => {
  return (
    <div className="bg-[#050B20] text-white py-12 min-h-[300px] md:px-0 ">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 text-start sm:grid-cols-12 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-44 px-8 md:px-4 mt-4 md:mt-14 mb-0 md:mb-16">
          <div className="flex md:w-[150%] w-full md:px-0 px-8 flex-col md:mb-10 mb-6 items-start justify-between sm:flex-row">
            <div className="sm:text-left">
              <div className="-ms-14 md:-ms-0">
                <Image
                  src="/assets/motors-logo.svg"
                  alt="FastCarDeals Logo"
                  width={250}
                  height={58}
                  quality={100}
                  priority
                />
              </div>
              <p className="text-lg mt-2 md:ps-4 -ms-10 md:-ms-0 font-[400] w-full">
                Receive pricing updates, shopping tips & more!
              </p>
            </div>
          </div>
          <FooterSection
            title="Company"
            links={[
              'About Us',
              'Blog',
              'Services',
              'FAQs',
              'Terms',
              'Contact Us',
            ]}
          />
          <FooterSection
            title="Quick Links"
            links={['Get in Touch', 'Help center', 'Live chat', 'How it works']}
          />
          <div className="mb-4 md:mb-0">
            <h3 className="font-bold text-lg mb-4">Connect With Us</h3>
            <SocialIcons />
          </div>
        </div>
        <hr className="border-t border-[#374677]" />
        <div className="flex md:flex-row px-4 flex-col md:px-10 justify-between mt-6 text-sm">
          <p>© 2025 template.com. All rights reserved.</p>
          <div className="space-x-4">
            <Link href="#" className="text-white hover:underline">
              Terms & Conditions
            </Link>
            <Link href="#" className="text-white hover:underline">
              Privacy Notice
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
