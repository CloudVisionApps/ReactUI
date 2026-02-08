import React from 'react';
import { Progress } from '../../../src';

export default function ProgressDefault() {
  return (
    <div className="space-y-4 max-w-md">
      <Progress value={40} />
      <Progress value={75} />
    </div>
  );
}
