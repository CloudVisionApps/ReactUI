import React from 'react';
import { Navigation } from '../../../src';

export default function NavigationFixed() {
  return (
    <div className="space-y-4">
      <Navigation
        logo={<span className="text-lg font-semibold text-fg">Fixed Nav</span>}
        items={[
          { label: 'Home', href: '#', active: true },
          { label: 'Products', href: '#' },
          { label: 'Support', href: '#' },
        ]}
        variant="solid"
        position="fixed"
      />
      {/* Spacer so content is not hidden under fixed nav */}
      <div className="h-14" />
      <div className="h-48 bg-surface-muted border border-border rounded-lg flex items-center justify-center text-fg-muted text-sm">
        Nav is fixed to viewport. Content scrolls underneath.
      </div>
    </div>
  );
}
