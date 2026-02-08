import React from 'react';
import { Breadcrumb } from '../../../src';

export default function BreadcrumbWithSeparator() {
  return (
    <Breadcrumb
      items={[
        { label: 'Dashboard', href: '#' },
        { label: 'Settings', href: '#' },
        { label: 'Profile' },
      ]}
      separator={<span className="text-fg-subtle mx-1">/</span>}
    />
  );
}
