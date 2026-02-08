import React from 'react';
import { Select } from '../../../src';

export default function SelectWithError() {
  return (
    <Select
      label="Required Field"
      error="This field is required"
      options={[
        { value: '', label: 'Select...' },
        { value: '1', label: 'Option 1' },
      ]}
    />
  );
}
