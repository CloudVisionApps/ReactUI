import React from 'react';
import { Radio } from '../../../src';

export default function RadioGroup() {
  return (
    <div className="space-y-3">
      <Radio name="option" label="Option 1" value="1" defaultChecked />
      <Radio name="option" label="Option 2" value="2" />
      <Radio name="option" label="Option 3" value="3" />
    </div>
  );
}
