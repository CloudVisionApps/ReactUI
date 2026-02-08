import React from 'react';
import { Progress } from '../../../src';

export default function ProgressWithLabel() {
  return (
    <div className="space-y-4 max-w-md">
      <Progress value={67} showLabel />
    </div>
  );
}
