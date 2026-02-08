import React from 'react';
import { Navigation } from '../../../src';

export default function NavigationTransparent() {
  return (
    <div className="space-y-4">
      <Navigation
        logo={<span className="text-lg font-semibold text-[#1D1D1F]">React UI</span>}
        items={[
          { label: 'Home', href: '#' },
          { label: 'Products', href: '#' },
          { label: 'Services', href: '#' },
          { label: 'Contact', href: '#', active: true },
        ]}
        variant="transparent"
      />
    </div>
  );
}
