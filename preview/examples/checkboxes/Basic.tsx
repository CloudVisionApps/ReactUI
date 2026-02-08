import React from 'react';
import { Checkbox } from '../../../src';

export default function CheckboxBasic() {
  return (
    <div className="space-y-3">
      <Checkbox label="Accept terms and conditions" />
      <Checkbox label="Subscribe to newsletter" defaultChecked />
      <Checkbox label="Enable notifications" />
    </div>
  );
}
