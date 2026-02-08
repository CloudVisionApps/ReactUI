import React from 'react';
import { Badge } from '../../../src';

export default function BadgeSizes() {
  return (
    <div className="flex flex-wrap gap-4 items-center">
      <Badge size="small">Small</Badge>
      <Badge size="medium">Medium</Badge>
      <Badge size="large">Large</Badge>
    </div>
  );
}
