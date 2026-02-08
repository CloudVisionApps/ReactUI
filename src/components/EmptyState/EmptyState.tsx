import React from 'react';
import { cn } from '../../utils/cn';

export interface EmptyStateProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: React.ReactNode;
  title: string;
  description?: string;
  action?: React.ReactNode;
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  icon,
  title,
  description,
  action,
  className = '',
  ...props
}) => (
  <div
    className={cn(
      'flex flex-col items-center justify-center py-12 px-6 text-center',
      className
    )}
    {...props}
  >
    {icon && (
      <div className="w-12 h-12 rounded-full bg-surface-muted flex items-center justify-center text-fg-muted mb-4">
        {icon}
      </div>
    )}
    <h3 className="text-[15px] font-semibold text-fg mb-1">{title}</h3>
    {description && <p className="text-[13px] text-fg-muted max-w-sm mb-4">{description}</p>}
    {action && <div>{action}</div>}
  </div>
);
