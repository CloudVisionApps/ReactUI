import React from 'react';
import { Checkbox } from '../../../src';

export default function CheckboxWithError() {
  return (
    <Checkbox
      label="Required checkbox"
      error="You must accept this"
    />
  );
}
