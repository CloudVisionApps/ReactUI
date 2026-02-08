import React from 'react';
import { Input } from '../../../src';

export default function InputDisabled() {
  return (
    <Input
      label="Disabled Field"
      placeholder="This field is disabled"
      disabled
      value="Cannot edit this"
    />
  );
}
