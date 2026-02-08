import React from 'react';
import { Navigation } from '../../../src';

export default function NavigationSticky() {
  return (
    <div className="space-y-4 -m-4 p-4">
      <Navigation
        logo={<span className="text-lg font-semibold text-fg">Sticky Nav</span>}
        items={[
          { label: 'Home', href: '#', active: true },
          { label: 'About', href: '#' },
          { label: 'Services', href: '#' },
          { label: 'Contact', href: '#' },
        ]}
        variant="default"
        position="sticky"
      />
      <div className="h-96 bg-surface-muted border border-border rounded-lg flex items-center justify-center text-fg-muted text-sm">
        Scroll down to see the nav stick to the top
      </div>
      <div className="h-96 bg-surface-muted border border-border rounded-lg flex items-center justify-center text-fg-muted text-sm">
        Content block 2
      </div>
    </div>
  );
}
