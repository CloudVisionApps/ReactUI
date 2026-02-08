import React from 'react';
import { Navigation, Button, Avatar } from '../../../src';

export default function NavigationWithUserMenu() {
  return (
    <div className="space-y-4">
      <Navigation
        logo={<span className="text-lg font-semibold text-fg">Dashboard</span>}
        items={[
          { label: 'Overview', href: '#', active: true },
          { label: 'Projects', href: '#' },
          { label: 'Team', href: '#' },
          { label: 'Billing', href: '#' },
        ]}
        trailing={
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="small">Notifications</Button>
            <button
              type="button"
              className="flex items-center gap-2 px-2 py-1.5 rounded-lg text-fg hover:bg-surface-muted transition-colors"
            >
              <Avatar name="Jane Doe" size="small" status="online" />
              <span className="text-[13px] font-medium hidden sm:inline">Jane Doe</span>
            </button>
          </div>
        }
        variant="solid"
      />
    </div>
  );
}
