import React from 'react';
import { cn } from '../../utils/cn';

export interface DividerProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: 'horizontal' | 'vertical';
  label?: React.ReactNode;
}

export const Divider: React.FC<DividerProps> = ({
  orientation = 'horizontal',
  label,
  className = '',
  ...props
}) => {
  const lineClass = 'flex-1 border-border';
  if (label && orientation === 'horizontal') {
    return (
      <div
        role="separator"
        className={cn('flex items-center gap-4 w-full', className)}
        {...props}
      >
        <span className={cn('border-t', lineClass)} />
        <span className="text-sm font-medium text-fg-muted shrink-0">{label}</span>
        <span className={cn('border-t', lineClass)} />
      </div>
    );
  }
  if (orientation === 'vertical') {
    return (
      <div
        role="separator"
        aria-orientation="vertical"
        className={cn('shrink-0 self-stretch border-l border-border', className)}
        {...props}
      />
    );
  }
  return (
    <div
      role="separator"
      aria-orientation="horizontal"
      className={cn('w-full border-t border-border', className)}
      {...props}
    />
  );
};
