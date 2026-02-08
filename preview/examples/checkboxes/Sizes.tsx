import React from 'react';
import { Checkbox } from '../../../src';

export default function CheckboxSizes() {
  return (
    <div className="space-y-3">
      <Checkbox label="Small checkbox" size="small" />
      <Checkbox label="Medium checkbox" size="medium" defaultChecked />
      <Checkbox label="Large checkbox" size="large" />
    </div>
  );
}
