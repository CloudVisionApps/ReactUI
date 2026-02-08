import React from 'react';
import { Divider } from '../../../src';

export default function DividerDefault() {
  return (
    <div className="space-y-4">
      <p className="text-sm text-fg-muted">Content above</p>
      <Divider />
      <p className="text-sm text-fg-muted">Content below</p>
    </div>
  );
}
