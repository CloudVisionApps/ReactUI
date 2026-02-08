import React from 'react';
import { Switch } from '../../../src';

export default function SwitchWithLabel() {
  return (
    <div className="space-y-4">
      <Switch label="Enable notifications" defaultChecked />
      <Switch label="Dark mode" />
    </div>
  );
}
