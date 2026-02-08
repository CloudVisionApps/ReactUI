import React from 'react';
import { Input } from '../../../src';

export default function InputWithHelperText() {
  return (
    <Input
      label="Password"
      type="password"
      placeholder="Enter password"
      helperText="Must be at least 8 characters"
    />
  );
}
