import React from 'react';
import { Skeleton } from '../../../src';

export default function SkeletonDefault() {
  return (
    <div className="space-y-4 max-w-md">
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-3/4" />
      <Skeleton className="h-4 w-1/2" />
    </div>
  );
}
