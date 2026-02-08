import React from 'react';
import { Button } from '../../../src';

export default function ButtonSizes() {
  return (
    <div className="flex flex-wrap gap-4 items-center">
      <Button size="small">Small</Button>
      <Button size="medium">Medium</Button>
      <Button size="large">Large</Button>
    </div>
  );
}
