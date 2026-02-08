import React from 'react';
import { Footer } from '../../../src';

export default function FooterDefault() {
  return (
    <div className="overflow-hidden rounded-lg">
      <Footer
        columns={[
          {
            title: 'Product',
            links: [
              { label: 'Features', href: '#' },
              { label: 'Pricing', href: '#' },
              { label: 'Documentation', href: '#' },
              { label: 'Changelog', href: '#' },
            ],
          },
          {
            title: 'Company',
            links: [
              { label: 'About', href: '#' },
              { label: 'Blog', href: '#' },
              { label: 'Careers', href: '#' },
              { label: 'Contact', href: '#' },
            ],
          },
          {
            title: 'Legal',
            links: [
              { label: 'Privacy', href: '#' },
              { label: 'Terms', href: '#' },
              { label: 'Security', href: '#' },
            ],
          },
          {
            title: 'Resources',
            links: [
              { label: 'Support', href: '#' },
              { label: 'Community', href: '#' },
              { label: 'API', href: '#' },
            ],
          },
        ]}
        socialLinks={[
          { label: 'Twitter', href: 'https://twitter.com' },
          { label: 'GitHub', href: 'https://github.com' },
          { label: 'LinkedIn', href: 'https://linkedin.com' },
        ]}
        copyright="© 2024 React UI. All rights reserved."
      />
    </div>
  );
}
