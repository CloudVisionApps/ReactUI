import React from 'react';
import { Switch } from '../../../src';

export default function SwitchSizes() {
  return (
    <div className="flex items-center gap-8">
      <Switch size="small" defaultChecked />
      <Switch size="medium" defaultChecked />
      <Switch size="large" defaultChecked />
    </div>
  );
}
