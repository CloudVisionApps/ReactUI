import React, { useState } from 'react';
import { Switch } from '../../../src';

export default function SwitchDefault() {
  const [on, setOn] = useState(false);
  return (
    <div className="flex items-center gap-6">
      <Switch checked={on} onCheckedChange={setOn} />
      <Switch defaultChecked />
    </div>
  );
}
