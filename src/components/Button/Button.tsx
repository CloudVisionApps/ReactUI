import React from 'react';
import { cn } from '../../utils/cn';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger' | 'outline' | 'ghost' | 'gradient';
  size?: 'small' | 'medium' | 'large';
  isLoading?: boolean;
  children: React.ReactNode;
}

const variantClasses = {
  primary:
    'bg-primary text-white shadow-ui hover:bg-primary-hover active:bg-primary-active active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-ring focus-visible:ring-offset-2',
  secondary:
    'bg-surface-muted text-fg border border-border hover:bg-border/50 hover:border-border-strong active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-fg-subtle/25 focus-visible:ring-offset-2',
  danger:
    'bg-destructive text-white shadow-ui hover:bg-destructive-hover active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-destructive/35 focus-visible:ring-offset-2',
  outline:
    'bg-transparent text-primary border-2 border-primary hover:bg-primary-muted active:bg-primary/20 active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-ring focus-visible:ring-offset-2',
  ghost:
    'bg-transparent text-fg hover:bg-surface-muted active:bg-border/50 active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-fg-subtle/25 focus-visible:ring-offset-2',
  gradient:
    'bg-gradient-to-r from-primary to-indigo-600 text-white shadow-ui-glow hover:from-primary-hover hover:to-indigo-700 active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-ring focus-visible:ring-offset-2',
};

const sizeClasses = {
  small: 'px-4 py-2 text-[13px] font-semibold min-h-[32px] rounded-ui',
  medium: 'px-5 py-2.5 text-[13px] font-semibold min-h-[36px] rounded-ui',
  large: 'px-6 py-3 text-[14px] font-semibold min-h-[42px] rounded-ui-lg',
};

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'medium',
  isLoading = false,
  children,
  className = '',
  disabled,
  ...props
}) => {
  const baseClasses =
    'inline-flex items-center justify-center gap-2 cursor-pointer transition-all duration-150 ease-out outline-none relative';
  const disabledClasses =
    'disabled:opacity-45 disabled:cursor-not-allowed disabled:shadow-none disabled:hover:scale-100 disabled:active:scale-100';

  const classes = cn(
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    disabledClasses,
    isLoading && 'cursor-wait',
    !disabled && !isLoading && 'transform-gpu',
    className
  );

  return (
    <button className={classes} disabled={disabled || isLoading} {...props}>
      {isLoading && (
        <span className="absolute inset-0 flex items-center justify-center">
          <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
        </span>
      )}
      <span className={cn('relative flex items-center gap-2', isLoading && 'opacity-0')}>
        {children}
      </span>
    </button>
  );
};
