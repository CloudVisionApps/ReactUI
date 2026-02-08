import React from 'react';
import { Radio } from '../../../src';

export default function RadioSizes() {
  return (
    <div className="space-y-3">
      <Radio name="size" label="Small radio" size="small" value="1" />
      <Radio name="size" label="Medium radio" size="medium" value="2" defaultChecked />
      <Radio name="size" label="Large radio" size="large" value="3" />
    </div>
  );
}
