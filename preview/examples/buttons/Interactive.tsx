import React from 'react';
import { Button } from '../../../src';

export default function ButtonInteractive() {
  return (
    <div className="flex flex-wrap gap-4 items-center">
      <Button variant="primary" size="large">Large Primary</Button>
      <Button variant="gradient">Gradient Magic</Button>
      <Button variant="outline" size="large">Outlined</Button>
      <Button variant="ghost">Ghost Button</Button>
    </div>
  );
}
