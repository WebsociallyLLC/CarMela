import Link from 'next/link';
import React from 'react';

interface FooterColumnProps {
  title: string;
  links: { title: string; href: string }[];
}

const FooterColumn: React.FC<FooterColumnProps> = ({ title, links }) => {
  return (
    <div>
      <h3 className="font-bold text-lg mb-4">{title}</h3>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.title}>
            <Link href={link.href} className="hover:underline">
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterColumn;
