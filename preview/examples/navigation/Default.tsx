import React from 'react';
import { Navigation } from '../../../src';

export default function NavigationDefault() {
  return (
    <div className="space-y-4">
      <Navigation
        logo={<span className="text-lg font-semibold text-[#1D1D1F]">React UI</span>}
        items={[
          { label: 'Home', href: '#', active: true },
          { label: 'Components', href: '#' },
          { label: 'Documentation', href: '#' },
          { label: 'About', href: '#' },
        ]}
        variant="default"
      />
    </div>
  );
}
