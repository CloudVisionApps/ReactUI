import React from 'react';
import { Footer } from '../../../src';

export default function FooterMinimal() {
  return (
    <div className="overflow-hidden rounded-lg">
      <Footer
        variant="minimal"
        columns={[
          {
            title: 'Quick Links',
            links: [
              { label: 'Home', href: '#' },
              { label: 'About', href: '#' },
              { label: 'Contact', href: '#' },
            ],
          },
        ]}
        copyright="© 2024 React UI"
      />
    </div>
  );
}
