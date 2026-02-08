import React from 'react';
import { Select } from '../../../src';

export default function SelectBasic() {
  return (
    <Select
      label="Choose an option"
      options={[
        { value: '', label: 'Select...' },
        { value: '1', label: 'Option 1' },
        { value: '2', label: 'Option 2' },
        { value: '3', label: 'Option 3' },
      ]}
    />
  );
}
