import React from 'react';
import { Spinner } from '../../../src';

export default function SpinnerSizes() {
  return (
    <div className="flex items-center gap-6">
      <Spinner size="small" />
      <Spinner size="medium" />
      <Spinner size="large" />
    </div>
  );
}
