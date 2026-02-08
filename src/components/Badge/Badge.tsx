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
    default: 'bg-[#F5F5F7] text-[#1D1D1F]',
    primary: 'bg-[#007AFF]/10 text-[#007AFF]',
    success: 'bg-[#34C759]/10 text-[#34C759]',
    warning: 'bg-[#FF9500]/10 text-[#FF9500]',
    danger: 'bg-[#FF3B30]/10 text-[#FF3B30]',
    info: 'bg-[#5856D6]/10 text-[#5856D6]',
  };

  const sizeClasses = {
    small: 'px-2 py-0.5 text-[11px]',
    medium: 'px-2.5 py-1 text-[12px]',
    large: 'px-3 py-1.5 text-[13px]',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center justify-center rounded-full font-medium',
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
