import React from 'react';
import { Radio } from '../../../src';

export default function RadioWithError() {
  return (
    <Radio
      name="error"
      label="Required selection"
      error="Please select an option"
      value="1"
    />
  );
}
