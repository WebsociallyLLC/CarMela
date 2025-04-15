import Link from 'next/link';
import React from 'react';

export const FooterSection: React.FC<FooterSectionProps> = ({
  title,
  links,
}) => {
  return (
    <div>
      <h3 className="font-bold text-lg mb-4">{title}</h3>
      <ul className="space-y-3">
        {links.map((link, index) => (
          <li key={index}>
            <Link href="#" className="hover:underline">
              {link}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
