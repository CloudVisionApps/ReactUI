import React from 'react';
import { Navigation, Button } from '../../../src';

export default function NavigationWithCta() {
  return (
    <div className="space-y-4">
      <Navigation
        logo={<span className="text-lg font-semibold text-fg">React UI</span>}
        items={[
          { label: 'Features', href: '#' },
          { label: 'Pricing', href: '#' },
          { label: 'Docs', href: '#' },
          { label: 'Blog', href: '#' },
        ]}
        trailing={
          <>
            <Button variant="ghost" size="small">Sign in</Button>
            <Button variant="primary" size="small">Get started</Button>
          </>
        }
        variant="solid"
      />
    </div>
  );
}
