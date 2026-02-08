import React from 'react';
import { Progress } from '../../../src';

export default function ProgressVariants() {
  return (
    <div className="space-y-4 max-w-md">
      <Progress value={60} variant="default" />
      <Progress value={80} variant="success" />
      <Progress value={45} variant="warning" />
      <Progress value={25} variant="danger" />
    </div>
  );
}
