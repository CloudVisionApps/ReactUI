import React from 'react';
import { cn } from '../../utils/cn';

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'rectangle' | 'circle';
  animate?: boolean;
}

export const Skeleton: React.FC<SkeletonProps> = ({
  variant = 'rectangle',
  animate = true,
  className = '',
  ...props
}) => (
  <div
    role="status"
    aria-label="Loading"
    className={cn(
      'bg-surface-muted',
      variant === 'circle' && 'rounded-full aspect-square',
      variant === 'rectangle' && 'rounded-ui',
      animate && 'animate-pulse',
      className
    )}
    {...props}
  />
);
