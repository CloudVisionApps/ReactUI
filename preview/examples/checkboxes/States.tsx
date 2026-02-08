import React from 'react';
import { Checkbox } from '../../../src';

export default function CheckboxStates() {
  return (
    <div className="space-y-3">
      <Checkbox label="Normal checkbox" />
      <Checkbox label="Checked by default" defaultChecked />
      <Checkbox label="Disabled checkbox" disabled />
      <Checkbox label="Disabled checked" disabled defaultChecked />
    </div>
  );
}
