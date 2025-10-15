import FooterColumn from '@/components/shared/Footer/footerColumn';
import SocialIcons from '@/components/shared/Footer/socialIcons';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Footer: React.FC = () => {
  return (
    <div className="bg-[#050B20] text-white py-12 min-h-[300px] md:px-0 px-6">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 text-start sm:grid-cols-12 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-44 mt-4 md:mt-14 mb-0 md:mb-16 px-2 md:px-4">
          <div className="flex md:w-[150%] w-full md:px-0 px-8 flex-col md:mb-10 mb-6 items-start justify-between sm:flex-row">
            <div className="sm:text-left">
              <div className="-ms-14 md:-ms-0">
                <Link href="/">
                  <Image
                    src="/assets/carmela-logo.svg"
                    alt="Carmela Logo"
                    width={250}
                    height={58}
                    quality={100}
                    priority
                  />
                </Link>
              </div>
              <p className="text-lg mt-2 md:ps-4 -ms-10 md:-ms-0 font-[400] w-full">
                Receive pricing updates, shopping tips & more!
              </p>
            </div>
          </div>
          <FooterColumn
            title="Company"
            links={[
              { title: 'Home', href: '/' },
              { title: 'About', href: '/about' },
              { title: 'Inventory', href: '/listings' },
              { title: 'Contact', href: '/contact' },
            ]}
          />
          <FooterColumn
            title="Quick Links"
            links={[
              { title: 'Get in Touch', href: '/contact' },
              { title: 'Financing', href: '/credit' },
            ]}
          />
          <div className="mb-4 md:mb-0">
            <h3 className="font-bold text-lg mb-4">Connect With Us</h3>
            <SocialIcons />
          </div>
        </div>
        <hr className="border-t border-[#374677]" />
        <div className="mt-6 text-sm w-full text-center">
          <p>© 2025 Carmela. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};
export default Footer;
