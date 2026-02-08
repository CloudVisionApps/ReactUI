import React from 'react';
import { Breadcrumb } from '../../../src';

export default function BreadcrumbDefault() {
  return (
    <Breadcrumb
      items={[
        { label: 'Home', href: '#' },
        { label: 'Docs', href: '#' },
        { label: 'Components' },
      ]}
    />
  );
}
