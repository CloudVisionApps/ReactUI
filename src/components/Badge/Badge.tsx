import React from 'react';
import { cn } from '../../utils/cn';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'info';
  size?: 'small' | 'medium' | 'large';
  children: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  variant = 'default',
  size = 'medium',
  children,
  className = '',
  ...props
}) => {
  const variantClasses = {
    default: 'bg-surface-muted text-fg font-semibold',
    primary: 'bg-primary-muted text-primary font-semibold',
    success: 'bg-success-muted text-success font-semibold',
    warning: 'bg-warning-muted text-warning font-semibold',
    danger: 'bg-destructive-muted text-destructive font-semibold',
    info: 'bg-info-muted text-primary font-semibold',
  };

  const sizeClasses = {
    small: 'px-2 py-0.5 text-[11px] rounded-md',
    medium: 'px-2.5 py-1 text-[12px] rounded-ui',
    large: 'px-3 py-1.5 text-[13px] rounded-ui',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center justify-center tracking-tight',
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};
