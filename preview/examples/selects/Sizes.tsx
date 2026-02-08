import React from 'react';
import { Select } from '../../../src';

export default function SelectSizes() {
  return (
    <div className="space-y-4">
      <Select label="Small" size="small" options={[{ value: '1', label: 'Small select' }]} />
      <Select label="Large" size="large" options={[{ value: '1', label: 'Large select' }]} />
    </div>
  );
}
