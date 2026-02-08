import React from 'react';
import { Radio } from '../../../src';

export default function RadioStates() {
  return (
    <div className="space-y-3">
      <Radio name="state" label="Normal radio" value="1" />
      <Radio name="state" label="Selected radio" value="2" defaultChecked />
      <Radio name="state" label="Disabled radio" value="3" disabled />
      <Radio name="state" label="Disabled selected" value="4" disabled defaultChecked />
    </div>
  );
}
