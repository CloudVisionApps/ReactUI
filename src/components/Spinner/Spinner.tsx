import React from 'react';
import { cn } from '../../utils/cn';

export interface SpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: 'small' | 'medium' | 'large';
}

const sizeClasses = {
  small: 'w-4 h-4 border-2',
  medium: 'w-6 h-6 border-2',
  large: 'w-10 h-10 border-[3px]',
};

export const Spinner: React.FC<SpinnerProps> = ({
  size = 'medium',
  className = '',
  ...props
}) => (
  <div
    role="status"
    aria-label="Loading"
    className={cn(
      'rounded-full border-fg-subtle border-t-primary animate-spin',
      sizeClasses[size],
      className
    )}
    {...props}
  />
);
