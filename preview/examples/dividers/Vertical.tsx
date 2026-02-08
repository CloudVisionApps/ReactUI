import React from 'react';
import { Divider } from '../../../src';

export default function DividerVertical() {
  return (
    <div className="flex items-center gap-4 h-10">
      <span className="text-sm text-fg-muted">Item 1</span>
      <Divider orientation="vertical" />
      <span className="text-sm text-fg-muted">Item 2</span>
      <Divider orientation="vertical" />
      <span className="text-sm text-fg-muted">Item 3</span>
    </div>
  );
}
