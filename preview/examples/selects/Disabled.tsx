import React from 'react';
import { Select } from '../../../src';

export default function SelectDisabled() {
  return (
    <Select
      label="Disabled"
      disabled
      options={[{ value: '1', label: 'Cannot select' }]}
    />
  );
}
