import React from 'react';
import { Navigation } from '../../../src';

export default function NavigationSolid() {
  return (
    <div className="space-y-4">
      <Navigation
        logo={<span className="text-lg font-semibold text-fg">React UI</span>}
        items={[
          { label: 'Dashboard', href: '#' },
          { label: 'Settings', href: '#' },
          { label: 'Profile', href: '#', active: true },
        ]}
        variant="solid"
      />
    </div>
  );
}
