import React from 'react';
import { Input } from '../../../src';

export default function InputSizes() {
  return (
    <div className="space-y-4">
      <Input label="Small" size="small" placeholder="Small size input" />
      <Input label="Medium" size="medium" placeholder="Medium size input" />
      <Input label="Large" size="large" placeholder="Large size input" />
    </div>
  );
}
