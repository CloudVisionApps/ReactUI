import React from 'react';
import { Button } from '../../../src';

export default function ButtonVariants() {
  return (
    <div className="flex flex-wrap gap-4 items-center">
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="danger">Danger</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="gradient">Gradient</Button>
    </div>
  );
}
